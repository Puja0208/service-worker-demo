console.log("Hello!");
//check if service worker prresent and register it
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((res) => console.log("registered service worker"));
}
