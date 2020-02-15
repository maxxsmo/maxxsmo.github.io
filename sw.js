const cacheNamePWA = "my-pwa-app-v1"
const files_to_cache = [
  "/index.html",
  "/page_deux.html",
  "/page_trois.html",
  "/css/style.css",
  "/js/script.js",
  "/images/happy.gif",
  "/images/left-arrow.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheNamePWA).then(cache => {
      cache.addAll(files_to_cache)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})