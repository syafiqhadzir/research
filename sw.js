// Service Worker - Bleeding-Edge Performance Optimization 2026
// Advanced caching strategies for optimal Core Web Vitals

const CACHE_VERSION = 'v2-2026-01-15';
const CACHE_NAME = `portfolio-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

// Assets to precache on install
const PRECACHE_ASSETS = [
  '/',
  '/assets/css/styles.css',
  '/favicons/favicon.svg',
  '/about/',
  '/publications/',
];

// Cache strategies by resource type
const CACHE_STRATEGIES = {
  images: 'cache-first',
  styles: 'stale-while-revalidate',
  scripts: 'stale-while-revalidate',
  documents: 'network-first',
};

// ============================================================================
// Install Event - Precache Critical Assets
// ============================================================================

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

// ============================================================================
// Activate Event - Clean Up Old Caches
// ============================================================================

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// ============================================================================
// Fetch Event - Advanced Caching Strategies
// ============================================================================

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Determine caching strategy based on resource type
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(request));
  } else if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(staleWhileRevalidate(request));
  } else if (request.destination === 'document') {
    event.respondWith(networkFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});

// ============================================================================
// Caching Strategies
// ============================================================================

// Cache-First: Best for images and fonts (long-lived assets)
async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Return offline fallback if available
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

// Stale-While-Revalidate: Best for CSS/JS (update in background)
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  });

  return cached || fetchPromise;
}

// Network-First: Best for HTML (fresh content, fallback to cache)
async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    return cached || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}
