console.log("Hello!");
//check if servie
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((res) => console.log("registered service worker"));
}
