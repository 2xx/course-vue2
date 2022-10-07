(function(){"use strict";var e={9059:function(e,t,n){var o=n(8935),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"MyApp"},u=i,c=n(1001),l=(0,c.Z)(u,r,a,!1,null,null,null),s=l.exports,f=n(6665),m=n(615),d=n(4549),p=n.n(d);o["default"].use(p()),o["default"].config.productionTip=!1,new o["default"]({router:f.Z,store:m.Z,render:e=>e(s)}).$mount("#app")},6665:function(e,t,n){var o=n(8935),r=n(2809),a=n(615);o["default"].use(r.Z);const i=[{path:"/login",name:"login",component:()=>Promise.all([n.e(976),n.e(535)]).then(n.bind(n,9490))},{path:"/",name:"",component:()=>Promise.all([n.e(976),n.e(225)]).then(n.bind(n,3102)),meta:{requireAuth:!0,title:"首页"},children:[{path:"",name:"home",component:()=>n.e(177).then(n.bind(n,7144)),meta:{requireAuth:!0}},{path:"about",name:"about",component:()=>n.e(443).then(n.bind(n,3920)),meta:{requireAuth:!0,title:"关于页"}},{path:"/menus",name:"menus",component:()=>Promise.all([n.e(976),n.e(860)]).then(n.bind(n,4802)),meta:{title:"菜单列表"}},{path:"/menu/create",name:"menu-creat",component:()=>Promise.all([n.e(976),n.e(516)]).then(n.bind(n,8102)),meta:{title:"添加菜单"}},{path:"/menu/:id/edit",name:"menu-edit",component:()=>Promise.all([n.e(976),n.e(516)]).then(n.bind(n,8102)),meta:{title:"编辑菜单"}},{path:"/resource-category",name:"resource-category",component:()=>Promise.all([n.e(976),n.e(948)]).then(n.bind(n,1916)),meta:{title:"资源分类列表"}},{path:"/resources",name:"resources",component:()=>Promise.all([n.e(976),n.e(305)]).then(n.bind(n,6952)),meta:{title:"资源列表"}},{path:"/roles",name:"roles",component:()=>Promise.all([n.e(976),n.e(438)]).then(n.bind(n,9110)),meta:{title:"角色列表"}},{path:"/role/:roleId/alloc-menu",name:"alloc-menu",component:()=>Promise.all([n.e(976),n.e(893)]).then(n.bind(n,8160)),props:!0,meta:{title:"角色-分配菜单"}},{path:"/role/:roleId/alloc-resource",name:"alloc-resource",component:()=>Promise.all([n.e(976),n.e(926)]).then(n.bind(n,9705)),props:!0,meta:{title:"角色-分配资源"}},{path:"/users",name:"users",component:()=>Promise.all([n.e(976),n.e(681)]).then(n.bind(n,6448)),meta:{title:"用户列表"}},{path:"/courses",name:"courses",component:()=>Promise.all([n.e(976),n.e(953)]).then(n.bind(n,304)),meta:{title:"课程列表"}},{path:"/course/create",name:"course-create",component:()=>Promise.all([n.e(976),n.e(437)]).then(n.bind(n,865)),meta:{title:"添加课程"}},{path:"/course/:courseId/edit",name:"course-edit",component:()=>Promise.all([n.e(976),n.e(437)]).then(n.bind(n,865)),props:!0,meta:{title:"编辑课程"}},{path:"/course/:courseId/content",name:"course-content",component:()=>Promise.all([n.e(976),n.e(728)]).then(n.bind(n,2694)),props:!0,meta:{title:"课程内容管理"}}]},{path:"*",name:"error-page",component:()=>n.e(468).then(n.bind(n,2897))}],u=new r.Z({routes:i});u.beforeEach(((e,t,n)=>{!e.matched.some((e=>e.meta.requireAuth))||a.Z.state.tokenInfo?n():n({name:"login",query:{redirect:e.fullPath}})})),t["Z"]=u},615:function(e,t,n){var o=n(8935),r=n(4665);o["default"].use(r.ZP),t["Z"]=new r.ZP.Store({state:{tokenInfo:JSON.parse(window.localStorage.getItem("tokenInfo")||null)},getters:{},mutations:{saveTokenInfo(e,t){e.tokenInfo=JSON.parse(t),window.localStorage.setItem("tokenInfo",t)}},actions:{},modules:{}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({177:"home",225:"layout",305:"resources",437:"course-create-or-edit",438:"roles",443:"about",468:"error-page",516:"menu-create-or-edit",535:"login",681:"users",728:"course-content",860:"menu",893:"alloc-menu",926:"alloc-resource",948:"resource-category",953:"courses"}[e]||e)+"."+{177:"0fecd877",225:"bee22035",305:"fc10e2ab",437:"c91c63e9",438:"fda3f928",443:"f2e74993",468:"61ab91d0",516:"8ad03fa2",535:"1bd1c7ef",681:"d1aed5cc",728:"786c5acb",860:"4611fa52",893:"4088a25e",926:"2e811732",948:"e29e1176",953:"09c1f923",976:"741b47a9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{225:"layout",305:"resources",437:"course-create-or-edit",438:"roles",516:"menu-create-or-edit",535:"login",728:"course-content",893:"alloc-menu",926:"alloc-resource"}[e]+"."+{225:"610aa9a9",305:"099c31ef",437:"831660dc",438:"6512844c",516:"bd745c22",535:"da558706",728:"f11d3035",893:"28d3762a",926:"7f5c2230"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="edu-boss-fed:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var m=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/course-vue2/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return r();e(o,u,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={225:1,305:1,437:1,438:1,516:1,535:1,728:1,893:1,926:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkedu_boss_fed"]=self["webpackChunkedu_boss_fed"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9059)}));o=n.O(o)})();