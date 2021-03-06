// service workers : permet d'acceder à l'application hors ligne

//permet de garder en cache les elements definis ci dessous
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/bootstrap-resto-website/',
        //'/bootstrap-resto-website/offline/acceuil_offline.html',
        '/bootstrap-resto-website/index.html',
        '/bootstrap-resto-website/carte.html',
        '/bootstrap-resto-website/photos.html',
        '/bootstrap-resto-website/restaurant.html',
        '/bootstrap-resto-website/contact.html',
        '/bootstrap-resto-website/assets/img/adult-blur-blurred-background-687824.jpg',// image a afficher en cas de non cannection
      //'/bootstrap-resto-website/assets/img/falafel3.jpg'

      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open('v2').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/bootstrap-resto-website/assets/img/failed_download.png');//image a afficher en hors connection
      });
    }
  }));
});
