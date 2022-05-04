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
    "revision": "d047e381c186bfd226d30e235bc7ad29"
  },
  {
    "url": "assets/css/0.styles.99fdcd5e.css",
    "revision": "10e52a8c579f9346f15143067788434c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5b00c98b.js",
    "revision": "7d871ec8cee01b5fb0fc4838916b591c"
  },
  {
    "url": "assets/js/11.dcf38086.js",
    "revision": "43f71760e9c67b846fada0d741c9ad9c"
  },
  {
    "url": "assets/js/12.5c98963a.js",
    "revision": "3b6e40e760c1352483ea6f97203d967b"
  },
  {
    "url": "assets/js/13.79f739b3.js",
    "revision": "22852ff4ec31a7d969efc8c6a414397d"
  },
  {
    "url": "assets/js/14.4794d08f.js",
    "revision": "540ce0efb506a7c80df684ca7ad4e1df"
  },
  {
    "url": "assets/js/15.abd74766.js",
    "revision": "7e2f738a90ba6d2749cb9d7441c933a7"
  },
  {
    "url": "assets/js/16.1425ab2f.js",
    "revision": "50f75c123ec8fed7f5f0ebff0fb3d8c7"
  },
  {
    "url": "assets/js/17.fe60b96f.js",
    "revision": "93a95245e2d6021f4aedac86c9e858e3"
  },
  {
    "url": "assets/js/18.2479fc8d.js",
    "revision": "1ff0926c289cae2e1c83df823f6b3ada"
  },
  {
    "url": "assets/js/19.9a8bc38c.js",
    "revision": "18ac86b54ff1310889dd562dae49524a"
  },
  {
    "url": "assets/js/2.e9307633.js",
    "revision": "649096df4dc05e0795924bfd36b6ee60"
  },
  {
    "url": "assets/js/20.44e9ff41.js",
    "revision": "206c635326f43996a34054d81541fd17"
  },
  {
    "url": "assets/js/21.a49bf4fd.js",
    "revision": "267094748dbd6420d7fca7de848040f5"
  },
  {
    "url": "assets/js/22.b4bc407e.js",
    "revision": "cc73605ec48344ca43f6f5cc80f7b904"
  },
  {
    "url": "assets/js/23.09b5a327.js",
    "revision": "2296d9a802d984bbd8ee28785d392e80"
  },
  {
    "url": "assets/js/24.ecc3f162.js",
    "revision": "e7b544e774e0ee3b862b6723f1746835"
  },
  {
    "url": "assets/js/26.5cb5bd10.js",
    "revision": "8e1e3e5bde6b1481ca5b7ac091fece3c"
  },
  {
    "url": "assets/js/3.099c7cc2.js",
    "revision": "ff5cb6eccecb5a25260c2690cb30f716"
  },
  {
    "url": "assets/js/4.7c8fbe37.js",
    "revision": "8f31bb269c260e13d35ba115795eddb0"
  },
  {
    "url": "assets/js/5.9fca0ec2.js",
    "revision": "691df43da3f5a96acbca6debaa5ec382"
  },
  {
    "url": "assets/js/6.fcc48fc9.js",
    "revision": "9bc4e40559b3185a1298e024342b889b"
  },
  {
    "url": "assets/js/7.2925d054.js",
    "revision": "28bd7e73f3cbe7c720ad4bbe4f03013e"
  },
  {
    "url": "assets/js/8.f6252ca5.js",
    "revision": "e608dba89e1b6c8376470fafc38760d8"
  },
  {
    "url": "assets/js/9.42ad5f05.js",
    "revision": "5cae58941e40501f8e7b11325d0cc652"
  },
  {
    "url": "assets/js/app.72c7995c.js",
    "revision": "c1bd83915911c67b15ed88fba2aec8f1"
  },
  {
    "url": "conclusion/index.html",
    "revision": "578204af51aaa18f704fd029760d14be"
  },
  {
    "url": "design/index.html",
    "revision": "e8d60fbba61786c09b1f056a47157234"
  },
  {
    "url": "index.html",
    "revision": "c2664541f52dc264bfc38deb25a63b70"
  },
  {
    "url": "intro/index.html",
    "revision": "ccb1f24bb1ef9cd1458bb34fbce7d27b"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "61aabc7d43d27a94042b534cff647013"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "62df06235d3997e9a0b84f740072ad83"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "33d21d3e1cf55efb3a0bbdca0c01ac62"
  },
  {
    "url": "software/index.html",
    "revision": "1a88f869618b3243f4ca40e26274dfc2"
  },
  {
    "url": "test/index.html",
    "revision": "dff66e82daa2193ec526bd9c33db4b99"
  },
  {
    "url": "use cases/index.html",
    "revision": "0bebdba2c1a88543cb1a2d4aa83c001a"
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
