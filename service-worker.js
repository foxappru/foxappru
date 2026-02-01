self.addEventListener('install', () => {
  console.log('SW installed');
});

self.addEventListener('fetch', (event) => {
  // Пустой - просто активирует PWA
});