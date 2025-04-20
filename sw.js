/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5fa609750bd4fb7abb27704399374a24"],["/about/index.html","ba70cd02a7391bb5cdccf1af040c413e"],["/archives/2015/03/index.html","be075956ac300fd583af8a9f4d23f418"],["/archives/2015/05/index.html","888030b7dc3f0c435838759a93b06ba6"],["/archives/2015/index.html","87156cdf9e7978fabf26471501720da3"],["/archives/2018/01/index.html","44654718d89d1fcc350ba29dceb1316a"],["/archives/2018/04/index.html","b022c8ce132a06dfbc37130db2180bdd"],["/archives/2018/05/index.html","2a457a2620a0eb8ad16ef557fc4d2ec0"],["/archives/2018/06/index.html","7f0e8128fdc3b1c549644749a48dca3e"],["/archives/2018/07/index.html","93d7510693416dc194c70fa568c92ea8"],["/archives/2018/08/index.html","92b48d531169132d12b02690da78e43e"],["/archives/2018/11/index.html","9902d6f739ff74f1dd54d3483810ff47"],["/archives/2018/index.html","4544afdd3a82182a71fc462df85214d9"],["/archives/2018/page/2/index.html","8e714962f4405389894ce9e7b459347c"],["/archives/2019/01/index.html","014c81dd0ab638d6869a37a4ab5dd306"],["/archives/2019/02/index.html","d13062d30c3062d3913c0e5398302080"],["/archives/2019/04/index.html","bf03a38f3b423d41e78ec80fba3149ea"],["/archives/2019/05/index.html","831759c6392e5eff82a651975d136e4f"],["/archives/2019/06/index.html","b8a2ebc404ad05f921df3dabdff191f0"],["/archives/2019/08/index.html","d978850fcd1f8bdfae6dc3cf404ca443"],["/archives/2019/10/index.html","9767f2ec4bfbb6bbfdcda3aad8ae82ff"],["/archives/2019/12/index.html","37f0240ed904a247256943589a0de746"],["/archives/2019/index.html","cc9924ebab61c2306289147c750de94c"],["/archives/2020/01/index.html","f4bcc2ac1eaaf32cd6a6eb66798a1d5c"],["/archives/2020/02/index.html","d38a577bdf7cb91116afca0ed670c56b"],["/archives/2020/03/index.html","5960eb7e868f24d5beb11e1c345ab494"],["/archives/2020/05/index.html","13e03fe808defe187fc5e97ae13e73d9"],["/archives/2020/06/index.html","5e0f5a68214533b0ebfd95ef336955ed"],["/archives/2020/07/index.html","ccd5b9dc00d08257fd682022f9960f1e"],["/archives/2020/08/index.html","80ffa5884985452674fa6ca98a092687"],["/archives/2020/09/index.html","0429618cf87d81e7191d02b8da688206"],["/archives/2020/10/index.html","7924fb421dc035561ea85679b14da1e7"],["/archives/2020/index.html","0d798b5a175d71268b71d904b503d9da"],["/archives/2020/page/2/index.html","79756345aec6db4d33d58e45778efa5a"],["/archives/2021/01/index.html","28ef12c3b0509185067d53b80ea3620a"],["/archives/2021/02/index.html","99bdb7edebf6b1cd890ca71a077bf5f0"],["/archives/2021/03/index.html","6fa24e69252543d5ddbf5dd1253aa64c"],["/archives/2021/04/index.html","6cdb28a20c1b30fe1bda894362cf50b1"],["/archives/2021/05/index.html","6172907c334b53be249cb06b5b5b96e4"],["/archives/2021/06/index.html","4f135ffd3e6f0810ec7b3b9e7a155d7f"],["/archives/2021/07/index.html","566bf9221e9d538df44e638cdead219c"],["/archives/2021/08/index.html","383d3156a7582fa473b1f012cad2da38"],["/archives/2021/09/index.html","841b66ce3e4a3ffd43a1231c4ffad31d"],["/archives/2021/10/index.html","7c978c0b35da22182c50c607b0dc6d70"],["/archives/2021/11/index.html","41f78762b89ccd1d2ca1f6ede6ea1f5d"],["/archives/2021/index.html","7a36a98fe6a706ccde52fda4f2b32e22"],["/archives/2021/page/2/index.html","d6f091e353b53c1d800ea60fed18e9bd"],["/archives/2022/02/index.html","5ffc83cb20b27f263f564f3bb4468071"],["/archives/2022/03/index.html","41890306a16b8723a149c2b9a397bd0f"],["/archives/2022/05/index.html","67823a1340c4930941625711a15477d4"],["/archives/2022/08/index.html","5fc7ea8154ec7d991b5bd5fe994af5d0"],["/archives/2022/10/index.html","1361cf40e3aeb8263a3b8d6d5b4cee33"],["/archives/2022/11/index.html","43f73d78071684d6d20650e301255f8c"],["/archives/2022/12/index.html","e1b5bd22cbf5080dd47ac0286228ead5"],["/archives/2022/index.html","8ff90a9a8a75f113f5e326b2c01e1ec5"],["/archives/2023/01/index.html","8db31d67837b6a51617b7346713c98cf"],["/archives/2023/02/index.html","92c7e8507817996b16f4355d839955b9"],["/archives/2023/03/index.html","1041c70cd73ec05e0916327f600c7af3"],["/archives/2023/04/index.html","929fa130605abf70caa04ef02ea761c8"],["/archives/2023/05/index.html","7fc29d675efdce8e84443312ce082a52"],["/archives/2023/06/index.html","896498ce2b56de37fa704396816b85c0"],["/archives/2023/08/index.html","412e2a5c20435dbb9fd87e293f38f146"],["/archives/2023/index.html","ffe07de52d4fcf4efb4cf00060ac1cc8"],["/archives/2024/02/index.html","00c510ccdd1b1c0a99baa566ea6c0473"],["/archives/2024/11/index.html","7bf2280408b81a7af69ca8b62738e721"],["/archives/2024/12/index.html","12aa1172d6b6cca67d5542003790747c"],["/archives/2024/index.html","7f376da09f9cf76e9327a146181c92c7"],["/archives/2025/01/index.html","2fe7ebe7cbf4193607039ad25fbbae6f"],["/archives/2025/02/index.html","c977270b0591bdc44eecc7be496d74bb"],["/archives/2025/index.html","eab5de5a51e8bbb0562cb43a5eb31878"],["/archives/index.html","f02b1d22d7bd2c84eaabb7fa5b1a9b88"],["/archives/page/2/index.html","a7d209619f33aeb8b112ae3dcc4329d8"],["/archives/page/3/index.html","e283381f51445e66ae7d7397d4349218"],["/archives/page/4/index.html","678ba7f7e15039de8d8dbf52e9672b8a"],["/archives/page/5/index.html","f1bb3d40c54f8ce78f727c347acebd81"],["/archives/page/6/index.html","ac6a4eb3ee309f13ee12e178d265438e"],["/archives/page/7/index.html","794429fa5ce23a94483021fe4db16979"],["/archives/page/8/index.html","6e5baaeca8255e2e96f1065f48f4ac01"],["/archives/page/9/index.html","3588ca845827d3ef7281ec919e98a5e7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/categories/ACTIVITY/index.html","3f3465c98ac677dadc378a54c36751fa"],["/categories/ACTIVITY/page/2/index.html","7f9eae8f262f3b2a452dbbfd24c31ba3"],["/categories/BOOK-NOTES/index.html","8d5bbbb8152c9043814cc5498c000921"],["/categories/CAMPUS/index.html","1c2dc1c388f94a4fce4dae49708c232f"],["/categories/CAMPUS/page/2/index.html","9d8bf15875436df07b15fe931a5c1cc8"],["/categories/DIGITAL-PRODUCT/index.html","bd7bd8205a74bd547940cebd0a3bc8b2"],["/categories/FINANCES/index.html","f05e8c6ef9ab1d319d65dfcdb4cb9c8c"],["/categories/FOODS/index.html","325d6b7ee863c36c84dfd53ecd627bdc"],["/categories/GAME/index.html","a4316c13e5bea258a73201f03d1b5390"],["/categories/INIT/index.html","16fa224d66fbd1e5cce4e15b0c7a97c9"],["/categories/MOVIES/index.html","458d93faaed2fef9b45d4b13ae223de6"],["/categories/MUSIC/index.html","d3c16099e07c577189ca828052c30528"],["/categories/PEARL-BOX/index.html","92f275ebb5e7648ccbca5a2c31f5571b"],["/categories/REUNION/index.html","ee9abdc80f52575f8bdc22ef28ff0733"],["/categories/SPRING-FESTIVAL/index.html","e475ccc99e34f06fd5a695118f475c0c"],["/categories/TECHNOLOGY/index.html","37c478f7c45f8ba743a9c5ddcfad1f79"],["/categories/THOUGHTS/index.html","eefd0d8d248cb0cde1dd141cc8365ca1"],["/categories/VEDIO/index.html","741d519d1b80a3c28b3e7965f0ffb03b"],["/categories/WORKPLACE/index.html","3061a7cfe725d550dae40d94dd09c0c1"],["/categories/hello-world/index.html","439c87b721c50fe6b34f2faebd731fcc"],["/css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/css/donate.css","a68e4a34e814ce3334186286f4655440"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/style.css","7ba514c97d7616d09e2ea935d6fe6ec4"],["/donate/index.html","2a1d87ba738c625c52e108fe2adc748b"],["/favicon.ico","82e181c24cdcb79f7457d97e6dd50c1c"],["/history/index.html","8b4364daf4d6b5e4219127daf11ed68b"],["/img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/index.html","e40118b2bd5850eb57e54e5dae2520a6"],["/js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/js/donate.js","c5119c5bdd5049d805e03af774a47472"],["/js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/toc.js","aa681b733f400634fc116211ce70248d"],["/js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","ff164d6319fcfb0a1f28c091037a9bf3"],["/page/11/index.html","85c31970adecc71b67a8648c4e596868"],["/page/2/index.html","9ded2f37450e04506a59a8c02db7aff3"],["/page/3/index.html","39140fa592b9bb883f313e28147c98ea"],["/page/4/index.html","22d70ff1919ef57c1c3dbce3ef1cbedb"],["/page/5/index.html","b8bed363d670ae41bde2971bc9916719"],["/page/6/index.html","fedaa0f2ce35f6cb2e423cd3cc4607dd"],["/page/7/index.html","5dd0b73f8a4db64f6a936461aab6ab0b"],["/page/8/index.html","b2aa396ed496fe4930eed8770e429cf5"],["/page/9/index.html","f665c66219c97ab2596d0682926d3946"],["/posts/10399/image/5.png","8fe7c7cded414873a277b237e3f9b04d"],["/posts/10399/image/6.png","8b0e0ab7ac9b3153f10fe7b44d36fd94"],["/posts/10399/image/image-20211007121219034.png","dfcbd6731f776cf73d7084fdb6506be5"],["/posts/10399/image/image-20211007121428821.png","4c4ee393d11ef6466cd7e71f01e4a3ec"],["/posts/10399/index.html","64aa965b8a5ad476f9607c93c2114a14"],["/posts/11517/index.html","a9c29d529d15586855e72d8227367ebd"],["/posts/11517/交通事故处理01.png","01b1aee6a001b0c26695fc64e3d34b03"],["/posts/11517/交通事故处理02.png","98e7188cef75cecfcb64eb8e92fbe371"],["/posts/11517/交通事故流程03.jpg","fba8f7835bcd78342cf7fe96949bcd38"],["/posts/12801/index.html","261c32bfedd70f07acf8353ed4953cf0"],["/posts/14062/image/image-20200209211817454.png","1c6bd4a2da69e3fbf62e6e1f6c294fd0"],["/posts/14062/image/image-20200308182926949.png","d2f5d8a678d6aeddd4399dd0ebadef7e"],["/posts/14062/image/image-20200308185322824.png","8b180754a2c731618a2003504fa1f5d7"],["/posts/14062/image/image-20200308191954342.png","93786a7fc17a463b81a5e703a45215d7"],["/posts/14062/image/image-20200308194044483.png","1117050eced5491b95a0ad86b6a1561b"],["/posts/14062/image/image-20200308194542633.png","65fc3dbad7d0eed60ff4dc3ab74820f8"],["/posts/14062/image/image-20200625175346121.png","bcc335362f1abaa5eb02380922b9dbc7"],["/posts/14062/index.html","4d89384eaae926f2af3c95bc3a31ba41"],["/posts/15059/image/image-20200209223336765.png","a58bd67fbab4531b377ff99c8898c376"],["/posts/15059/image/image-20200209223657842.png","33576193ae78ad13a3f7a60e44c95725"],["/posts/15059/image/image-20200209223906448.png","b15343097e915bd6c8d87b152c6d6170"],["/posts/15059/image/image-20200209224704457.png","bb847d306111503de6ad8310163d1c15"],["/posts/15059/image/image-20200209224841814.png","a5cbc4a3a1e371668f2de59d768bb311"],["/posts/15059/image/image-20200209225016194.png","d5b13dbade91cb1bda7d306492866a54"],["/posts/15059/index.html","47a171723bc250ee72bfa7cde1c0d3f1"],["/posts/15260/index.html","0305571d9928e9ae3b649c3ffba5e22b"],["/posts/15260/原野话剧01.jpg","42e50ba04d44552cde48a95c4c7ed12e"],["/posts/15260/原野话剧02.jpg","a8fcec8b7f67e2eac3b2e828c1338a5e"],["/posts/16107/index.html","4d995fd9c3241a8db1f2e3f4952e5b0c"],["/posts/16145/image/00-a67caa33.jpg","037ff3eb0f564b7946fdd5724b69dc03"],["/posts/16145/image/01-d5529d8e.jpg","73d37a95131faeadb14a79cd2c096fee"],["/posts/16145/image/02-eff42926.jpg","0980a5d6ee21ae67c02c0fbc7fcb6e23"],["/posts/16145/image/03-06df1e16.jpg","7ecafb03622c9350bd1dfb20c696d474"],["/posts/16145/image/04-70de02ab.jpg","d488c831fd9bbe1cb698bb961bed02dc"],["/posts/16145/image/06-957454d5.jpg","26bd4af134a1f42eb2da4081016a5a86"],["/posts/16145/image/213-9e118743.jpg","a36278dcd601040d73c76f069d6806a6"],["/posts/16145/image/22-b3a2d30a.jpg","2166d2c9be077825b3113dd5e8d0b591"],["/posts/16145/image/45-377ce8e5.jpg","9249e2b993977fc22f3cfc2612badd5f"],["/posts/16145/image/55-4dd49fef.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/image/55-cdbaa948.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/index.html","aa7c082198a7469bb77da0f47c45e0f7"],["/posts/16365/image/image-20200207202506472.png","a2576244287ba37f8a220df0ccaeb0fd"],["/posts/16365/image/image-20200207202521917.png","1e2d5f5f22de403e6dae2b8b57708e72"],["/posts/16365/image/image-20200207202904364.png","98ff7e329ee69977d7df89590b4acc5f"],["/posts/16365/index.html","20be4304f421ff77a718d6755fb01364"],["/posts/18068/index.html","f77a21fe1f22407e5e45f04b832b696f"],["/posts/18696/image/image-20200209162308336.png","dddb0c347fa59c26f0c3c9186fe0d6af"],["/posts/18696/image/image-20200209163749921.png","2be42038776c5137f1693e6ca505fe46"],["/posts/18696/image/image-20200209163915066.png","bafabba5e5b4c553c5b2bfce69e31ed9"],["/posts/18696/image/image-20200209164523745.png","5a8ae6914c19ed3c30f755ac7cbfc373"],["/posts/18696/image/image-20200209165031146.png","7590b5c30faede550374123068b166ff"],["/posts/18696/image/image-20200209165430690.png","b59409ad6c6605348e640e54860c8462"],["/posts/18696/index.html","61595f9d5bebbaa6f77fd99cbba394d8"],["/posts/19161/image/20180412.jpg","0ca2004cd19c316fab069488e007d968"],["/posts/19161/index.html","c17f60bb13d649175342d1e3e635dd14"],["/posts/21370/image/000-ae8a4aa8.jpg","dd98b634505694eefda0af5e23832019"],["/posts/21370/image/001-cd3b8434.jpg","a898974845def2b1e22c779935416005"],["/posts/21370/image/777-d100282a.jpg","f46345a60f44c17d7fb74d02d331c015"],["/posts/21370/index.html","c06f465b005e141266e65a85f4fda03a"],["/posts/23477/index.html","4081767ec6d14ddc21274aa3cee8c6c0"],["/posts/23899/image/400分图-5954940f.png","684522f65164badbe32b31d9bd3b8fa6"],["/posts/23899/image/image-110a80ec.png","71e4544a9d0e6c902b7707d36af84058"],["/posts/23899/image/image-324dec1e.png","fa3906af74ddca23ddbec3422352bf31"],["/posts/23899/image/image-451b3c44.png","1dc68f9317bf7b6f4b4ee21bf60cd3fd"],["/posts/23899/image/image-b17c959a.png","1163dc1d791c437b72eb1ccb0c478804"],["/posts/23899/image/今年的主题是蜜汁操作-e47daf6c.png","866f38abffd5fe9da2dc18f6537fb060"],["/posts/23899/image/初始化图-7ca27f11.png","cd3ef1f7df6d1133a948c771bf90d7d1"],["/posts/23899/image/正式赛初始化图一-629d4df2.png","b083365f4fe8d6633377053e8a7a30e1"],["/posts/23899/image/没用的代码-441bf9ea.png","b3c922832e668e33ef2913875286dac9"],["/posts/23899/index.html","5e11c69408a038525cafa55525d400fa"],["/posts/24219/index.html","74c51327910a12e20862ebaf9ad3bbc0"],["/posts/27231/image/image-20200209125042162.png","52a48f6bdd9ca0410c1908d643c26606"],["/posts/27231/image/image-20200209125320664.png","7b742f5d1902c4e06e0d989578bbf0f1"],["/posts/27231/image/image-20200209132706200.png","ddabe4fa22ed9dc1a3a118a546556f3f"],["/posts/27231/image/image-20200209133210073.png","5a5feab29d5311a69e85b80a6b97d2dc"],["/posts/27231/image/image-20200209134109979.png","1161ac278fe8562642ef34e0af6c74fa"],["/posts/27231/index.html","11a38d71690fb45038d46ad2bb0f1586"],["/posts/27440/index.html","1e71ef29ac2a075a2de55e75c14ef5e1"],["/posts/29446/image/image-20200209202720399.png","4ca3d0125b08a8c0aac54ac426123735"],["/posts/29446/image/image-20200209210040137.png","9e784cdaea82e3beb8fa3f7a64d38309"],["/posts/29446/image/image-20200209210745468.png","7174f5cf3f52290425ddb863088201bd"],["/posts/29446/image/image-20200209210843022.png","29cca5587757ae200c666256728dbefe"],["/posts/29446/image/image-20200209211256427.png","06277f0ad341306e8e94bbe99ad4bf59"],["/posts/29446/image/image-20200209211817454.png","a90c179e31d9f5980a09ed0246567585"],["/posts/29446/image/image-20200209211926525.png","216ca63040554d9b748ec316c60bd214"],["/posts/29446/image/image-20200209220339590.png","0a7985bc46061c16a66830d84316f05c"],["/posts/29446/index.html","a8960fde5b5afaef659238a6e62cf2ac"],["/posts/30112/image/image-20210427234654145.png","26bc734e8b4eaf83a9f0b2784948bd61"],["/posts/30112/index.html","553c1a154c8084abbd83ebfe999beaa7"],["/posts/30661/image-20220303204311418.png","32d8bca46464fed9786dd8ebac20887e"],["/posts/30661/index.html","49e034ea658fe5321a735372946f0cad"],["/posts/30661/应急响应流程.png","ec61d08826053f48a89070530068d05c"],["/posts/319/index.html","9021a90ed4b35e4e8ba493cb35ad46c2"],["/posts/32098/index.html","c2b67d3b9c81eb1abf162d2bda59fa16"],["/posts/32725/index.html","cdbb02d2a1f0c51757e60600ee375319"],["/posts/34456/index.html","33116d2e6cdbdebbd4dec1de72104bfb"],["/posts/3493/WechatIMG506 (1).jpg","d43767228577829c5a3b513b713f7973"],["/posts/3493/Xnip2025-02-16_23-16-33.jpg","9ec279e21650ab17e79f0b4f8ea4e0c4"],["/posts/3493/index.html","02e8226688891959f4d2a867bcaf657b"],["/posts/34996/index.html","e1f942ea85fb7579dcc07742f25473e7"],["/posts/35527/index.html","db87ee6a65989d7184eaa00843b975e3"],["/posts/35959/index.html","d80d27ab6ce2e5b529de6e60aeacdf21"],["/posts/35959/百亿补贴02.jpg","4f72068961be0f8f2e2cb396f0804d4a"],["/posts/36015/index.html","ace8436406b5a250a1e3bee64f7005d2"],["/posts/36070/image/image-20200920204619246.png","a074b563f93b093c2e36e0e30d2a6857"],["/posts/36070/image/image-20200920205039959.png","9a73a371ee89c0e6ebeada596fbaba98"],["/posts/36070/image/image-20200920210835074.png","633ae75f456d6140bba9c7222af6ce99"],["/posts/36070/image/image-20200920210903217.png","9d7cd44cfc6d1184b5654966f653b20b"],["/posts/36070/image/image-20200920212324576.png","56093fd4992c21d0bcaefa0faf2d6f93"],["/posts/36070/image/image-20200920212529826.png","873d9666c27c8661c5b6bfee40ee5612"],["/posts/36070/image/image-20200920212857566.png","fba07f4226c822bed273044e7a697302"],["/posts/36070/image/image-20200920214258230.png","aa96770fb043cd15c0502bf080b59fc5"],["/posts/36070/image/image-20200920214307459.png","aa96770fb043cd15c0502bf080b59fc5"],["/posts/36070/image/image-20200920214341838.png","05d6f614c10cfa73bee3b494e96432a8"],["/posts/36070/index.html","17c32987ee2c7b83431ab00293c60298"],["/posts/36368/image/20181008.jpg","8f424f39943ae7e5afbac72478a7db67"],["/posts/36368/index.html","1be979475c8e93a5e3c53f0459ee5b73"],["/posts/3782/image/image-20200727234638460.png","12cd32d6fbfff5340ee03821e03184af"],["/posts/3782/image/image-20200727235114885.png","71f03dd8967163635fce7fdd736916ba"],["/posts/3782/image/image-20200727235431226.png","b1b371ced8f200c1d8817fb8f59fc717"],["/posts/3782/image/image-20200729000729970.png","8223a91678cf40eb413e62e66b6f20d6"],["/posts/3782/image/image-20200729000856356.png","2ebbe43279319bb218d6fc2e2753e2ed"],["/posts/3782/index.html","1b1611219488f4507d062ee7a4ba6d81"],["/posts/38424/image/image-20211122223438126.png","63e633962a680588ff426e71eb83e060"],["/posts/38424/image/image-20211122223948413.png","0443cbe444b5fd3ee619d424f47720fd"],["/posts/38424/image/image-20211122224934185.png","fe2f10ba23d800911f7e8accf4c665f2"],["/posts/38424/image/one.png","2d997f8d56dec6ba89b17d9feb0f93df"],["/posts/38424/index.html","e4bb92334c71f6afe3faccd1eab4ff66"],["/posts/38566/index.html","5b449a132f24c3bed3a7e79c59aa5758"],["/posts/38566/咖啡02.jpg","3c612ed19ac981d1daefd6247d332884"],["/posts/38566/咖啡豆01.jpg","52e4ef56d102c146891a86d8d1005c03"],["/posts/38566/酒01.jpg","9924f44fad7bf6305e197a564bdc6c6b"],["/posts/38797/JPYuz1r.png","7841d869699b6628ceb377e56c806fbd"],["/posts/38797/WX20220821-184301.png","59c65da0a9098085723cb0959dab6d76"],["/posts/38797/WX20220821-223712@2x.png","149de4a9a68dd0b22103252125354d3d"],["/posts/38797/index.html","3883f2493b4f7766990ac6986ea73928"],["/posts/38797/wx20220821-182106_12yxUJeP9.png","22908ad30a3e48de87712163db7bc0c8"],["/posts/39666/image/0590de03d0dbc304ced0b91a48ebbce3.jpg","b8b4861156aa14118bf3d440b1e6aa08"],["/posts/39666/image/251ba7c65dc60f69e82d2d5bfd0278ed.jpg","2f707744aa473744fe34b7fb24520a23"],["/posts/39666/image/44c16e1ce5d7accada45ff9b31465df2.jpg","79cac4d199e7185d5d11f1764a1087b1"],["/posts/39666/image/75ba815ab97061a5cfaba424ab20bb76.jpg","651d3b532fa68502c91100b4aac6cb73"],["/posts/39666/image/Screenshot_20200627-233417.jpg","2b26276b7715d5bb560a25706142191f"],["/posts/39666/image/a80818fdd547528e4becfb6e91e2df9c.jpg","b935a099b4d7d228512f18b1e5d28b6d"],["/posts/39666/image/image-20200627234011452.png","fd623002327881367cfd6a10fd0dae5f"],["/posts/39666/image/image-20200627235206587.png","4577bb67145f24b90b05f168b4ab5ec2"],["/posts/39666/image/image-20200628010245137.png","2a147338fd43a785049a8bbe9cf50957"],["/posts/39666/index.html","851ddb1d568db8a694d9f764d6a7d75b"],["/posts/39918/image/20180228.jpg","a6b3e0d0b536ab5d2b739c6bc56cf802"],["/posts/39918/index.html","fbffa8265a348954c94bc78a20387a5c"],["/posts/40737/image/image-20210614214103812.png","2f8d84df33ead72ef1b90d68d0d06573"],["/posts/40737/image/image-20210614220108871.png","3b5d210588da2bda67e0285821b5ff9e"],["/posts/40737/image/image-20210619223549361.png","114feea6c0da04314f34f78881f0eee2"],["/posts/40737/image/image-20210619225506012.png","b25a9858ee6e93419eb31f1b2747b743"],["/posts/40737/image/image-20210619230139156.png","ca930a2396e51a841bccc780b4939893"],["/posts/40737/index.html","fe5a6cab16c2ed251ce83692f468bba7"],["/posts/40916/image/image-20210409212757426.png","dc1bf54dc05fdcffc0e3322605e59eeb"],["/posts/40916/image/image-20210409213307650.png","576b149da902f26c49f0e4dd84d74373"],["/posts/40916/index.html","2ff1f32034ec4c71cc04be6162c053af"],["/posts/42674/image/企业微信截图_f3db8d3a-8369-44d1-abca-a1f5b5d112f2.png","49184c8514de5e64f6b636fcae424362"],["/posts/42674/index.html","92eaf077efb05f35c06429c7f83f409a"],["/posts/43132/image/image-20200206211138212.png","3ec4f32f7242d30644b132cbee407341"],["/posts/43132/image/image-20200206211355831.png","9df0ed205dfac2af528192679f396663"],["/posts/43132/image/image-20200206211653095.png","75f6559d824a7f1dd97e78cdd26bc457"],["/posts/43132/image/image-20200206233906620.png","562c2bf8cd03b8d49da35dea1186251f"],["/posts/43132/image/image-20200207155954504.png","f28ba8264466958dfe375310ea8d4584"],["/posts/43132/image/image-20200207164311202.png","db3ed72bde0ffa1f119caa0e6b0d73e4"],["/posts/43132/image/image-20200207164921705.png","6556134fdf2234e9e9719cf60f62a49e"],["/posts/43132/image/image-20200207165443256.png","d0c13562433532f1d3c5150272e4ff38"],["/posts/43132/image/image-20200207165602148.png","d2d11c425f1ab34dfd0ac8930a96758e"],["/posts/43132/index.html","54a46b71ff8c6a9a04f4fd4655ca3962"],["/posts/4336/image/image-20200906220920243.png","ee13ac39b7d4fd2da452f3ea4b4dcfe7"],["/posts/4336/image/image-20200906221457582.png","354a387ea6caea16c6ae901ea9db5ed3"],["/posts/4336/image/image-20200906221708486.png","52ef13807f8ac407e9bbee9a44065eb8"],["/posts/4336/image/image-20200906221755199.png","dd96e2dde468dfbed5e4f7486566c3f8"],["/posts/4336/image/image-20200906222002731.png","35114bdb0922a2191c66119e4f714c62"],["/posts/4336/image/image-20200906222236050.png","0657cf4fd6c0cba23d8d7c683aa71778"],["/posts/4336/image/image-20200906222344368.png","b86e2e7fb015301246536796d4395a49"],["/posts/4336/image/image-20200906222448383.png","0c94343313bb7ff0e976dc46fe0557bb"],["/posts/4336/image/image-20200906222756760.png","c42a02b9df21e48f28382e996eb32b44"],["/posts/4336/image/image-20200906223040165.png","3a602d3648062e32a6cbad4eab5e6dff"],["/posts/4336/image/image-20200906223630194.png","0699c2756a1b623deeea769d6332527d"],["/posts/4336/image/image-20200906223931419.png","a1aaedf893b29b9597dfa793718775b0"],["/posts/4336/image/image-20200906224951385.png","2f12a7d24b085520ef282085283b2411"],["/posts/4336/index.html","965e7f1830bf1aef4448018088db3d78"],["/posts/43922/index.html","55737792d9d74fb80ce447b0b5225026"],["/posts/44850/index.html","4114ecb1ef24b2399209114c265e2e0d"],["/posts/44850/wx_camera_1736566759439-2.jpg","63b0e0b8596946f844c75ef030802adf"],["/posts/44850/未命名图片.jpg","ab10608466c149995aa8720fc7d22da3"],["/posts/44907/image/1-03f6473a.jpg","7d846e7d721db73427005424c8168877"],["/posts/44907/image/1-c2ecafe2.png","cdde7ec9692084b60d1e12dd21b3a086"],["/posts/44907/image/11-ea2e2abe.jpg","d61650eb079614a793a1a79c09911f09"],["/posts/44907/image/12-90adc007.jpg","1ae3e1cbc3a2f9b4fcae82695fccb5d9"],["/posts/44907/image/122-039656a8.jpg","f82a774c6b563fd28d44c162ed7fd0c7"],["/posts/44907/image/14-fdef5644.jpg","2ecb8ef73fc089f2f1f8956416760732"],["/posts/44907/image/18-d0f94f24.jpg","7e5ef5a64031e0002ce35e77c3ba5e6f"],["/posts/44907/image/2-149cec78.jpg","9c81d9f2621444980db7b3a7386eb643"],["/posts/44907/image/3-23aad21f.jpg","b120407c48e50ab85fb286897e8245a6"],["/posts/44907/image/4-58a913f2.jpg","fabc94fdd9a07fbd437191690d2af4be"],["/posts/44907/image/5-fbf4a29d.jpg","060c6496a4835404ea342e7f1266b7e1"],["/posts/44907/image/7-3bd27b88.jpg","947a2172ae44e05331a586dc9e47ac9a"],["/posts/44907/image/90-d48f125c.jpg","29e355a379ac7b786369c7277b4e2d7e"],["/posts/44907/image/99-d71cdd95.jpg","c645204a4bb557011f6af198fc1d5253"],["/posts/44907/index.html","4c40dad8618e3c1158a4b6ca8e6e94b2"],["/posts/45990/index.html","ac181a907fd4857c163b458e147a42d8"],["/posts/45990/露营新体验01.png","4eb33d336895377d32b310aef9e4827d"],["/posts/45990/露营新体验02.jpg","4aa5c850c6b8dbf80fc2a88b358b1d43"],["/posts/45990/露营新体验03.jpg","b5c763d20565551143c6b03fcf5b0400"],["/posts/45990/露营新体验04.jpg","0abfabf858ffff16e7797958feb77ade"],["/posts/45990/露营新体验05.jpg","0695ada07970c307d247e977149f75da"],["/posts/45990/露营新体验06.jpg","060f4ea0c06a349f76ddbf7c879fb0a6"],["/posts/45990/露营新体验07.jpg","e678afffa61741a2e0e4b8c4df324373"],["/posts/45990/露营新体验08.jpg","8ee1e06d18b81be9f2db9dd1146eeaa3"],["/posts/46045/WX20220814-222808.png","44213917cd2cbf1894a2e5bafbccdc5c"],["/posts/46045/index.html","3a220b3262be743a54a03bb95884a6bb"],["/posts/4633/image/01-cb7a9fd5.jpg","b086805e7c5e017b347a78dba7754a4f"],["/posts/4633/image/02-25db5a83.jpg","158aea75f27512f25ad9ba502db57c0e"],["/posts/4633/image/03-833d0a48.jpg","11cf27d5cebdc6202310a745bd283208"],["/posts/4633/image/04-16a7870e.jpg","e12c81dfebb253c951d7d8d5271a641b"],["/posts/4633/image/05-8ee015d5.jpg","b1122ab0096930c7b621a1aa4ceb646e"],["/posts/4633/image/06-b474540f.jpg","8547356303f81ab0f9d2319bef8c3893"],["/posts/4633/image/07-f63bc866.jpg","509968f1b44b804b70b9304c6981ddba"],["/posts/4633/image/09-6b237511.jpg","8dc79dd9d7a69f5336825febfd71d8b6"],["/posts/4633/image/10-1b556673.jpg","fd272fd58ffc7eb98bc55650334a673b"],["/posts/4633/image/11-e37e3798.jpg","34836c94d17f56503e545578d5f565b2"],["/posts/4633/image/12-61d62c31.jpg","5ed05bf374bdb4f30ccdfce361d49266"],["/posts/4633/image/15-c9aa66ee.jpg","d1a4d52f70cb2f0db87cfe5c21bb3a82"],["/posts/4633/image/16-69083a1a.jpg","e46c95703eca95185317f507bf8da7d9"],["/posts/4633/image/17-0bc37b46.jpg","e4bfaf1908619f2ac148e2523a5480ae"],["/posts/4633/image/18-47a9acaf.jpg","ff66c00dfb57122ce1f39052b40b2104"],["/posts/4633/image/19-8c36cb41.jpg","a191c5d29056de8070bf53e00611b9e2"],["/posts/4633/image/20-a0dc08b6.jpg","149f0e7913a605dd7b62b53b636a235a"],["/posts/4633/image/21-58f0c8b2.jpg","c491a50304017143ce5adf480662c0d1"],["/posts/4633/image/22-53b0b3ff.jpg","70a68db381dc4f3028227b16e684e587"],["/posts/4633/image/24-2d4f8d4e.jpg","67ffa3ec5d772aee6063b2291e7d53b1"],["/posts/4633/image/25-9914a7c4.jpg","719d61ab2fa5de7218fc05ad2de8d664"],["/posts/4633/image/26-9dffdb76.jpg","ef27115a5add8f5ce273880a1ffd2d8f"],["/posts/4633/image/27-df73c3f3.jpg","a7f7552f3beb506a61ecff768b0662e8"],["/posts/4633/image/28-677b7180.jpg","5bfba8de19fca957e3d5c38caf8dbab1"],["/posts/4633/image/29-2b282816.jpg","829fb4b78b0222024b37d6926f6c3197"],["/posts/4633/image/30-4d5813b6.jpg","704351def2ff9422d468173b2d8ef885"],["/posts/4633/image/31-fa20280b.jpg","2c6bd4c0f64a493c83b8ddcfb30824ef"],["/posts/4633/image/33-3557d72a.jpg","d70ccc5bd63322a0dc146c786a73fc7c"],["/posts/4633/index.html","630acfbb3b2bc97941c74f57d082a906"],["/posts/47811/image/0-20200301214824489.png","ec6843778f7c878f6a1707e0105d2360"],["/posts/47811/image/0-20200301214824520.png","aa024ba378bbdeec7b34c8fd6164a00c"],["/posts/47811/image/0.png","397987e8c60702fbad289e10172a1f39"],["/posts/47811/index.html","411042159419bcaccddbf0e4fbef3622"],["/posts/48733/index.html","71405496cc653209fc7cef529806f62d"],["/posts/49729/image/0-4c9d6e7c.jpg","66a17d1d8c0594af2934d6b7049ad66a"],["/posts/49729/image/1-0fdae5e3.jpg","1e3cac3e6301e6145ef16d7f8321b3c3"],["/posts/49729/image/11-7c982654.jpg","65f8801240a0c3d407c3f0d4815b334c"],["/posts/49729/image/112-90b964a7.jpg","5cb74e111a5a700ad00e6e098e9935e1"],["/posts/49729/image/2-03be334b.jpg","858593ad3ad802959df83ff79acefb9a"],["/posts/49729/image/22-70c89d79.jpg","5e2eaeb4241268d45e7e61faee4ba025"],["/posts/49729/image/3-36ad2e84.jpg","3752f3060b0b9a9402d678914f0b5173"],["/posts/49729/image/33-2a801981.jpg","c2ed8e853ebd8407185c79dac99668cb"],["/posts/49729/image/8-30a2da41.jpg","a9ae8b0e69a02b34061e3d1e87694424"],["/posts/49729/image/88-8ef32fd9.jpg","f0c0d386f699fb5c72707cd535fde1df"],["/posts/49729/image/9-67aa5b4a.jpg","24215f2e5df311b18d72b87c82830f0d"],["/posts/49729/index.html","1b37c0ed7f27249c2c9b3ba06327a81d"],["/posts/4993/image/image-20210210173524708.png","37c1d93d22659eeb78e126e743cdfc18"],["/posts/4993/index.html","478bcef8294a7946d8b0ad85256c8e70"],["/posts/51369/index.html","722e6922ee96532b3a2ebf94df4555ad"],["/posts/51468/index.html","72531f05f8da92f3898e1f3499cb231c"],["/posts/51468/国庆珠海之旅01.jpg","907a0ed973df5e88b17fb921e9f7a35c"],["/posts/51468/国庆珠海之旅02.jpg","84177303afa07ef24dcb3f62cad77121"],["/posts/51468/国庆珠海之旅03.jpg","6387d526e8199ef023a1c980825304c0"],["/posts/51468/国庆珠海之旅04.jpg","ba23cf7f79170198e3c6539373ab9381"],["/posts/51468/国庆珠海之旅05.jpg","092c696e15099c8be009155f3f5c96cb"],["/posts/51468/国庆珠海之旅06.jpg","837e001d8788dad21eb171015e608181"],["/posts/51468/国庆珠海之旅07.jpg","0a094989c098b47724f1057bc30d44e2"],["/posts/51468/国庆珠海之旅08.jpg","b6c5707ff0cbdf6f6af729a73f22fd3a"],["/posts/51468/国庆珠海之旅09.jpg","0ddec82da1b1c19e87830ad144a4af84"],["/posts/51468/国庆珠海之旅10.jpg","2cf02cd3485fdb0e5b3ff55a4e0e2273"],["/posts/51468/国庆珠海之旅11.jpg","ca57950095ecab0d1683c3681bf1dbfb"],["/posts/51468/国庆珠海之旅12.jpg","dd74e087c7d4b7e0e5023b10a30e06d5"],["/posts/51468/国庆珠海之旅13.jpg","0d339d6ddaa6d764ee0e4a1d70b1949c"],["/posts/51468/国庆珠海之旅14.jpg","829a8c348ccd5bf773c0d7165378cd82"],["/posts/51468/国庆珠海之旅15.jpg","7f4251a104019124de8983f66b82c935"],["/posts/51468/国庆珠海之旅16.jpg","49615638ce22d046a61182e0042b51c9"],["/posts/51468/国庆珠海之旅17.jpg","ef06d02b4fa8c9292b9af48fe95e948d"],["/posts/51618/image/00-1d06cb1b.jpg","57afa03bad0789c884e583ae424242f0"],["/posts/51618/image/1-1165c257.jpg","366859b1191e01f3ef6b3601286ac2d1"],["/posts/51618/image/11-251926db.jpg","9ae4eab74b88ef08adc3aea6b3ebeedd"],["/posts/51618/image/112-cc43a1a1.jpg","09f04604b2bd917ee56cfb7a9680d1ee"],["/posts/51618/image/1234-b8341217.jpg","db1e0350faec216b2089b67466405a1d"],["/posts/51618/image/2-89f5292f.jpg","ab6ed9a238072f9b074790845e222e8d"],["/posts/51618/image/213-a58d7afe.jpg","7e650c5a68e9d35dd607269dea26fbe7"],["/posts/51618/image/223-8668c555.jpg","6752d9509a5a0cada416228845c13954"],["/posts/51618/image/3-3c10ee1d.jpg","b1df403dc050297b71cda95583f1d70e"],["/posts/51618/image/321-1ca93611.jpg","251abc63485bb26aafe5b5a91938888b"],["/posts/51618/image/5-1b4a00bc.jpg","e1c3aa0977e6b96123d66fe2cbd5dba1"],["/posts/51618/image/54-cf8af615.jpg","7975ae86a7870f46747ffb70d8c705ac"],["/posts/51618/image/6-7b047070.jpg","683f2030da9a958db689d51f6ee225d4"],["/posts/51618/image/7-7b86d918.jpg","a189f961b52bf6fccdf287e273794448"],["/posts/51618/image/8-22b12969.jpg","78ea0c8c74c9ee3e5c8828f558f1b581"],["/posts/51618/index.html","4a7e29d73fb4968433e804a2f3897664"],["/posts/52711/index.html","ec00f9acd9f4cdd0ca53689b37083c50"],["/posts/5285/image/image-20200920222035121.png","a2e30c03495d5e3a001828f45b3206c3"],["/posts/5285/index.html","610d15e50d32f33d09d04c767d375dc5"],["/posts/5295/index.html","d0f433b3dd0a2a7ebb4642e80ec57cb2"],["/posts/53014/index.html","677ad99c52b883f47ab11ac76ba29c6a"],["/posts/53317/index.html","5e5b866bdb8c00e00cc08fa8cb5ec251"],["/posts/53795/image-20250216201830073.png","b24ced8b8928c48eaffcabdc2104388b"],["/posts/53795/index.html","faea4365e14ebb8c94c6411f0a0fb370"],["/posts/55134/image/1-1373215.png","ab6d6e5f065e904ac7d6854e39bdad17"],["/posts/55134/image/1-1373948.png","1cd36cf9dceb7321ccdc9d8dbd74759e"],["/posts/55134/image/1-1374544.png","a50cbd4373de3333e4efce3666beeebf"],["/posts/55134/image/1-1374929.png","e7cfe2fcbe09ac0585de5f66ec781336"],["/posts/55134/image/1.png","6a2b2960d129cc0e8a959185b96ce1e2"],["/posts/55134/image/2-1374940.png","5aef49a9daac7a28d9a62a879020d030"],["/posts/55134/image/2.png","62741516845c98e27c5b31481c97b5af"],["/posts/55134/image/3.png","c9401a0cc9a8a539baa3121b284c56fb"],["/posts/55134/image/screenshot-20210911-224712.png","79db3aa98e9ccb573463b81643fb32dc"],["/posts/55134/image/screenshot-20210911-225422.png","f10b75699389800ecb93493a455d0f16"],["/posts/55134/index.html","3e9b30970728cb375de9a00848de80c9"],["/posts/55550/index.html","ad01a514a1e11e43ec55bb4e1cd1fd43"],["/posts/55649/index.html","55554e0e69d0b203681d63fccc20e63b"],["/posts/55649/音乐剧很美妙01.jpg","62ce80d77b812c0e6b67eb6b502d436d"],["/posts/55649/音乐剧很美妙02.jpg","494e894d88e89dcc58aeb23100befcb5"],["/posts/55649/音乐剧很美妙03.jpg","a6578908a8965a182373b1144a89d44f"],["/posts/55649/音乐剧很美妙04.jpg","1a9572045392f3f4717ccc3fc42eb7fa"],["/posts/55649/音乐剧很美妙05-3128582.jpg","76115cf794bc34f379919ae9915b6218"],["/posts/55649/音乐剧很美妙05.jpg","76115cf794bc34f379919ae9915b6218"],["/posts/55649/音乐剧很美妙06.jpg","a0f4364c39a5a6c62dc53d3e5ed1a768"],["/posts/55649/音乐剧很美妙07.jpg","1dc98f5626a8faee1fc211518c8427b2"],["/posts/55649/音乐剧很美妙08.jpg","40d7f22309c61ba069c9cc136898621c"],["/posts/55649/音乐剧很美妙09.jpg","2c7c303b64914b0a9b912e93fcd32bf4"],["/posts/55649/音乐剧很美妙10.jpg","eb2cfd8bddc376cec19068ec7cc247d1"],["/posts/55649/音乐剧很美妙11.jpg","dd89675789bad607a9c06bdf97f67446"],["/posts/55649/音乐剧很美妙12.jpg","be8205704d06e14311d897dfe2502c68"],["/posts/56047/image/image-20200920190429014.png","72b35f48a208fc847a6b1d0fcaf1e92e"],["/posts/56047/image/image-20200920191847102.png","6912507cf182ebb962ef809af6e63bd0"],["/posts/56047/image/image-20200920194238412.png","86e54b508e6df841bbbcc7a481a86ca1"],["/posts/56047/image/image-20200920194725899.png","abfcc496ef586ae2787535fb46511542"],["/posts/56047/image/image-20200920194818018.png","f5e8d34765d3e024af6316906d77e85f"],["/posts/56047/image/image-20200920194848168.png","68acb0b38b0aa0d3732fe450f5c5f30c"],["/posts/56047/image/image-20200920195143758.png","b26dbbab25e9debd24d0446d0e9af5c7"],["/posts/56047/image/image-20200920195225059.png","2d622babf2d1012877100b2d5b501695"],["/posts/56047/image/image-20200920195233316.png","2d622babf2d1012877100b2d5b501695"],["/posts/56047/image/image-20200920195531713.png","a4e371a5c746f562550525fd15fe87ab"],["/posts/56047/index.html","454c5c25cf8eebd2153b7a62d74b5546"],["/posts/5644/image/image-20200920225109629.png","23dbf93955e7d03e9ce1f2ce8cd5595d"],["/posts/5644/index.html","863a1e24eaeea0ad549e994277273db8"],["/posts/56570/index.html","aa2e6f9f9182edff1d86b5dd19bae4e5"],["/posts/56588/image/20190115.jpg","20b38232d256072a4d468a77acb3fc6e"],["/posts/56588/index.html","06e7fd379b5e169637c96e22309bd6d7"],["/posts/57095/index.html","e38dbe30cab5223626ae88d1a08fee9c"],["/posts/57631/image/20181231.jpg","df7a543bee0a6ae812c49def48ceaa5a"],["/posts/57631/index.html","42e0a2c55332e233263b3c0e3770ffac"],["/posts/59601/image/image-20210429232229135.png","5e4a8a1a25145442ff135fa448aca65a"],["/posts/59601/index.html","b0fb1572732d2770ea5c4147846664ff"],["/posts/59830/image/1.png","c164caac0f3f9665096528466e065813"],["/posts/59830/image/2.png","9e2f768faaccca8d81e30dcb4449456c"],["/posts/59830/index.html","060eb917ec121b6d56ed08d1ff868b8e"],["/posts/60227/index.html","9b6e2d101027b2141d22d634318aa28e"],["/posts/60384/image/image-20200906231052334.png","8628eb0358ed9116bd9a1ef84e639049"],["/posts/60384/image/image-20200906232233708.png","184a6e6574931ce93e4818451c06f3f0"],["/posts/60384/image/image-20200906232432373.png","15d85c8d35bffe77743e661f7e7b2557"],["/posts/60384/image/image-20200906232543363.png","dce96f8a77ef6b58dfb25f13e59a7f2a"],["/posts/60384/index.html","d843c31b23017c0c0c19d10e0f6fe2ce"],["/posts/60970/image/IMG_20200314_144751.jpg","51ffb3934f7fe82163f5719145641cbc"],["/posts/60970/image/image-20200627175825802.png","6d4fb46f2db226466634863649c9b56c"],["/posts/60970/image/image-20200627181405622.png","7eb698a1362791355daf732268539ed8"],["/posts/60970/image/mmexport1584172171071.jpg","7fa1fa699340849f3afea9fef65bf538"],["/posts/60970/image/mmexport1584177084229.jpg","87f3c09f3c7e9848ac845743651a8cb9"],["/posts/60970/index.html","2e39e1cd1ccf7a917fcb0deac6eaa044"],["/posts/61167/image/1575651117499.png","746f8424cbaf779f0dee88c857507f65"],["/posts/61167/image/1575651135109.png","3d8c29ae2b9b4c42784655e7556d5171"],["/posts/61167/image/1575651150846.png","cbcf17ae0b7bacf279f1b557f866e07a"],["/posts/61167/image/1575651164367.png","c534a7a9fe5e63d840c872098bf12e61"],["/posts/61167/image/1575651177976.png","a863c94fac90ea76497665df38ab93b0"],["/posts/61167/image/1575651192178.png","a33a32dca18123b98161bcdd49d412db"],["/posts/61167/image/1575651208252.png","a384ccf1b0372715536a2e65270f8e60"],["/posts/61167/image/1575651225157.png","bd8f4a7179ff432af7dcc0ecf36b8e3a"],["/posts/61167/image/1575651239326.png","65b55eb80aa3f3419ddcb8228dcd1a82"],["/posts/61167/image/1575651254769.png","2dae7d43bf82f965ee153b9bf0297cd4"],["/posts/61167/image/favicon.jpg","c918b9d9bb699071d52e219b029ed874"],["/posts/61167/index.html","e5d5c51d35e9b4af9877e067f5bf6945"],["/posts/62350/image/image-20200209171819914.png","ac3c00787bf226c18360ed20dedfc08f"],["/posts/62350/image/image-20200209172113560.png","dbb6fd650d23bd1edda4870239bd43a8"],["/posts/62350/image/image-20200209172535834.png","c57f1112ecf397db5ee985e9c031364a"],["/posts/62350/image/image-20200209174037280.png","efbcd49f8615923b34d77c65a4cd9ddc"],["/posts/62350/image/image-20200209174305852.png","b0bef92487fc9b644057ee070a59fd71"],["/posts/62350/image/image-20200209174746426.png","7405ca08b838e8a5856e293c4dd4b5e3"],["/posts/62350/index.html","3ea82f475b191c9be19012516e6389d1"],["/posts/62891/index.html","e188cb5fcf83cbb934ac91a714bed1a2"],["/posts/6606/index.html","59876536ddd6aa3adbaa99d2765b5023"],["/posts/6889/index.html","cb4546d6c717f6b5441fc2f7fbbd09f2"],["/posts/7376/image/image-20200907232315224.png","56e986ba47f3acb6bcad5ea68b39fd06"],["/posts/7376/image/image-20200907233321242.png","eff28edebf1e3c346059b72fe5f78f1a"],["/posts/7376/image/image-20200907235343778.png","4ec20429a9f6722bd17325bc191a56d6"],["/posts/7376/index.html","d6437b59809899b880bcf2a0583d8962"],["/posts/7511/image/11-0f14b251.jpg","7a48ac942d93c6cdc017901523911f1c"],["/posts/7511/image/111-93e55faf.jpg","c7dfd0991eb6d1740a05335bbe64bbbb"],["/posts/7511/image/112-a9636c7f.jpg","5ccb8bea8a24e0a1ba0385a1f124eb1f"],["/posts/7511/image/123-36474d5b.jpg","ced026b4e02cda1c3d00c1ae8e820c26"],["/posts/7511/image/232-fd67e718.jpg","8e7df1e175817abca468e799ddc05de9"],["/posts/7511/image/321-446541fa.jpg","3bfbd6e7debf7d5e3b434d0218dbdf0a"],["/posts/7511/image/33-4f3ffb2e.jpg","0ff5de724687c45e98414fac583e4f89"],["/posts/7511/image/333-ab9bdeb6.jpg","11d2a96ef978bab3abce7fdadd036905"],["/posts/7511/image/432-99cf3d13.jpg","87199038347e3e0a7b700358fdaea6a4"],["/posts/7511/index.html","a201279c50ad828ed62fa18734fb39e8"],["/posts/7931/index.html","209aaa25255082d594715a879c3048b7"],["/posts/8133/index.html","a179a83ad18bfb7d8e2bda63fe3cdeca"],["/posts/9831/index.html","36aca8fe62b1097c0991db1e468998cb"],["/project/index.html","2e759bc4e95c2c600e9f1c68e88f9e03"],["/sw-register.js","7b15f6ccc611f4288a0a2795631ca01c"],["/tags/Community-service/index.html","fc6ddefaa80a744c14a010746b2b531b"],["/tags/Engineer-Management/index.html","b46128a153d4ccf266aa1f381b077efb"],["/tags/FESTIVAL/index.html","b649795dd57d86852d8b0a8b16e9cb31"],["/tags/High-school-reunion/index.html","72db309a3c26532fefa0998f1ce2e31b"],["/tags/Intern/index.html","2f8fa9a8b078df4e8349be5102a84171"],["/tags/Personal-Letter/index.html","e0619765cdaf41e599095287f03f8498"],["/tags/Public-Events/index.html","2abbb51599c25a7697adfd3900ed87d2"],["/tags/Spring-Festival/index.html","ba66279235f2fdb270142788a9615167"],["/tags/Technology-Product/index.html","aee179720927b70121cbe072698c0ae5"],["/tags/book/index.html","8b3c4fdc2203ba14c886d0e9f2a9bee9"],["/tags/campus/index.html","b58a0b6579da10650a1cb0b53baddb51"],["/tags/campus/page/2/index.html","72545718381706c0b7e967f48f822f80"],["/tags/company/index.html","91e24f0ba4d44276c62ca5bdf37f2de6"],["/tags/competition/index.html","c8c22daa5300ee6761cde8d4f6a30c92"],["/tags/computer/index.html","3399a63239a164c934210700d7f7ab7e"],["/tags/digital-product/index.html","6928efab006973c0c3da3d63743679f6"],["/tags/foods/index.html","64c24da2e312fa0f7b038c28a3e85165"],["/tags/game/index.html","64e595cfbe8ef67a0f142e86a37f577a"],["/tags/graduation/index.html","ffd0ae0139228e578a69cdff02088719"],["/tags/happy/index.html","5d9efca0b72bb132a710d64b18bffc6d"],["/tags/hello-world/index.html","9c07e96374f9e12ef6f26277c483b741"],["/tags/holiday-activities/index.html","c0c816899be00a7ffb3b244ccb998e3e"],["/tags/insp/index.html","23146105a05b964d33dadc7ccc273301"],["/tags/life/index.html","12a1e413580341b710a779c3a72f301c"],["/tags/manage-finances/index.html","4fd4d7a8257a1bdb15f00db5da698a5e"],["/tags/movie/index.html","e063dc1b3c0bd5ccd4fea8d49c64ae5a"],["/tags/movies/index.html","3836a65aacd7abb3945a93b95c8129ad"],["/tags/music/index.html","3b9dbf2b37ef6a770fa6b9adae14cb3c"],["/tags/network-security/index.html","f923a402b5c0ba558885cd1697bfa1c9"],["/tags/reunion/index.html","8e45cc32109b587622ca4cdf4fb0ae8f"],["/tags/social-activity/index.html","8bb6a838f1acecce7fd5d343b7fbabc0"],["/tags/social-activity/page/2/index.html","03034edace08d9c4595d85a1ddc8ec53"],["/tags/src/index.html","a0e2c885abb5477eafddcd343f58a4bf"],["/tags/technology/index.html","a3614129dcffe19b1da8d6c86ce09cc5"],["/tags/thoughts/index.html","3428deff222504e872e079de746a9757"],["/tags/value-ideas/index.html","dbbc2e4b985b8e22119a327140dc1c2f"],["/tags/work-place/index.html","487176c50cea62b98a851c74269df3bd"]];
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
