const cacheNamePWA = "my-pwa-app-v1"
const files_to_cache = [
  "/index.html",
  "/page.html",
  "/css/style.css",
  "/js/script.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheNamePWA).then(cache => {
      cache.addAll(files_to_cache)
    })
  )
})