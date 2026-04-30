// Kill switch — deliberately disabled service worker.
//
// Any browser that already has a HarpShed SW installed will, on its next
// page load, fetch this file. Because the file content has changed, the
// browser installs this as a NEW worker, which:
//   1. Activates immediately (skipWaiting + clients.claim)
//   2. Deletes every cache the previous SW left behind
//   3. Unregisters itself
//   4. Reloads any open client tabs so they re-fetch fresh from the network
//
// After that point the site behaves like a plain static site: no SW, no
// cache layer, no stale content. The registration call in index.html has
// also been removed so new visitors never install a SW in the first place.
//
// We can re-introduce a proper service worker later if/when we want
// offline support or a real PWA. For now this is the cleanest dev loop.

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil((async function() {
    // 1. Delete every cache (any name)
    var keys = await caches.keys();
    await Promise.all(keys.map(function(k) { return caches.delete(k); }));
    // 2. Take control of all open clients so we can reload them
    await self.clients.claim();
    // 3. Unregister ourselves
    await self.registration.unregister();
    // 4. Force-reload any open tabs so they re-fetch index.html / content.js
    //    fresh from the network, with no SW between them and origin.
    var clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(function(client) { client.navigate(client.url); });
  })());
});

// Don't intercept any fetches — let the browser handle them directly.
