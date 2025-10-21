// src/serviceWorkerRegistration.js

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('✅ Service Worker registrado con éxito:', registration);
        })
        .catch((error) => {
          console.error('❌ Error al registrar el Service Worker:', error);
        });
    });
  } else {
    console.log('⚠️ Service Worker no soportado en este navegador.');
  }
}
