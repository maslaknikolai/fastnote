importScripts("precache-manifest.767c7cc4eb206a99caa38abc5cce8034.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueueName', {
  maxRetentionTime: 24 * 60
})

workbox.routing.registerRoute(
  /\/api\/.*\/*.json/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
)

