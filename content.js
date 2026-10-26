// 修改此文件即可补充项目。每张图片用 src、title、text 配置图片和对应说明。
window.portfolioProjects = [
 {
  title:'迷失',category:'独立游戏 / 历史项目',role:'除 2D 美术插画外，独立开发六个多月',
  cover:'assets/bf2390_98c71b73897d45808a6a69f31b0bd27df000.jpg',tags:['UE4','C++','Blueprint','关卡设计'],
  description:'以完整游戏为载体，实践客户端逻辑、关卡、美术表现与性能优化。获得 2022 GUSGA 全国大学生游戏创作大赛最佳视觉设计提名。',
  details:['阅读大型项目源码，在既有设计模式上添加功能，并阅读、修改 Horror Engine 蓝图。','除 2D 美术插画外，我承担了程序、特效、地编、材质与关卡设计等工作。在研究新效果的同时，也关注美术表现的性能开销。'],
  images:[
   {src:'assets/bf2390_0ad7137bfc794059b77520c83d95caab~mv2.jpg',title:'GUSGA 最佳视觉设计提名',text:'大三下学期，《迷失》获得 2022 GUSGA 全国大学生游戏创作大赛最佳视觉设计提名。这段六个多月的独立开发经历，让我把程序、场景和视觉表现放进同一个游戏中实践。'},
   {src:'assets/bf2390_cb17948babbc4ab1b027a824656925be~mv2.png',title:'Steam 发布准备',text:'开发期间申请了 SteamID，为后续发布做准备。图中是当时的 Steam 库页面；从功能开发到发布准备，我逐步接触完整游戏的制作流程。'}
  ],video:''
 },
 {
  title:'教学楼 · 场景与氛围',category:'场景制作 / 技术美术',role:'以学校教学楼为原型的心理恐怖场景实践',
  cover:'assets/bf2390_587655412ee249d290a2e9480b03c5b9~mv2.jpg',tags:['UE5','混合材质','灯光','LOD'],
  description:'从教学楼重复的走廊结构出发，探索空间循环、视线引导和未知感，将日常观察转化为游戏氛围。',details:[],
  images:[
   {src:'assets/bf2390_c5641e34df7546a3b58943712b18c938~mv2.png',title:'从教学楼里发现空间循环',text:'观察学校时，我发现从一条走廊走向下一条走廊，建筑结构会不断重复。这让我想到《P.T.》中的循环空间，于是以教学楼为原型，尝试制作心理恐怖场景。'},
   {src:'assets/bf2390_62fb2e61798941c598e4933a32e981f5~mv2.png',title:'混合材质的使用与制作',text:'通过阅读和修改材质节点，练习混合材质的制作与使用，把材质调整落实到场景表面表现中。'},
   {src:'assets/bf2390_4695331a9d2c4361be372369b78cc632~mv2.png',title:'UE5 场景与视图检查',text:'在场景实践中学习 UE5 及其新特性，结合不同视图观察材质与画面表现，理解场景最终效果由哪些部分构成。'},
   {src:'assets/bf2390_6dc26d1d346a42278877ea89c02fc6b3~mv2.png',title:'关卡流送与 LOD',text:'练习关卡流送体积的使用和 LOD 变化，在搭建场景的同时关注关卡加载与模型细节层级。'},
   {src:'assets/bf2390_94664483216946a29b08ca631831f18f~mv2.jpg',title:'不同环境氛围的尝试',text:'除了教学楼，也尝试其他场景。通过不同的环境、色彩和光照组合，探索场景氛围的变化。'},
   {src:'assets/bf2390_6b4446153a8b48ca8a9ff0f7bc6b355c~mv2.png',title:'Niagara 体积雾 · 材质制作',text:'围绕 Niagara 体积雾效果展开练习，结合材质节点研究雾的表现，并把材质制作与场景效果联系起来。'},
   {src:'assets/bf2390_242c7b48ec4c41598959b9580ee3c8e3~mv2.png',title:'Niagara 体积雾 · 场景表现',text:'把体积雾放进场景，观察雾与空间、光照共同形成的视觉效果，尝试用雾塑造环境氛围。'},
   {src:'assets/bf2390_72fdf8df84634fad96b1ebf6d64a5484~mv2.png',title:'打光复盘：把问题标在画面上',text:'我在截图上标出需要调整的地方：暗部遮住了脏旧细节，灯具与天花板缺少环境光衔接，地板过于光滑，视觉引导也不够明确。把感受拆成具体问题，再寻找合适的打光方式。'},
   {src:'assets/bf2390_587655412ee249d290a2e9480b03c5b9~mv2.jpg',title:'走廊的光照与空间感',text:'以走廊为对象学习打光，寻找适合场景的光线。练习的重点是让玩家既能辨认空间，又能感受到环境中的不安。'},
   {src:'assets/bf2390_84dde7124f5449c48381fab782367a63~mv2.png',title:'让视线停在未知的尽头',text:'当玩家的注意力集中在走廊尽头时，我尝试让尽头失真、难以辨认，像望向枯井一样，用看不清的空间营造神秘感和对未知的恐惧。'}
  ],video:''
 },
 {
  title:'四子球',category:'玩法原型 / 游戏设计',role:'大学时期发起制作，与伙伴测试和迭代',
  cover:'assets/bf2390_eedb1f3c5db14892820a5cab7976eb09~mv2.jpg',tags:['实体游戏','快速原型','机制迭代'],
  description:'把“落子”变成“投球”：沿用连线规则，四子连成一线即可获胜。碰撞让局面不断变化，也带来乌龙球、逆转和意外的乐趣。',details:[],
  images:[
   {src:'assets/bf2390_eedb1f3c5db14892820a5cab7976eb09~mv2.jpg',title:'灵感来自一次等待',text:'和舍友等待玩剧本杀时，我看到棋子掉到棋盘上，便提议像弹珠一样下棋。舍友的笑声让我记住了这个点子，也把“四子球”的想法留在了备忘录里。'},
   {src:'assets/bf2390_7c15eda1c1ac4331a677f511b29e9247~mv2.jpg',title:'把备忘录里的点子做成原型',text:'一年后，我在学校建立游戏工作室，开始和伙伴制作实体原型，期间也做过电子游戏版原型。每做出一个版本，就开始测试，而不是等所有细节都完成。'},
   {src:'assets/bf2390_6d32c043a323413483e2798a0f68c917~mv2.jpg',title:'从“五子球”迭代到“四子球”',text:'沿用连线获胜的规则，把下棋改为投掷。我们通过试玩打磨机制，逐步从“五子球”调整为四子连成一线即获胜的“四子球”。这套制作、测试、调整的过程，也和电子游戏原型开发相通。'},
   {src:'assets/bf2390_af3005700d1647c9bbe6b68c81a2f919~mv2.jpg',title:'一球多用，碰撞改变局面',text:'投球碰撞会瞬间改变棋局，乐趣既来自“一球到位”，也来自差一点获胜、乌龙球和绝境翻盘。我和伙伴围绕这些试玩中的意外，继续分析玩法的乐趣与改进空间。'}
  ],video:''
 },
 {
  title:'Game Jam 制作记录',category:'限时创作 / 团队协作',role:'独立制作与团队主程经历',
  cover:'assets/bf2390_8a8babc3deb144d6addc7c5d20743323~mv2.jpg',tags:['快速原型','Blueprint','团队主程'],
  description:'参加 2022 CiGA、益游未尽和机核 BOOOM Game Jam 等限时创作，并在多次机核 Game Jam 中担任主程。通过独立制作与团队合作，练习快速原型和线上协作。',details:[],
  images:[
   {src:'assets/bf2390_8a8babc3deb144d6addc7c5d20743323~mv2.jpg',title:'益游未尽 ·《贪》',text:'在限时创作中独立制作《贪》，运用蓝图快速搭建原型，把想法落实为可玩的体验。'},
   {src:'assets/bf2390_ee2e9ee7ac74461498af0592f974aa21~mv2.png',title:'2022 CiGA Game Jam ·《Real》',text:'参加 2022 CiGA Game Jam，独立制作《Real》。通过快速原型实践游戏设计，在有限的制作时间内完成作品。'},
   {src:'assets/bf2390_909380289e9c4cfc9809c021a070f52d~mv2.png',title:'《咯咯笑博物馆》· 团队主程',text:'在机核 BOOOM Game Jam 团队项目中担任主程，与策划、美术沟通实现方案，在制作过程中积累线上协作与团队交流经验。'},
   {src:'assets/bf2390_fb75e03ee3684b4cba675577668a996c~mv2.png',title:'《月蚀之则 Eclipse Orders》· 团队主程',text:'参与机核 BOOOM Game Jam 团队制作并担任主程。把程序实现和策划、美术的需求联系起来，在共同制作游戏的过程中交流与学习。'}
  ],video:''
 },
 {
  title:'六人在线 VR 剧本杀',category:'VR / 多人联机',role:'大二期间参与 · 网络复制与 MetaHuman 修改适配',cover:'',tags:['Unreal Engine','VR','网络复制','MetaHuman'],
  description:'参与六人在线 VR 剧本杀项目，在团队开发中负责网络复制与 MetaHuman 的修改适配，连接多人联机与虚拟角色表现。',
  details:['多人联机：承担项目中的网络复制工作。','角色适配：对 MetaHuman 进行修改和适配，满足 VR 项目的角色使用需求。','项目实践：在大二期间参与团队 VR 项目，积累联机开发、角色适配与问题排查经验。'],images:[],video:''
 }
];
