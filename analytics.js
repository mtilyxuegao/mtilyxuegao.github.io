// Lightweight analytics loader supporting GA4, Cloudflare, or Baidu.
// Set exactly one of: window.GA_MEASUREMENT_ID, window.CF_BEACON_TOKEN, window.BAIDU_TONGJI_ID

(function () {
  try {
    // Respect Do Not Track where possible
    var dnt = (navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack);
    if (dnt === "1" || dnt === "yes") return;

    var head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;

    if (window.GA_MEASUREMENT_ID) {
      // Google Analytics 4 (gtag.js)
      var gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(window.GA_MEASUREMENT_ID);
      head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      // anonymize_ip for extra privacy
      gtag('config', window.GA_MEASUREMENT_ID, { anonymize_ip: true });
      return;
    }

    if (window.CF_BEACON_TOKEN) {
      // Cloudflare Web Analytics
      var cf = document.createElement('script');
      cf.defer = true;
      cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
      cf.setAttribute('data-cf-beacon', JSON.stringify({ token: String(window.CF_BEACON_TOKEN) }));
      head.appendChild(cf);
      return;
    }

    if (window.BAIDU_TONGJI_ID) {
      // Baidu Tongji
      var b = document.createElement('script');
      b.src = 'https://hm.baidu.com/hm.js?' + encodeURIComponent(window.BAIDU_TONGJI_ID);
      head.appendChild(b);
      return;
    }
  } catch (e) {
    // Swallow errors to avoid breaking the page
  }
})();

