/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0710bbcd92a436da4d5bc14e29b15060"],["/about/index.html","d3a4d808c3a68ca0ccd73524159715b0"],["/archives/2015/03/index.html","01226e797020f4b4757e1356d6b1ccf2"],["/archives/2015/05/index.html","ce5ba60c079fce2fea61bea61f3a3a8f"],["/archives/2015/index.html","fe22f00b7e87ce7a0a535232db66a115"],["/archives/2018/01/index.html","02b114e6fd3b4f7a27ca868df23a8560"],["/archives/2018/04/index.html","922b61ffae607949895bc68cd6d859b2"],["/archives/2018/05/index.html","be76e44ca3b0f4e56e5378839cf5a2b2"],["/archives/2018/06/index.html","8602370bec32e1e2217f7b1eb0791b33"],["/archives/2018/07/index.html","ddabebe7096d7cbbaf5c458c904052dd"],["/archives/2018/08/index.html","d685a84aef040ef0de572b5081a254af"],["/archives/2018/11/index.html","a662801c680350c75e1d1346d495774d"],["/archives/2018/index.html","9398eec26dc3ee0b8f2febdbd1b740fb"],["/archives/2018/page/2/index.html","894d0dd82397eeb29cbde0e3d617d9cf"],["/archives/2019/01/index.html","61d41715531e0c976107f259bb125484"],["/archives/2019/02/index.html","bcff46934be7f2931a44e3fb98aff457"],["/archives/2019/04/index.html","02e37d5bfe4d96df1556418039be3ae5"],["/archives/2019/05/index.html","f6c6037684575350b08d277581f22056"],["/archives/2019/06/index.html","62e26047d48fc028c6529ad072acec26"],["/archives/2019/08/index.html","2ae4ff4f0a29a3e4ab82d9e012730ef0"],["/archives/2019/10/index.html","af5661e710c6a2faedbd608a0b0310c2"],["/archives/2019/12/index.html","af0df02556f8f83cedfaaf59b41f1ba8"],["/archives/2019/index.html","d48bf45471ac5c62a0accd7b589b986a"],["/archives/2020/01/index.html","d1edea3b2fbeb85465c26f004360af4a"],["/archives/2020/02/index.html","8f255e6241efb597a0985029816bd0a3"],["/archives/2020/03/index.html","0f76b412660f7c99d1045dd0d125e5be"],["/archives/2020/05/index.html","f158a2f69902d41b28f8faa7101e5e52"],["/archives/2020/06/index.html","5d903c5e5eac68fbd26f0d94eff08325"],["/archives/2020/07/index.html","9ad3b91727f38ebfda52cc23d698acac"],["/archives/2020/08/index.html","1c84f49df2f8651681fbbe0e8038be3f"],["/archives/2020/09/index.html","58b61faa1cd6e5eb9a1ca6a6d30d9ef2"],["/archives/2020/10/index.html","02f4c23a28b260e66c057c7da8f5f10c"],["/archives/2020/index.html","a992638734224bb3d96254775bf14001"],["/archives/2020/page/2/index.html","26d615c05ff60501be0ae63bc8c140db"],["/archives/2021/01/index.html","9ac080241aeb9c8d88326307535fce6d"],["/archives/2021/02/index.html","086cf8679186fc8e936bf3ca988493dc"],["/archives/2021/03/index.html","6af1229a868cda41fca73299b33013e5"],["/archives/2021/04/index.html","748567a6e5023e12fc2f09e4510e7e76"],["/archives/2021/05/index.html","87e608101037c455cb7f2f3ba53ffe70"],["/archives/2021/06/index.html","279cb16928b25e1af29e721712de8f9d"],["/archives/2021/07/index.html","67045f3f4fa5b544c86705535d7fe5d0"],["/archives/2021/08/index.html","861777668e71d0209e70575f81c020dc"],["/archives/2021/09/index.html","60a57ad1ad8f2862866ccdaf22f95dbc"],["/archives/2021/10/index.html","3562422af58822c1a367e604566aeb0c"],["/archives/2021/11/index.html","8e001829b1bd1bb6b3953b5b5f557bc0"],["/archives/2021/index.html","d4150406e2615872456c0c384fb8eb7c"],["/archives/2021/page/2/index.html","fc121d8f164fd58942d284f30910c720"],["/archives/2022/02/index.html","aef67ae15d51628e266bdb04666f13e8"],["/archives/2022/03/index.html","c6e191ae8219fe7443a9b7b90e22ed71"],["/archives/2022/05/index.html","6e989a36b83c974d814731458a7cdf17"],["/archives/2022/08/index.html","2f640269a58f0b12310281ebed869b6e"],["/archives/2022/10/index.html","7ca86ddbf18046397b241689ad412775"],["/archives/2022/11/index.html","95cc69159b06e2dd5d504308443176a0"],["/archives/2022/12/index.html","026a671b76a9101f01010a78b9418b09"],["/archives/2022/index.html","fb373d5341e78820e18ad873eb14d442"],["/archives/2023/01/index.html","5813918b716fc8a2329c7bee28c3bf85"],["/archives/2023/02/index.html","191e1108d3ccc8db468accb9f8117727"],["/archives/2023/03/index.html","a46b0d2043538ce64f50ed6365ef15c9"],["/archives/2023/04/index.html","832ed9aa4c46734187f10d467470af2b"],["/archives/2023/05/index.html","f4431f3adcbb54b5d8100a5b66a33060"],["/archives/2023/06/index.html","4b10b7e3c58c4ed5178bc76f57353fc2"],["/archives/2023/08/index.html","ca92d9b4e1438bd5516513d639b60dd7"],["/archives/2023/index.html","42134ea491dafddc8a50a61b17213fbc"],["/archives/2024/02/index.html","039eb497cee104d60da7538a8266430e"],["/archives/2024/11/index.html","6c67ed9ab73b71ac430d45c7cdd1cebe"],["/archives/2024/index.html","647c3c9cb99144436ebc88167cc765bf"],["/archives/index.html","a6fb0efd7992877fb5200c63d582e898"],["/archives/page/2/index.html","4f545be8e5540cc7dc191874b2c20f59"],["/archives/page/3/index.html","98be36fb222956517208ef8e205222ad"],["/archives/page/4/index.html","3cd7e34885926a8c96093009734d190c"],["/archives/page/5/index.html","96746c9d8871dd22440b80a35591923f"],["/archives/page/6/index.html","94e7fbc5a11cecb0d2b8f5dc19f9eb7f"],["/archives/page/7/index.html","efe4a98eb323b8fd4a88b91bd4b16827"],["/archives/page/8/index.html","aeea17283ac6362f56d32898c8e204b8"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/categories/ACTIVITY/index.html","f21496287e4cf39a95e368acf5d69295"],["/categories/ACTIVITY/page/2/index.html","fb49a667b5608161fe1aabb1dc4118e0"],["/categories/BOOK-NOTES/index.html","63e6d173296236f963a6607a2f82274b"],["/categories/CAMPUS/index.html","09b9dbdd679b8c64b262c445f67b2523"],["/categories/CAMPUS/page/2/index.html","bd0447585c3a55430079d209450d0b8a"],["/categories/DIGITAL-PRODUCT/index.html","b7f01db80288bd8249ac2feef17d3a54"],["/categories/FINANCES/index.html","3510c39e8f4b0945cbce583779bd8261"],["/categories/FOODS/index.html","d36f50ef76c67c122aa41b5ae0ff8907"],["/categories/GAME/index.html","277da17c7420ce6df69659b5ce6f2047"],["/categories/INIT/index.html","65c35c5821a9d36f6734b52f9d4869f8"],["/categories/MOVIES/index.html","894dd398581f16c957577415f53d7217"],["/categories/MUSIC/index.html","9fa09faf84265ecf450bf2b6cbcc623b"],["/categories/PEARL-BOX/index.html","b1c6bf375e4ccabdae0c446823458fac"],["/categories/REUNION/index.html","e88fdcd3ad8ef937df22e3d19820d34a"],["/categories/SPRING-FESTIVAL/index.html","476860ec2c1e95ecf109667c3644f16f"],["/categories/TECHNOLOGY/index.html","0f9ddba2c9852d3de02ceaf0fd920adc"],["/categories/THOUGHTS/index.html","dd9979f466083592b5e047d9046e1758"],["/categories/VEDIO/index.html","51c3774b63c8acf6f943438b81770860"],["/categories/WORKPLACE/index.html","e8ac3fe2e476b254bf935571783b4a5b"],["/categories/hello-world/index.html","89b4929e68612e5ba52e3df9f8f6a5d2"],["/css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/css/donate.css","a68e4a34e814ce3334186286f4655440"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/style.css","7ba514c97d7616d09e2ea935d6fe6ec4"],["/donate/index.html","a61358980ce8e4c7e4e523c5d70fe5a4"],["/favicon.ico","82e181c24cdcb79f7457d97e6dd50c1c"],["/history/index.html","a13b572f59405256f6d3c05eaa30086e"],["/img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/index.html","49f619091522e20c664668ca93515f54"],["/js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/js/donate.js","c5119c5bdd5049d805e03af774a47472"],["/js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/toc.js","aa681b733f400634fc116211ce70248d"],["/js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","4274e9303e99981c7ab111228e74d362"],["/page/2/index.html","e7409a8a651c5ec7569e539ac6a76355"],["/page/3/index.html","fb59d42001167b62997731294ff35a1e"],["/page/4/index.html","cd0b7cb9ae3bdb1b55f915f1a3dd5b4c"],["/page/5/index.html","728051983a813c78b805107bc269ff98"],["/page/6/index.html","e33110725815497dbc5d58c8f979da04"],["/page/7/index.html","3a11ee5bfc6cee984b7816da7e198d12"],["/page/8/index.html","8995ae516981ba1da25d8c66e5151582"],["/page/9/index.html","da53b9d21bfa32618309300bddc266eb"],["/posts/10399/image/5.png","8fe7c7cded414873a277b237e3f9b04d"],["/posts/10399/image/6.png","8b0e0ab7ac9b3153f10fe7b44d36fd94"],["/posts/10399/image/image-20211007121219034.png","dfcbd6731f776cf73d7084fdb6506be5"],["/posts/10399/image/image-20211007121428821.png","4c4ee393d11ef6466cd7e71f01e4a3ec"],["/posts/10399/index.html","aa3a4357ee01dd5f2cfcdea4c0b65807"],["/posts/11517/index.html","c77645a5bb442307f6bcac1376969927"],["/posts/11517/交通事故处理01.png","01b1aee6a001b0c26695fc64e3d34b03"],["/posts/11517/交通事故处理02.png","98e7188cef75cecfcb64eb8e92fbe371"],["/posts/11517/交通事故流程03.jpg","fba8f7835bcd78342cf7fe96949bcd38"],["/posts/12801/index.html","3079a2f367a0f6fc4144100258890328"],["/posts/14062/image/image-20200209211817454.png","1c6bd4a2da69e3fbf62e6e1f6c294fd0"],["/posts/14062/image/image-20200308182926949.png","d2f5d8a678d6aeddd4399dd0ebadef7e"],["/posts/14062/image/image-20200308185322824.png","8b180754a2c731618a2003504fa1f5d7"],["/posts/14062/image/image-20200308191954342.png","93786a7fc17a463b81a5e703a45215d7"],["/posts/14062/image/image-20200308194044483.png","1117050eced5491b95a0ad86b6a1561b"],["/posts/14062/image/image-20200308194542633.png","65fc3dbad7d0eed60ff4dc3ab74820f8"],["/posts/14062/image/image-20200625175346121.png","bcc335362f1abaa5eb02380922b9dbc7"],["/posts/14062/index.html","e96b906672e3da5e79dfc4b29469e1d0"],["/posts/15059/image/image-20200209223336765.png","a58bd67fbab4531b377ff99c8898c376"],["/posts/15059/image/image-20200209223657842.png","33576193ae78ad13a3f7a60e44c95725"],["/posts/15059/image/image-20200209223906448.png","b15343097e915bd6c8d87b152c6d6170"],["/posts/15059/image/image-20200209224704457.png","bb847d306111503de6ad8310163d1c15"],["/posts/15059/image/image-20200209224841814.png","a5cbc4a3a1e371668f2de59d768bb311"],["/posts/15059/image/image-20200209225016194.png","d5b13dbade91cb1bda7d306492866a54"],["/posts/15059/index.html","8cd539220acfd3bd109d2a1679898400"],["/posts/15260/index.html","161c803fcf14bcfe90bd2302eab0b78c"],["/posts/15260/原野话剧01.jpg","42e50ba04d44552cde48a95c4c7ed12e"],["/posts/15260/原野话剧02.jpg","a8fcec8b7f67e2eac3b2e828c1338a5e"],["/posts/16107/index.html","fc66b2e67c1ff87fd60dd1a5db5c8c58"],["/posts/16145/image/00-a67caa33.jpg","037ff3eb0f564b7946fdd5724b69dc03"],["/posts/16145/image/01-d5529d8e.jpg","73d37a95131faeadb14a79cd2c096fee"],["/posts/16145/image/02-eff42926.jpg","0980a5d6ee21ae67c02c0fbc7fcb6e23"],["/posts/16145/image/03-06df1e16.jpg","7ecafb03622c9350bd1dfb20c696d474"],["/posts/16145/image/04-70de02ab.jpg","d488c831fd9bbe1cb698bb961bed02dc"],["/posts/16145/image/06-957454d5.jpg","26bd4af134a1f42eb2da4081016a5a86"],["/posts/16145/image/213-9e118743.jpg","a36278dcd601040d73c76f069d6806a6"],["/posts/16145/image/22-b3a2d30a.jpg","2166d2c9be077825b3113dd5e8d0b591"],["/posts/16145/image/45-377ce8e5.jpg","9249e2b993977fc22f3cfc2612badd5f"],["/posts/16145/image/55-4dd49fef.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/image/55-cdbaa948.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/index.html","66d7de54c1ef056b080aec7c9770b714"],["/posts/16365/image/image-20200207202506472.png","a2576244287ba37f8a220df0ccaeb0fd"],["/posts/16365/image/image-20200207202521917.png","1e2d5f5f22de403e6dae2b8b57708e72"],["/posts/16365/image/image-20200207202904364.png","98ff7e329ee69977d7df89590b4acc5f"],["/posts/16365/index.html","5b122a6c5565201a34156ab50f927edc"],["/posts/18068/index.html","aab2e121b606f62ff5fcc2aee914920a"],["/posts/18696/image/image-20200209162308336.png","dddb0c347fa59c26f0c3c9186fe0d6af"],["/posts/18696/image/image-20200209163749921.png","2be42038776c5137f1693e6ca505fe46"],["/posts/18696/image/image-20200209163915066.png","bafabba5e5b4c553c5b2bfce69e31ed9"],["/posts/18696/image/image-20200209164523745.png","5a8ae6914c19ed3c30f755ac7cbfc373"],["/posts/18696/image/image-20200209165031146.png","7590b5c30faede550374123068b166ff"],["/posts/18696/image/image-20200209165430690.png","b59409ad6c6605348e640e54860c8462"],["/posts/18696/index.html","6a8d2bb8ba33fb5d45a483eaa5755d45"],["/posts/19161/image/20180412.jpg","0ca2004cd19c316fab069488e007d968"],["/posts/19161/index.html","53663dbf22c58711f1b8882fe99dac1d"],["/posts/21370/image/000-ae8a4aa8.jpg","dd98b634505694eefda0af5e23832019"],["/posts/21370/image/001-cd3b8434.jpg","a898974845def2b1e22c779935416005"],["/posts/21370/image/777-d100282a.jpg","f46345a60f44c17d7fb74d02d331c015"],["/posts/21370/index.html","f5c81224847c4e47695d44600b8d0a7a"],["/posts/23477/index.html","15fa939888551132878154b7c6c0a37b"],["/posts/23899/image/400分图-5954940f.png","684522f65164badbe32b31d9bd3b8fa6"],["/posts/23899/image/image-110a80ec.png","71e4544a9d0e6c902b7707d36af84058"],["/posts/23899/image/image-324dec1e.png","fa3906af74ddca23ddbec3422352bf31"],["/posts/23899/image/image-451b3c44.png","1dc68f9317bf7b6f4b4ee21bf60cd3fd"],["/posts/23899/image/image-b17c959a.png","1163dc1d791c437b72eb1ccb0c478804"],["/posts/23899/image/今年的主题是蜜汁操作-e47daf6c.png","866f38abffd5fe9da2dc18f6537fb060"],["/posts/23899/image/初始化图-7ca27f11.png","cd3ef1f7df6d1133a948c771bf90d7d1"],["/posts/23899/image/正式赛初始化图一-629d4df2.png","b083365f4fe8d6633377053e8a7a30e1"],["/posts/23899/image/没用的代码-441bf9ea.png","b3c922832e668e33ef2913875286dac9"],["/posts/23899/index.html","7ee478742a1cd295817f66a7d6345ed3"],["/posts/24219/index.html","5d75992bf00d074abc0b360845bf1010"],["/posts/27231/image/image-20200209125042162.png","52a48f6bdd9ca0410c1908d643c26606"],["/posts/27231/image/image-20200209125320664.png","7b742f5d1902c4e06e0d989578bbf0f1"],["/posts/27231/image/image-20200209132706200.png","ddabe4fa22ed9dc1a3a118a546556f3f"],["/posts/27231/image/image-20200209133210073.png","5a5feab29d5311a69e85b80a6b97d2dc"],["/posts/27231/image/image-20200209134109979.png","1161ac278fe8562642ef34e0af6c74fa"],["/posts/27231/index.html","f2657b54a075b4f906a875b5c17011aa"],["/posts/27440/index.html","56dacf33c1988bec5319d7235313a627"],["/posts/29446/image/image-20200209202720399.png","4ca3d0125b08a8c0aac54ac426123735"],["/posts/29446/image/image-20200209210040137.png","9e784cdaea82e3beb8fa3f7a64d38309"],["/posts/29446/image/image-20200209210745468.png","7174f5cf3f52290425ddb863088201bd"],["/posts/29446/image/image-20200209210843022.png","29cca5587757ae200c666256728dbefe"],["/posts/29446/image/image-20200209211256427.png","06277f0ad341306e8e94bbe99ad4bf59"],["/posts/29446/image/image-20200209211817454.png","a90c179e31d9f5980a09ed0246567585"],["/posts/29446/image/image-20200209211926525.png","216ca63040554d9b748ec316c60bd214"],["/posts/29446/image/image-20200209220339590.png","0a7985bc46061c16a66830d84316f05c"],["/posts/29446/index.html","b07dbff3d458214bddc6bad620f6d554"],["/posts/30112/image/image-20210427234654145.png","26bc734e8b4eaf83a9f0b2784948bd61"],["/posts/30112/index.html","cd785c8774411c9c647c971228b978a4"],["/posts/30661/image-20220303204311418.png","32d8bca46464fed9786dd8ebac20887e"],["/posts/30661/index.html","ff81139846597dc207a6ecbe54fbe6c8"],["/posts/30661/应急响应流程.png","ec61d08826053f48a89070530068d05c"],["/posts/319/index.html","1b0526407e9346f2dff89db6e052d189"],["/posts/32098/index.html","cbbea6e20f3217231149f5f72b119cc3"],["/posts/34456/index.html","ad50dee51360bed0308df87d9d98169e"],["/posts/35527/index.html","edebe66b8fe24a50785ad0e54634606e"],["/posts/35959/index.html","ad8776cb96066af0de7d6f513aa9200d"],["/posts/35959/百亿补贴02.jpg","4f72068961be0f8f2e2cb396f0804d4a"],["/posts/36015/index.html","327739f0a20e1a72829dac539af26917"],["/posts/36070/image/image-20200920204619246.png","a074b563f93b093c2e36e0e30d2a6857"],["/posts/36070/image/image-20200920205039959.png","9a73a371ee89c0e6ebeada596fbaba98"],["/posts/36070/image/image-20200920210835074.png","633ae75f456d6140bba9c7222af6ce99"],["/posts/36070/image/image-20200920210903217.png","9d7cd44cfc6d1184b5654966f653b20b"],["/posts/36070/image/image-20200920212324576.png","56093fd4992c21d0bcaefa0faf2d6f93"],["/posts/36070/image/image-20200920212529826.png","873d9666c27c8661c5b6bfee40ee5612"],["/posts/36070/image/image-20200920212857566.png","fba07f4226c822bed273044e7a697302"],["/posts/36070/image/image-20200920214258230.png","aa96770fb043cd15c0502bf080b59fc5"],["/posts/36070/image/image-20200920214307459.png","aa96770fb043cd15c0502bf080b59fc5"],["/posts/36070/image/image-20200920214341838.png","05d6f614c10cfa73bee3b494e96432a8"],["/posts/36070/index.html","c0c688a1f10fde80671b4b71a74d796f"],["/posts/36368/image/20181008.jpg","8f424f39943ae7e5afbac72478a7db67"],["/posts/36368/index.html","2a1653333bb011df5b248757171119e0"],["/posts/3782/image/image-20200727234638460.png","12cd32d6fbfff5340ee03821e03184af"],["/posts/3782/image/image-20200727235114885.png","71f03dd8967163635fce7fdd736916ba"],["/posts/3782/image/image-20200727235431226.png","b1b371ced8f200c1d8817fb8f59fc717"],["/posts/3782/image/image-20200729000729970.png","8223a91678cf40eb413e62e66b6f20d6"],["/posts/3782/image/image-20200729000856356.png","2ebbe43279319bb218d6fc2e2753e2ed"],["/posts/3782/index.html","30fc99ba27d48b56746ee39bbdf8145f"],["/posts/38424/image/image-20211122223438126.png","63e633962a680588ff426e71eb83e060"],["/posts/38424/image/image-20211122223948413.png","0443cbe444b5fd3ee619d424f47720fd"],["/posts/38424/image/image-20211122224934185.png","fe2f10ba23d800911f7e8accf4c665f2"],["/posts/38424/image/one.png","2d997f8d56dec6ba89b17d9feb0f93df"],["/posts/38424/index.html","cccffe1f95906b7d41ca10f5b1ee8b7d"],["/posts/38566/index.html","3d033aeb9c881a0d75b5e6667afafded"],["/posts/38566/咖啡02.jpg","3c612ed19ac981d1daefd6247d332884"],["/posts/38566/咖啡豆01.jpg","52e4ef56d102c146891a86d8d1005c03"],["/posts/38566/酒01.jpg","9924f44fad7bf6305e197a564bdc6c6b"],["/posts/38797/JPYuz1r.png","7841d869699b6628ceb377e56c806fbd"],["/posts/38797/WX20220821-184301.png","59c65da0a9098085723cb0959dab6d76"],["/posts/38797/WX20220821-223712@2x.png","149de4a9a68dd0b22103252125354d3d"],["/posts/38797/index.html","96ea839d0fbb7a100a322cd58fc11050"],["/posts/38797/wx20220821-182106_12yxUJeP9.png","22908ad30a3e48de87712163db7bc0c8"],["/posts/39666/image/0590de03d0dbc304ced0b91a48ebbce3.jpg","b8b4861156aa14118bf3d440b1e6aa08"],["/posts/39666/image/251ba7c65dc60f69e82d2d5bfd0278ed.jpg","2f707744aa473744fe34b7fb24520a23"],["/posts/39666/image/44c16e1ce5d7accada45ff9b31465df2.jpg","79cac4d199e7185d5d11f1764a1087b1"],["/posts/39666/image/75ba815ab97061a5cfaba424ab20bb76.jpg","651d3b532fa68502c91100b4aac6cb73"],["/posts/39666/image/Screenshot_20200627-233417.jpg","2b26276b7715d5bb560a25706142191f"],["/posts/39666/image/a80818fdd547528e4becfb6e91e2df9c.jpg","b935a099b4d7d228512f18b1e5d28b6d"],["/posts/39666/image/image-20200627234011452.png","fd623002327881367cfd6a10fd0dae5f"],["/posts/39666/image/image-20200627235206587.png","4577bb67145f24b90b05f168b4ab5ec2"],["/posts/39666/image/image-20200628010245137.png","2a147338fd43a785049a8bbe9cf50957"],["/posts/39666/index.html","a496446b02500dbff8b5b68a83a48cb9"],["/posts/39918/image/20180228.jpg","a6b3e0d0b536ab5d2b739c6bc56cf802"],["/posts/39918/index.html","9e8217591d367756fa5211259a697f91"],["/posts/40737/image/image-20210614214103812.png","2f8d84df33ead72ef1b90d68d0d06573"],["/posts/40737/image/image-20210614220108871.png","3b5d210588da2bda67e0285821b5ff9e"],["/posts/40737/image/image-20210619223549361.png","114feea6c0da04314f34f78881f0eee2"],["/posts/40737/image/image-20210619225506012.png","b25a9858ee6e93419eb31f1b2747b743"],["/posts/40737/image/image-20210619230139156.png","ca930a2396e51a841bccc780b4939893"],["/posts/40737/index.html","b8509f5023b3d795d48f93ebd6f70914"],["/posts/40916/image/image-20210409212757426.png","dc1bf54dc05fdcffc0e3322605e59eeb"],["/posts/40916/image/image-20210409213307650.png","576b149da902f26c49f0e4dd84d74373"],["/posts/40916/index.html","f478d99a5333332ff7c2ac6d62853199"],["/posts/42674/image/企业微信截图_f3db8d3a-8369-44d1-abca-a1f5b5d112f2.png","49184c8514de5e64f6b636fcae424362"],["/posts/42674/index.html","355c03dba9aec8d16912c87c5af46b00"],["/posts/43132/image/image-20200206211138212.png","3ec4f32f7242d30644b132cbee407341"],["/posts/43132/image/image-20200206211355831.png","9df0ed205dfac2af528192679f396663"],["/posts/43132/image/image-20200206211653095.png","75f6559d824a7f1dd97e78cdd26bc457"],["/posts/43132/image/image-20200206233906620.png","562c2bf8cd03b8d49da35dea1186251f"],["/posts/43132/image/image-20200207155954504.png","f28ba8264466958dfe375310ea8d4584"],["/posts/43132/image/image-20200207164311202.png","db3ed72bde0ffa1f119caa0e6b0d73e4"],["/posts/43132/image/image-20200207164921705.png","6556134fdf2234e9e9719cf60f62a49e"],["/posts/43132/image/image-20200207165443256.png","d0c13562433532f1d3c5150272e4ff38"],["/posts/43132/image/image-20200207165602148.png","d2d11c425f1ab34dfd0ac8930a96758e"],["/posts/43132/index.html","c79baf3ffcd640901fe1d29e038c6579"],["/posts/4336/image/image-20200906220920243.png","ee13ac39b7d4fd2da452f3ea4b4dcfe7"],["/posts/4336/image/image-20200906221457582.png","354a387ea6caea16c6ae901ea9db5ed3"],["/posts/4336/image/image-20200906221708486.png","52ef13807f8ac407e9bbee9a44065eb8"],["/posts/4336/image/image-20200906221755199.png","dd96e2dde468dfbed5e4f7486566c3f8"],["/posts/4336/image/image-20200906222002731.png","35114bdb0922a2191c66119e4f714c62"],["/posts/4336/image/image-20200906222236050.png","0657cf4fd6c0cba23d8d7c683aa71778"],["/posts/4336/image/image-20200906222344368.png","b86e2e7fb015301246536796d4395a49"],["/posts/4336/image/image-20200906222448383.png","0c94343313bb7ff0e976dc46fe0557bb"],["/posts/4336/image/image-20200906222756760.png","c42a02b9df21e48f28382e996eb32b44"],["/posts/4336/image/image-20200906223040165.png","3a602d3648062e32a6cbad4eab5e6dff"],["/posts/4336/image/image-20200906223630194.png","0699c2756a1b623deeea769d6332527d"],["/posts/4336/image/image-20200906223931419.png","a1aaedf893b29b9597dfa793718775b0"],["/posts/4336/image/image-20200906224951385.png","2f12a7d24b085520ef282085283b2411"],["/posts/4336/index.html","07109ead506260261629ed4eaa0ba334"],["/posts/43922/index.html","98d07689dd1a23ca64849ca886439d73"],["/posts/44907/image/1-03f6473a.jpg","7d846e7d721db73427005424c8168877"],["/posts/44907/image/1-c2ecafe2.png","cdde7ec9692084b60d1e12dd21b3a086"],["/posts/44907/image/11-ea2e2abe.jpg","d61650eb079614a793a1a79c09911f09"],["/posts/44907/image/12-90adc007.jpg","1ae3e1cbc3a2f9b4fcae82695fccb5d9"],["/posts/44907/image/122-039656a8.jpg","f82a774c6b563fd28d44c162ed7fd0c7"],["/posts/44907/image/14-fdef5644.jpg","2ecb8ef73fc089f2f1f8956416760732"],["/posts/44907/image/18-d0f94f24.jpg","7e5ef5a64031e0002ce35e77c3ba5e6f"],["/posts/44907/image/2-149cec78.jpg","9c81d9f2621444980db7b3a7386eb643"],["/posts/44907/image/3-23aad21f.jpg","b120407c48e50ab85fb286897e8245a6"],["/posts/44907/image/4-58a913f2.jpg","fabc94fdd9a07fbd437191690d2af4be"],["/posts/44907/image/5-fbf4a29d.jpg","060c6496a4835404ea342e7f1266b7e1"],["/posts/44907/image/7-3bd27b88.jpg","947a2172ae44e05331a586dc9e47ac9a"],["/posts/44907/image/90-d48f125c.jpg","29e355a379ac7b786369c7277b4e2d7e"],["/posts/44907/image/99-d71cdd95.jpg","c645204a4bb557011f6af198fc1d5253"],["/posts/44907/index.html","329a3a820e310a83a62b719bd9967a90"],["/posts/45990/index.html","6cd0a28f3a87641eb0ac773ecb07b96d"],["/posts/45990/露营新体验01.png","4eb33d336895377d32b310aef9e4827d"],["/posts/45990/露营新体验02.jpg","4aa5c850c6b8dbf80fc2a88b358b1d43"],["/posts/45990/露营新体验03.jpg","b5c763d20565551143c6b03fcf5b0400"],["/posts/45990/露营新体验04.jpg","0abfabf858ffff16e7797958feb77ade"],["/posts/45990/露营新体验05.jpg","0695ada07970c307d247e977149f75da"],["/posts/45990/露营新体验06.jpg","060f4ea0c06a349f76ddbf7c879fb0a6"],["/posts/45990/露营新体验07.jpg","e678afffa61741a2e0e4b8c4df324373"],["/posts/45990/露营新体验08.jpg","8ee1e06d18b81be9f2db9dd1146eeaa3"],["/posts/46045/WX20220814-222808.png","44213917cd2cbf1894a2e5bafbccdc5c"],["/posts/46045/index.html","84b76b030e3ba336b16377251c2b7614"],["/posts/4633/image/01-cb7a9fd5.jpg","b086805e7c5e017b347a78dba7754a4f"],["/posts/4633/image/02-25db5a83.jpg","158aea75f27512f25ad9ba502db57c0e"],["/posts/4633/image/03-833d0a48.jpg","11cf27d5cebdc6202310a745bd283208"],["/posts/4633/image/04-16a7870e.jpg","e12c81dfebb253c951d7d8d5271a641b"],["/posts/4633/image/05-8ee015d5.jpg","b1122ab0096930c7b621a1aa4ceb646e"],["/posts/4633/image/06-b474540f.jpg","8547356303f81ab0f9d2319bef8c3893"],["/posts/4633/image/07-f63bc866.jpg","509968f1b44b804b70b9304c6981ddba"],["/posts/4633/image/09-6b237511.jpg","8dc79dd9d7a69f5336825febfd71d8b6"],["/posts/4633/image/10-1b556673.jpg","fd272fd58ffc7eb98bc55650334a673b"],["/posts/4633/image/11-e37e3798.jpg","34836c94d17f56503e545578d5f565b2"],["/posts/4633/image/12-61d62c31.jpg","5ed05bf374bdb4f30ccdfce361d49266"],["/posts/4633/image/15-c9aa66ee.jpg","d1a4d52f70cb2f0db87cfe5c21bb3a82"],["/posts/4633/image/16-69083a1a.jpg","e46c95703eca95185317f507bf8da7d9"],["/posts/4633/image/17-0bc37b46.jpg","e4bfaf1908619f2ac148e2523a5480ae"],["/posts/4633/image/18-47a9acaf.jpg","ff66c00dfb57122ce1f39052b40b2104"],["/posts/4633/image/19-8c36cb41.jpg","a191c5d29056de8070bf53e00611b9e2"],["/posts/4633/image/20-a0dc08b6.jpg","149f0e7913a605dd7b62b53b636a235a"],["/posts/4633/image/21-58f0c8b2.jpg","c491a50304017143ce5adf480662c0d1"],["/posts/4633/image/22-53b0b3ff.jpg","70a68db381dc4f3028227b16e684e587"],["/posts/4633/image/24-2d4f8d4e.jpg","67ffa3ec5d772aee6063b2291e7d53b1"],["/posts/4633/image/25-9914a7c4.jpg","719d61ab2fa5de7218fc05ad2de8d664"],["/posts/4633/image/26-9dffdb76.jpg","ef27115a5add8f5ce273880a1ffd2d8f"],["/posts/4633/image/27-df73c3f3.jpg","a7f7552f3beb506a61ecff768b0662e8"],["/posts/4633/image/28-677b7180.jpg","5bfba8de19fca957e3d5c38caf8dbab1"],["/posts/4633/image/29-2b282816.jpg","829fb4b78b0222024b37d6926f6c3197"],["/posts/4633/image/30-4d5813b6.jpg","704351def2ff9422d468173b2d8ef885"],["/posts/4633/image/31-fa20280b.jpg","2c6bd4c0f64a493c83b8ddcfb30824ef"],["/posts/4633/image/33-3557d72a.jpg","d70ccc5bd63322a0dc146c786a73fc7c"],["/posts/4633/index.html","32faf313024ad203d54d5ca327af896b"],["/posts/47811/image/0-20200301214824489.png","ec6843778f7c878f6a1707e0105d2360"],["/posts/47811/image/0-20200301214824520.png","aa024ba378bbdeec7b34c8fd6164a00c"],["/posts/47811/image/0.png","397987e8c60702fbad289e10172a1f39"],["/posts/47811/index.html","96b5b4d231a7605eb7fbb84b06165fda"],["/posts/49729/image/0-4c9d6e7c.jpg","66a17d1d8c0594af2934d6b7049ad66a"],["/posts/49729/image/1-0fdae5e3.jpg","1e3cac3e6301e6145ef16d7f8321b3c3"],["/posts/49729/image/11-7c982654.jpg","65f8801240a0c3d407c3f0d4815b334c"],["/posts/49729/image/112-90b964a7.jpg","5cb74e111a5a700ad00e6e098e9935e1"],["/posts/49729/image/2-03be334b.jpg","858593ad3ad802959df83ff79acefb9a"],["/posts/49729/image/22-70c89d79.jpg","5e2eaeb4241268d45e7e61faee4ba025"],["/posts/49729/image/3-36ad2e84.jpg","3752f3060b0b9a9402d678914f0b5173"],["/posts/49729/image/33-2a801981.jpg","c2ed8e853ebd8407185c79dac99668cb"],["/posts/49729/image/8-30a2da41.jpg","a9ae8b0e69a02b34061e3d1e87694424"],["/posts/49729/image/88-8ef32fd9.jpg","f0c0d386f699fb5c72707cd535fde1df"],["/posts/49729/image/9-67aa5b4a.jpg","24215f2e5df311b18d72b87c82830f0d"],["/posts/49729/index.html","bbbf7991d57281a51bddd80b1a2232e0"],["/posts/4993/image/image-20210210173524708.png","37c1d93d22659eeb78e126e743cdfc18"],["/posts/4993/index.html","88abfcdd080d6d45192e95b498e150ce"],["/posts/51369/index.html","5a7971ce13a1f23bb74a6b020ae99c65"],["/posts/51468/index.html","3c3c79052414e61321afedf10a12c55c"],["/posts/51468/国庆珠海之旅01.jpg","907a0ed973df5e88b17fb921e9f7a35c"],["/posts/51468/国庆珠海之旅02.jpg","84177303afa07ef24dcb3f62cad77121"],["/posts/51468/国庆珠海之旅03.jpg","6387d526e8199ef023a1c980825304c0"],["/posts/51468/国庆珠海之旅04.jpg","ba23cf7f79170198e3c6539373ab9381"],["/posts/51468/国庆珠海之旅05.jpg","092c696e15099c8be009155f3f5c96cb"],["/posts/51468/国庆珠海之旅06.jpg","837e001d8788dad21eb171015e608181"],["/posts/51468/国庆珠海之旅07.jpg","0a094989c098b47724f1057bc30d44e2"],["/posts/51468/国庆珠海之旅08.jpg","b6c5707ff0cbdf6f6af729a73f22fd3a"],["/posts/51468/国庆珠海之旅09.jpg","0ddec82da1b1c19e87830ad144a4af84"],["/posts/51468/国庆珠海之旅10.jpg","2cf02cd3485fdb0e5b3ff55a4e0e2273"],["/posts/51468/国庆珠海之旅11.jpg","ca57950095ecab0d1683c3681bf1dbfb"],["/posts/51468/国庆珠海之旅12.jpg","dd74e087c7d4b7e0e5023b10a30e06d5"],["/posts/51468/国庆珠海之旅13.jpg","0d339d6ddaa6d764ee0e4a1d70b1949c"],["/posts/51468/国庆珠海之旅14.jpg","829a8c348ccd5bf773c0d7165378cd82"],["/posts/51468/国庆珠海之旅15.jpg","7f4251a104019124de8983f66b82c935"],["/posts/51468/国庆珠海之旅16.jpg","49615638ce22d046a61182e0042b51c9"],["/posts/51468/国庆珠海之旅17.jpg","ef06d02b4fa8c9292b9af48fe95e948d"],["/posts/51618/image/00-1d06cb1b.jpg","57afa03bad0789c884e583ae424242f0"],["/posts/51618/image/1-1165c257.jpg","366859b1191e01f3ef6b3601286ac2d1"],["/posts/51618/image/11-251926db.jpg","9ae4eab74b88ef08adc3aea6b3ebeedd"],["/posts/51618/image/112-cc43a1a1.jpg","09f04604b2bd917ee56cfb7a9680d1ee"],["/posts/51618/image/1234-b8341217.jpg","db1e0350faec216b2089b67466405a1d"],["/posts/51618/image/2-89f5292f.jpg","ab6ed9a238072f9b074790845e222e8d"],["/posts/51618/image/213-a58d7afe.jpg","7e650c5a68e9d35dd607269dea26fbe7"],["/posts/51618/image/223-8668c555.jpg","6752d9509a5a0cada416228845c13954"],["/posts/51618/image/3-3c10ee1d.jpg","b1df403dc050297b71cda95583f1d70e"],["/posts/51618/image/321-1ca93611.jpg","251abc63485bb26aafe5b5a91938888b"],["/posts/51618/image/5-1b4a00bc.jpg","e1c3aa0977e6b96123d66fe2cbd5dba1"],["/posts/51618/image/54-cf8af615.jpg","7975ae86a7870f46747ffb70d8c705ac"],["/posts/51618/image/6-7b047070.jpg","683f2030da9a958db689d51f6ee225d4"],["/posts/51618/image/7-7b86d918.jpg","a189f961b52bf6fccdf287e273794448"],["/posts/51618/image/8-22b12969.jpg","78ea0c8c74c9ee3e5c8828f558f1b581"],["/posts/51618/index.html","96f8dc51aefbe6903be4fe0dca0340a8"],["/posts/52711/index.html","cba573216e2e0af9ce89abc08fdca3de"],["/posts/5285/image/image-20200920222035121.png","a2e30c03495d5e3a001828f45b3206c3"],["/posts/5285/index.html","706c8eeac610a9bdf29b17a906fa8e53"],["/posts/5295/index.html","8d3bd317f9ce6b4a0088d0c55b876102"],["/posts/53014/index.html","ea539c7ac3919db1ee6c8e41bb1de178"],["/posts/53317/index.html","5520bc01e2e728257b6904dd70d657d4"],["/posts/55134/image/1-1373215.png","ab6d6e5f065e904ac7d6854e39bdad17"],["/posts/55134/image/1-1373948.png","1cd36cf9dceb7321ccdc9d8dbd74759e"],["/posts/55134/image/1-1374544.png","a50cbd4373de3333e4efce3666beeebf"],["/posts/55134/image/1-1374929.png","e7cfe2fcbe09ac0585de5f66ec781336"],["/posts/55134/image/1.png","6a2b2960d129cc0e8a959185b96ce1e2"],["/posts/55134/image/2-1374940.png","5aef49a9daac7a28d9a62a879020d030"],["/posts/55134/image/2.png","62741516845c98e27c5b31481c97b5af"],["/posts/55134/image/3.png","c9401a0cc9a8a539baa3121b284c56fb"],["/posts/55134/image/screenshot-20210911-224712.png","79db3aa98e9ccb573463b81643fb32dc"],["/posts/55134/image/screenshot-20210911-225422.png","f10b75699389800ecb93493a455d0f16"],["/posts/55134/index.html","775a708533a98095f75c908a4a078245"],["/posts/55550/index.html","2c6f34934afaff1d4dc46b729bc07625"],["/posts/55649/index.html","b52e91ebb535cbbd1e3ec83ded67d76b"],["/posts/55649/音乐剧很美妙01.jpg","62ce80d77b812c0e6b67eb6b502d436d"],["/posts/55649/音乐剧很美妙02.jpg","494e894d88e89dcc58aeb23100befcb5"],["/posts/55649/音乐剧很美妙03.jpg","a6578908a8965a182373b1144a89d44f"],["/posts/55649/音乐剧很美妙04.jpg","1a9572045392f3f4717ccc3fc42eb7fa"],["/posts/55649/音乐剧很美妙05-3128582.jpg","76115cf794bc34f379919ae9915b6218"],["/posts/55649/音乐剧很美妙05.jpg","76115cf794bc34f379919ae9915b6218"],["/posts/55649/音乐剧很美妙06.jpg","a0f4364c39a5a6c62dc53d3e5ed1a768"],["/posts/55649/音乐剧很美妙07.jpg","1dc98f5626a8faee1fc211518c8427b2"],["/posts/55649/音乐剧很美妙08.jpg","40d7f22309c61ba069c9cc136898621c"],["/posts/55649/音乐剧很美妙09.jpg","2c7c303b64914b0a9b912e93fcd32bf4"],["/posts/55649/音乐剧很美妙10.jpg","eb2cfd8bddc376cec19068ec7cc247d1"],["/posts/55649/音乐剧很美妙11.jpg","dd89675789bad607a9c06bdf97f67446"],["/posts/55649/音乐剧很美妙12.jpg","be8205704d06e14311d897dfe2502c68"],["/posts/56047/image/image-20200920190429014.png","72b35f48a208fc847a6b1d0fcaf1e92e"],["/posts/56047/image/image-20200920191847102.png","6912507cf182ebb962ef809af6e63bd0"],["/posts/56047/image/image-20200920194238412.png","86e54b508e6df841bbbcc7a481a86ca1"],["/posts/56047/image/image-20200920194725899.png","abfcc496ef586ae2787535fb46511542"],["/posts/56047/image/image-20200920194818018.png","f5e8d34765d3e024af6316906d77e85f"],["/posts/56047/image/image-20200920194848168.png","68acb0b38b0aa0d3732fe450f5c5f30c"],["/posts/56047/image/image-20200920195143758.png","b26dbbab25e9debd24d0446d0e9af5c7"],["/posts/56047/image/image-20200920195225059.png","2d622babf2d1012877100b2d5b501695"],["/posts/56047/image/image-20200920195233316.png","2d622babf2d1012877100b2d5b501695"],["/posts/56047/image/image-20200920195531713.png","a4e371a5c746f562550525fd15fe87ab"],["/posts/56047/index.html","54bf288f4f10cc13cb407dae7d7791a6"],["/posts/5644/image/image-20200920225109629.png","23dbf93955e7d03e9ce1f2ce8cd5595d"],["/posts/5644/index.html","3fdbbbb825011e42a0940a1afb0af0b8"],["/posts/56570/index.html","9a2efa544ddb39c7c27bd5201af74428"],["/posts/56588/image/20190115.jpg","20b38232d256072a4d468a77acb3fc6e"],["/posts/56588/index.html","62f078322403354031cd19bca359f149"],["/posts/57095/index.html","ae8b6ae7cde0e8c568d3fb1ba58d035e"],["/posts/57631/image/20181231.jpg","df7a543bee0a6ae812c49def48ceaa5a"],["/posts/57631/index.html","aa27ce6dc589be29f99e068591a71613"],["/posts/59601/image/image-20210429232229135.png","5e4a8a1a25145442ff135fa448aca65a"],["/posts/59601/index.html","49c6f078ee5cb6098d2dfe255addcb6e"],["/posts/59830/image/1.png","c164caac0f3f9665096528466e065813"],["/posts/59830/image/2.png","9e2f768faaccca8d81e30dcb4449456c"],["/posts/59830/index.html","b9cb42dc4cc3d1819dcd7806c48b016f"],["/posts/60227/index.html","7535470b83212fb7e04ecdaf4ce6ded5"],["/posts/60384/image/image-20200906231052334.png","8628eb0358ed9116bd9a1ef84e639049"],["/posts/60384/image/image-20200906232233708.png","184a6e6574931ce93e4818451c06f3f0"],["/posts/60384/image/image-20200906232432373.png","15d85c8d35bffe77743e661f7e7b2557"],["/posts/60384/image/image-20200906232543363.png","dce96f8a77ef6b58dfb25f13e59a7f2a"],["/posts/60384/index.html","8a3b9c235480e7878470607e24d9a4ac"],["/posts/60970/image/IMG_20200314_144751.jpg","51ffb3934f7fe82163f5719145641cbc"],["/posts/60970/image/image-20200627175825802.png","6d4fb46f2db226466634863649c9b56c"],["/posts/60970/image/image-20200627181405622.png","7eb698a1362791355daf732268539ed8"],["/posts/60970/image/mmexport1584172171071.jpg","7fa1fa699340849f3afea9fef65bf538"],["/posts/60970/image/mmexport1584177084229.jpg","87f3c09f3c7e9848ac845743651a8cb9"],["/posts/60970/index.html","435589294761ea3e922e01a0e270a5cf"],["/posts/61167/image/1575651117499.png","746f8424cbaf779f0dee88c857507f65"],["/posts/61167/image/1575651135109.png","3d8c29ae2b9b4c42784655e7556d5171"],["/posts/61167/image/1575651150846.png","cbcf17ae0b7bacf279f1b557f866e07a"],["/posts/61167/image/1575651164367.png","c534a7a9fe5e63d840c872098bf12e61"],["/posts/61167/image/1575651177976.png","a863c94fac90ea76497665df38ab93b0"],["/posts/61167/image/1575651192178.png","a33a32dca18123b98161bcdd49d412db"],["/posts/61167/image/1575651208252.png","a384ccf1b0372715536a2e65270f8e60"],["/posts/61167/image/1575651225157.png","bd8f4a7179ff432af7dcc0ecf36b8e3a"],["/posts/61167/image/1575651239326.png","65b55eb80aa3f3419ddcb8228dcd1a82"],["/posts/61167/image/1575651254769.png","2dae7d43bf82f965ee153b9bf0297cd4"],["/posts/61167/image/favicon.jpg","c918b9d9bb699071d52e219b029ed874"],["/posts/61167/index.html","705ccf3141eccea052785c07ba382052"],["/posts/62350/image/image-20200209171819914.png","ac3c00787bf226c18360ed20dedfc08f"],["/posts/62350/image/image-20200209172113560.png","dbb6fd650d23bd1edda4870239bd43a8"],["/posts/62350/image/image-20200209172535834.png","c57f1112ecf397db5ee985e9c031364a"],["/posts/62350/image/image-20200209174037280.png","efbcd49f8615923b34d77c65a4cd9ddc"],["/posts/62350/image/image-20200209174305852.png","b0bef92487fc9b644057ee070a59fd71"],["/posts/62350/image/image-20200209174746426.png","7405ca08b838e8a5856e293c4dd4b5e3"],["/posts/62350/index.html","cd4fddbc0f77d56adf9f44817eead0a6"],["/posts/62891/index.html","a9ae225c352805f6057dd9d23a7777f9"],["/posts/6606/index.html","b9c22be758b7e51cb8118465399e0908"],["/posts/6889/index.html","13486864b2f7f61b4a0737fe3d864597"],["/posts/7376/image/image-20200907232315224.png","56e986ba47f3acb6bcad5ea68b39fd06"],["/posts/7376/image/image-20200907233321242.png","eff28edebf1e3c346059b72fe5f78f1a"],["/posts/7376/image/image-20200907235343778.png","4ec20429a9f6722bd17325bc191a56d6"],["/posts/7376/index.html","df5528d0ce2c11c079735052828d5a86"],["/posts/7511/image/11-0f14b251.jpg","7a48ac942d93c6cdc017901523911f1c"],["/posts/7511/image/111-93e55faf.jpg","c7dfd0991eb6d1740a05335bbe64bbbb"],["/posts/7511/image/112-a9636c7f.jpg","5ccb8bea8a24e0a1ba0385a1f124eb1f"],["/posts/7511/image/123-36474d5b.jpg","ced026b4e02cda1c3d00c1ae8e820c26"],["/posts/7511/image/232-fd67e718.jpg","8e7df1e175817abca468e799ddc05de9"],["/posts/7511/image/321-446541fa.jpg","3bfbd6e7debf7d5e3b434d0218dbdf0a"],["/posts/7511/image/33-4f3ffb2e.jpg","0ff5de724687c45e98414fac583e4f89"],["/posts/7511/image/333-ab9bdeb6.jpg","11d2a96ef978bab3abce7fdadd036905"],["/posts/7511/image/432-99cf3d13.jpg","87199038347e3e0a7b700358fdaea6a4"],["/posts/7511/index.html","a3d9f3bc01bb8a1f0e8756a6eb99531a"],["/posts/7931/index.html","7f71722835025bbbcc037e15acfac188"],["/posts/8133/index.html","6a6f06f7bb0b06b8620889c210d8e24c"],["/posts/9831/index.html","ed49cc3884f9f119015d5666430a0732"],["/project/index.html","e760081db78f21332a9dc6dc5a550cc7"],["/sw-register.js","8da8645b7b3d67c4eb14e0a319795a8f"],["/tags/Community-service/index.html","20da4c05a7b52cbf26a57279dd012333"],["/tags/Engineer-Management/index.html","3eae6da0f716386626aa2c516a1a8b20"],["/tags/FESTIVAL/index.html","73b2d66a6731d65d03be3e9a5b8b4add"],["/tags/High-school-reunion/index.html","0b71b9dacf9a5bb4419cf4c939ecb79d"],["/tags/Intern/index.html","679617cd03f59ba7474062f3fd245f97"],["/tags/Personal-Letter/index.html","b028a3e1ae035d8d4d5392f18f5d92d6"],["/tags/Public-Events/index.html","9d67dd61cac425290f998d0a7d8c0656"],["/tags/Spring-Festival/index.html","786bd718b43d58ae79d1e5e3b18ae0bb"],["/tags/Technology-Product/index.html","49273abaf1e438cc9cdefaaad0ece971"],["/tags/book/index.html","48abfb8ad57dd7821dd57e05326de799"],["/tags/campus/index.html","f530ed355b390ebc9a9f85afa3618ad0"],["/tags/campus/page/2/index.html","2c0ffee7e46479bb45ced1311cb84780"],["/tags/company/index.html","ba43ff09903f61fee52bcbbde1df66d2"],["/tags/competition/index.html","7ce3e810705cbe5c227d1f8a81a92547"],["/tags/computer/index.html","70f3c49d72e62ba701fdaa4bc6706e55"],["/tags/digital-product/index.html","e405b1e288ff374a8e9a6944f6764fd8"],["/tags/foods/index.html","20165228aa3b4464847e3d6685bf7df0"],["/tags/game/index.html","20889fb07eb75a35a22f472f2f73349d"],["/tags/graduation/index.html","c09fe7411e464be69294a74a2102fa22"],["/tags/happy/index.html","73c8886bd3165889ced5a82336e0b429"],["/tags/hello-world/index.html","5b6fad747a36bfdc769ff2dda68150a3"],["/tags/holiday-activities/index.html","bf83c1f24ccd8765f2f1110bdb877fac"],["/tags/insp/index.html","d52f4705e6fa1c1463269d920ebccb46"],["/tags/life/index.html","ed99e10175d91d48abf8c2a4c5bd05c8"],["/tags/manage-finances/index.html","ebeef103f40e67a94c24b35a5c867393"],["/tags/movie/index.html","16d337ccabcdbe93fd112954b8342de6"],["/tags/movies/index.html","07ce5067a13b0165f11e430db685acac"],["/tags/music/index.html","62ae1a0e389b93b824199c169f15ab2b"],["/tags/network-security/index.html","269489dd8abf6c098650f572a727b690"],["/tags/reunion/index.html","ac6cac54e67423da305dd3fb62010edc"],["/tags/social-activity/index.html","b93ec96e2384d57ef38d562dec72ef7d"],["/tags/social-activity/page/2/index.html","4d78448673c89e5efcb277765a5225e4"],["/tags/src/index.html","77b6ac84468c534ddefa9d0e76a3fb06"],["/tags/technology/index.html","8b495d8ef86a424744a4d3b5685b75f4"],["/tags/thoughts/index.html","1676a1753f5e3b3c95bf36b82d8015b5"],["/tags/value-ideas/index.html","41129bd80384192b2dacc35c4dd64228"],["/tags/work-place/index.html","79ee30c40885e64e99c9cd31a9c893e1"]];
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
