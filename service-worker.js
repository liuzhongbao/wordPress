/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f4515fcce4cc56d05da0b6d029d5b5ce"
  },
  {
    "url": "adsense/index.html",
    "revision": "3f429a0263dbd17011ca95917b5fd4cb"
  },
  {
    "url": "assets/css/0.styles.b0707725.css",
    "revision": "1c11a50e6d14f6484232fc06ce64c204"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d1c516f5.js",
    "revision": "4c7b62978158b6519cb58282cfb5c462"
  },
  {
    "url": "assets/js/11.3d93179f.js",
    "revision": "7d0fdc79af424bc7272ef0bb153ddee0"
  },
  {
    "url": "assets/js/12.4fdb8401.js",
    "revision": "29fa5527ec6c2fcab48b7f61d2ba9b75"
  },
  {
    "url": "assets/js/13.8ac18be8.js",
    "revision": "8b0bd702283317529ba002d457552867"
  },
  {
    "url": "assets/js/14.87bf3d52.js",
    "revision": "730e72b935388f251f677dc2a3db6e24"
  },
  {
    "url": "assets/js/15.fb3691b9.js",
    "revision": "876c1469d654d1ea492a11b9d8c0acdc"
  },
  {
    "url": "assets/js/16.3d1d5f97.js",
    "revision": "3e314b0b6182c87ba565e17f8435dff3"
  },
  {
    "url": "assets/js/2.2cb3afec.js",
    "revision": "8d95ce6b0de52da8c47b9c51dde0d22c"
  },
  {
    "url": "assets/js/3.aa8b184c.js",
    "revision": "623039f753b7a43bff1614dd72e44188"
  },
  {
    "url": "assets/js/4.f20521e2.js",
    "revision": "dee4cb2799819347d5a5c5395e528819"
  },
  {
    "url": "assets/js/5.57e48f41.js",
    "revision": "079927b2ce08398d4c5f6c3f54c1606a"
  },
  {
    "url": "assets/js/6.7b4cd8ec.js",
    "revision": "8b79d0177fa7449c9dbe761484a8c12e"
  },
  {
    "url": "assets/js/7.cbe353cc.js",
    "revision": "484ea547a9f1ce63b4627a7061380591"
  },
  {
    "url": "assets/js/8.2926b106.js",
    "revision": "11c645998a335e756fe76eaa9b54fce2"
  },
  {
    "url": "assets/js/9.1a769db1.js",
    "revision": "4745a5909def27f5006d5058f90eb99a"
  },
  {
    "url": "assets/js/app.d213822d.js",
    "revision": "2ee9870f42c8d0cf83d1b030897d1bd6"
  },
  {
    "url": "css/css1.html",
    "revision": "c04df99e9b7ee2ed4b5ed4937901ba4c"
  },
  {
    "url": "css/index.html",
    "revision": "39ac88e6c8c7e3914daf4d2915578d82"
  },
  {
    "url": "Family/index.html",
    "revision": "179f15783a372a7ee739cc74c9e71619"
  },
  {
    "url": "index.html",
    "revision": "01de33154008168b53a85166e6b53963"
  },
  {
    "url": "liuzhongbao.png",
    "revision": "9bb7b95ed2bdf98aa4dda0660d947f18"
  },
  {
    "url": "tool/index.html",
    "revision": "dc408971053eeb875f22e3e5d8c4a40c"
  },
  {
    "url": "tool/tool1.html",
    "revision": "a8173865b09a3bd0550ab75ca29bf840"
  },
  {
    "url": "tool/tool2.html",
    "revision": "156b31be5ba2a07e6ec4ef6fd2907977"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
