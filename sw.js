self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("demo-v1").then((cache) => {
      cache.addAll(["./index.html", "./styles.css", "./script.js"]);
    })
  );
});

self.addEventListener("activate", (e) => {});

self.addEventListener("fetch", (e) => {});
