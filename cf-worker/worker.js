// Cloudflare Worker to collect simple visit counts and approximate geolocation
// Bind a KV namespace named ANALYTICS to store totals and aggregates.
// This worker exposes:
// - POST /analytics/hit     -> increments counters and stores last N points
// - GET  /analytics/summary -> returns { total, countries: { ISO2: count }, points: [{ lat, lon, city, country, ts }] }

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    try {
      if (url.pathname.endsWith('/analytics/hit') && request.method === 'POST') {
        const data = await handleHit(request, env);
        return jsonResponse(data);
      }
      if (url.pathname.endsWith('/analytics/summary') && request.method === 'GET') {
        const data = await handleSummary(env);
        return jsonResponse(data, 60); // cache for 60s at edge
      }
      return new Response('Not found', { status: 404, headers: corsHeaders() });
    } catch (e) {
      return new Response('Server error', { status: 500, headers: corsHeaders() });
    }
  }
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function jsonResponse(obj, edgeMaxAgeSeconds = 0) {
  const headers = {
    'content-type': 'application/json; charset=utf-8',
    ...corsHeaders(),
  };
  if (edgeMaxAgeSeconds > 0) {
    headers['Cache-Control'] = `public, max-age=${edgeMaxAgeSeconds}`;
  }
  return new Response(JSON.stringify(obj), { headers });
}

async function handleHit(request, env) {
  const cf = request.cf || {};
  const country = cf.country || 'XX';
  const city = cf.city || '';
  const lat = parseFloat(cf.latitude);
  const lon = parseFloat(cf.longitude);
  const ts = Date.now();

  // Increment total
  const totalKey = 'total';
  const currentTotal = parseInt(await env.ANALYTICS.get(totalKey)) || 0;
  const newTotal = currentTotal + 1;
  await env.ANALYTICS.put(totalKey, String(newTotal));

  // Update per-country counts
  const countriesKey = 'countries';
  const countriesRaw = await env.ANALYTICS.get(countriesKey);
  const countries = (countriesRaw ? JSON.parse(countriesRaw) : {});
  countries[country] = (countries[country] || 0) + 1;
  await env.ANALYTICS.put(countriesKey, JSON.stringify(countries));

  // Append to points (cap to last N)
  const pointsKey = 'points_v1';
  const maxPoints = 500; // keep the last 500 points
  let points = [];
  const pointsRaw = await env.ANALYTICS.get(pointsKey);
  if (pointsRaw) {
    try { points = JSON.parse(pointsRaw); } catch {}
  }
  if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
    points.push({ lat, lon, city, country, ts });
  }
  if (points.length > maxPoints) {
    points = points.slice(-maxPoints);
  }
  await env.ANALYTICS.put(pointsKey, JSON.stringify(points));

  return { ok: true, total: newTotal };
}

async function handleSummary(env) {
  const total = parseInt(await env.ANALYTICS.get('total')) || 0;
  const countriesRaw = await env.ANALYTICS.get('countries');
  const countries = (countriesRaw ? JSON.parse(countriesRaw) : {});
  const pointsRaw = await env.ANALYTICS.get('points_v1');
  let points = [];
  if (pointsRaw) {
    try { points = JSON.parse(pointsRaw); } catch {}
  }
  return { total, countries, points };
}

