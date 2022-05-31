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
    "revision": "9de3e88b01ffb5e8b4a4f6726dc8bef0"
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
    "url": "assets/js/12.1a39098c.js",
    "revision": "a776332fbee430900e93e84b1e3c11ab"
  },
  {
    "url": "assets/js/13.88cfea65.js",
    "revision": "6ab6da6a738aab5a82e6fdd901657f97"
  },
  {
    "url": "assets/js/14.92fac630.js",
    "revision": "2a212849f93d1e14c6f3d310e1b2f958"
  },
  {
    "url": "assets/js/15.5c5bb0cc.js",
    "revision": "c44c470fef4af6a6497deb4bdc9fe745"
  },
  {
    "url": "assets/js/16.2cdf2745.js",
    "revision": "d66e92f415c7464e44a24a103405220d"
  },
  {
    "url": "assets/js/17.74262326.js",
    "revision": "2d535fd009005cff9a45b7a38e704e44"
  },
  {
    "url": "assets/js/18.f8ed2b9c.js",
    "revision": "d627299d559df8d0b4ef73c2ced71759"
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
    "url": "assets/js/app.00d8a970.js",
    "revision": "3edc612c62e9e1da78de399894a66c3f"
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
    "revision": "57fd3dea570aa499d643974961a3fcc7"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8a381263c2027d22d12cea937508acd1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "345293e6007a9cd2ee8d299aee273369"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5a40b5f4716b3cda135ae36e42d95c99"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "08f9bd912c434eef3fe96c2c39e15c54"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "80127e47751cd5c2c3a55df3f7c256a9"
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
    "revision": "681a154d9ea783a4e397154e94c7b19b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "42c1aaa0203940c57b867ed2a60d324b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "234dff090c0dd8d3bc8a7382f5da36f1"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5ae6c2264f61dcd26c5cfb2649dea39a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c3d86477a9ace88f0fba882700cbbcbc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d1a15c392e3d19d0b9546bfa790fcf85"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b45fb45c98d1ef2e7a6f74e5db821b9c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "45367181cb34115682cf2457b12b945a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c727e31ce9d2aa82b53233627b340ba1"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0289d3ff74ceead39a9254d9917d61e5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "829e7648958c580d846c95c7b34b170d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d89fd8bef6eb3c4270912aa3bc2e5942"
  },
  {
    "url": "timeline/index.html",
    "revision": "7e2e2ff7641db493be22dd2d87ee0d48"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ccd44887dd3e5cdf8f8481f71ebefbe9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "6e1b6a876640ae9521347c92fb79fb97"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2eae3076be7554975ec41e8dcbfcb9d2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "257295b446eb833bd1254d9d0ddec0f3"
  },
  {
    "url": "生活分享/life.html",
    "revision": "477f9d16baed9984a0a54514ae308f95"
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
