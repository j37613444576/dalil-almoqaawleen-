const CACHE_NAME = "dalil-almoqaawleen-v1";
const urlsToCache = [
  "/dalil-almoqaawleen-/",
  "/dalil-almoqaawleen-/index.html",
  "/dalil-almoqaawleen-/manifest.json",
  "/dalil-almoqaawleen-/icon-192.png",
  "/dalil-almoqaawleen-/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
