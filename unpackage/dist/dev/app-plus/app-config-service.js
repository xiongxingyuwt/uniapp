
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/classfiy/classfiy","pages/goodscar/goodscar","pages/myself/myself","pages/sonpage/userinfo","pages/sonpage/dfk","pages/sonpage/dqh","pages/sonpage/tkd","pages/sonpage/wcd"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"height":"80px","borderStyle":"black","list":[{"pagePath":"pages/index/index","iconPath":"static/images/home.png","selectedIconPath":"static/images/selecthome.png","text":"首页"},{"pagePath":"pages/classfiy/classfiy","iconPath":"static/images/fenlei.png","selectedIconPath":"static/images/selectfeile.png","text":"分类"},{"pagePath":"pages/goodscar/goodscar","iconPath":"static/images/car.png","selectedIconPath":"static/images/selcar.png","text":"购物车"},{"pagePath":"pages/myself/myself","iconPath":"static/images/press.png","selectedIconPath":"static/images/selectpress.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uniap2","compilerVersion":"2.7.14","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"快宜点"}},{"path":"/pages/classfiy/classfiy","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类"}},{"path":"/pages/goodscar/goodscar","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/myself/myself","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/sonpage/userinfo","meta":{},"window":{}},{"path":"/pages/sonpage/dfk","meta":{},"window":{}},{"path":"/pages/sonpage/dqh","meta":{},"window":{}},{"path":"/pages/sonpage/tkd","meta":{},"window":{}},{"path":"/pages/sonpage/wcd","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
