"use strict";
const scope = self.registration.scope;
const namespace = "studio-motion:" + scope + ":";
const shellName = namespace + "v26";
const shellFiles = ["./", "index.html", "manifest.webmanifest", "icons/studio-motion.svg",
  "icons/studio-motion-180.png", "icons/studio-motion-192.png", "icons/studio-motion-512.png"];
const files = new Set(shellFiles.map(path => new URL(path, scope).href));
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const current = await caches.open(shellName);
    await current.addAll([...files].map(url => new Request(url, {cache:"reload"})));
    await self.skipWaiting();
  })());
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(namespace) && name !== shellName) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const canonical = new URL(event.request.url);
  canonical.hash = "";
  if (!files.has(canonical.href)) return;
  event.respondWith((async () => {
    const current = await caches.open(shellName);
    try {
      const actual = await fetch(event.request);
      if (actual.ok && actual.type === "basic") {
        try { await current.put(canonical.href, actual.clone()); } catch { /* Still serve the public shell. */ }
      }
      return actual;
    } catch {
      return (await current.match(canonical.href)) || Response.error();
    }
  })());
});
