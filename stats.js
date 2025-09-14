// Frontend visualization for cumulative visits and origin map
// Requires a Cloudflare Worker API providing /hit (POST) and /summary (GET)

(function () {
  const API_BASE = window.CF_ANALYTICS_API || 'https://website.mtilyjason.workers.dev/analytics';

  // Basic helper with debugging
  async function jsonFetch(url, opts) {
    console.log('Making request to:', url);
    console.log('Request options:', opts);
    
    const res = await fetch(url, opts);
    console.log('Response status:', res.status);
    console.log('Response headers:', Object.fromEntries(res.headers.entries()));
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Response error text:', errorText);
      throw new Error(`Request failed: ${res.status} - ${errorText}`);
    }
    
    const data = await res.json();
    console.log('Parsed JSON data:', data);
    return data;
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
      .filter(p => typeof p.lat === 'number' && (typeof p.lon === 'number' || typeof p.lng === 'number'))
      .slice(-500) // render up to 500 latest points
      .map(p => ({
        name: [p.city, p.country].filter(Boolean).join(', '),
        coords: [p.lat, p.lon || p.lng]
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
      console.log('Do Not Track status:', dnt);
      
      if (!(dnt === '1' || dnt === 'yes')) {
        console.log('Recording visit to:', API_BASE + '/hit');
        fetch(API_BASE + '/hit', { method: 'POST', mode: 'cors', keepalive: true })
          .then(response => console.log('Hit response status:', response.status))
          .catch(error => console.error('Hit request failed:', error));
      } else {
        console.log('Skipping visit recording due to Do Not Track');
      }

      // Then load summary to render
      console.log('Fetching summary from:', API_BASE + '/summary');
      const summary = await jsonFetch(API_BASE + '/summary', { mode: 'cors' });
      console.log('Summary received:', summary);
      console.log('Total visits:', summary.total);
      console.log('Countries data:', summary.countries);
      console.log('Points data:', summary.points);
      
      renderCount(summary.total);
      renderMap(summary);
    } catch (e) {
      // Show detailed error information for debugging
      console.error('Analytics error:', e);
      console.error('Error message:', e.message);
      console.error('Error stack:', e.stack);
      console.error('API_BASE:', API_BASE);
      console.error('Full URL attempted:', API_BASE + '/summary');
      
      // Just show placeholder
      renderCount('--');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndRender);
  } else {
    loadAndRender();
  }
})();

