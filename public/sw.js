// public/service-worker.js

const CACHE_NAME = "my-cache-" + new Date().getTime(); // Change the cache name when you update your service worker

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/", // Verify this URL and others
        "/_next/static",
        "/_offline",
        "/404",
        "/about",
        "/contact",
        "/dashboard",
        "/help-faq",
        "/log-in",
        "/privacy-policy",
        // Add other URLs you want to cache for offline use
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the request is in the cache, return it
      if (response) {
        return response;
      }

      // If the request is not in the cache, fetch it from the network
      return fetch(event.request)
        .then((response) => {
          // If the response is a valid response and the request is for a same-origin resource, cache it for future use
          if (
            response &&
            response.status === 200 &&
            response.type === "basic" &&
            new URL(response.url).origin === location.origin
          ) {
            const responseToCache = response.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }

          return response;
        })
        .catch(() => {
          // If an error occurs during caching or fetching, show the offline page
          return caches.match("/_offline");
        });
    })
  );
});
