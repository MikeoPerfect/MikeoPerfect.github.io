/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e66f786c9447d89c8cfac28daae52140"],["/archives/2018/01/index.html","a35d7ac0f6795e2376791f6fd3f691dc"],["/archives/2018/04/index.html","c4c8ed74ec425cb42fa6806e23c217b4"],["/archives/2018/05/index.html","4079ff5e74b96b4b2ccbd322ee239676"],["/archives/2018/06/index.html","a8294fe6f91154f808f09f1714f2b1b2"],["/archives/2018/07/index.html","f7e1a0add1d17a59110ac4a6ee44b21c"],["/archives/2018/08/index.html","98f753f1783ba5eb6dd5640b1dafb585"],["/archives/2018/11/index.html","fa78b901276eb026b9fa3608a463a344"],["/archives/2018/index.html","70b8de723483a55a63611c8f2cb27d44"],["/archives/2018/page/2/index.html","01cbddda8105aa44ec4d8739a6ae19f2"],["/archives/2019/01/index.html","3beab45a59e700480337bea12787d6eb"],["/archives/2019/04/index.html","ddc2f9bc081fc0fee8de2be336044658"],["/archives/2019/05/index.html","9b1898c45494c66e90e511407f755923"],["/archives/2019/07/index.html","6c335830b27404dec52e6f072d77eb39"],["/archives/2019/08/index.html","1e5912407c7013ec9a120fff61c87ba9"],["/archives/2019/12/index.html","74f3641ec8ead3e7ce0b3675a280e0b4"],["/archives/2019/index.html","140efc627b81a0602dbf03b027fa8384"],["/archives/index.html","92d760b2ed0ded7ad37393a171a54a3e"],["/archives/page/2/index.html","282e60cde226ce88ab1c73aeafc82909"],["/archives/page/3/index.html","045c7c4f32a24d23c3ac801d4bba82b8"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/campus/index.html","b0c7a08cdfc72f7e0760b2e462fcb0c0"],["/categories/campus/page/2/index.html","540d583296324ec916228579e9ce0fc6"],["/categories/hello-world/index.html","bdd98fe1c56ef1748f5ff8e9f09f10d9"],["/categories/socialwork/index.html","a0d9c86024d47ba88952d08a71362d17"],["/categories/vedio/index.html","09275e7495fa6154dae1ca25e9e8a1c4"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/css/donate.css","a68e4a34e814ce3334186286f4655440"],["/css/style.css","8da2b040bb4dbeb2121406c0b7a79222"],["/donate/index.html","8b7ae3937b92a475043b7259ace41064"],["/favicon.ico","82e181c24cdcb79f7457d97e6dd50c1c"],["/history/index.html","b9ba397d4876c2331d37f460630db66d"],["/img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/index.html","02fb7d83a3a993fb69ef42dbf3f34cbd"],["/js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/js/donate.js","c5119c5bdd5049d805e03af774a47472"],["/js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/page/2/index.html","00cebcf08e521e80c53cae7a85cc99c9"],["/page/3/index.html","5e64191fb32b7f47ee69c3a2c4a8feac"],["/posts/16107/index.html","2fd0d71012433893e4941c4ed2f44627"],["/posts/16145/image/00-a67caa33.jpg","037ff3eb0f564b7946fdd5724b69dc03"],["/posts/16145/image/01-d5529d8e.jpg","73d37a95131faeadb14a79cd2c096fee"],["/posts/16145/image/02-eff42926.jpg","0980a5d6ee21ae67c02c0fbc7fcb6e23"],["/posts/16145/image/03-06df1e16.jpg","7ecafb03622c9350bd1dfb20c696d474"],["/posts/16145/image/04-70de02ab.jpg","d488c831fd9bbe1cb698bb961bed02dc"],["/posts/16145/image/06-957454d5.jpg","26bd4af134a1f42eb2da4081016a5a86"],["/posts/16145/image/213-9e118743.jpg","a36278dcd601040d73c76f069d6806a6"],["/posts/16145/image/22-b3a2d30a.jpg","2166d2c9be077825b3113dd5e8d0b591"],["/posts/16145/image/45-377ce8e5.jpg","9249e2b993977fc22f3cfc2612badd5f"],["/posts/16145/image/55-4dd49fef.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/image/55-cdbaa948.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/index.html","f19ac478f9c986642c0be60752715f50"],["/posts/19161/image/20180412.jpg","0ca2004cd19c316fab069488e007d968"],["/posts/19161/index.html","a10efbb0dbf8ccdb980fea32be41cf3a"],["/posts/21370/image/000-ae8a4aa8.jpg","dd98b634505694eefda0af5e23832019"],["/posts/21370/image/001-cd3b8434.jpg","a898974845def2b1e22c779935416005"],["/posts/21370/image/777-d100282a.jpg","f46345a60f44c17d7fb74d02d331c015"],["/posts/21370/index.html","aa5cdb868855284e5d757727fd7e3d2b"],["/posts/23477/index.html","f4f71c2b7d7d31973ac2100c7f13481b"],["/posts/23899/image/400分图-5954940f.png","f034b91bfeefd3474a281f28568db218"],["/posts/23899/image/image-110a80ec.png","61e331e930d189745b571b96a4cb90be"],["/posts/23899/image/image-324dec1e.png","259f015e53ac90499220a3806d197914"],["/posts/23899/image/image-451b3c44.png","5b72463c0b5f823547291ae15a9dd38b"],["/posts/23899/image/image-b17c959a.png","44cc7e395a07e52e4f9a8f29edf08c18"],["/posts/23899/image/今年的主题是蜜汁操作-e47daf6c.png","dc78f86b887e871a9d8a039f97bd5c6e"],["/posts/23899/image/初始化图-7ca27f11.png","1de7c138035ccb1c0771fa3090591f13"],["/posts/23899/image/正式赛初始化图一-629d4df2.png","eabcf5e8d4528fbd227c43dea87fe6d2"],["/posts/23899/image/没用的代码-441bf9ea.png","9957c2816cda18770a5983bcbc3570bd"],["/posts/23899/index.html","b2ea69cc5a51bdb625ad49a8e12ecb25"],["/posts/31094/index.html","825ecbfb4e8493ae2b9211a51ce2fe71"],["/posts/36368/image/20181008.jpg","8f424f39943ae7e5afbac72478a7db67"],["/posts/36368/index.html","379107ec0049b5e52a1194d7f39594b9"],["/posts/39918/image/20180228.jpg","a6b3e0d0b536ab5d2b739c6bc56cf802"],["/posts/39918/index.html","1132ff6b9fb3864617e17fe30fe665c6"],["/posts/43922/index.html","714eb4bb240d75351e94e86c657410c8"],["/posts/44907/image/1-03f6473a.jpg","7d846e7d721db73427005424c8168877"],["/posts/44907/image/1-c2ecafe2.png","cdde7ec9692084b60d1e12dd21b3a086"],["/posts/44907/image/11-ea2e2abe.jpg","d61650eb079614a793a1a79c09911f09"],["/posts/44907/image/12-90adc007.jpg","1ae3e1cbc3a2f9b4fcae82695fccb5d9"],["/posts/44907/image/122-039656a8.jpg","f82a774c6b563fd28d44c162ed7fd0c7"],["/posts/44907/image/14-fdef5644.jpg","2ecb8ef73fc089f2f1f8956416760732"],["/posts/44907/image/18-d0f94f24.jpg","7e5ef5a64031e0002ce35e77c3ba5e6f"],["/posts/44907/image/2-149cec78.jpg","9c81d9f2621444980db7b3a7386eb643"],["/posts/44907/image/3-23aad21f.jpg","b120407c48e50ab85fb286897e8245a6"],["/posts/44907/image/4-58a913f2.jpg","fabc94fdd9a07fbd437191690d2af4be"],["/posts/44907/image/5-fbf4a29d.jpg","060c6496a4835404ea342e7f1266b7e1"],["/posts/44907/image/7-3bd27b88.jpg","947a2172ae44e05331a586dc9e47ac9a"],["/posts/44907/image/90-d48f125c.jpg","29e355a379ac7b786369c7277b4e2d7e"],["/posts/44907/image/99-d71cdd95.jpg","c645204a4bb557011f6af198fc1d5253"],["/posts/44907/index.html","09dc89adafa1995e704f9dc0b7463954"],["/posts/45077/index.html","fcc933e3cc5c66e75d1ed2369845e601"],["/posts/4633/image/01-cb7a9fd5.jpg","b086805e7c5e017b347a78dba7754a4f"],["/posts/4633/image/02-25db5a83.jpg","158aea75f27512f25ad9ba502db57c0e"],["/posts/4633/image/03-833d0a48.jpg","11cf27d5cebdc6202310a745bd283208"],["/posts/4633/image/04-16a7870e.jpg","e12c81dfebb253c951d7d8d5271a641b"],["/posts/4633/image/05-8ee015d5.jpg","b1122ab0096930c7b621a1aa4ceb646e"],["/posts/4633/image/06-b474540f.jpg","8547356303f81ab0f9d2319bef8c3893"],["/posts/4633/image/07-f63bc866.jpg","509968f1b44b804b70b9304c6981ddba"],["/posts/4633/image/09-6b237511.jpg","8dc79dd9d7a69f5336825febfd71d8b6"],["/posts/4633/image/10-1b556673.jpg","fd272fd58ffc7eb98bc55650334a673b"],["/posts/4633/image/11-e37e3798.jpg","34836c94d17f56503e545578d5f565b2"],["/posts/4633/image/12-61d62c31.jpg","5ed05bf374bdb4f30ccdfce361d49266"],["/posts/4633/image/15-c9aa66ee.jpg","d1a4d52f70cb2f0db87cfe5c21bb3a82"],["/posts/4633/image/16-69083a1a.jpg","e46c95703eca95185317f507bf8da7d9"],["/posts/4633/image/17-0bc37b46.jpg","e4bfaf1908619f2ac148e2523a5480ae"],["/posts/4633/image/18-47a9acaf.jpg","ff66c00dfb57122ce1f39052b40b2104"],["/posts/4633/image/19-8c36cb41.jpg","a191c5d29056de8070bf53e00611b9e2"],["/posts/4633/image/20-a0dc08b6.jpg","149f0e7913a605dd7b62b53b636a235a"],["/posts/4633/image/21-58f0c8b2.jpg","c491a50304017143ce5adf480662c0d1"],["/posts/4633/image/22-53b0b3ff.jpg","70a68db381dc4f3028227b16e684e587"],["/posts/4633/image/24-2d4f8d4e.jpg","67ffa3ec5d772aee6063b2291e7d53b1"],["/posts/4633/image/25-9914a7c4.jpg","719d61ab2fa5de7218fc05ad2de8d664"],["/posts/4633/image/26-9dffdb76.jpg","ef27115a5add8f5ce273880a1ffd2d8f"],["/posts/4633/image/27-df73c3f3.jpg","a7f7552f3beb506a61ecff768b0662e8"],["/posts/4633/image/28-677b7180.jpg","5bfba8de19fca957e3d5c38caf8dbab1"],["/posts/4633/image/29-2b282816.jpg","829fb4b78b0222024b37d6926f6c3197"],["/posts/4633/image/30-4d5813b6.jpg","704351def2ff9422d468173b2d8ef885"],["/posts/4633/image/31-fa20280b.jpg","2c6bd4c0f64a493c83b8ddcfb30824ef"],["/posts/4633/image/33-3557d72a.jpg","d70ccc5bd63322a0dc146c786a73fc7c"],["/posts/4633/index.html","a394d2d6ed919e591401a76f4b3a1f1b"],["/posts/49729/image/0-4c9d6e7c.jpg","66a17d1d8c0594af2934d6b7049ad66a"],["/posts/49729/image/1-0fdae5e3.jpg","1e3cac3e6301e6145ef16d7f8321b3c3"],["/posts/49729/image/11-7c982654.jpg","65f8801240a0c3d407c3f0d4815b334c"],["/posts/49729/image/112-90b964a7.jpg","5cb74e111a5a700ad00e6e098e9935e1"],["/posts/49729/image/2-03be334b.jpg","858593ad3ad802959df83ff79acefb9a"],["/posts/49729/image/22-70c89d79.jpg","5e2eaeb4241268d45e7e61faee4ba025"],["/posts/49729/image/3-36ad2e84.jpg","3752f3060b0b9a9402d678914f0b5173"],["/posts/49729/image/33-2a801981.jpg","c2ed8e853ebd8407185c79dac99668cb"],["/posts/49729/image/8-30a2da41.jpg","a9ae8b0e69a02b34061e3d1e87694424"],["/posts/49729/image/88-8ef32fd9.jpg","f0c0d386f699fb5c72707cd535fde1df"],["/posts/49729/image/9-67aa5b4a.jpg","24215f2e5df311b18d72b87c82830f0d"],["/posts/49729/index.html","f09295fb54e748610f7788070d91f444"],["/posts/51618/image/00-1d06cb1b.jpg","57afa03bad0789c884e583ae424242f0"],["/posts/51618/image/1-1165c257.jpg","366859b1191e01f3ef6b3601286ac2d1"],["/posts/51618/image/11-251926db.jpg","9ae4eab74b88ef08adc3aea6b3ebeedd"],["/posts/51618/image/112-cc43a1a1.jpg","09f04604b2bd917ee56cfb7a9680d1ee"],["/posts/51618/image/1234-b8341217.jpg","db1e0350faec216b2089b67466405a1d"],["/posts/51618/image/2-89f5292f.jpg","ab6ed9a238072f9b074790845e222e8d"],["/posts/51618/image/213-a58d7afe.jpg","7e650c5a68e9d35dd607269dea26fbe7"],["/posts/51618/image/223-8668c555.jpg","6752d9509a5a0cada416228845c13954"],["/posts/51618/image/3-3c10ee1d.jpg","b1df403dc050297b71cda95583f1d70e"],["/posts/51618/image/321-1ca93611.jpg","251abc63485bb26aafe5b5a91938888b"],["/posts/51618/image/5-1b4a00bc.jpg","e1c3aa0977e6b96123d66fe2cbd5dba1"],["/posts/51618/image/54-cf8af615.jpg","7975ae86a7870f46747ffb70d8c705ac"],["/posts/51618/image/6-7b047070.jpg","683f2030da9a958db689d51f6ee225d4"],["/posts/51618/image/7-7b86d918.jpg","a189f961b52bf6fccdf287e273794448"],["/posts/51618/image/8-22b12969.jpg","78ea0c8c74c9ee3e5c8828f558f1b581"],["/posts/51618/index.html","147eab8e5c941b2a8cb2e4db1a58d26f"],["/posts/56570/index.html","b749b5227cbd9b97c9ad08983a6c512d"],["/posts/56588/image/20190115.jpg","20b38232d256072a4d468a77acb3fc6e"],["/posts/56588/index.html","963cf6f1c40cf2bdb00371f5b4d38411"],["/posts/57631/image/20181231.jpg","df7a543bee0a6ae812c49def48ceaa5a"],["/posts/57631/index.html","96e7fd3e708238a79d9b17b4c34bc15b"],["/posts/60227/index.html","6bc96cbd45a0a25a57417928b50667b1"],["/posts/61167/image/1575651117499.png","746f8424cbaf779f0dee88c857507f65"],["/posts/61167/image/1575651135109.png","3d8c29ae2b9b4c42784655e7556d5171"],["/posts/61167/image/1575651150846.png","cbcf17ae0b7bacf279f1b557f866e07a"],["/posts/61167/image/1575651164367.png","c534a7a9fe5e63d840c872098bf12e61"],["/posts/61167/image/1575651177976.png","a863c94fac90ea76497665df38ab93b0"],["/posts/61167/image/1575651192178.png","a33a32dca18123b98161bcdd49d412db"],["/posts/61167/image/1575651208252.png","a384ccf1b0372715536a2e65270f8e60"],["/posts/61167/image/1575651225157.png","bd8f4a7179ff432af7dcc0ecf36b8e3a"],["/posts/61167/image/1575651239326.png","65b55eb80aa3f3419ddcb8228dcd1a82"],["/posts/61167/image/1575651254769.png","2dae7d43bf82f965ee153b9bf0297cd4"],["/posts/61167/image/favicon.jpg","c918b9d9bb699071d52e219b029ed874"],["/posts/61167/index.html","088c7af0ccf19ad0e3256164133b2ad7"],["/posts/6889/index.html","bca64bc4bca33bfe09237355afe4d5f3"],["/posts/7511/image/11-0f14b251.jpg","7a48ac942d93c6cdc017901523911f1c"],["/posts/7511/image/111-93e55faf.jpg","c7dfd0991eb6d1740a05335bbe64bbbb"],["/posts/7511/image/112-a9636c7f.jpg","5ccb8bea8a24e0a1ba0385a1f124eb1f"],["/posts/7511/image/123-36474d5b.jpg","ced026b4e02cda1c3d00c1ae8e820c26"],["/posts/7511/image/232-fd67e718.jpg","8e7df1e175817abca468e799ddc05de9"],["/posts/7511/image/321-446541fa.jpg","3bfbd6e7debf7d5e3b434d0218dbdf0a"],["/posts/7511/image/33-4f3ffb2e.jpg","0ff5de724687c45e98414fac583e4f89"],["/posts/7511/image/333-ab9bdeb6.jpg","11d2a96ef978bab3abce7fdadd036905"],["/posts/7511/image/432-99cf3d13.jpg","87199038347e3e0a7b700358fdaea6a4"],["/posts/7511/index.html","435366e04aae36d4294af8805ef4f118"],["/project/index.html","812d8bcac5099ec40fdf96dbbcf3c74b"],["/sw-register.js","8f2bbdc38d5e3ca3d552ce0f26e60d60"],["/tags/Intern/index.html","4179b2393f5963bbfee2cbf4130a319d"],["/tags/campus/index.html","3ac4e96e570189e0c96a05ad24c575d6"],["/tags/campus/page/2/index.html","ebfe82927786cf065e0c71168b4f638c"],["/tags/competition/index.html","8d8f2a9096a5336d7cfe4643279643a4"],["/tags/hello-world/index.html","bdd98fe1c56ef1748f5ff8e9f09f10d9"],["/tags/socialwork/index.html","a0d9c86024d47ba88952d08a71362d17"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
