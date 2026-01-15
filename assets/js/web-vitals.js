// Web Vitals Tracking - Monitor Core Web Vitals in Production
// Sends real user metrics to Google Analytics 4

(function () {
  // Only load in production
  if (window.location.hostname === 'localhost') return;

  // Dynamically import web-vitals library
  const script = document.createElement('script');
  script.type = 'module';
  script.textContent = `
    import {onCLS, onINP, onFCP, onLCP, onTTFB} from 'https://unpkg.com/web-vitals@4?module';

    function sendToAnalytics(metric) {
      // Send to Google Analytics 4
      if (window.gtag) {
        gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          metric_id: metric.id,
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_rating: metric.rating,
        });
      }

      // Log to console in development
      console.log(metric.name, metric.value, metric.rating);
    }

    // Track all Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  `;

  document.head.appendChild(script);
})();
