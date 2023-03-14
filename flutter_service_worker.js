'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js": "50c1de3a854471f99ffe9bd96f4ef466",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "af69c09dad61ec8815f2401c8b7766e2",
".git/logs/refs/heads/main": "b660234e9dc04eddc3a31cd40872532a",
".git/logs/refs/heads/master": "49a7318db07cdfaec2e6499843e10313",
".git/logs/refs/remotes/origin/main": "9190335c50bf691e357a0a1ed28e9d39",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "99615974bd5f255802fcf59b9c27e212",
".git/index": "6a9a84464c84dfcac91874bfddba5bc7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/heads/main": "c7061842a1777d1be6436ab6685d7f70",
".git/refs/heads/master": "c7061842a1777d1be6436ab6685d7f70",
".git/refs/remotes/origin/main": "c7061842a1777d1be6436ab6685d7f70",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/d9/7387b07c55a74c294a4f9cbfc2a85530376c4c": "6875e4adf89e596730988828c420629a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e8/d4ade28b8ec275ae41e10e505a1890ed88a6e8": "553f91602d4b4e9ba95ef047b0e5aaad",
".git/objects/a5/e0cb93530fac3467a65faaeb48db2aab073f17": "1a74409df47a7ab9f539a2732db19b33",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/d0/e93b71f416536231fc8df4570ab67c80d843de": "1052e0797f5f2b90b42953823b1c17f5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/68c0329abb69393bb3301acde68346954acf19": "cebe682c4fbe1ea7cc290e7ed54be904",
".git/objects/26/7a34347025bf14b8b16f8c356bf9668831915b": "8eb49de596fbdb9a8227e737263723ba",
".git/objects/26/204647238969f7bb0b7a6c183c719198ee476f": "9652a2ee71f621467cb2fb7c10273824",
".git/objects/c1/2a3d1a27cf5f52d394050deeb9857b4bb18933": "1934111a5f166ddb279289fa85b174ab",
".git/objects/d3/2e218295079184c6b8ce51a8b7b3e161874c84": "3dd7f20fdfcb636aadfbaacee0a7dfb8",
".git/objects/e5/947e20059d4790267feec5af7b75d3a0836438": "f942f9ba70ed327bb1f7365a80a2d922",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/6b/d339930f4ed4d4e4c30eb730667d62bb88a08c": "e885344e5e2b025c21f8b6c44a77f8f1",
".git/objects/65/eb38283237b82a9980e5658a20a9f99a67852b": "ddc2cd35baf950994ea5d4233e925f88",
".git/objects/24/93239877a4b4eb4afaddf8c1cd20570137a006": "ce46ec6fb89b9bdb2ec937ab830363f6",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/6a/3e960a8aae50caac6fe51a2cf6467de5c2d5f3": "c04b826de8b6f289d041ada6cef0ab72",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/9d/3522d723cd7034bc2273188e3a950517a06676": "65ffc0456c52bae8693fd8f550023450",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/81610346524e9a645c093b8d26de266c529542": "65112b63f737db7280448544b8aeda76",
".git/objects/25/dbdff794d4b743d97f5fb5acc7b8ee14554a5f": "6b621191e28d270f3f93416d086a521d",
".git/objects/25/00613ad2fe3f1fd706ca7e4935cf80ed5d965e": "a00d5b88cea2eb1d038c1fc8dfb903c7",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/1815f9e5113ff91ea05d53263a3dd4ef3dc98a": "e11eff9b26c8cb7ac716bd5157fe9ae7",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/27/2c0006e2998797462bc178dc5a467805eb8bdf": "46f79565d8acd17b6049ba9370eaa13d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f0/75e3d261cf578f6773584d76d5f1ba2355f710": "98937f3c3260bc76e509972bf26fa1d6",
".git/objects/43/5f208ea8e6b56ff0b0a6d1ec5efb430a6cf904": "994b28d034ef833cbed39f1331227069",
".git/objects/b4/25823a90b7adc28d7242e5e90cf56d586e8e1f": "bc951b80f39bed57fe65003be32e0674",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/98/7c1ce4c2286298e198548874dbd5071001fbea": "d071bde67bd80aaa988f7d7b0376d854",
".git/objects/ec/cadb3e0f3a78632f77affffcd3f7af29c9c4bf": "d8406b4827244589be07d90761ef453c",
".git/objects/85/264926123e8f57e9b9d41e196c29489134aa82": "8342eca5ba59ac1fa9d91a0b87376226",
".git/objects/85/87623bf3783cc4bd6431cb6614c8fe677ff10c": "2dd7777ff69233fc9abbadacc6d04dd9",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"assets/AssetManifest.json": "9219ed7e5d79a7586544c04e6762a1a8",
"assets/assets/images/blood.jpg": "830a24fe1e364029bb3c1535b618101d",
"assets/assets/images/white-texture.jpg": "00345992f28797757b85294232a36488",
"assets/assets/images/blood2.jpg": "b5f5a8c85a182702cbd00ebc0d4ab4c1",
"assets/assets/images/wood.jpg": "5b343c478d95aec0d91970c42457ccf4",
"assets/assets/fonts/typewriter.ttf": "f260802f772c55c0f43a0ee8adc2605b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "78bc9eefdc8fea1a4a36d39bd3ab8cfa",
"assets/shaders/ink_sparkle.frag": "0ff5c2d72578756a2d288596d5a621dc",
"assets/FontManifest.json": "be2f8d50d9bf36f8960cfb2b3aa2f0f1",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.wasm": "f25e040a2d4d54766e1a57268e60f65a",
"canvaskit/chromium/canvaskit.js": "c5ff0f8767a7ea0962b15d1f1832002d",
"canvaskit/chromium/canvaskit.wasm": "0dde765b130fc5729b2be13a4b9d46c0",
"canvaskit/skwasm.js": "3dbd05be6db4a4154ce733ff194dcae7",
"canvaskit/skwasm.worker.js": "23be0fdafa5ddef67734292a576f8fe3",
"index.html": "3e41bdba9366982bf3e556e91324fd4f",
"/": "3e41bdba9366982bf3e556e91324fd4f",
"manifest.json": "05da3c858a9a25c3943c3c00fa366755",
"version.json": "6b88e89ea1769aea404f7db44ebd2d90"
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
