/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c8182053476a3dc384bbabef880758af"],["/about/index.html","8aeadb4b443e20949346e31d986c60d4"],["/archives/2015/03/index.html","cdcdb33e7f6b953541a778cd1866cc10"],["/archives/2015/05/index.html","be64df36c6c85c39f2c9c2f80f517834"],["/archives/2015/index.html","81fadefe11e5878f97128cd0fa28b888"],["/archives/2018/01/index.html","e7452271776ac55bb09828f8c02af6cd"],["/archives/2018/04/index.html","5b06ac4e471f63aadb057accc406e5c3"],["/archives/2018/05/index.html","c5103a216b9d7e66766f72ad37666ec4"],["/archives/2018/06/index.html","433d7e4d6a5c23ff88ada61d7aad6d0d"],["/archives/2018/07/index.html","bcbc38005bcecd416c473fca5ad62c5a"],["/archives/2018/08/index.html","c584c65899791bdf4cd102cc103f02d5"],["/archives/2018/11/index.html","3c4affbf3e745bb80748222f26db4d40"],["/archives/2018/index.html","90580c1541b2cb9978fd8220dab99da8"],["/archives/2018/page/2/index.html","450badf83cfcd5e382ea73877d9c162d"],["/archives/2019/01/index.html","19502b78951c6364660d97d361c68295"],["/archives/2019/02/index.html","dd06a8e2764c4a5adbd3c194a18940de"],["/archives/2019/04/index.html","86fdf1e3bef9705b28f67992d6cd95fb"],["/archives/2019/05/index.html","f7e66deed9a3caa4a04e4bcb8a3ca013"],["/archives/2019/06/index.html","c239ec7cc02ecda50d05ff85d8cb65e3"],["/archives/2019/08/index.html","579826f4c178bd671c73798fa298a590"],["/archives/2019/10/index.html","ac9130c6db1886b7bc06e87e49b5c15e"],["/archives/2019/12/index.html","faaafd04515fcdca8d3d2f335b402a08"],["/archives/2019/index.html","673f90b4c7496be92899b579791f0739"],["/archives/2020/01/index.html","f7b6f20a60176b8a04cfe734566cee7b"],["/archives/2020/02/index.html","6bf9f5de16dba4d1d80a75cac548b24c"],["/archives/2020/03/index.html","93f4ebd46a9ee3550a43bc59f58e4e0e"],["/archives/2020/05/index.html","b756146f7961d30cd6e2beaa357bda05"],["/archives/2020/06/index.html","f4d1d633cfdfada9dff0e3f1a1a1148d"],["/archives/2020/07/index.html","13e0d0b91f8bd3cc6df7c57fcf21dba9"],["/archives/2020/08/index.html","f807b2a03c2adbbc976d29da0271fb52"],["/archives/2020/09/index.html","f2ec06172fe9ffa7f2648fa6d8d8b9a1"],["/archives/2020/10/index.html","9870143332d584584c28208bb35018ed"],["/archives/2020/index.html","c114f4c742698d1ef708297419104eb7"],["/archives/2020/page/2/index.html","a926fd6c514ebc00e8dcc230f82f2788"],["/archives/2021/01/index.html","f9685653e30f105b1ba0c33a996482e1"],["/archives/2021/02/index.html","4ad83c4c27fa40a59ae2b7aaf81d0f12"],["/archives/2021/03/index.html","1af3f10553355e9259a5b4a990a3c452"],["/archives/2021/04/index.html","fd24a2c77ab2a03f0a41daedaffcd455"],["/archives/2021/05/index.html","fa6816d9b4dbcaf95d0ddc32986cd114"],["/archives/2021/06/index.html","69dcfd556e73ce5d888707b605d81cd6"],["/archives/2021/07/index.html","4da2110cabfe9ca65b97f3c4f26212b4"],["/archives/2021/08/index.html","727046cf09db0adb5fd3e2cd9688adf0"],["/archives/2021/09/index.html","f1619b249cf721c1895002618d1f2da9"],["/archives/2021/10/index.html","c1cce5c52fcdaf8069ca4f2079fe782e"],["/archives/2021/11/index.html","eaaba86e70c522beb39123c970bad558"],["/archives/2021/index.html","02a577983609b54fd1a0ffb591f04a8c"],["/archives/2021/page/2/index.html","59d45c9013187d072c489ddd7159e244"],["/archives/2022/02/index.html","591d267faa02054b8ea7574b5f576150"],["/archives/2022/03/index.html","13f6af043ed39d59444df84fcc3cf686"],["/archives/2022/05/index.html","0f51c81fca94409ab96f5bf92a6085a6"],["/archives/2022/08/index.html","190fa1aa4b2feeef2479b1652ff5c746"],["/archives/2022/10/index.html","130221c4b8c3fa74ab1f143536f47dd3"],["/archives/2022/11/index.html","d30a7a9ca572d49475336e5d8d0f3e69"],["/archives/2022/12/index.html","3df47a001d6dcda44f27a3f6ab9d0eab"],["/archives/2022/index.html","b1446b00d8ee18e0887bf4d7297a5a5d"],["/archives/2023/01/index.html","e911cf5f5aa53d61bc7d4230b8df2490"],["/archives/2023/02/index.html","71d95b3d788479ec8a12b2f65ac4c94f"],["/archives/2023/03/index.html","607c8de50199a06a9910e8e2b26b9b1e"],["/archives/2023/04/index.html","9fa622c01157215c9e77b4d79ffa999c"],["/archives/2023/05/index.html","a1239855d177885f4bc792ed3a752dcf"],["/archives/2023/06/index.html","e54585c6eeefb60ebd8500af38e9db5b"],["/archives/2023/08/index.html","f8069e427ce462d23fac6fa579ecadfb"],["/archives/2023/index.html","f7916b46288e0c3319127c87be604bb7"],["/archives/2024/02/index.html","e237160383e339c5a105120eab9bade6"],["/archives/2024/index.html","e237160383e339c5a105120eab9bade6"],["/archives/index.html","9c4ed399077cdff6cd6212d62cb54b3b"],["/archives/page/2/index.html","339f1083a949d95a9cc0223c7ab41721"],["/archives/page/3/index.html","20b6f424d41ccfc0572627a13c47010b"],["/archives/page/4/index.html","b478a081d31f562749a2af003ec5f861"],["/archives/page/5/index.html","50305644f17a0e6ac20d86b6f921784e"],["/archives/page/6/index.html","e29df9342d9e8168739f2bab8b454032"],["/archives/page/7/index.html","25cf18d7d027d5fca9c3d160d6ae147a"],["/archives/page/8/index.html","e7cd076476f9bd8cd33406e3d0d80015"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/categories/ACTIVITY/index.html","f7f9697682dd0d34939987d20f0b8d31"],["/categories/ACTIVITY/page/2/index.html","323c99b5f6c90dc9fced0db3155d5c49"],["/categories/BOOK-NOTES/index.html","86de6d145edc97043ada12a773bd2900"],["/categories/CAMPUS/index.html","fe3cbe6b08fdf13d93c909a00faa9466"],["/categories/CAMPUS/page/2/index.html","425e935636a7ef6c127bb0d4e07494f9"],["/categories/DIGITAL-PRODUCT/index.html","307680af5d4c4a91ebe91e8ea4215d3c"],["/categories/FINANCES/index.html","52f88f3918bdcc17c2e4f6ea60d628ff"],["/categories/FOODS/index.html","18ce902e81ee2b89e9eff27143849d30"],["/categories/GAME/index.html","7bd730b52bf377d8644618d27d2b7d71"],["/categories/INIT/index.html","637623deabc3b9d4d1583e6556788022"],["/categories/MOVIES/index.html","c60dc56569392ae3323624555715fb3c"],["/categories/MUSIC/index.html","a939da14a30f62ed4669d2b4e69218e2"],["/categories/PEARL-BOX/index.html","3264499d060347ff4d982efbd8286d80"],["/categories/REUNION/index.html","1085cbdd6d42506cb98e8a1a7d827cfa"],["/categories/SPRING-FESTIVAL/index.html","9e7f4a46ee8867d3048d28c03a3437ce"],["/categories/TECHNOLOGY/index.html","1060de6bd3310a5cec16a93dd78c70f2"],["/categories/THOUGHTS/index.html","9991c987f1d26b4783b5c1ba7598dc98"],["/categories/VEDIO/index.html","20ab7af2e32b5331e0e62d148d2e64d4"],["/categories/WORKPLACE/index.html","d103f155808303e320f89dce0b428a15"],["/categories/hello-world/index.html","1e9b7fadb326b914ef20e67c41027926"],["/css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/css/donate.css","a68e4a34e814ce3334186286f4655440"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/style.css","7ba514c97d7616d09e2ea935d6fe6ec4"],["/donate/index.html","90db84f0ce2f48070fedc33f54b48129"],["/favicon.ico","82e181c24cdcb79f7457d97e6dd50c1c"],["/history/index.html","e67129efa2c252cd4c5a9123ebbbb714"],["/img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/index.html","50c9adb02a016aa7d188422ac6461074"],["/js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/js/donate.js","c5119c5bdd5049d805e03af774a47472"],["/js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/toc.js","aa681b733f400634fc116211ce70248d"],["/js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","30a04eb5cc16011e710b3f9358d901b7"],["/page/2/index.html","6736c9ff39ca5f8cf114b867979fd026"],["/page/3/index.html","b20a152d9ac0b4d76a6260f88a81868e"],["/page/4/index.html","c8ecf23225c0f667b0a21ec1dc42d222"],["/page/5/index.html","7495dde96cb26005e0a8efc7158136e2"],["/page/6/index.html","9146e5388191aac2c19f0717a4ffe835"],["/page/7/index.html","461ccc92b4c1de5901ed8fb2bf50c6a7"],["/page/8/index.html","ff61cf1b00fc386f15edd57817692e86"],["/page/9/index.html","93fecabb74cd2f10a7211645072afe39"],["/posts/10399/image/5.png","8fe7c7cded414873a277b237e3f9b04d"],["/posts/10399/image/6.png","8b0e0ab7ac9b3153f10fe7b44d36fd94"],["/posts/10399/image/image-20211007121219034.png","dfcbd6731f776cf73d7084fdb6506be5"],["/posts/10399/image/image-20211007121428821.png","4c4ee393d11ef6466cd7e71f01e4a3ec"],["/posts/10399/index.html","eabf291c4993b3626906806f3702298d"],["/posts/11517/index.html","3c46b064a2e08cefb8f99179dd0f49a6"],["/posts/11517/交通事故处理01.png","01b1aee6a001b0c26695fc64e3d34b03"],["/posts/11517/交通事故处理02.png","98e7188cef75cecfcb64eb8e92fbe371"],["/posts/11517/交通事故流程03.jpg","fba8f7835bcd78342cf7fe96949bcd38"],["/posts/12801/index.html","0a1eb12257e562069fee844e4beab8a2"],["/posts/14062/image/image-20200209211817454.png","1c6bd4a2da69e3fbf62e6e1f6c294fd0"],["/posts/14062/image/image-20200308182926949.png","d2f5d8a678d6aeddd4399dd0ebadef7e"],["/posts/14062/image/image-20200308185322824.png","8b180754a2c731618a2003504fa1f5d7"],["/posts/14062/image/image-20200308191954342.png","93786a7fc17a463b81a5e703a45215d7"],["/posts/14062/image/image-20200308194044483.png","1117050eced5491b95a0ad86b6a1561b"],["/posts/14062/image/image-20200308194542633.png","65fc3dbad7d0eed60ff4dc3ab74820f8"],["/posts/14062/image/image-20200625175346121.png","bcc335362f1abaa5eb02380922b9dbc7"],["/posts/14062/index.html","e2c8570b8caf356f43531f7b1e2aebd0"],["/posts/15059/image/image-20200209223336765.png","a58bd67fbab4531b377ff99c8898c376"],["/posts/15059/image/image-20200209223657842.png","33576193ae78ad13a3f7a60e44c95725"],["/posts/15059/image/image-20200209223906448.png","b15343097e915bd6c8d87b152c6d6170"],["/posts/15059/image/image-20200209224704457.png","bb847d306111503de6ad8310163d1c15"],["/posts/15059/image/image-20200209224841814.png","a5cbc4a3a1e371668f2de59d768bb311"],["/posts/15059/image/image-20200209225016194.png","d5b13dbade91cb1bda7d306492866a54"],["/posts/15059/index.html","c37a51a78db451c6bf5ff8c7e050abed"],["/posts/15260/index.html","be11e06b2dc73675187071ac5388feaa"],["/posts/15260/原野话剧01.jpg","42e50ba04d44552cde48a95c4c7ed12e"],["/posts/15260/原野话剧02.jpg","a8fcec8b7f67e2eac3b2e828c1338a5e"],["/posts/16107/index.html","c9beff8276fecf2a3c80dd1bf25ffe71"],["/posts/16145/image/00-a67caa33.jpg","037ff3eb0f564b7946fdd5724b69dc03"],["/posts/16145/image/01-d5529d8e.jpg","73d37a95131faeadb14a79cd2c096fee"],["/posts/16145/image/02-eff42926.jpg","0980a5d6ee21ae67c02c0fbc7fcb6e23"],["/posts/16145/image/03-06df1e16.jpg","7ecafb03622c9350bd1dfb20c696d474"],["/posts/16145/image/04-70de02ab.jpg","d488c831fd9bbe1cb698bb961bed02dc"],["/posts/16145/image/06-957454d5.jpg","26bd4af134a1f42eb2da4081016a5a86"],["/posts/16145/image/213-9e118743.jpg","a36278dcd601040d73c76f069d6806a6"],["/posts/16145/image/22-b3a2d30a.jpg","2166d2c9be077825b3113dd5e8d0b591"],["/posts/16145/image/45-377ce8e5.jpg","9249e2b993977fc22f3cfc2612badd5f"],["/posts/16145/image/55-4dd49fef.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/image/55-cdbaa948.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/index.html","f198569a49b030236d92a816824b094c"],["/posts/16365/image/image-20200207202506472.png","a2576244287ba37f8a220df0ccaeb0fd"],["/posts/16365/image/image-20200207202521917.png","1e2d5f5f22de403e6dae2b8b57708e72"],["/posts/16365/image/image-20200207202904364.png","98ff7e329ee69977d7df89590b4acc5f"],["/posts/16365/index.html","0b2b34489995b5f58e3c788704bc0f9d"],["/posts/18068/index.html","7912b09eabdcc2e3a3eb3f03b26174ec"],["/posts/18696/image/image-20200209162308336.png","dddb0c347fa59c26f0c3c9186fe0d6af"],["/posts/18696/image/image-20200209163749921.png","2be42038776c5137f1693e6ca505fe46"],["/posts/18696/image/image-20200209163915066.png","bafabba5e5b4c553c5b2bfce69e31ed9"],["/posts/18696/image/image-20200209164523745.png","5a8ae6914c19ed3c30f755ac7cbfc373"],["/posts/18696/image/image-20200209165031146.png","7590b5c30faede550374123068b166ff"],["/posts/18696/image/image-20200209165430690.png","b59409ad6c6605348e640e54860c8462"],["/posts/18696/index.html","1e2a96c06b8b8ffec6dc34c05492a614"],["/posts/19161/image/20180412.jpg","0ca2004cd19c316fab069488e007d968"],["/posts/19161/index.html","d9fec83d2c26955b341846ff9469125f"],["/posts/21370/image/000-ae8a4aa8.jpg","dd98b634505694eefda0af5e23832019"],["/posts/21370/image/001-cd3b8434.jpg","a898974845def2b1e22c779935416005"],["/posts/21370/image/777-d100282a.jpg","f46345a60f44c17d7fb74d02d331c015"],["/posts/21370/index.html","746dd1d8853c2002b2ca53dbb5af9297"],["/posts/23477/index.html","37ea645d1c319cb3c6b8b9f7acfdead4"],["/posts/23899/image/400分图-5954940f.png","684522f65164badbe32b31d9bd3b8fa6"],["/posts/23899/image/image-110a80ec.png","71e4544a9d0e6c902b7707d36af84058"],["/posts/23899/image/image-324dec1e.png","fa3906af74ddca23ddbec3422352bf31"],["/posts/23899/image/image-451b3c44.png","1dc68f9317bf7b6f4b4ee21bf60cd3fd"],["/posts/23899/image/image-b17c959a.png","1163dc1d791c437b72eb1ccb0c478804"],["/posts/23899/image/今年的主题是蜜汁操作-e47daf6c.png","866f38abffd5fe9da2dc18f6537fb060"],["/posts/23899/image/初始化图-7ca27f11.png","cd3ef1f7df6d1133a948c771bf90d7d1"],["/posts/23899/image/正式赛初始化图一-629d4df2.png","b083365f4fe8d6633377053e8a7a30e1"],["/posts/23899/image/没用的代码-441bf9ea.png","b3c922832e668e33ef2913875286dac9"],["/posts/23899/index.html","54684655e8136f6154c6da5378c43ef8"],["/posts/24219/index.html","78c3ad2f9612cb9d248533cae8e02f91"],["/posts/27231/image/image-20200209125042162.png","52a48f6bdd9ca0410c1908d643c26606"],["/posts/27231/image/image-20200209125320664.png","7b742f5d1902c4e06e0d989578bbf0f1"],["/posts/27231/image/image-20200209132706200.png","ddabe4fa22ed9dc1a3a118a546556f3f"],["/posts/27231/image/image-20200209133210073.png","5a5feab29d5311a69e85b80a6b97d2dc"],["/posts/27231/image/image-20200209134109979.png","1161ac278fe8562642ef34e0af6c74fa"],["/posts/27231/index.html","c2c83e15e9ef83140b4f4e325bfcce2e"],["/posts/27440/index.html","d2e6fab51f4eb225087e98ab91239371"],["/posts/29446/image/image-20200209202720399.png","4ca3d0125b08a8c0aac54ac426123735"],["/posts/29446/image/image-20200209210040137.png","9e784cdaea82e3beb8fa3f7a64d38309"],["/posts/29446/image/image-20200209210745468.png","7174f5cf3f52290425ddb863088201bd"],["/posts/29446/image/image-20200209210843022.png","29cca5587757ae200c666256728dbefe"],["/posts/29446/image/image-20200209211256427.png","06277f0ad341306e8e94bbe99ad4bf59"],["/posts/29446/image/image-20200209211817454.png","a90c179e31d9f5980a09ed0246567585"],["/posts/29446/image/image-20200209211926525.png","216ca63040554d9b748ec316c60bd214"],["/posts/29446/image/image-20200209220339590.png","0a7985bc46061c16a66830d84316f05c"],["/posts/29446/index.html","53a25b7172b1c6bc628f66e3a196501a"],["/posts/30112/image/image-20210427234654145.png","26bc734e8b4eaf83a9f0b2784948bd61"],["/posts/30112/index.html","19170b367e21eda78821f100be49dd10"],["/posts/30661/image-20220303204311418.png","32d8bca46464fed9786dd8ebac20887e"],["/posts/30661/index.html","c36f005bea0be006aa3c5f2ffc73c1ce"],["/posts/30661/应急响应流程.png","ec61d08826053f48a89070530068d05c"],["/posts/319/index.html","12b6f3b25810550b24f543ec5f1071a3"],["/posts/32098/index.html","de88d7372cafd26cc60401b6a2ec538f"],["/posts/34456/index.html","c404f21ece8fa4bb43d657bff54c3730"],["/posts/35527/index.html","963da4d7f9767894695a44ab453180f0"],["/posts/35959/index.html","92289d564ec1e178827e88f1be9fa0f1"],["/posts/35959/百亿补贴02.jpg","4f72068961be0f8f2e2cb396f0804d4a"],["/posts/36015/index.html","3547e41c2224062bfbac30dacabc0aae"],["/posts/36070/image/image-20200920204619246.png","a074b563f93b093c2e36e0e30d2a6857"],["/posts/36070/image/image-20200920205039959.png","9a73a371ee89c0e6ebeada596fbaba98"],["/posts/36070/image/image-20200920210835074.png","633ae75f456d6140bba9c7222af6ce99"],["/posts/36070/image/image-20200920210903217.png","9d7cd44cfc6d1184b5654966f653b20b"],["/posts/36070/image/image-20200920212324576.png","56093fd4992c21d0bcaefa0faf2d6f93"],["/posts/36070/image/image-20200920212529826.png","873d9666c27c8661c5b6bfee40ee5612"],["/posts/36070/image/image-20200920212857566.png","fba07f4226c822bed273044e7a697302"],["/posts/36070/image/image-20200920214258230.png","aa96770fb043cd15c0502bf080b59fc5"],["/posts/36070/image/image-20200920214307459.png","aa96770fb043cd15c0502bf080b59fc5"],["/posts/36070/image/image-20200920214341838.png","05d6f614c10cfa73bee3b494e96432a8"],["/posts/36070/index.html","9c7c2e5fc36b0908108194c91238f9a6"],["/posts/36368/image/20181008.jpg","8f424f39943ae7e5afbac72478a7db67"],["/posts/36368/index.html","fa966381401da7f32fbcd574e37e7594"],["/posts/3782/image/image-20200727234638460.png","12cd32d6fbfff5340ee03821e03184af"],["/posts/3782/image/image-20200727235114885.png","71f03dd8967163635fce7fdd736916ba"],["/posts/3782/image/image-20200727235431226.png","b1b371ced8f200c1d8817fb8f59fc717"],["/posts/3782/image/image-20200729000729970.png","8223a91678cf40eb413e62e66b6f20d6"],["/posts/3782/image/image-20200729000856356.png","2ebbe43279319bb218d6fc2e2753e2ed"],["/posts/3782/index.html","81386328268b5baf0f5864903f727010"],["/posts/38424/image/image-20211122223438126.png","63e633962a680588ff426e71eb83e060"],["/posts/38424/image/image-20211122223948413.png","0443cbe444b5fd3ee619d424f47720fd"],["/posts/38424/image/image-20211122224934185.png","fe2f10ba23d800911f7e8accf4c665f2"],["/posts/38424/image/one.png","2d997f8d56dec6ba89b17d9feb0f93df"],["/posts/38424/index.html","df4d66e147519ff387fba2854f9c82e2"],["/posts/38566/index.html","d0c9b88b6641be0622c5a340f2d53a3e"],["/posts/38566/咖啡02.jpg","3c612ed19ac981d1daefd6247d332884"],["/posts/38566/咖啡豆01.jpg","52e4ef56d102c146891a86d8d1005c03"],["/posts/38566/酒01.jpg","9924f44fad7bf6305e197a564bdc6c6b"],["/posts/38797/JPYuz1r.png","7841d869699b6628ceb377e56c806fbd"],["/posts/38797/WX20220821-184301.png","59c65da0a9098085723cb0959dab6d76"],["/posts/38797/WX20220821-223712@2x.png","149de4a9a68dd0b22103252125354d3d"],["/posts/38797/index.html","792a399583a8a3b15cfe9a83eb5e80fa"],["/posts/38797/wx20220821-182106_12yxUJeP9.png","22908ad30a3e48de87712163db7bc0c8"],["/posts/39666/image/0590de03d0dbc304ced0b91a48ebbce3.jpg","b8b4861156aa14118bf3d440b1e6aa08"],["/posts/39666/image/251ba7c65dc60f69e82d2d5bfd0278ed.jpg","2f707744aa473744fe34b7fb24520a23"],["/posts/39666/image/44c16e1ce5d7accada45ff9b31465df2.jpg","79cac4d199e7185d5d11f1764a1087b1"],["/posts/39666/image/75ba815ab97061a5cfaba424ab20bb76.jpg","651d3b532fa68502c91100b4aac6cb73"],["/posts/39666/image/Screenshot_20200627-233417.jpg","2b26276b7715d5bb560a25706142191f"],["/posts/39666/image/a80818fdd547528e4becfb6e91e2df9c.jpg","b935a099b4d7d228512f18b1e5d28b6d"],["/posts/39666/image/image-20200627234011452.png","fd623002327881367cfd6a10fd0dae5f"],["/posts/39666/image/image-20200627235206587.png","4577bb67145f24b90b05f168b4ab5ec2"],["/posts/39666/image/image-20200628010245137.png","2a147338fd43a785049a8bbe9cf50957"],["/posts/39666/index.html","4a64b83437f04a624940733b2f6ad32e"],["/posts/39918/image/20180228.jpg","a6b3e0d0b536ab5d2b739c6bc56cf802"],["/posts/39918/index.html","82c839c0896d693f82da51fcd746e0bc"],["/posts/40737/image/image-20210614214103812.png","2f8d84df33ead72ef1b90d68d0d06573"],["/posts/40737/image/image-20210614220108871.png","3b5d210588da2bda67e0285821b5ff9e"],["/posts/40737/image/image-20210619223549361.png","114feea6c0da04314f34f78881f0eee2"],["/posts/40737/image/image-20210619225506012.png","b25a9858ee6e93419eb31f1b2747b743"],["/posts/40737/image/image-20210619230139156.png","ca930a2396e51a841bccc780b4939893"],["/posts/40737/index.html","24b278377f90316b14f4f3e9fd056a5d"],["/posts/40916/image/image-20210409212757426.png","dc1bf54dc05fdcffc0e3322605e59eeb"],["/posts/40916/image/image-20210409213307650.png","576b149da902f26c49f0e4dd84d74373"],["/posts/40916/index.html","079382a80d0254f9e9ce529cc5cc0986"],["/posts/42674/image/企业微信截图_f3db8d3a-8369-44d1-abca-a1f5b5d112f2.png","49184c8514de5e64f6b636fcae424362"],["/posts/42674/index.html","005dd30793d01907acf8f5e7250c465a"],["/posts/43132/image/image-20200206211138212.png","3ec4f32f7242d30644b132cbee407341"],["/posts/43132/image/image-20200206211355831.png","9df0ed205dfac2af528192679f396663"],["/posts/43132/image/image-20200206211653095.png","75f6559d824a7f1dd97e78cdd26bc457"],["/posts/43132/image/image-20200206233906620.png","562c2bf8cd03b8d49da35dea1186251f"],["/posts/43132/image/image-20200207155954504.png","f28ba8264466958dfe375310ea8d4584"],["/posts/43132/image/image-20200207164311202.png","db3ed72bde0ffa1f119caa0e6b0d73e4"],["/posts/43132/image/image-20200207164921705.png","6556134fdf2234e9e9719cf60f62a49e"],["/posts/43132/image/image-20200207165443256.png","d0c13562433532f1d3c5150272e4ff38"],["/posts/43132/image/image-20200207165602148.png","d2d11c425f1ab34dfd0ac8930a96758e"],["/posts/43132/index.html","6b67e1ce078044811f3da1c653b1a63e"],["/posts/4336/image/image-20200906220920243.png","ee13ac39b7d4fd2da452f3ea4b4dcfe7"],["/posts/4336/image/image-20200906221457582.png","354a387ea6caea16c6ae901ea9db5ed3"],["/posts/4336/image/image-20200906221708486.png","52ef13807f8ac407e9bbee9a44065eb8"],["/posts/4336/image/image-20200906221755199.png","dd96e2dde468dfbed5e4f7486566c3f8"],["/posts/4336/image/image-20200906222002731.png","35114bdb0922a2191c66119e4f714c62"],["/posts/4336/image/image-20200906222236050.png","0657cf4fd6c0cba23d8d7c683aa71778"],["/posts/4336/image/image-20200906222344368.png","b86e2e7fb015301246536796d4395a49"],["/posts/4336/image/image-20200906222448383.png","0c94343313bb7ff0e976dc46fe0557bb"],["/posts/4336/image/image-20200906222756760.png","c42a02b9df21e48f28382e996eb32b44"],["/posts/4336/image/image-20200906223040165.png","3a602d3648062e32a6cbad4eab5e6dff"],["/posts/4336/image/image-20200906223630194.png","0699c2756a1b623deeea769d6332527d"],["/posts/4336/image/image-20200906223931419.png","a1aaedf893b29b9597dfa793718775b0"],["/posts/4336/image/image-20200906224951385.png","2f12a7d24b085520ef282085283b2411"],["/posts/4336/index.html","db61683239e165889766e3ede33c20d2"],["/posts/43922/index.html","8a173209d77c76bcb615beb790a5290c"],["/posts/44907/image/1-03f6473a.jpg","7d846e7d721db73427005424c8168877"],["/posts/44907/image/1-c2ecafe2.png","cdde7ec9692084b60d1e12dd21b3a086"],["/posts/44907/image/11-ea2e2abe.jpg","d61650eb079614a793a1a79c09911f09"],["/posts/44907/image/12-90adc007.jpg","1ae3e1cbc3a2f9b4fcae82695fccb5d9"],["/posts/44907/image/122-039656a8.jpg","f82a774c6b563fd28d44c162ed7fd0c7"],["/posts/44907/image/14-fdef5644.jpg","2ecb8ef73fc089f2f1f8956416760732"],["/posts/44907/image/18-d0f94f24.jpg","7e5ef5a64031e0002ce35e77c3ba5e6f"],["/posts/44907/image/2-149cec78.jpg","9c81d9f2621444980db7b3a7386eb643"],["/posts/44907/image/3-23aad21f.jpg","b120407c48e50ab85fb286897e8245a6"],["/posts/44907/image/4-58a913f2.jpg","fabc94fdd9a07fbd437191690d2af4be"],["/posts/44907/image/5-fbf4a29d.jpg","060c6496a4835404ea342e7f1266b7e1"],["/posts/44907/image/7-3bd27b88.jpg","947a2172ae44e05331a586dc9e47ac9a"],["/posts/44907/image/90-d48f125c.jpg","29e355a379ac7b786369c7277b4e2d7e"],["/posts/44907/image/99-d71cdd95.jpg","c645204a4bb557011f6af198fc1d5253"],["/posts/44907/index.html","4b28a4b0821c6d57a07410594e5a979c"],["/posts/45990/index.html","e612a6db55bf5be5e3abe002aa3ab98a"],["/posts/45990/露营新体验01.png","4eb33d336895377d32b310aef9e4827d"],["/posts/45990/露营新体验02.jpg","4aa5c850c6b8dbf80fc2a88b358b1d43"],["/posts/45990/露营新体验03.jpg","b5c763d20565551143c6b03fcf5b0400"],["/posts/45990/露营新体验04.jpg","0abfabf858ffff16e7797958feb77ade"],["/posts/45990/露营新体验05.jpg","0695ada07970c307d247e977149f75da"],["/posts/45990/露营新体验06.jpg","060f4ea0c06a349f76ddbf7c879fb0a6"],["/posts/45990/露营新体验07.jpg","e678afffa61741a2e0e4b8c4df324373"],["/posts/45990/露营新体验08.jpg","8ee1e06d18b81be9f2db9dd1146eeaa3"],["/posts/46045/WX20220814-222808.png","44213917cd2cbf1894a2e5bafbccdc5c"],["/posts/46045/index.html","1f45a54fe13e6010c2c17ac1708b410c"],["/posts/4633/image/01-cb7a9fd5.jpg","b086805e7c5e017b347a78dba7754a4f"],["/posts/4633/image/02-25db5a83.jpg","158aea75f27512f25ad9ba502db57c0e"],["/posts/4633/image/03-833d0a48.jpg","11cf27d5cebdc6202310a745bd283208"],["/posts/4633/image/04-16a7870e.jpg","e12c81dfebb253c951d7d8d5271a641b"],["/posts/4633/image/05-8ee015d5.jpg","b1122ab0096930c7b621a1aa4ceb646e"],["/posts/4633/image/06-b474540f.jpg","8547356303f81ab0f9d2319bef8c3893"],["/posts/4633/image/07-f63bc866.jpg","509968f1b44b804b70b9304c6981ddba"],["/posts/4633/image/09-6b237511.jpg","8dc79dd9d7a69f5336825febfd71d8b6"],["/posts/4633/image/10-1b556673.jpg","fd272fd58ffc7eb98bc55650334a673b"],["/posts/4633/image/11-e37e3798.jpg","34836c94d17f56503e545578d5f565b2"],["/posts/4633/image/12-61d62c31.jpg","5ed05bf374bdb4f30ccdfce361d49266"],["/posts/4633/image/15-c9aa66ee.jpg","d1a4d52f70cb2f0db87cfe5c21bb3a82"],["/posts/4633/image/16-69083a1a.jpg","e46c95703eca95185317f507bf8da7d9"],["/posts/4633/image/17-0bc37b46.jpg","e4bfaf1908619f2ac148e2523a5480ae"],["/posts/4633/image/18-47a9acaf.jpg","ff66c00dfb57122ce1f39052b40b2104"],["/posts/4633/image/19-8c36cb41.jpg","a191c5d29056de8070bf53e00611b9e2"],["/posts/4633/image/20-a0dc08b6.jpg","149f0e7913a605dd7b62b53b636a235a"],["/posts/4633/image/21-58f0c8b2.jpg","c491a50304017143ce5adf480662c0d1"],["/posts/4633/image/22-53b0b3ff.jpg","70a68db381dc4f3028227b16e684e587"],["/posts/4633/image/24-2d4f8d4e.jpg","67ffa3ec5d772aee6063b2291e7d53b1"],["/posts/4633/image/25-9914a7c4.jpg","719d61ab2fa5de7218fc05ad2de8d664"],["/posts/4633/image/26-9dffdb76.jpg","ef27115a5add8f5ce273880a1ffd2d8f"],["/posts/4633/image/27-df73c3f3.jpg","a7f7552f3beb506a61ecff768b0662e8"],["/posts/4633/image/28-677b7180.jpg","5bfba8de19fca957e3d5c38caf8dbab1"],["/posts/4633/image/29-2b282816.jpg","829fb4b78b0222024b37d6926f6c3197"],["/posts/4633/image/30-4d5813b6.jpg","704351def2ff9422d468173b2d8ef885"],["/posts/4633/image/31-fa20280b.jpg","2c6bd4c0f64a493c83b8ddcfb30824ef"],["/posts/4633/image/33-3557d72a.jpg","d70ccc5bd63322a0dc146c786a73fc7c"],["/posts/4633/index.html","226f8fd0a7edc445a5e2ef892d1702bf"],["/posts/47811/image/0-20200301214824489.png","ec6843778f7c878f6a1707e0105d2360"],["/posts/47811/image/0-20200301214824520.png","aa024ba378bbdeec7b34c8fd6164a00c"],["/posts/47811/image/0.png","397987e8c60702fbad289e10172a1f39"],["/posts/47811/index.html","3ea605f29fd96bcf6eccc3b6dc9b27af"],["/posts/49729/image/0-4c9d6e7c.jpg","66a17d1d8c0594af2934d6b7049ad66a"],["/posts/49729/image/1-0fdae5e3.jpg","1e3cac3e6301e6145ef16d7f8321b3c3"],["/posts/49729/image/11-7c982654.jpg","65f8801240a0c3d407c3f0d4815b334c"],["/posts/49729/image/112-90b964a7.jpg","5cb74e111a5a700ad00e6e098e9935e1"],["/posts/49729/image/2-03be334b.jpg","858593ad3ad802959df83ff79acefb9a"],["/posts/49729/image/22-70c89d79.jpg","5e2eaeb4241268d45e7e61faee4ba025"],["/posts/49729/image/3-36ad2e84.jpg","3752f3060b0b9a9402d678914f0b5173"],["/posts/49729/image/33-2a801981.jpg","c2ed8e853ebd8407185c79dac99668cb"],["/posts/49729/image/8-30a2da41.jpg","a9ae8b0e69a02b34061e3d1e87694424"],["/posts/49729/image/88-8ef32fd9.jpg","f0c0d386f699fb5c72707cd535fde1df"],["/posts/49729/image/9-67aa5b4a.jpg","24215f2e5df311b18d72b87c82830f0d"],["/posts/49729/index.html","762b3104d6ff84f0fedd39aa3ee39a7f"],["/posts/4993/image/image-20210210173524708.png","37c1d93d22659eeb78e126e743cdfc18"],["/posts/4993/index.html","1cdd53eb40ab25765acff3aa034b94c1"],["/posts/51369/index.html","2e31c1dcd0a4fcaff239e1b5851b61aa"],["/posts/51468/index.html","bf7c4a40be1e37c94fc1957781de8820"],["/posts/51468/国庆珠海之旅01.jpg","907a0ed973df5e88b17fb921e9f7a35c"],["/posts/51468/国庆珠海之旅02.jpg","84177303afa07ef24dcb3f62cad77121"],["/posts/51468/国庆珠海之旅03.jpg","6387d526e8199ef023a1c980825304c0"],["/posts/51468/国庆珠海之旅04.jpg","ba23cf7f79170198e3c6539373ab9381"],["/posts/51468/国庆珠海之旅05.jpg","092c696e15099c8be009155f3f5c96cb"],["/posts/51468/国庆珠海之旅06.jpg","837e001d8788dad21eb171015e608181"],["/posts/51468/国庆珠海之旅07.jpg","0a094989c098b47724f1057bc30d44e2"],["/posts/51468/国庆珠海之旅08.jpg","b6c5707ff0cbdf6f6af729a73f22fd3a"],["/posts/51468/国庆珠海之旅09.jpg","0ddec82da1b1c19e87830ad144a4af84"],["/posts/51468/国庆珠海之旅10.jpg","2cf02cd3485fdb0e5b3ff55a4e0e2273"],["/posts/51468/国庆珠海之旅11.jpg","ca57950095ecab0d1683c3681bf1dbfb"],["/posts/51468/国庆珠海之旅12.jpg","dd74e087c7d4b7e0e5023b10a30e06d5"],["/posts/51468/国庆珠海之旅13.jpg","0d339d6ddaa6d764ee0e4a1d70b1949c"],["/posts/51468/国庆珠海之旅14.jpg","829a8c348ccd5bf773c0d7165378cd82"],["/posts/51468/国庆珠海之旅15.jpg","7f4251a104019124de8983f66b82c935"],["/posts/51468/国庆珠海之旅16.jpg","49615638ce22d046a61182e0042b51c9"],["/posts/51468/国庆珠海之旅17.jpg","ef06d02b4fa8c9292b9af48fe95e948d"],["/posts/51618/image/00-1d06cb1b.jpg","57afa03bad0789c884e583ae424242f0"],["/posts/51618/image/1-1165c257.jpg","366859b1191e01f3ef6b3601286ac2d1"],["/posts/51618/image/11-251926db.jpg","9ae4eab74b88ef08adc3aea6b3ebeedd"],["/posts/51618/image/112-cc43a1a1.jpg","09f04604b2bd917ee56cfb7a9680d1ee"],["/posts/51618/image/1234-b8341217.jpg","db1e0350faec216b2089b67466405a1d"],["/posts/51618/image/2-89f5292f.jpg","ab6ed9a238072f9b074790845e222e8d"],["/posts/51618/image/213-a58d7afe.jpg","7e650c5a68e9d35dd607269dea26fbe7"],["/posts/51618/image/223-8668c555.jpg","6752d9509a5a0cada416228845c13954"],["/posts/51618/image/3-3c10ee1d.jpg","b1df403dc050297b71cda95583f1d70e"],["/posts/51618/image/321-1ca93611.jpg","251abc63485bb26aafe5b5a91938888b"],["/posts/51618/image/5-1b4a00bc.jpg","e1c3aa0977e6b96123d66fe2cbd5dba1"],["/posts/51618/image/54-cf8af615.jpg","7975ae86a7870f46747ffb70d8c705ac"],["/posts/51618/image/6-7b047070.jpg","683f2030da9a958db689d51f6ee225d4"],["/posts/51618/image/7-7b86d918.jpg","a189f961b52bf6fccdf287e273794448"],["/posts/51618/image/8-22b12969.jpg","78ea0c8c74c9ee3e5c8828f558f1b581"],["/posts/51618/index.html","8c0a169dfae7983d70227e523facf4cb"],["/posts/52711/index.html","f045a016658f9bb73d78bdd6c7fdb97e"],["/posts/5285/image/image-20200920222035121.png","a2e30c03495d5e3a001828f45b3206c3"],["/posts/5285/index.html","22ca9d358b235d3175a4512299fa9bae"],["/posts/5295/index.html","9116eb91428ee9eab46958f0fbc002d0"],["/posts/53014/index.html","57cf2f5d7838fd4ec5654a4b3b266401"],["/posts/55134/image/1-1373215.png","ab6d6e5f065e904ac7d6854e39bdad17"],["/posts/55134/image/1-1373948.png","1cd36cf9dceb7321ccdc9d8dbd74759e"],["/posts/55134/image/1-1374544.png","a50cbd4373de3333e4efce3666beeebf"],["/posts/55134/image/1-1374929.png","e7cfe2fcbe09ac0585de5f66ec781336"],["/posts/55134/image/1.png","6a2b2960d129cc0e8a959185b96ce1e2"],["/posts/55134/image/2-1374940.png","5aef49a9daac7a28d9a62a879020d030"],["/posts/55134/image/2.png","62741516845c98e27c5b31481c97b5af"],["/posts/55134/image/3.png","c9401a0cc9a8a539baa3121b284c56fb"],["/posts/55134/image/screenshot-20210911-224712.png","79db3aa98e9ccb573463b81643fb32dc"],["/posts/55134/image/screenshot-20210911-225422.png","f10b75699389800ecb93493a455d0f16"],["/posts/55134/index.html","73fc0ad547aca761e967db3786d6ecaf"],["/posts/55550/index.html","483068deba8f4cb3b812c480536676ad"],["/posts/55649/index.html","8d61827242fc0a4325bc1f30d76e64fe"],["/posts/55649/音乐剧很美妙01.jpg","62ce80d77b812c0e6b67eb6b502d436d"],["/posts/55649/音乐剧很美妙02.jpg","494e894d88e89dcc58aeb23100befcb5"],["/posts/55649/音乐剧很美妙03.jpg","a6578908a8965a182373b1144a89d44f"],["/posts/55649/音乐剧很美妙04.jpg","1a9572045392f3f4717ccc3fc42eb7fa"],["/posts/55649/音乐剧很美妙05-3128582.jpg","76115cf794bc34f379919ae9915b6218"],["/posts/55649/音乐剧很美妙05.jpg","76115cf794bc34f379919ae9915b6218"],["/posts/55649/音乐剧很美妙06.jpg","a0f4364c39a5a6c62dc53d3e5ed1a768"],["/posts/55649/音乐剧很美妙07.jpg","1dc98f5626a8faee1fc211518c8427b2"],["/posts/55649/音乐剧很美妙08.jpg","40d7f22309c61ba069c9cc136898621c"],["/posts/55649/音乐剧很美妙09.jpg","2c7c303b64914b0a9b912e93fcd32bf4"],["/posts/55649/音乐剧很美妙10.jpg","eb2cfd8bddc376cec19068ec7cc247d1"],["/posts/55649/音乐剧很美妙11.jpg","dd89675789bad607a9c06bdf97f67446"],["/posts/55649/音乐剧很美妙12.jpg","be8205704d06e14311d897dfe2502c68"],["/posts/56047/image/image-20200920190429014.png","72b35f48a208fc847a6b1d0fcaf1e92e"],["/posts/56047/image/image-20200920191847102.png","6912507cf182ebb962ef809af6e63bd0"],["/posts/56047/image/image-20200920194238412.png","86e54b508e6df841bbbcc7a481a86ca1"],["/posts/56047/image/image-20200920194725899.png","abfcc496ef586ae2787535fb46511542"],["/posts/56047/image/image-20200920194818018.png","f5e8d34765d3e024af6316906d77e85f"],["/posts/56047/image/image-20200920194848168.png","68acb0b38b0aa0d3732fe450f5c5f30c"],["/posts/56047/image/image-20200920195143758.png","b26dbbab25e9debd24d0446d0e9af5c7"],["/posts/56047/image/image-20200920195225059.png","2d622babf2d1012877100b2d5b501695"],["/posts/56047/image/image-20200920195233316.png","2d622babf2d1012877100b2d5b501695"],["/posts/56047/image/image-20200920195531713.png","a4e371a5c746f562550525fd15fe87ab"],["/posts/56047/index.html","b6dda6c30283b809eadff1a74fbbc5ce"],["/posts/5644/image/image-20200920225109629.png","23dbf93955e7d03e9ce1f2ce8cd5595d"],["/posts/5644/index.html","ff3fafa59d8d64ba505765da2d12f8f3"],["/posts/56570/index.html","d327a2fb06a47731014567832aeb271c"],["/posts/56588/image/20190115.jpg","20b38232d256072a4d468a77acb3fc6e"],["/posts/56588/index.html","cded385c1714a2b2dbcf03e1b255de09"],["/posts/57095/index.html","760d90de27120ada405080c77e2a46f5"],["/posts/57631/image/20181231.jpg","df7a543bee0a6ae812c49def48ceaa5a"],["/posts/57631/index.html","387cf9af187f5804e9af341440e28815"],["/posts/59601/image/image-20210429232229135.png","5e4a8a1a25145442ff135fa448aca65a"],["/posts/59601/index.html","99346e0f6459b455fc14d49375be6742"],["/posts/59830/image/1.png","c164caac0f3f9665096528466e065813"],["/posts/59830/image/2.png","9e2f768faaccca8d81e30dcb4449456c"],["/posts/59830/index.html","c66ce8174d252370f67210c353746806"],["/posts/60227/index.html","18629b01f5efde92e692224350319f3e"],["/posts/60384/image/image-20200906231052334.png","8628eb0358ed9116bd9a1ef84e639049"],["/posts/60384/image/image-20200906232233708.png","184a6e6574931ce93e4818451c06f3f0"],["/posts/60384/image/image-20200906232432373.png","15d85c8d35bffe77743e661f7e7b2557"],["/posts/60384/image/image-20200906232543363.png","dce96f8a77ef6b58dfb25f13e59a7f2a"],["/posts/60384/index.html","68482646e487abfa4ab6a04d0843b23e"],["/posts/60970/image/IMG_20200314_144751.jpg","51ffb3934f7fe82163f5719145641cbc"],["/posts/60970/image/image-20200627175825802.png","6d4fb46f2db226466634863649c9b56c"],["/posts/60970/image/image-20200627181405622.png","7eb698a1362791355daf732268539ed8"],["/posts/60970/image/mmexport1584172171071.jpg","7fa1fa699340849f3afea9fef65bf538"],["/posts/60970/image/mmexport1584177084229.jpg","87f3c09f3c7e9848ac845743651a8cb9"],["/posts/60970/index.html","14e577b1756c580ceffe5bc800b114ba"],["/posts/61167/image/1575651117499.png","746f8424cbaf779f0dee88c857507f65"],["/posts/61167/image/1575651135109.png","3d8c29ae2b9b4c42784655e7556d5171"],["/posts/61167/image/1575651150846.png","cbcf17ae0b7bacf279f1b557f866e07a"],["/posts/61167/image/1575651164367.png","c534a7a9fe5e63d840c872098bf12e61"],["/posts/61167/image/1575651177976.png","a863c94fac90ea76497665df38ab93b0"],["/posts/61167/image/1575651192178.png","a33a32dca18123b98161bcdd49d412db"],["/posts/61167/image/1575651208252.png","a384ccf1b0372715536a2e65270f8e60"],["/posts/61167/image/1575651225157.png","bd8f4a7179ff432af7dcc0ecf36b8e3a"],["/posts/61167/image/1575651239326.png","65b55eb80aa3f3419ddcb8228dcd1a82"],["/posts/61167/image/1575651254769.png","2dae7d43bf82f965ee153b9bf0297cd4"],["/posts/61167/image/favicon.jpg","c918b9d9bb699071d52e219b029ed874"],["/posts/61167/index.html","6adfe9948e2b7eb5c85fc01ad8050451"],["/posts/62350/image/image-20200209171819914.png","ac3c00787bf226c18360ed20dedfc08f"],["/posts/62350/image/image-20200209172113560.png","dbb6fd650d23bd1edda4870239bd43a8"],["/posts/62350/image/image-20200209172535834.png","c57f1112ecf397db5ee985e9c031364a"],["/posts/62350/image/image-20200209174037280.png","efbcd49f8615923b34d77c65a4cd9ddc"],["/posts/62350/image/image-20200209174305852.png","b0bef92487fc9b644057ee070a59fd71"],["/posts/62350/image/image-20200209174746426.png","7405ca08b838e8a5856e293c4dd4b5e3"],["/posts/62350/index.html","e1cb6a34bb01e9350b95db2b5f7bf828"],["/posts/62891/index.html","66c13246e5bcb696329f7ad93fc5ed66"],["/posts/6606/index.html","a2ea100d29f6f434e3b72da7398ac7ab"],["/posts/6889/index.html","47745b255fe351cce3eb4aee3f48a588"],["/posts/7376/image/image-20200907232315224.png","56e986ba47f3acb6bcad5ea68b39fd06"],["/posts/7376/image/image-20200907233321242.png","eff28edebf1e3c346059b72fe5f78f1a"],["/posts/7376/image/image-20200907235343778.png","4ec20429a9f6722bd17325bc191a56d6"],["/posts/7376/index.html","332d95977f2eac0dbee45f8d8c9b4172"],["/posts/7511/image/11-0f14b251.jpg","7a48ac942d93c6cdc017901523911f1c"],["/posts/7511/image/111-93e55faf.jpg","c7dfd0991eb6d1740a05335bbe64bbbb"],["/posts/7511/image/112-a9636c7f.jpg","5ccb8bea8a24e0a1ba0385a1f124eb1f"],["/posts/7511/image/123-36474d5b.jpg","ced026b4e02cda1c3d00c1ae8e820c26"],["/posts/7511/image/232-fd67e718.jpg","8e7df1e175817abca468e799ddc05de9"],["/posts/7511/image/321-446541fa.jpg","3bfbd6e7debf7d5e3b434d0218dbdf0a"],["/posts/7511/image/33-4f3ffb2e.jpg","0ff5de724687c45e98414fac583e4f89"],["/posts/7511/image/333-ab9bdeb6.jpg","11d2a96ef978bab3abce7fdadd036905"],["/posts/7511/image/432-99cf3d13.jpg","87199038347e3e0a7b700358fdaea6a4"],["/posts/7511/index.html","fee329ca6c2f6cf56c2434716a5aa809"],["/posts/7931/index.html","bde42886542ab8bfafef019855407b7c"],["/posts/8133/index.html","a0d4b44f25cbb926c8fa0ea7de835628"],["/posts/9831/index.html","99574cc949fb599fe93405f496409732"],["/project/index.html","f8bf9bf1abbec9a2794b82545d9c0406"],["/sw-register.js","67c01e161983006752dbeeb27c64b32b"],["/tags/Community-service/index.html","76f5a9d9f688721605af1d6d82a6acbc"],["/tags/Engineer-Management/index.html","c62e1a8cf47288e3bb2175231d9f6493"],["/tags/FESTIVAL/index.html","0310bf7aece123663fca195bd9dcb8cf"],["/tags/High-school-reunion/index.html","91349966ea2657987582b22d61386e5a"],["/tags/Intern/index.html","72698fa66bef6bf665da8a9203a4e17b"],["/tags/Personal-Letter/index.html","e5be3e40f37a2ce3f88a777fb047c6b1"],["/tags/Public-Events/index.html","e3d340f52c2977f57d5c26f6b642395a"],["/tags/Spring-Festival/index.html","7b54cd37b03a28a1ff8fc93b2ec900e7"],["/tags/Technology-Product/index.html","75a5a6abe69a4b43ceea94023064564f"],["/tags/book/index.html","f0b63c676e3905e98e18d3f555630743"],["/tags/campus/index.html","5df37860fffed9d5032ad53c6f82c401"],["/tags/campus/page/2/index.html","e9979c964c2471a72d5aac72f687bec8"],["/tags/company/index.html","c83e7d59ef3c62d8b0f3f196833a32c1"],["/tags/competition/index.html","5f6458ce13d1de009b382d9048f0be98"],["/tags/computer/index.html","2daeb5bec559131e1b5c50c5dc058df3"],["/tags/digital-product/index.html","27b5b2ab0b1c44cd2365cfa4e0923845"],["/tags/foods/index.html","770da3a237d1f77076abee080496e6b5"],["/tags/game/index.html","7b048757f75dd584ab2c094ef289e1dc"],["/tags/graduation/index.html","451ea34b13ad2788d0e84eadcf38b734"],["/tags/happy/index.html","fb8b7391936db356f8cd31e42a3737fa"],["/tags/hello-world/index.html","60f87db694a59eb93d4ef49b9eb0f937"],["/tags/holiday-activities/index.html","2dc3630325a4ca0ff1d68b65205c4615"],["/tags/life/index.html","5e599f732107b68c64a97f073618cdc9"],["/tags/manage-finances/index.html","ce090c67b61a034f5bd86c1ddd0532e2"],["/tags/movie/index.html","6927d357e41a5f00e6c9323867046b8f"],["/tags/movies/index.html","ff0a90c5ad4ab2006021d83e0547b922"],["/tags/music/index.html","0b58ac511717be5fe290ad7d498d3b58"],["/tags/network-security/index.html","e6df19cc11c82fb8d78f3316d568f346"],["/tags/reunion/index.html","9d3fa58fe0c021e95bed1f4d90444bab"],["/tags/social-activity/index.html","03ed84f73800584d646047e83be2c31e"],["/tags/social-activity/page/2/index.html","76197e98a7e52c679022dc780445955d"],["/tags/src/index.html","d4a733bd6fa86e79130b0b3a072e5a63"],["/tags/technology/index.html","c102c47874aa38021a621968edac645d"],["/tags/thoughts/index.html","703245f9c14ee59a1682065626a20dda"],["/tags/value-ideas/index.html","aaa5ac3fd151875640a46d6f872b3f50"],["/tags/work-place/index.html","a885e566885916d939a2fcd9f099afa9"]];
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
