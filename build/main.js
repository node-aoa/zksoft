webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__advantage_advantage__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.home = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.about = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.service = __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* ServicePage */];
        this.customer = __WEBPACK_IMPORTED_MODULE_3__customer_customer__["a" /* CustomerPage */];
        this.advantage = __WEBPACK_IMPORTED_MODULE_4__advantage_advantage__["a" /* AdvantagePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/eric/Sites/zksoft/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="home" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="service" tabTitle="服务范围" tabIcon="fa-service"></ion-tab>\n  <ion-tab [root]="customer" tabTitle="客户案例" tabIcon="people"></ion-tab>\n  <ion-tab [root]="advantage" tabTitle="服务优势" tabIcon="fa-advantage"></ion-tab>\n  <ion-tab [root]="about" tabTitle="公司简介" tabIcon="fa-building"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/eric/Sites/zksoft/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/eric/Sites/zksoft/src/pages/about/about.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title>\n      关于我们\n    </ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content>\n  <div class="extend">\n    <img src="assets/images/about.png" />\n  </div>\n  <h1><span class="color-6">公司介绍</span></h1>\n  <p>\n    北京中科信软科技有限公司是中国专业的软件技术服务平台。公司创立于2007年，总部设在中国北京。依托中国科学院的雄厚技术实力，与国内外大型知名企业IBM，思科，ORACLE，微软等建立了广泛的合作关系。通过已建立的全国软件服务业协同竞争整合模式（8年时间签约全国20余城市几千余名专业软件技术服务人员），有针对性地为企业提供服务定制化、服务流程标准化、服务方式人性化、服务形式多样化的管家式贵宾式软件技术服务。\n  </p>\n  <p>\n    致力于成为中国软件培训咨询第一品牌，致力于成为中国企业技术服务第一品牌，致力于成为中国最专业软件技术服务专家输送中心。\n  </p>\n  <p>\n    作为中国领先的全价值链软件技术服务渠道运营商，中科信软已建立定制化匹配的专家系统，标准化服务流程系统、企业会员客户 管理系统、师资服务监督管理系统，向超过2000多家企业会员提供定制培训、培训上门、技术体检、专业外包及一站式培训，咨询，技术支持，项目外包在内的全方位软件技术服务，被誉为互联网和软件技术服务无缝结合的典范。\n  </p>\n  <p>近十年来，公司的企业服务遍及大江南北，客户包括国家部委、地方政府、部队、高校、科研院所、知名IT公司等国内企事业单位，以及以诸多世界500强在华机构为代表的外资企业，迄今已培养数万名高级管理及技术人才。\n  </p>\n  <p>目前公司已经与百余家企事业单位建立了长期的培训咨询合作关系，深得用户信赖和好评。\n  </p>\n  <h1><span class="color-2">\n    服务理念</span>\n  </h1>\n  <p><cite>快速解决客户软件技术问题，快捷体验中科信软技术服务</cite></p>\n  <h1><span class="color-3">\n    使命责任</span></h1>\n  <p><cite>让企事业单位都能快速掌握最新技术，追寻国外前沿技术</cite></p>\n\n  <hr/>\n  <p>公司总部：北京市海淀区中关村东路保福寺桥南恒兴大厦，中科院物理所旁，中科院大学对面\n  </p>\n  <p>服务地点：北京，上海，武汉，广州，深圳，成都，福州等\n  </p>\n  <h1><span class="color-3">\n    汇款信息</span>\n  </h1>\n  <p>单位名称：北京中科信软科技有限公司\n  </p>\n  <p>开户行：招商银行海淀支行\n  </p>\n  <p>帐号：867080199210001\n  </p>\n  <p>网址：www.info-soft.cn www.zksoft.org\n  </p>\n  <ul>\n    <li>\n      <i class="fa fa-phone"></i>\n      <a href="tel://010-62883247">\n        010-62883247，62884854 </a>\n    </li>\n    <li>\n      <i class="fa fa-mobile special"></i>\n      <a href="tel://15501239699">\n        15501239699</a>\n    </li>\n    <li>\n      <i class="fa fa-qq"></i>\n      <a href="">\n        2355811925</a>\n    </li>\n    <li>\n      <i class="fa fa-envelope"></i>\n      <a href="mailto:soft@info-soft.cn">\n       soft@info-soft.cn</a>\n    </li>\n  </ul>\n\n</ion-content>\n'/*ion-inline-end:"/home/eric/Sites/zksoft/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicePage = (function () {
    function ServicePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ServicePage;
}());
ServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/eric/Sites/zksoft/src/pages/service/service.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>中科信软海量技术服务种类</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class="bk-color color-1">\n      <ion-col>\n        大数据相关技术\n      </ion-col>\n      <ion-col>\n        CFD、CAE\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        hadoop、openstack、R语言、商业智能BI、人工智能、Apache Spark数据挖掘、机器学习、神经网络、Docker\n      </ion-col>\n      <ion-col>\n        有限元、EDA、CAD、CAM、3D、ansys、fluent、procast\n      </ion-col>\n    </ion-row>\n    <ion-row class="bk-color color-2">\n      <ion-col>\n        移动互联网\n      </ion-col>\n      <ion-col>嵌入式技术\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        Android开发、html5、iPhone开发、APP、微信开发等、\n      </ion-col>\n      <ion-col>\n        OS-uCOS、Linux、WinCE、VxWorks、ARM、DSP、FPGA\n      </ion-col>\n    </ion-row>\n    <ion-row class="bk-color color-3">\n      <ion-col>\n        网络&amp;操作系统\n      </ion-col>\n      <ion-col>硬件技术\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        Unix(Solaris/AIX/HP-UX)/linux、Windows、网络信息安全、CISCO华为华三网络（交换、路由、拨号）\n      </ion-col>\n      <ion-col>\n        电子设计、单片机、电路设计、IC设计、pcb、电磁兼容、射频电路、 信号完整性 </ion-col>\n    </ion-row>\n    <ion-row class="bk-color color-4">\n      <ion-col>\n        软件开发\n      </ion-col>\n      <ion-col>商业智能BI\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        Java、.NET、Web开发、C++、移动开发、Python、Perl、Ruby. jQuery、Lua、Node.js、WCF </ion-col>\n      <ion-col>\n        数据仓库、数据挖掘、数据分析、SAS、SPSS、Matlab、Simulink、Stata、EViews、R语言、市场调研、统计分析、预测分析</ion-col>\n    </ion-row>\n    <ion-row class="bk-color color-5">\n      <ion-col>\n        软件工程\n      </ion-col>\n      <ion-col>数据库\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>需求分析、设计模式和UML、软件架构、系统架构、软件测试、项目管理、配置管理、版本控制、持续集成、CMMI、信息化建设、公司治理、敏捷Scrum</ion-col>\n      <ion-col>Oracle、SQL、Serve、DB2 、 Sybase、informix、MariaDB、MongoDB、MSSQL、MySQL、NoSQL、PostgreSQL、greenplum</ion-col>\n    </ion-row>\n\n    <ion-row class="bk-color color-6">\n      <ion-col>\n        厂商相关技术\n      </ion-col>\n      <ion-col>通信技术\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>微软、IBM、oracle、红帽、安世亚太、思科、华为、赛门铁克、EMC</ion-col>\n      <ion-col>光通信技术、互联网技术、信息通信其他技术、移动通信技术3G、4G、无线通信、zigbee</ion-col>\n    </ion-row>\n    <ion-row class="bk-color color-7">\n      <ion-col>\n        云计算\n      </ion-col>\n      <ion-col>设计应用\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>虚拟化、云计算与物联网、VMware、EMC、存储备份技术</ion-col>\n      <ion-col>界面设计、平面设计、adobe、UI设计/网页设计、工业设计</ion-col>\n    </ion-row>\n\n    <ion-row class="bk-color color-8">\n      <ion-col>\n        ERP技术\n      </ion-col>\n      <ion-col>GIS相关技术\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>SAP ERP、Oracle ERP、 Office</ion-col>\n      <ion-col>本地化技术、虚拟现实技术、中间件、Weblogic、Tuxedo、IBM WebSphere、jboss、tomcat</ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="ending">\n    <p>\n      以上及其它软件或技术均可以根据单位实际需求进行个性化定制安排、欢迎来电咨询！\n    </p>\n    <p>\n      北京中科信软科技有限公司<br/> 电 话：010-62883247\n      <br/> 网 址：www.info-soft.cn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.zksoft.org<br/> E-mail: soft@info-soft.cn<br/>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/eric/Sites/zksoft/src/pages/service/service.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ServicePage);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerPage = (function () {
    function CustomerPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return CustomerPage;
}());
CustomerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer',template:/*ion-inline-start:"/home/eric/Sites/zksoft/src/pages/customer/customer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      合作客户\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <p>\n    中科信软成立以来先后与国内外知名大型企业合作，并获得用户的一致好评。和我们合作的客户有（部分客户）：\n  </p>\n  <h1><span class="color-1">大型国企</span></h1>\n  <p>\n    中石油/中石化、中海油田、中核武汉核电、北京印钞公司、中国移动，河北联通、中国电信、中国电信研究院，国网电力\n  </p>\n  <h1><span class="color-2">知名外企</span></h1>\n  <p> 阿尔卡特朗讯、 ＡＢＢ、 西门子、 通用GE、 三星、 LG、 本田、 爱立信、 东芝、 德电、 沃尔沃、 摩托罗拉\n  </p>\n\n  <h1><span class="color-3">国家机关</span></h1>\n  <p> 国家信息中心、农业部信息中心、国家工商总局、外汇管理局、杭州社保、交通部北海救助局、中央电视台、中国气象局\n  </p>\n  <h1><span class="color-4">汽车行业</span></h1>\n  <p>\n    奇瑞汽车、江铃汽车、天津中心机械、长春长客-庞巴迪轨道车辆有限公司、中国一汽、一汽丰田\n  </p>\n  <h1><span class="color-5">金融行业</span></h1>\n  <p>工商银行，建设银行，中国证券登记结算公司、法国兴业银行、汇通金财、中国建设证券、苏州建行，汇丰银行\n  </p>\n  <h1><span class="color-6">航天产业</span></h1>\n  <p>\n    中国民航、山东航空、西安咸阳国际机场、珠海航空、成都机场、民航华北空管局、首都机场、中航工业航空动力控制系统研究所（614所）、民航数据通信有限责任公司\n  </p>\n  <h1><span class="color-7">科研院所</span></h1>\n  <p>中科院遥感所、林科院、中国电力科学研究所、北方发动机研究所、煤灰研究总院、钢铁研究总院、中国电信研究院、上海市环境科学研究院、原子能、禁核试北京国家数据中心、黄河勘测规划设计有限公司、射线研究中心</p>\n\n  <h1><span class="color-8">大专院校</span></h1>\n  <p>北京大学光华管理学院、北京联合大学、北京科技大学、首都师范大学、河北经贸大学、北京科技大学、北京大学经管学院、北京建筑大学</p>\n\n  <h1><span class="color-9">其它中科信软合作客户</span></h1>\n  <p>大宝、伊利、北京中华电华大、捷迪讯、神华和利时、瑞萨电子、河南许继集团、联想、神州数码、石化盈科、中邮科技、云南铜业、太极集团、哈尔滨轴承集团公司、神华准能资源综合开发公司，广州地铁、陕西步长制药有限公司，潍坊歌尔光电有限公司，北京北广科技股份有限公司、中电科技（北京）有限公司、中国食品有限公司信息技术部、浙江省公众信息产业有限公司无线运营分公司、中铁工程装备集团有限公司、江苏富士通通信技术有限公司、天津市大港油田信息中心、瑞萨电子（中国）有限公司、凯伏特（上海）动力技术有限公司、阿美远东（北京）、卡斯柯信号有限公司、工银瑞信\n  </p>\n  <p class="no-padding top">北京中科信软科技有限公司</p>\n  <p class="no-padding"> 电   话：010-62883247</p>\n  <p class="no-padding"> 网   址：www.info-soft.cn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.zksoft.org</p>\n  <p class="no-padding"> E-mail：soft@info-soft.cn</p>\n</ion-content>\n'/*ion-inline-end:"/home/eric/Sites/zksoft/src/pages/customer/customer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], CustomerPage);

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvantagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvantagePage = (function () {
    function AdvantagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AdvantagePage;
}());
AdvantagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-advantage',template:/*ion-inline-start:"/home/eric/Sites/zksoft/src/pages/advantage/advantage.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title>\n      服务优势\n    </ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content>\n  <div class="extend">\n    <img src="assets/images/advantage.png" />\n  </div>\n  <h2>为什么选择中科信软：</h2>\n  <h1><span class="color-1">经验丰富</span></h1>\n  <p>\n    近10年，2000多家企业用户培训的经验。\n  </p>\n  <h1><span class="color-2">资源丰富</span></h1>\n  <p> 上千名老师专家资源，能根据用户实际精确匹配最适合的师资。讲师全部拥有6年以上的相信领域实践经验。\n  </p>\n\n  <h1><span class="color-3">形式灵活</span></h1>\n  <p> 公开课，上门培训，第三方地点培训，远程培训，特殊技术订制培 训，按需培训\n  </p>\n  <h1><span class="color-4">一站式服务</span></h1>\n  <p>\n    培训、咨询、专家外包和技术支持，项目承接。\n  </p>\n  <h1><span class="color-5">售后服务</span></h1>\n  <p>培训结束后，可以给用户提供技术指导，项目咨询，疑难解答\n  </p>\n\n  <hr/>\n  <h1 style="color:#ccc"><span class="color-6">服务优势</span>－－－灵活的商业模式</h1>\n  <p>\n    1.无需等待，只要一个电话，即使只有一个人，我公司也可以提供单独培训。\n  </p>\n  <p>\n    2.直接有效：培训开始前，客户可以根据需求，直接和培训师沟通。\n  </p>\n  <p>\n    3.效果明显：老师直接面向您，甚至精准匹配相关行业背景的专家。\n  </p>\n  <p>\n    4.专家丰富：万名老师专家资源，能根据用户实际精确匹配最适合的师资。任何一项技术需求，我们都能提供数位专家组合。\n  </p>\n  <p>\n    5.培训不会取消，您可以马上预约培训，我们能立即执行，一个人也不会取消培训。\n  </p>\n  <p>\n    6.海量培训平台：我们能提供种类丰富的技术课程，特殊技术能订制服务。\n  </p>\n  <p>\n    7.一站式服务：培训、咨询、专家外包和技术支持，项目承接。\n  </p>\n  <p>\n    8.经验丰富：近10年，2000多家企业用户培训的经验。\n  </p>\n  <p>\n    9.形式灵活：公开课，上门培训，第三方地点培训，远程培训，特殊技术订制培 训，按需培训。\n  </p>\n  <p>\n    10.时间灵活：可根据用户要求，培训时长，培训时间可以协商。\n  </p>\n  <p>\n    11.地点灵活：北京，上海，成都，武汉，广州，深圳等都可以，也可以远程一对一服务。\n  </p>\n\n  <p class="no-padding top">北京中科信软科技有限公司</p>\n  <p class="no-padding"> 电 话：010-62883247</p>\n  <p class="no-padding"> 网 址：www.info-soft.cn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.zksoft.org</p>\n  <p class="no-padding"> E-mail：soft@info-soft.cn</p>\n</ion-content>\n'/*ion-inline-end:"/home/eric/Sites/zksoft/src/pages/advantage/advantage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AdvantagePage);

//# sourceMappingURL=advantage.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/eric/Sites/zksoft/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="nav-icon">\n      <img src="assets/icon/favicon.ico" />\n    </div>\n    <ion-title>中科信软高级技术服务中心</ion-title>\n    <div class="nav-number">\n      010-62883247\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="banner">\n\n    <div class="locations">北京·上海·广州·深圳·杭州·武汉·成都·福州·沈阳等各大主要城市</div>\n    <h4>公开课 上门内训 订制培训 技术咨询 项目外包</h4>\n    <h1>企事业单位高级技术服务专家</h1>\n    <p>\n      上千种海量技术培训服务 ，上万名专家技术人才，可按需订制培训，精准匹配。<br/>\n      公开课，上门内训，订制培训，上千种课程让你一站式挑选。 \n      <br/>\n      技术咨询，技术支持，项目外包，专家会诊，汇集上万名专家资源。\n      <br/>\n      针对用户实际需求，精准匹配专家，有效解决问题。 \n      <br/>\n      IBM，阿尔卡特，西门子，中石油，卡斯柯，新兴装备长期合作客户。\n      <br/>\n      面向企事业单位实际需求，中科信软提供各类软件、技术培训，技术咨询，专家外包，项目承接\n    </p>\n    <p class="detail">\n      <a href="http://www.info-soft.cn" target="_blank">详情见PC官网</a>\n    </p>\n  </div>\n  <h1>中科信软海量技术服务种类</h1>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col class="bk color-1">\n        hadoop、openstack、R语言、商业智能BI、人工智能、Apache Spark数据挖掘、机器学习、神经网络、Docker\n      </ion-col>\n      <ion-col class="bk color-2">\n        有限元、EDA、CAD、CAM、3D、ansys、fluent、procast\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        大数据相关技术\n      </ion-col>\n      <ion-col>\n        CFD、CAE\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="bk color-3">\n        Android开发、html5、iPhone开发、APP、微信开发等、\n      </ion-col>\n      <ion-col class="bk color-4">\n        OS-uCOS、Linux、WinCE、VxWorks、ARM、DSP、FPGA\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        移动互联网\n      </ion-col>\n      <ion-col>嵌入式技术\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="bk color-5">\n        Unix(Solaris/AIX/HP-UX)/linux、Windows、网络信息安全、CISCO华为华三网络（交换、路由、拨号）\n      </ion-col>\n      <ion-col class="bk color-6">\n        电子设计、单片机、电路设计、IC设计、pcb、电磁兼容、射频电路、 信号完整性 </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        网络&amp;操作系统\n      </ion-col>\n      <ion-col>硬件技术\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="bk color-7">\n        Java、.NET、Web开发、C++、移动开发、Python、Perl、Ruby. jQuery、Lua、Node.js、WCF </ion-col>\n      <ion-col class="bk color-8">\n        数据仓库、数据挖掘、数据分析、SAS、SPSS、Matlab、Simulink、Stata、EViews、R语言、市场调研、统计分析、预测分析</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        软件开发\n      </ion-col>\n      <ion-col>商业智能BI\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="bk color-9">需求分析、设计模式和UML、软件架构、系统架构、软件测试、项目管理、配置管理、版本控制、持续集成、CMMI、信息化建设、公司治理、敏捷Scrum</ion-col>\n      <ion-col class="bk color-10">Oracle、SQL、Serve、DB2 、 Sybase、informix、MariaDB、MongoDB、MSSQL、MySQL、NoSQL、PostgreSQL、greenplum</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        软件工程\n      </ion-col>\n      <ion-col>数据库\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="bk color-11">微软、IBM、oracle、红帽、安世亚太、思科、华为、赛门铁克、EMC</ion-col>\n      <ion-col class="bk color-12">光通信技术、互联网技术、信息通信其他技术、移动通信技术3G、4G、无线通信、zigbee</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        厂商相关技术\n      </ion-col>\n      <ion-col>通信技术\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="bk color-13">虚拟化、云计算与物联网、VMware、EMC、存储备份技术</ion-col>\n      <ion-col class="bk color-14">界面设计、平面设计、adobe、UI设计/网页设计、工业设计</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        云计算\n      </ion-col>\n      <ion-col>设计应用\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="bk color-15">SAP ERP、Oracle ERP、 Office</ion-col>\n      <ion-col class="bk color-16">本地化技术、虚拟现实技术、中间件、Weblogic、Tuxedo、IBM WebSphere、jboss、tomcat</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        ERP技术\n      </ion-col>\n      <ion-col>GIS相关技术\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <p class="mid-print">\n    以上及其它软件或技术中科信软均可以根据单位实际需求进行个性化定制安排，欢迎来电咨询！\n  </p>\n  <h1>合作客户</h1>\n  <!--<h2>海量技术，专家传授，按需订制，精准匹配</h2>-->\n  <ion-grid class="brand">\n    <ion-row>\n      <ion-col text-center>\n        <img src="assets/icon/favicon.ico" />\n      </ion-col>\n      <ion-col text-center>\n        <img src="assets/icon/favicon.ico" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <img src="assets/icon/favicon.ico" />\n      </ion-col>\n      <ion-col text-center>\n        <img src="assets/icon/favicon.ico" />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="cooperators">\n\n    <table>\n      <tr>\n        <td>\n          海关信息中心\n        </td>\n        <td>\n          中石油\n        </td>\n        <td>\n          英特尔\n        </td>\n        <td>\n          北京大学\n        </td>\n      </tr>\n      <tr>\n        <td>\n          农业部信息网\n        </td>\n        <td>\n          中石化\n        </td>\n        <td>\n          大庆油田\n        </td>\n        <td>\n          北京科技大学\n        </td>\n      </tr>\n      <tr>\n        <td>\n          华夏银行\n        </td>\n        <td>\n          中国联通\n        </td>\n        <td>\n          摩托罗拉\n        </td>\n        <td>\n          北京工业大学\n        </td>\n      </tr>\n      <tr>\n        <td>\n          国家环保总局\n        </td>\n        <td>\n          中国电信\n        </td>\n        <td>\n          朗讯科技\n        </td>\n        <td>\n          首都师范大学\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          国家信息中心\n        </td>\n        <td>\n          中国移动\n        </td>\n        <td>\n          三星\n        </td>\n        <td>\n          北京林业大学\n        </td>\n      </tr>\n      <tr>\n        <td>\n          国税总局\n        </td>\n        <td>\n          中国进出口保险\n        </td>\n        <td>\n          丰田汽车\n        </td>\n        <td>\n          中央电视台\n        </td>\n      </tr>\n      <tr>\n        <td>\n          国家气象中心\n        </td>\n        <td>\n          云南人寿\n        </td>\n        <td>\n          索爱普天\n        </td>\n        <td>\n          新京报\n        </td>\n      </tr>\n      <tr>\n        <td>\n          公安部三所\n        </td>\n        <td>\n          辽河油田\n        </td>\n        <td>\n          民航数据\n        </td>\n        <td>\n          神州数码\n        </td>\n      </tr>\n\n    </table>\n  </div>\n  <div class="contacts">\n    <table>\n      <tr>\n        <td>\n          <i class="fa fa-phone"></i>\n          <br/> <a href="tel://010-62883247">电话咨询</a>\n        </td>\n        <td>\n          <i class="fa fa-envelope"></i>\n          <br/> <a href="mailto:soft@zksoft">邮箱咨询</a>\n        </td>\n        <td>\n          <i class="fa fa-wechat"></i>\n          <br/> <a href="weixin://chenrain521">微信客服</a>\n        </td>\n        <td>\n          <i class="fa fa-qq"></i>\n          <br/> <a href="http://wpa.qq.com/msgrd?v=3&uin=2355811925&site=qq&menu=yes">QQ客服</a>\n        </td>\n        <td>\n          <i class="fa  fa-comments"></i>\n          <br/> <a href="sms://15501239699">短信留言</a>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/eric/Sites/zksoft/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_customer_customer__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_service_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_advantage_advantage__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_customer_customer__["a" /* CustomerPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_service_service__["a" /* ServicePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_advantage_advantage__["a" /* AdvantagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_customer_customer__["a" /* CustomerPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_service_service__["a" /* ServicePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_advantage_advantage__["a" /* AdvantagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/eric/Sites/zksoft/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/eric/Sites/zksoft/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map