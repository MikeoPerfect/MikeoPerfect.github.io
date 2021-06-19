/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2815710c486d47c95c3441d776f85847"],["/about/index.html","53e3919ce68da58f30bca3bda33a7535"],["/archives/2015/03/index.html","24fc9a4599a747e6fe1d4c992f34c0bb"],["/archives/2015/05/index.html","545b5fd909a63616f6cec1ba6c0d78f3"],["/archives/2015/index.html","90db484373ca0a2acca3bfad57094393"],["/archives/2018/01/index.html","ea2949d5dccc6d8ab50dd50696e25c49"],["/archives/2018/04/index.html","d0787722ecd5af59e3656c98fba8c2e5"],["/archives/2018/05/index.html","b2dd2d8b52d3bd09b006c997a82c1e50"],["/archives/2018/06/index.html","0985103601e459d9d2728f584d1bb5fb"],["/archives/2018/07/index.html","7e9020e1e1135820c7ee767409971888"],["/archives/2018/08/index.html","05d0874c409d4fafcae7e1760339ff54"],["/archives/2018/11/index.html","2772bc134bf9bd1adc5195f3701fa0d3"],["/archives/2018/index.html","cfc0842d6ff7e32e799397fe0861861c"],["/archives/2018/page/2/index.html","fac28eaf3f1c817779c4c70e8e815b64"],["/archives/2019/01/index.html","aca5a94d2633b6acb45671f43538ff7d"],["/archives/2019/02/index.html","395ed5df9efc5a3f26f567bae0a55600"],["/archives/2019/04/index.html","1315d59f2709abd65f5587d592c5c289"],["/archives/2019/05/index.html","3d41393e3c99b4d10b165b66e8d34937"],["/archives/2019/06/index.html","8e283d42fa7770402cff19f0646d5430"],["/archives/2019/08/index.html","d4467c5a940c4c545037d2a55d60a153"],["/archives/2019/10/index.html","a4d583806795cb4a1b1d5ddff0eab7cd"],["/archives/2019/12/index.html","5d54e07ee8c1d925a612e4af7fc508fc"],["/archives/2019/index.html","566abc62d3315e7795a98b20a5aac5ea"],["/archives/2020/01/index.html","6eefbc04ae3500a4b9134caea2634819"],["/archives/2020/02/index.html","6a882441e2fbe2f2c4e55e83473e1210"],["/archives/2020/03/index.html","41ecd74195c3d541e8076e259195e789"],["/archives/2020/05/index.html","fd0388e14c0ff2453ddbc319a8460fbc"],["/archives/2020/06/index.html","f9856aea71e56cf98cd3ba7ff104200e"],["/archives/2020/07/index.html","cba378ed72bbe5e1477877ced0c538c7"],["/archives/2020/08/index.html","5f8e6ae8d18f50b7a3a8435fe980009b"],["/archives/2020/09/index.html","f14242b14558ba3298bf3a9f8bcff8d1"],["/archives/2020/10/index.html","66f49b9990517f5567e6d06369e23eee"],["/archives/2020/index.html","031914d954bfec2eaed322c38d910d8e"],["/archives/2020/page/2/index.html","09f6dde6eec2905b334e32348cef0114"],["/archives/2021/01/index.html","779b7d01a1602321356cd47c391da464"],["/archives/2021/02/index.html","68a3269013cf1bc89042492756deb527"],["/archives/2021/03/index.html","098e073ccf0030b6a25f38aad195f362"],["/archives/2021/04/index.html","5ec505cdf69d9c992c68b524b2402005"],["/archives/2021/index.html","761b3ac944d391211d5cb10a0b2453c3"],["/archives/index.html","80d20fd18818a3d45b726723c80dc78f"],["/archives/page/2/index.html","64d0496c434a5525e09915fafbe06eca"],["/archives/page/3/index.html","cdf1251472ccf1a5f7d6aefb1bc5d5f3"],["/archives/page/4/index.html","f2fabffd39cf2911c677514fca4d2efe"],["/archives/page/5/index.html","f401eaa2cb62e22571322518c3faaa50"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ACTIVITY/index.html","145f5052796251e8e6f0ea1566d043e6"],["/categories/APP/index.html","5a2b7af4013de7a779b34f050249dd52"],["/categories/BOOK-NOTES/index.html","c8de403638e774de5be7032fe3458ee4"],["/categories/CAMPUS/index.html","ca920ca24c03b7d0f08b0768d985952a"],["/categories/CAMPUS/page/2/index.html","4442b3d9f8c0280afafdea1582259579"],["/categories/DIGITAL-PRODUCT/index.html","46e26a2edd097f696b55e5ceea448fec"],["/categories/FINANCES/index.html","7df860765299c7ab0a52ae0f51e6cf46"],["/categories/MOVIES/index.html","009aa271321332fa590a3f03c79a36d9"],["/categories/PEARL-BOX/index.html","362c5e3c80e72b3ba067973bb57337f0"],["/categories/REUNION/index.html","bdfebde19f56402120dd63031f337398"],["/categories/Spring-Festival/index.html","5bc7e95eb267c3f2bfba9251fa24f797"],["/categories/TECHNOLOGY/index.html","b10d9fa63a75a8915380bb564a7b55e2"],["/categories/THOUGHTS/index.html","68b87e2e476d0e93328b5611e9d7b18b"],["/categories/VEDIO/index.html","e45cd862af94a590b81d67f2e1002d5e"],["/categories/WORKPLACE/index.html","bde6dcdfbf55b2015f3385f1518b665c"],["/categories/hello-world/index.html","bd7943667080643e3255b76058528605"],["/categories/init/index.html","652994afcaa1b13f63260db3729c7383"],["/css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/css/donate.css","a68e4a34e814ce3334186286f4655440"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","7ba514c97d7616d09e2ea935d6fe6ec4"],["/donate/index.html","68376832e52af18eaa49fa016f755c1e"],["/favicon.ico","82e181c24cdcb79f7457d97e6dd50c1c"],["/history/index.html","3ce64c7ad23d73c698f42d1026e5d792"],["/img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["/img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["/img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["/img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["/img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/index.html","fb1e7728ecb0a96b2db630e235fff11e"],["/js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["/js/donate.js","c5119c5bdd5049d805e03af774a47472"],["/js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["/js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["/js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["/js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/toc.js","aa681b733f400634fc116211ce70248d"],["/js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/page/2/index.html","0625c2ecc275b4f21133ca03a1986278"],["/page/3/index.html","d9c5289be61b52be7c1a39155bb0979c"],["/page/4/index.html","0a3f215bc8c16fc70ccd9a1eb84656a0"],["/page/5/index.html","c690849cd1492706e7f99d3a48261962"],["/page/6/index.html","5cd8704dcc8fc20e0b7b13b0ca802710"],["/page/7/index.html","9553ed0c5b8c01535da6a74ef372145c"],["/posts/14062/image/image-20200209211817454.png","1c6bd4a2da69e3fbf62e6e1f6c294fd0"],["/posts/14062/image/image-20200308182926949.png","d2f5d8a678d6aeddd4399dd0ebadef7e"],["/posts/14062/image/image-20200308185322824.png","8b180754a2c731618a2003504fa1f5d7"],["/posts/14062/image/image-20200308191954342.png","93786a7fc17a463b81a5e703a45215d7"],["/posts/14062/image/image-20200308194044483.png","1117050eced5491b95a0ad86b6a1561b"],["/posts/14062/image/image-20200308194542633.png","65fc3dbad7d0eed60ff4dc3ab74820f8"],["/posts/14062/image/image-20200625175346121.png","bcc335362f1abaa5eb02380922b9dbc7"],["/posts/14062/index.html","f546258ea8c3717b976846d5402a1efc"],["/posts/15059/image/image-20200209223336765.png","a58bd67fbab4531b377ff99c8898c376"],["/posts/15059/image/image-20200209223657842.png","33576193ae78ad13a3f7a60e44c95725"],["/posts/15059/image/image-20200209223906448.png","b15343097e915bd6c8d87b152c6d6170"],["/posts/15059/image/image-20200209224704457.png","bb847d306111503de6ad8310163d1c15"],["/posts/15059/image/image-20200209224841814.png","a5cbc4a3a1e371668f2de59d768bb311"],["/posts/15059/image/image-20200209225016194.png","d5b13dbade91cb1bda7d306492866a54"],["/posts/15059/index.html","fa3de29b888b0c3d4ca5b638f801861f"],["/posts/16107/index.html","1e85f09f907c22fc6959967c6e87fb20"],["/posts/16145/image/00-a67caa33.jpg","037ff3eb0f564b7946fdd5724b69dc03"],["/posts/16145/image/01-d5529d8e.jpg","73d37a95131faeadb14a79cd2c096fee"],["/posts/16145/image/02-eff42926.jpg","0980a5d6ee21ae67c02c0fbc7fcb6e23"],["/posts/16145/image/03-06df1e16.jpg","7ecafb03622c9350bd1dfb20c696d474"],["/posts/16145/image/04-70de02ab.jpg","d488c831fd9bbe1cb698bb961bed02dc"],["/posts/16145/image/06-957454d5.jpg","26bd4af134a1f42eb2da4081016a5a86"],["/posts/16145/image/213-9e118743.jpg","a36278dcd601040d73c76f069d6806a6"],["/posts/16145/image/22-b3a2d30a.jpg","2166d2c9be077825b3113dd5e8d0b591"],["/posts/16145/image/45-377ce8e5.jpg","9249e2b993977fc22f3cfc2612badd5f"],["/posts/16145/image/55-4dd49fef.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/image/55-cdbaa948.jpg","5a4dcc5060d475424cf3d58a9282fe94"],["/posts/16145/index.html","3497446cb65570e1c0edc0ba947159a9"],["/posts/16365/image/image-20200207202506472.png","a2576244287ba37f8a220df0ccaeb0fd"],["/posts/16365/image/image-20200207202521917.png","1e2d5f5f22de403e6dae2b8b57708e72"],["/posts/16365/image/image-20200207202904364.png","98ff7e329ee69977d7df89590b4acc5f"],["/posts/16365/index.html","917a9469cb8e3f49e4a39111519111ee"],["/posts/18696/image/image-20200209162308336.png","dddb0c347fa59c26f0c3c9186fe0d6af"],["/posts/18696/image/image-20200209163749921.png","2be42038776c5137f1693e6ca505fe46"],["/posts/18696/image/image-20200209163915066.png","bafabba5e5b4c553c5b2bfce69e31ed9"],["/posts/18696/image/image-20200209164523745.png","5a8ae6914c19ed3c30f755ac7cbfc373"],["/posts/18696/image/image-20200209165031146.png","7590b5c30faede550374123068b166ff"],["/posts/18696/image/image-20200209165430690.png","b59409ad6c6605348e640e54860c8462"],["/posts/18696/index.html","a20093f3d8090779e54f903dc2394f14"],["/posts/19161/image/20180412.jpg","0ca2004cd19c316fab069488e007d968"],["/posts/19161/index.html","7439d6346bed8d57fc0f9251c495ca11"],["/posts/21370/image/000-ae8a4aa8.jpg","dd98b634505694eefda0af5e23832019"],["/posts/21370/image/001-cd3b8434.jpg","a898974845def2b1e22c779935416005"],["/posts/21370/image/777-d100282a.jpg","f46345a60f44c17d7fb74d02d331c015"],["/posts/21370/index.html","06c05e42895cecccb59aac2b65f39c23"],["/posts/23477/index.html","29475fe4cd9771a8616f24ab05bc0516"],["/posts/23899/image/400分图-5954940f.png","684522f65164badbe32b31d9bd3b8fa6"],["/posts/23899/image/image-110a80ec.png","71e4544a9d0e6c902b7707d36af84058"],["/posts/23899/image/image-324dec1e.png","fa3906af74ddca23ddbec3422352bf31"],["/posts/23899/image/image-451b3c44.png","1dc68f9317bf7b6f4b4ee21bf60cd3fd"],["/posts/23899/image/image-b17c959a.png","1163dc1d791c437b72eb1ccb0c478804"],["/posts/23899/image/今年的主题是蜜汁操作-e47daf6c.png","866f38abffd5fe9da2dc18f6537fb060"],["/posts/23899/image/初始化图-7ca27f11.png","cd3ef1f7df6d1133a948c771bf90d7d1"],["/posts/23899/image/正式赛初始化图一-629d4df2.png","b083365f4fe8d6633377053e8a7a30e1"],["/posts/23899/image/没用的代码-441bf9ea.png","b3c922832e668e33ef2913875286dac9"],["/posts/23899/index.html","36a6d0e17cb915245b22ea75e0541ee3"],["/posts/27231/image/image-20200209125042162.png","52a48f6bdd9ca0410c1908d643c26606"],["/posts/27231/image/image-20200209125320664.png","7b742f5d1902c4e06e0d989578bbf0f1"],["/posts/27231/image/image-20200209132706200.png","ddabe4fa22ed9dc1a3a118a546556f3f"],["/posts/27231/image/image-20200209133210073.png","5a5feab29d5311a69e85b80a6b97d2dc"],["/posts/27231/image/image-20200209134109979.png","1161ac278fe8562642ef34e0af6c74fa"],["/posts/27231/index.html","cab4266d7470cc58a35cfd3412bc7d5c"],["/posts/29446/image/image-20200209202720399.png","4ca3d0125b08a8c0aac54ac426123735"],["/posts/29446/image/image-20200209210040137.png","9e784cdaea82e3beb8fa3f7a64d38309"],["/posts/29446/image/image-20200209210745468.png","7174f5cf3f52290425ddb863088201bd"],["/posts/29446/image/image-20200209210843022.png","29cca5587757ae200c666256728dbefe"],["/posts/29446/image/image-20200209211256427.png","06277f0ad341306e8e94bbe99ad4bf59"],["/posts/29446/image/image-20200209211817454.png","a90c179e31d9f5980a09ed0246567585"],["/posts/29446/image/image-20200209211926525.png","216ca63040554d9b748ec316c60bd214"],["/posts/29446/image/image-20200209220339590.png","0a7985bc46061c16a66830d84316f05c"],["/posts/29446/index.html","06690aba3c6210f75f0b55b6462f38d4"],["/posts/30112/image/image-20210427234654145.png","26bc734e8b4eaf83a9f0b2784948bd61"],["/posts/30112/index.html","35ce3a703917f9998ed640849de445e6"],["/posts/36070/image/image-20200920204619246.png","a074b563f93b093c2e36e0e30d2a6857"],["/posts/36070/image/image-20200920205039959.png","9a73a371ee89c0e6ebeada596fbaba98"],["/posts/36070/image/image-20200920210835074.png","633ae75f456d6140bba9c7222af6ce99"],["/posts/36070/image/image-20200920210903217.png","9d7cd44cfc6d1184b5654966f653b20b"],["/posts/36070/image/image-20200920212324576.png","56093fd4992c21d0bcaefa0faf2d6f93"],["/posts/36070/image/image-20200920212529826.png","873d9666c27c8661c5b6bfee40ee5612"],["/posts/36070/image/image-20200920212857566.png","fba07f4226c822bed273044e7a697302"],["/posts/36070/image/image-20200920214258230.png","aa96770fb043cd15c0502bf080b59fc5"],["/posts/36070/image/image-20200920214307459.png","aa96770fb043cd15c0502bf080b59fc5"],["/posts/36070/image/image-20200920214341838.png","05d6f614c10cfa73bee3b494e96432a8"],["/posts/36070/index.html","cc5062e9e316f5f9b9509c6d480ab7a0"],["/posts/36368/image/20181008.jpg","8f424f39943ae7e5afbac72478a7db67"],["/posts/36368/index.html","be84a77e57a22f2716c391e8db8b5cec"],["/posts/3782/image/image-20200727234638460.png","af8df8f44557ad9b42db66a83494bafe"],["/posts/3782/image/image-20200727235114885.png","20101da38d80e8c1f2317d8108f02112"],["/posts/3782/image/image-20200727235431226.png","99af2a91c1fbcae7cfbac804143cb376"],["/posts/3782/image/image-20200729000729970.png","a4779db73db7c397b98da898037d08b5"],["/posts/3782/image/image-20200729000856356.png","3e45cd9122507ae59cef59bcfd0d5cf0"],["/posts/3782/index.html","095f6c689ec21909bad61d151940f0f8"],["/posts/39666/image/0590de03d0dbc304ced0b91a48ebbce3.jpg","b8b4861156aa14118bf3d440b1e6aa08"],["/posts/39666/image/251ba7c65dc60f69e82d2d5bfd0278ed.jpg","2f707744aa473744fe34b7fb24520a23"],["/posts/39666/image/44c16e1ce5d7accada45ff9b31465df2.jpg","79cac4d199e7185d5d11f1764a1087b1"],["/posts/39666/image/75ba815ab97061a5cfaba424ab20bb76.jpg","651d3b532fa68502c91100b4aac6cb73"],["/posts/39666/image/Screenshot_20200627-233417.jpg","2b26276b7715d5bb560a25706142191f"],["/posts/39666/image/a80818fdd547528e4becfb6e91e2df9c.jpg","b935a099b4d7d228512f18b1e5d28b6d"],["/posts/39666/image/image-20200627234011452.png","fd623002327881367cfd6a10fd0dae5f"],["/posts/39666/image/image-20200627235206587.png","4577bb67145f24b90b05f168b4ab5ec2"],["/posts/39666/image/image-20200628010245137.png","2a147338fd43a785049a8bbe9cf50957"],["/posts/39666/index.html","bed44943765b5c6f03c9abab67154c27"],["/posts/39918/image/20180228.jpg","a6b3e0d0b536ab5d2b739c6bc56cf802"],["/posts/39918/index.html","8cc47cf85651c506a9f4073350f0aba1"],["/posts/40737/image/image-20210614214103812.png","2f8d84df33ead72ef1b90d68d0d06573"],["/posts/40737/image/image-20210614220108871.png","3b5d210588da2bda67e0285821b5ff9e"],["/posts/40737/image/image-20210619223549361.png","114feea6c0da04314f34f78881f0eee2"],["/posts/40737/image/image-20210619225506012.png","b25a9858ee6e93419eb31f1b2747b743"],["/posts/40737/image/image-20210619230139156.png","ca930a2396e51a841bccc780b4939893"],["/posts/40737/index.html","4feb8d2f2eff6e0c4b51a41e01baf2ff"],["/posts/40916/image/image-20210409212757426.png","dc1bf54dc05fdcffc0e3322605e59eeb"],["/posts/40916/image/image-20210409213307650.png","576b149da902f26c49f0e4dd84d74373"],["/posts/40916/index.html","a58232f7f4c5b2b46a8e6776a3a215ce"],["/posts/42674/image/企业微信截图_f3db8d3a-8369-44d1-abca-a1f5b5d112f2.png","49184c8514de5e64f6b636fcae424362"],["/posts/42674/index.html","4442d6b06cc893baed47d80626976d38"],["/posts/43132/image/image-20200206211138212.png","3ec4f32f7242d30644b132cbee407341"],["/posts/43132/image/image-20200206211355831.png","9df0ed205dfac2af528192679f396663"],["/posts/43132/image/image-20200206211653095.png","75f6559d824a7f1dd97e78cdd26bc457"],["/posts/43132/image/image-20200206233906620.png","562c2bf8cd03b8d49da35dea1186251f"],["/posts/43132/image/image-20200207155954504.png","f28ba8264466958dfe375310ea8d4584"],["/posts/43132/image/image-20200207164311202.png","db3ed72bde0ffa1f119caa0e6b0d73e4"],["/posts/43132/image/image-20200207164921705.png","6556134fdf2234e9e9719cf60f62a49e"],["/posts/43132/image/image-20200207165443256.png","d0c13562433532f1d3c5150272e4ff38"],["/posts/43132/image/image-20200207165602148.png","d2d11c425f1ab34dfd0ac8930a96758e"],["/posts/43132/index.html","a63e24a9c547898f2dee4a6c3fb8d0d7"],["/posts/4336/image/image-20200906220920243.png","ee13ac39b7d4fd2da452f3ea4b4dcfe7"],["/posts/4336/image/image-20200906221457582.png","354a387ea6caea16c6ae901ea9db5ed3"],["/posts/4336/image/image-20200906221708486.png","52ef13807f8ac407e9bbee9a44065eb8"],["/posts/4336/image/image-20200906221755199.png","dd96e2dde468dfbed5e4f7486566c3f8"],["/posts/4336/image/image-20200906222002731.png","35114bdb0922a2191c66119e4f714c62"],["/posts/4336/image/image-20200906222236050.png","0657cf4fd6c0cba23d8d7c683aa71778"],["/posts/4336/image/image-20200906222344368.png","b86e2e7fb015301246536796d4395a49"],["/posts/4336/image/image-20200906222448383.png","0c94343313bb7ff0e976dc46fe0557bb"],["/posts/4336/image/image-20200906222756760.png","c42a02b9df21e48f28382e996eb32b44"],["/posts/4336/image/image-20200906223040165.png","3a602d3648062e32a6cbad4eab5e6dff"],["/posts/4336/image/image-20200906223630194.png","0699c2756a1b623deeea769d6332527d"],["/posts/4336/image/image-20200906223931419.png","a1aaedf893b29b9597dfa793718775b0"],["/posts/4336/image/image-20200906224951385.png","2f12a7d24b085520ef282085283b2411"],["/posts/4336/index.html","a223d6d202b23800baa375c27aea4ef1"],["/posts/43922/index.html","4ff07538a999d49b7dc4b29e782bd4cb"],["/posts/44907/image/1-03f6473a.jpg","7d846e7d721db73427005424c8168877"],["/posts/44907/image/1-c2ecafe2.png","cdde7ec9692084b60d1e12dd21b3a086"],["/posts/44907/image/11-ea2e2abe.jpg","d61650eb079614a793a1a79c09911f09"],["/posts/44907/image/12-90adc007.jpg","1ae3e1cbc3a2f9b4fcae82695fccb5d9"],["/posts/44907/image/122-039656a8.jpg","f82a774c6b563fd28d44c162ed7fd0c7"],["/posts/44907/image/14-fdef5644.jpg","2ecb8ef73fc089f2f1f8956416760732"],["/posts/44907/image/18-d0f94f24.jpg","7e5ef5a64031e0002ce35e77c3ba5e6f"],["/posts/44907/image/2-149cec78.jpg","9c81d9f2621444980db7b3a7386eb643"],["/posts/44907/image/3-23aad21f.jpg","b120407c48e50ab85fb286897e8245a6"],["/posts/44907/image/4-58a913f2.jpg","fabc94fdd9a07fbd437191690d2af4be"],["/posts/44907/image/5-fbf4a29d.jpg","060c6496a4835404ea342e7f1266b7e1"],["/posts/44907/image/7-3bd27b88.jpg","947a2172ae44e05331a586dc9e47ac9a"],["/posts/44907/image/90-d48f125c.jpg","29e355a379ac7b786369c7277b4e2d7e"],["/posts/44907/image/99-d71cdd95.jpg","c645204a4bb557011f6af198fc1d5253"],["/posts/44907/index.html","87c810fa93a2fd3a17581ca1bd2e9ebb"],["/posts/4633/image/01-cb7a9fd5.jpg","b086805e7c5e017b347a78dba7754a4f"],["/posts/4633/image/02-25db5a83.jpg","158aea75f27512f25ad9ba502db57c0e"],["/posts/4633/image/03-833d0a48.jpg","11cf27d5cebdc6202310a745bd283208"],["/posts/4633/image/04-16a7870e.jpg","e12c81dfebb253c951d7d8d5271a641b"],["/posts/4633/image/05-8ee015d5.jpg","b1122ab0096930c7b621a1aa4ceb646e"],["/posts/4633/image/06-b474540f.jpg","8547356303f81ab0f9d2319bef8c3893"],["/posts/4633/image/07-f63bc866.jpg","509968f1b44b804b70b9304c6981ddba"],["/posts/4633/image/09-6b237511.jpg","8dc79dd9d7a69f5336825febfd71d8b6"],["/posts/4633/image/10-1b556673.jpg","fd272fd58ffc7eb98bc55650334a673b"],["/posts/4633/image/11-e37e3798.jpg","34836c94d17f56503e545578d5f565b2"],["/posts/4633/image/12-61d62c31.jpg","5ed05bf374bdb4f30ccdfce361d49266"],["/posts/4633/image/15-c9aa66ee.jpg","d1a4d52f70cb2f0db87cfe5c21bb3a82"],["/posts/4633/image/16-69083a1a.jpg","e46c95703eca95185317f507bf8da7d9"],["/posts/4633/image/17-0bc37b46.jpg","e4bfaf1908619f2ac148e2523a5480ae"],["/posts/4633/image/18-47a9acaf.jpg","ff66c00dfb57122ce1f39052b40b2104"],["/posts/4633/image/19-8c36cb41.jpg","a191c5d29056de8070bf53e00611b9e2"],["/posts/4633/image/20-a0dc08b6.jpg","149f0e7913a605dd7b62b53b636a235a"],["/posts/4633/image/21-58f0c8b2.jpg","c491a50304017143ce5adf480662c0d1"],["/posts/4633/image/22-53b0b3ff.jpg","70a68db381dc4f3028227b16e684e587"],["/posts/4633/image/24-2d4f8d4e.jpg","67ffa3ec5d772aee6063b2291e7d53b1"],["/posts/4633/image/25-9914a7c4.jpg","719d61ab2fa5de7218fc05ad2de8d664"],["/posts/4633/image/26-9dffdb76.jpg","ef27115a5add8f5ce273880a1ffd2d8f"],["/posts/4633/image/27-df73c3f3.jpg","a7f7552f3beb506a61ecff768b0662e8"],["/posts/4633/image/28-677b7180.jpg","5bfba8de19fca957e3d5c38caf8dbab1"],["/posts/4633/image/29-2b282816.jpg","829fb4b78b0222024b37d6926f6c3197"],["/posts/4633/image/30-4d5813b6.jpg","704351def2ff9422d468173b2d8ef885"],["/posts/4633/image/31-fa20280b.jpg","2c6bd4c0f64a493c83b8ddcfb30824ef"],["/posts/4633/image/33-3557d72a.jpg","d70ccc5bd63322a0dc146c786a73fc7c"],["/posts/4633/index.html","4a9bb77a097b345038374bfe5c91def2"],["/posts/47811/image/0-20200301214824489.png","ec6843778f7c878f6a1707e0105d2360"],["/posts/47811/image/0-20200301214824520.png","aa024ba378bbdeec7b34c8fd6164a00c"],["/posts/47811/image/0.png","397987e8c60702fbad289e10172a1f39"],["/posts/47811/index.html","b7d178a51d198aa86d8790ec207c4a3a"],["/posts/49729/image/0-4c9d6e7c.jpg","66a17d1d8c0594af2934d6b7049ad66a"],["/posts/49729/image/1-0fdae5e3.jpg","1e3cac3e6301e6145ef16d7f8321b3c3"],["/posts/49729/image/11-7c982654.jpg","65f8801240a0c3d407c3f0d4815b334c"],["/posts/49729/image/112-90b964a7.jpg","5cb74e111a5a700ad00e6e098e9935e1"],["/posts/49729/image/2-03be334b.jpg","858593ad3ad802959df83ff79acefb9a"],["/posts/49729/image/22-70c89d79.jpg","5e2eaeb4241268d45e7e61faee4ba025"],["/posts/49729/image/3-36ad2e84.jpg","3752f3060b0b9a9402d678914f0b5173"],["/posts/49729/image/33-2a801981.jpg","c2ed8e853ebd8407185c79dac99668cb"],["/posts/49729/image/8-30a2da41.jpg","a9ae8b0e69a02b34061e3d1e87694424"],["/posts/49729/image/88-8ef32fd9.jpg","f0c0d386f699fb5c72707cd535fde1df"],["/posts/49729/image/9-67aa5b4a.jpg","24215f2e5df311b18d72b87c82830f0d"],["/posts/49729/index.html","647cce02ac2c4e8c63f5582cb9033f3f"],["/posts/4993/image/image-20210210173524708.png","37c1d93d22659eeb78e126e743cdfc18"],["/posts/4993/index.html","9af7ec74d88099962ba9367f170b3f6d"],["/posts/51618/image/00-1d06cb1b.jpg","57afa03bad0789c884e583ae424242f0"],["/posts/51618/image/1-1165c257.jpg","366859b1191e01f3ef6b3601286ac2d1"],["/posts/51618/image/11-251926db.jpg","9ae4eab74b88ef08adc3aea6b3ebeedd"],["/posts/51618/image/112-cc43a1a1.jpg","09f04604b2bd917ee56cfb7a9680d1ee"],["/posts/51618/image/1234-b8341217.jpg","db1e0350faec216b2089b67466405a1d"],["/posts/51618/image/2-89f5292f.jpg","ab6ed9a238072f9b074790845e222e8d"],["/posts/51618/image/213-a58d7afe.jpg","7e650c5a68e9d35dd607269dea26fbe7"],["/posts/51618/image/223-8668c555.jpg","6752d9509a5a0cada416228845c13954"],["/posts/51618/image/3-3c10ee1d.jpg","b1df403dc050297b71cda95583f1d70e"],["/posts/51618/image/321-1ca93611.jpg","251abc63485bb26aafe5b5a91938888b"],["/posts/51618/image/5-1b4a00bc.jpg","e1c3aa0977e6b96123d66fe2cbd5dba1"],["/posts/51618/image/54-cf8af615.jpg","7975ae86a7870f46747ffb70d8c705ac"],["/posts/51618/image/6-7b047070.jpg","683f2030da9a958db689d51f6ee225d4"],["/posts/51618/image/7-7b86d918.jpg","a189f961b52bf6fccdf287e273794448"],["/posts/51618/image/8-22b12969.jpg","78ea0c8c74c9ee3e5c8828f558f1b581"],["/posts/51618/index.html","e763c2b7388e3ab1ed74b0b125ff4c4c"],["/posts/5285/image/image-20200920222035121.png","a2e30c03495d5e3a001828f45b3206c3"],["/posts/5285/index.html","8d5e2363a25d31e0e3237d80e1a16087"],["/posts/5295/index.html","2c39507ec5bbd18fc695daf7ac888189"],["/posts/55550/index.html","def187fd5a6ca7b9288bac0bfd073d38"],["/posts/56047/image/image-20200920190429014.png","72b35f48a208fc847a6b1d0fcaf1e92e"],["/posts/56047/image/image-20200920191847102.png","6912507cf182ebb962ef809af6e63bd0"],["/posts/56047/image/image-20200920194238412.png","86e54b508e6df841bbbcc7a481a86ca1"],["/posts/56047/image/image-20200920194725899.png","abfcc496ef586ae2787535fb46511542"],["/posts/56047/image/image-20200920194818018.png","f5e8d34765d3e024af6316906d77e85f"],["/posts/56047/image/image-20200920194848168.png","68acb0b38b0aa0d3732fe450f5c5f30c"],["/posts/56047/image/image-20200920195143758.png","b26dbbab25e9debd24d0446d0e9af5c7"],["/posts/56047/image/image-20200920195225059.png","2d622babf2d1012877100b2d5b501695"],["/posts/56047/image/image-20200920195233316.png","2d622babf2d1012877100b2d5b501695"],["/posts/56047/image/image-20200920195531713.png","a4e371a5c746f562550525fd15fe87ab"],["/posts/56047/index.html","d6bd2cf028b477c70c8e2e7cfaa6e5d5"],["/posts/5644/image/image-20200920225109629.png","23dbf93955e7d03e9ce1f2ce8cd5595d"],["/posts/5644/index.html","8fc6f548f170ce75cb47a3f5ec789919"],["/posts/56570/index.html","7c23254ca57e878cd723fad38f4dc242"],["/posts/56588/image/20190115.jpg","20b38232d256072a4d468a77acb3fc6e"],["/posts/56588/index.html","55df67f4cadbc4a461dda84d59b936e8"],["/posts/57631/image/20181231.jpg","df7a543bee0a6ae812c49def48ceaa5a"],["/posts/57631/index.html","7b54592a46d7dc3e9bef77c16daac2b3"],["/posts/59601/image/image-20210429232229135.png","5e4a8a1a25145442ff135fa448aca65a"],["/posts/59601/index.html","394702e6f325ab3d15f682752acfbf64"],["/posts/60227/index.html","eb179b1b01a5c0bc3b009e9925d4eb36"],["/posts/60384/image/image-20200906231052334.png","8628eb0358ed9116bd9a1ef84e639049"],["/posts/60384/image/image-20200906232233708.png","184a6e6574931ce93e4818451c06f3f0"],["/posts/60384/image/image-20200906232432373.png","15d85c8d35bffe77743e661f7e7b2557"],["/posts/60384/image/image-20200906232543363.png","dce96f8a77ef6b58dfb25f13e59a7f2a"],["/posts/60384/index.html","125cdd8c48bcc60133dc1495c1d341ef"],["/posts/60970/image/IMG_20200314_144751.jpg","51ffb3934f7fe82163f5719145641cbc"],["/posts/60970/image/image-20200627175825802.png","6d4fb46f2db226466634863649c9b56c"],["/posts/60970/image/image-20200627181405622.png","7eb698a1362791355daf732268539ed8"],["/posts/60970/image/mmexport1584172171071.jpg","7fa1fa699340849f3afea9fef65bf538"],["/posts/60970/image/mmexport1584177084229.jpg","87f3c09f3c7e9848ac845743651a8cb9"],["/posts/60970/index.html","eaceb79811422e4f1316c53bf9a6e588"],["/posts/61167/image/1575651117499.png","746f8424cbaf779f0dee88c857507f65"],["/posts/61167/image/1575651135109.png","3d8c29ae2b9b4c42784655e7556d5171"],["/posts/61167/image/1575651150846.png","cbcf17ae0b7bacf279f1b557f866e07a"],["/posts/61167/image/1575651164367.png","c534a7a9fe5e63d840c872098bf12e61"],["/posts/61167/image/1575651177976.png","a863c94fac90ea76497665df38ab93b0"],["/posts/61167/image/1575651192178.png","a33a32dca18123b98161bcdd49d412db"],["/posts/61167/image/1575651208252.png","a384ccf1b0372715536a2e65270f8e60"],["/posts/61167/image/1575651225157.png","bd8f4a7179ff432af7dcc0ecf36b8e3a"],["/posts/61167/image/1575651239326.png","65b55eb80aa3f3419ddcb8228dcd1a82"],["/posts/61167/image/1575651254769.png","2dae7d43bf82f965ee153b9bf0297cd4"],["/posts/61167/image/favicon.jpg","c918b9d9bb699071d52e219b029ed874"],["/posts/61167/index.html","7ae49c768e25ef9458120e62aaef31e3"],["/posts/62350/image/image-20200209171819914.png","ac3c00787bf226c18360ed20dedfc08f"],["/posts/62350/image/image-20200209172113560.png","dbb6fd650d23bd1edda4870239bd43a8"],["/posts/62350/image/image-20200209172535834.png","c57f1112ecf397db5ee985e9c031364a"],["/posts/62350/image/image-20200209174037280.png","efbcd49f8615923b34d77c65a4cd9ddc"],["/posts/62350/image/image-20200209174305852.png","b0bef92487fc9b644057ee070a59fd71"],["/posts/62350/image/image-20200209174746426.png","7405ca08b838e8a5856e293c4dd4b5e3"],["/posts/62350/index.html","a0e9adafd4843bf71f1c34d2a29a120c"],["/posts/62891/index.html","37415d8aebc880ee987235b083868281"],["/posts/6889/index.html","9c34d631a02b5937b86a9df60f3f9199"],["/posts/7376/image/image-20200907232315224.png","56e986ba47f3acb6bcad5ea68b39fd06"],["/posts/7376/image/image-20200907233321242.png","eff28edebf1e3c346059b72fe5f78f1a"],["/posts/7376/image/image-20200907235343778.png","4ec20429a9f6722bd17325bc191a56d6"],["/posts/7376/index.html","3304f45427e7c466a8e5065a369229f7"],["/posts/7511/image/11-0f14b251.jpg","7a48ac942d93c6cdc017901523911f1c"],["/posts/7511/image/111-93e55faf.jpg","c7dfd0991eb6d1740a05335bbe64bbbb"],["/posts/7511/image/112-a9636c7f.jpg","5ccb8bea8a24e0a1ba0385a1f124eb1f"],["/posts/7511/image/123-36474d5b.jpg","ced026b4e02cda1c3d00c1ae8e820c26"],["/posts/7511/image/232-fd67e718.jpg","8e7df1e175817abca468e799ddc05de9"],["/posts/7511/image/321-446541fa.jpg","3bfbd6e7debf7d5e3b434d0218dbdf0a"],["/posts/7511/image/33-4f3ffb2e.jpg","0ff5de724687c45e98414fac583e4f89"],["/posts/7511/image/333-ab9bdeb6.jpg","11d2a96ef978bab3abce7fdadd036905"],["/posts/7511/image/432-99cf3d13.jpg","87199038347e3e0a7b700358fdaea6a4"],["/posts/7511/index.html","53798ac02785782f00e410a91fb399fd"],["/posts/7931/index.html","bab815f77f70ac82e584db86d76a291a"],["/posts/9831/index.html","7141b29b19b7b0070c22c634551f47b4"],["/project/index.html","b33a8eda4b4f7ec6a6a151940529fc3b"],["/sw-register.js","17a5bca5ffbc715c3db48475e9670e21"],["/tags/Community-service/index.html","a14bfcdadcc5291adea0ef92e42ed159"],["/tags/Engineer-Management/index.html","8b8d0a552c4658975eca3d9578bf4c9b"],["/tags/High-school-reunion/index.html","70e95cbdf13d4bae30676fd98235246c"],["/tags/Intern/index.html","e6837a9a80df8f734a472df0974ce98f"],["/tags/Personal-Letter/index.html","937a6d6625a6742260f995d9cdcdd063"],["/tags/Public-Events/index.html","2de1cd74d2a2d1dfbb5ad820467253ff"],["/tags/Spring-Festival/index.html","5bc7e95eb267c3f2bfba9251fa24f797"],["/tags/Technology-Product/index.html","6d4e14da100f18d422a116bf60c8eb53"],["/tags/book/index.html","1bf4a359598d03d03e43b3d1d97f866d"],["/tags/campus/index.html","2c5d8d3e5f0adedc3be117a67b83de57"],["/tags/campus/page/2/index.html","f6e4c1dec6b8e84e4a459d3b688fef5b"],["/tags/competition/index.html","19e3672541afa82c4462acc63e8812c7"],["/tags/computer/index.html","ea50195c9b99400760074f6ca73a3bce"],["/tags/digital-product/index.html","ee2427114dce8a390c689a99caface6a"],["/tags/game/index.html","507d1cdffb7d6d3ef57e13b2fa766c2f"],["/tags/graduation/index.html","4a7d62cb522e44329efc260176c3202c"],["/tags/happy/index.html","402c14c88c4f9295ed9e3986d240afe2"],["/tags/hello-world/index.html","b51ea62488d0c4f4e16792d829b506a0"],["/tags/holiday-activities/index.html","aa0a2a8c908297c3f4d418c647ab134c"],["/tags/manage-finances/index.html","8315747f75ab003c1d8e98fb8d638a1f"],["/tags/movies/index.html","7a6dfa3f2da6a72224554d425afe98a9"],["/tags/music/index.html","96371b2f58f8f6728a0fa06302fd85e4"],["/tags/reunion/index.html","81cede06ab64687bbf8dcdf2257a1441"],["/tags/social-activity/index.html","cc9618ea85e5b7233811ec3280fcceb8"],["/tags/technology/index.html","fc64c507033a063e7c34cda03859b8d1"],["/tags/thoughts/index.html","69a8b98bd0a0812d07204c05c66e9f4b"],["/tags/value-ideas/index.html","66f2e738ef070cc642765bd58ce8412b"],["/tags/work-place/index.html","6a20709d6d0cd87fd7d730b17acdd410"]];
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
