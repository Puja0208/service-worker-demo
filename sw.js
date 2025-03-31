const CACHE_NAME = "demo-v1";
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(["./index.html", "./styles.css", "./script.js"]);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return cache.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const cloneData = res.clone();
        //update cache
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, cloneData);
        });

        return res;
      })
      .catch(() => {
        return caches.match(e.request).then((res) => res);
      })
  );
});
