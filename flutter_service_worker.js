'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "01c79825fd9250c7a7e10155bf982a4f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7f8eb79489ad7e8150a3259a5c347398",
"assets/icons/facebook.png": "d03d1cb8afb8da75756264994a9ce4d4",
"assets/icons/coding.png": "c8150fc2000e8674220bcd485b30e68f",
"assets/icons/twitter.png": "cadd7c4e3a3a29ddfa395393e652012a",
"assets/icons/happy.png": "3837c30afeb5b40886a787810f553fc3",
"assets/icons/pencil.png": "4566fb93d2196b9b2b74be9cfe23d0c8",
"assets/icons/call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/icons/medium.png": "d3fe729a15df2b467299159892cf8ac4",
"assets/icons/pin.png": "c40700870fa15459e94f3ffd6eccfcfd",
"assets/icons/briefcase.png": "12e9358e8dbae5cb406a7abeec84d4f5",
"assets/icons/email.png": "ecf609bb48c645251a898c5527f7c781",
"assets/icons/double-up-arrow.png": "d758827b82d3262d54d19f7482c36b63",
"assets/icons/coffee.png": "19e4f65ea926133b771bf82daa35f5d4",
"assets/icons/linkedin.png": "3c963b14a58df80613b15c7e9e4e9c57",
"assets/icons/menu.png": "3ca1d45f78b3acb1d2a89a53271a21db",
"assets/icons/design.png": "c59f68c8be347d0a5231b2b714421b24",
"assets/icons/list.png": "4e63ee6122b58866f4a2d2408c02f9ef",
"assets/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "56a6be909b7a2d8103740792f4ede9ff",
"assets/images/cover.jpg": "46effd4610b2aeecf4c675612e043999",
"assets/images/icon.jpg": "9ba1a1416bd83f34d1860105764b66d4",
"assets/images/background.jpg": "1d6f7f30749100cfa942bc9673c6b8ee",
"assets/images/projects/crypto.png": "e4d96f217c3f22bef451e85bc04affbc",
"assets/images/projects/Hpay.png": "f131e1ec9600a643ba558addf64ad720",
"assets/images/projects/SME.png": "c0d413ebf49910c9e7bb65081a94dd3c",
"assets/images/projects/doc_reader.png": "bf7ad207fc480cb7ae74538557f46013",
"assets/images/projects/invoice.png": "c9ba9408a87d34963134e36d8c97c788",
"assets/images/projects/mega.png": "b4816da678b7eb0dc2d4fd6907e30fb9",
"assets/images/iyke.png": "9f833aaa24936ec092f2b800eb4f4ba0",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "8e5fb3c325874ec92ed955b1bc1b2e3a",
"index.html": "4a331e63da2b93d923d5c89bcbcb81f5",
"/": "4a331e63da2b93d923d5c89bcbcb81f5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "0288ba20bee478e177fa039cb69fb1e5",
".git/COMMIT_EDITMSG": "df6e7ed9f9633846e0ace768d9db3323",
".git/logs/HEAD": "e5c5b4887b89bd855af0096a182e92b4",
".git/logs/refs/heads/master": "e5c5b4887b89bd855af0096a182e92b4",
".git/logs/refs/remotes/origin/master": "6f78d02a321d7500cb22a6205d315250",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/0a/7a7a6c3dfd7fa2a77646f553ab4c0075cb5f07": "811ec662ffb3c5f582196eec2be2ba69",
".git/objects/23/e733823c7e58180b397874392ec90e22fcb642": "a60314c13da82675ae616f9f31d131d4",
".git/objects/dc/61fb3dd296b9d801e680ed3be83ffd82d84613": "22adb995dc2e61b0d3a91ba2be368735",
".git/objects/ec/084325b2270ff92438647621a4ea70eedaf262": "8cef6a5e0025d8ff977185270b48be92",
".git/objects/ec/7a82c4902e4c347678cb7ed34a5d61061b2a1e": "ba6bcf2ad7918a05ee4f4a27f35f7003",
".git/objects/b8/58e4de88be8a2c1bbe69ecca8bfb561585279a": "a88695984bedeea89328f16b4da31046",
".git/objects/60/3f6d29d222c05e35730da17453df045be9a994": "2c51cfcdc6bd232d815bb9692cc23b6d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/81/0002e1085f23632616dd522740e5bd7832fde4": "e3b0d180e43a87cc0d8d861ed6c77d76",
".git/objects/5f/1d9fdfd567f57df7c548aca30438bde35f80aa": "4fd49f233ad029a9a93cf4f9b9e98e5d",
".git/objects/63/b9e414a0bc85106d6b5490847276a579f49d01": "9338b648e6e14963c3a4c40efad05b62",
".git/objects/7f/82a9d995b0247386bbf8dd80f313ccd71ff9da": "ff34aca8191e0e00716410bef34c59a1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/96/8fc909157a7f2c74e1f5cf8d1236d128b8a0be": "631a66453edfb784ce2c79d9da5868dd",
".git/objects/96/72cdda5ab12ad1455d17ea987d93fb03455988": "8af70a9f12170ede836adca3cc789bba",
".git/objects/e7/9ed278d63b2d83b1d51d903b29cb4cfc824ebd": "c3965e09202f2c518554b644cd0e5a23",
".git/objects/11/a8efef3c9c404f7e0769875ac201641815cc50": "f8fafba35710b4792b155f09d03eef9e",
".git/objects/f2/2e7d73c4ca7e5b3c846d3c56ee64821488f57c": "034f134d082a8ae592a0fec7722b7cb6",
".git/objects/b5/f35ab6ffff15e1e991fc367ab1d3f5b615fd7a": "760a64bfecfb5fa92d25cc6fe211c21b",
".git/objects/7d/d62360b4e0752b90aa753a57ded92eaf234a25": "1d211002d876598443774a268db174b3",
".git/objects/8e/bcafa2627d2ca4f4420a061f611b5cf987aed7": "b32d10a8c622230ea628043d81b9e694",
".git/objects/be/5157b013cf2b5a18f21fb61a57d22e8a590411": "b4ed9b92f75e48def0dcfff6ed68f38a",
".git/objects/d4/fa7e4903ba19c908b40f4ed350d8d5bd686d84": "01197954d9644a8128a83cc002e1b40f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/18/8a296a14a02e5ed978fed0e38680523228488f": "9f54b62e75e3e2379c6f3c7290d6001b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c4/a6118df6408fb3b565c1a6ef5a1a311a03f1b4": "db96ca9dc65e7e71bb8276c495b4f122",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/68/5abc4d65438c1f0376c8b357a45cbd9ab9a664": "ff9301f27babbb5c571edf7cc7dbc9cd",
".git/objects/40/f35211c803352408149169cdea5f705e5d5b6f": "093e4e2c5bc01d8668b59eeb03354c82",
".git/objects/74/dac8e70dcb9050f9215962378cdc26a65cb331": "d2598d3ae6f633202bde9c1129e13302",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f3/ba609db4afdcc50d5c7d6e19f10460c547de13": "1810a0d5a5d944af1c8a1e8b097f4d7b",
".git/objects/f3/ae7af20410deaf8da51da6f3b9ee68abe817e5": "e7eba7c9b6172416e1ee9931b5c7a7b8",
".git/objects/14/dae26155dc5899c4d5b9f7ea9fc292041d4a5c": "fa57d08d631b7dee4135dcaf2d19d3ea",
".git/objects/0c/4081edd4133938d5a941a31a8a02cf61e62a5a": "9728a1f24aea717e408ab3cfaa567fa0",
".git/objects/80/37280719d5b82745361ca1249084ebec98ed24": "a0db4e2049d1517b63da152128f7c010",
".git/objects/6f/8eb0e41700a7d1ddeb28f503ee9aecc57e0c4d": "e76d5e23eab5096e721834dbe9b14d0b",
".git/objects/69/d0fdb4b528697583c10a1fe1c52ebd202aaa96": "ef6decc241cb3677e44503bb6e223e0a",
".git/objects/89/29aa3b1974aa59dd6ac4a9a2f1bdc24d357cee": "9a7fc7469ada23dc0a019439244b2ceb",
".git/objects/d6/0775074509210eb6921bc3df6c0af5b4ca5853": "d5f55f4dc2517d9449d266eb6012e9ab",
".git/objects/38/1c7d307c32b711430ec40fe3945ed7cc61b098": "dcaae1ca4d0391720253761d15df74db",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/95/1f773825d96171497cbb9112ea9c903b0b56b8": "bbcd70920ec681c795390bb4c22cf91c",
".git/objects/4e/e9028641cd9ff8644852b3697cb82ef72f8855": "45952b936e11165293fdfe5833b6aca0",
".git/objects/ee/ba915ae9ddadef7b438f192ad6f508ff5478d6": "84f91ffea770815a57160179550a56cf",
".git/objects/1d/732497660bf5be506f14f700ae28b8e27464c0": "b5c48c269a44f518f892990ddae03e96",
".git/objects/42/424007a7b5a42ae1ad576514dd40f54ffb5da1": "d43f22ea282abcdf05923e8f18170385",
".git/objects/5c/5b76cb094ededa3caa21dda7adb19c677a772d": "15977d7b774c7c49d4d1dfd1953ea9d2",
".git/objects/9b/ed904d01321560754a4e5b2dfac1b6ac870d43": "924aaea99d34318aa3958a16bf47feb3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/index": "93b3a02e4a99ec254323a545bb74389d",
".git/refs/heads/master": "e440c82daf73c57da247378252e49dc0",
".git/refs/remotes/origin/master": "e440c82daf73c57da247378252e49dc0",
".git/config": "7a8872ff6e1a6d5fe79a4ee1d4e8d006",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
