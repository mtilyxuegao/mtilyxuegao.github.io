// Frontend visualization for cumulative visits and origin map
// Requires a Cloudflare Worker API providing /hit (POST) and /summary (GET)

(function () {
  const API_BASE = window.CF_ANALYTICS_API || 'https://YOUR_WORKER_SUBDOMAIN.workers.dev/analytics';

  // Basic helper
  async function jsonFetch(url, opts) {
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('Request failed: ' + res.status);
    return res.json();
  }

  // Render visit count
  function renderCount(total) {
    const el = document.getElementById('visit-count');
    if (el) el.textContent = typeof total === 'number' ? total.toLocaleString() : '--';
  }

  // Render world map with jsvectormap
  function renderMap(summary) {
    const containerId = 'visitors-map';
    const container = document.getElementById(containerId);
    if (!container || typeof window.jsVectorMap === 'undefined') return;

    const countries = summary && summary.countries ? summary.countries : {};
    const points = summary && Array.isArray(summary.points) ? summary.points : [];

    // Build markers: [{name, coords: [lat, lon]}]
    const markers = points
      .filter(p => typeof p.lat === 'number' && typeof p.lon === 'number')
      .slice(-500) // render up to 500 latest points
      .map(p => ({
        name: [p.city, p.country].filter(Boolean).join(', '),
        coords: [p.lat, p.lon]
      }));

    // Destroy existing map if any
    if (container._jvm) {
      container._jvm.updateSize();
      container._jvm.clearSelectedRegions();
      container._jvm.clearSelectedMarkers();
      container._jvm.remove();
    }

    const map = new window.jsVectorMap({
      selector: '#' + containerId,
      map: 'world',
      zoomOnScroll: true,
      zoomButtons: true,
      regionStyle: {
        initial: { fill: '#e9ecef' },
        hover: { fill: '#cfe2ff' }
      },
      series: {
        regions: [{
          values: countries, // keys are ISO2 country codes, values are counts
          scale: ['#e7f1ff', '#0d6efd'],
          normalizeFunction: 'linear'
        }]
      },
      markers: markers,
      markerStyle: {
        initial: { fill: '#dc3545' },
        selected: { fill: '#6610f2' }
      }
    });

    // Attach for later updates
    container._jvm = map;
  }

  async function loadAndRender() {
    try {
      // Record a visit; keepalive to avoid blocking unload
      const dnt = (navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack);
      if (!(dnt === '1' || dnt === 'yes')) {
        fetch(API_BASE + '/hit', { method: 'POST', mode: 'cors', keepalive: true }).catch(() => {});
      }

      // Then load summary to render
      const summary = await jsonFetch(API_BASE + '/summary', { mode: 'cors' });
      renderCount(summary.total);
      renderMap(summary);
    } catch (e) {
      // Fail silently to avoid breaking page
      // console.error(e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndRender);
  } else {
    loadAndRender();
  }
})();

