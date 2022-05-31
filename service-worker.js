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
    "revision": "f1a1469d709d9102053745b922040194"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.89e1b507.js",
    "revision": "0e2dc5851cae02a79c1489530d426877"
  },
  {
    "url": "assets/js/10.99c6ebcc.js",
    "revision": "1d5a5c6714cb21317f9950ca9bcf8283"
  },
  {
    "url": "assets/js/11.feae039f.js",
    "revision": "4f6e14c56b0f25e4dd3d24727083a334"
  },
  {
    "url": "assets/js/12.17350b90.js",
    "revision": "0d55a64e26c08894fb263f6724363778"
  },
  {
    "url": "assets/js/13.5294f54c.js",
    "revision": "b37b030ca10a66b2d5b022f8c9a174cc"
  },
  {
    "url": "assets/js/14.9a96dadf.js",
    "revision": "9577a704d02397e62861f6f0f663a49d"
  },
  {
    "url": "assets/js/15.ffcec02a.js",
    "revision": "76b89e2d848cb2c1a174fe6f1e9b7479"
  },
  {
    "url": "assets/js/16.c88940d4.js",
    "revision": "3521de4471668fb34484eef9ce5930cf"
  },
  {
    "url": "assets/js/17.8f0d7060.js",
    "revision": "01b01c61e5ede3a0c8eeeeddcc09ddb4"
  },
  {
    "url": "assets/js/18.90368bba.js",
    "revision": "1f1ea78e90560ddc0d6355be52892ebc"
  },
  {
    "url": "assets/js/4.8e5b039b.js",
    "revision": "305690923cfe9765a30b684744d6d0a7"
  },
  {
    "url": "assets/js/5.0d575b0a.js",
    "revision": "8571afe87efa90c51529a6249262f30c"
  },
  {
    "url": "assets/js/6.8ec0b4ac.js",
    "revision": "23b8b613e1b0512ad6920d06760bcf25"
  },
  {
    "url": "assets/js/7.a6e41eeb.js",
    "revision": "9884fba4e63676a3fbaadb4a3f0506e3"
  },
  {
    "url": "assets/js/8.f80a6eb6.js",
    "revision": "90f04fc4b88f3f825db89ea10dc81489"
  },
  {
    "url": "assets/js/9.529a88f2.js",
    "revision": "03fcce099261e885b66f764561829eed"
  },
  {
    "url": "assets/js/app.075153de.js",
    "revision": "7aa5b216a59f36052817c1015807dbfd"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.33abfebd.js",
    "revision": "54bce033d0a03c3e5b16df9b5b788595"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "9338c9415ad233a02fec2f0f75c5add6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b06e082fcc16d9e269f2e525f66634f6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a90988b08a628be050c97142b56d8761"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "54c28dedcbed186dad6e68373547b445"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "805e33307f0941f4a54f242df09e35da"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a4f25f70421e5c9c111681bd887205c8"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "3b9f5e326929c6f9d3d4143e04978627"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a7e9636a051aa768520b6ec7fd3dc361"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f75941737b1f7e9b52f29314306a01fd"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0ee4b1e20cc90201853ec7116a1331dc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "32412dcda72fc1c110e066f1026ad2fb"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "35cb61b45e9d912af6674316cf9cfba9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "23fa33cccb80617f6486e7fdf1b04a50"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5c08ac6625e4d224d80737e92857c1b0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3aafecf7f406289ee194c6b61bf671da"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "81effba01aa250a5503531354307de71"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "bf5061f1ed532d41c66aaf671696cfec"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "0b73c2e1a0a938e9ba0a1d2d6b561170"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d6e43df73846e6de57029cb860f86db"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d574299bd0247ecc44399768ed81fd9d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5bf780e28ae7edeeb28a6e6778338bee"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2983ca36869cd7981b9a461aa7d354fb"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "edeb0c29ea7bdeaedfa1c20984953054"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f5ac318ccdfd28692d35c550eb763bcb"
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
