// 최소 서비스 워커: 크롬의 '설치 가능(installable)' 조건을 충족시키기 위한 용도.
// 별도 캐싱 없이 그냥 네트워크 요청을 통과시킵니다.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
