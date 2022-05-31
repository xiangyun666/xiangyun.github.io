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
    "revision": "ba923df229edcaeb3550362dbff42ee7"
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
    "url": "assets/js/12.41cc0ba2.js",
    "revision": "e201ef0b38d9943c94ce67b80077811c"
  },
  {
    "url": "assets/js/13.88cfea65.js",
    "revision": "6ab6da6a738aab5a82e6fdd901657f97"
  },
  {
    "url": "assets/js/14.cb1fd432.js",
    "revision": "544ed6f0c9406cdc081e2a982b80c582"
  },
  {
    "url": "assets/js/15.940a2e75.js",
    "revision": "1bc20a23878785a80c3ce81d46939609"
  },
  {
    "url": "assets/js/16.f0bb4479.js",
    "revision": "1f577c9f7693c73be38dc1051ae9adcf"
  },
  {
    "url": "assets/js/17.bd14ef05.js",
    "revision": "0f10e2c7bc2c90b2f7a88c25d2a26262"
  },
  {
    "url": "assets/js/18.44398f82.js",
    "revision": "456046bba8c042a23405522eaa42c189"
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
    "url": "assets/js/app.8f3de861.js",
    "revision": "7febd8f926a8df05494b296ad7dbceeb"
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
    "revision": "7ce1d0ec8e0073a2ada434ac3d2d3720"
  },
  {
    "url": "categories/java/index.html",
    "revision": "61e418554c0787051e4bdb14054353fc"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6dbded831ad7f16f3604ba4f85eeeb66"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "08b2427149fa27f8e73d703e5566be82"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b4c48abb712f8c32f7108176f044456f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "2a5cf5595d8514f81b77ab34eaa298a6"
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
    "revision": "66f4355dacaf1cc8ff3b1e266907e896"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0cf684710e2838be5fc0cb53d76cdfbd"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "91b873bc7bc47d094e500222abca992c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5a82183db9f459b8cdf86bdc1f8c9e80"
  },
  {
    "url": "tags/js/index.html",
    "revision": "70869f5909397128082caccc25c18cea"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7d7b7d60544de0ceb9409489736b38eb"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c3a17dbf4ee1324770b9110100838a2c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7b0a0d872da35e5d70c501035acb43c5"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ae72c4b5545839b885fa1236e846f59e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "98bbb2301faf7fc39ab7227f76ed60f2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4d1bf1460fbf33ad213c919fd82cc4c6"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "5869042f72a38acf6b9644664eeb86f3"
  },
  {
    "url": "timeline/index.html",
    "revision": "049d151972c665717810637810c6c625"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2dc852e4bbb9851d2f68e1addbbf9083"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "130f54cbfb357a5f74789cc9fbfa5700"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "19850bd48330dce0541cb7674567dd4b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7cb45fe981fe98f8b718c72e37a23183"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9a5c1e6b0a6402fc34c54cc212272392"
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
