let defferedPrompt

// install service worker
self.addEventListener('install', evt => {
    console.log('service worker has been installed');
})

self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
})

// fetch event

self.addEventListener('fetch', evt => {
    console.log('service worker has been activated', evt);
})


// installing the 