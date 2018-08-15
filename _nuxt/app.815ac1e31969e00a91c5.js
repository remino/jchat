webpackJsonp([3],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},F88d:function(t,e,n){"use strict";var r=n("JWjJ"),o=n("P+aQ"),a=!1;var i=function(t){a||n("pt0/")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var d=u[f]||c,p={};r.forEach(function(t){void 0!==d[t]&&(p[t]=d[t])});var l={};o.forEach(function(t){"function"==typeof d[t]&&(l[t]=d[t].bind(s))});var h=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var v=[t("router-view",a)];return void 0!==i.keepAlive&&(v=[t("keep-alive",v)]),t("transition",{props:p,on:l},v)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("QA5y"),f=c.keys(),d={},p=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(p=t)}),p&&(d=b(p)),"function"!=typeof d){d.modules||(d.modules={});var l=!0,h=!1,v=void 0;try{for(var m,x=i()(f);!(l=(m=x.next()).done);l=!0){var y=m.value,w=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==w){var _=w.split(/\//);(t=C(d,_))[w=_.pop()]=b(y),t[w].namespaced=!0}}}catch(t){h=!0,v=t}finally{try{!l&&x.return&&x.return()}finally{if(h)throw v}}}var g=d instanceof Function?d:function(){return new u.default.Store(o()({strict:!1},d,{state:d.state instanceof Function?d.state():{}}))};function b(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},JWjJ:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},QA5y:function(t,e,n){var r={"./index.js":"vdRI","./messages.js":"yVss"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},"Rf3+":function(t,e){},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("pFYg"),o=n.n(r),a=n("//Fk"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("mvHQ"),f=n.n(c),d=n("exGp"),p=n.n(d),l=n("fZjL"),h=n.n(l),v=n("woOf"),m=n.n(v),x=n("/5sW"),y=n("unZF"),w=n("qcny"),_=n("YLfZ"),g=function(){var t=p()(u.a.mark(function t(e,n,r){var o,a,i=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!k.nuxt.err||n.path!==e.path,this._queryChanged=f()(e.query)!==f()(n.query),this._diffQuery=this._queryChanged?Object(_.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(_.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),b=function(){var t=p()(u.a.mark(function t(e,n,r){var o,a,s,c,f,d,p,l,h=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];$=Object(_.e)(n,e).map(function(t,r){return Object(_.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(_.m)(k,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=k.nuxt.dateErr,this._hadError=!!k.nuxt.err,s=[],(c=Object(_.e)(e,s)).length){t.next=24;break}return t.next=13,S.call(this,c,k.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof w.a.layout?w.a.layout(k.context):w.a.layout);case 17:return f=t.sent,t.next=20,S.call(this,c,k.context,f);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return k.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(O(c,e,n)),t.prev=26,t.next=29,S.call(this,c,k.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!k.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(d=c[0].options.layout)&&(d=d(k.context)),t.next=37,this.loadLayout(d);case 37:return d=t.sent,t.next=40,S.call(this,c,k.context,d);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!k.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(p=!0,c.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate({params:e.params||{},query:e.query||{},store:R}))}),p){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,i.a.all(c.map(function(t,n){if(t._path=Object(_.b)(e.matched[s[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==$[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return i.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch,c=a&&u?30:45;if(a){var f=Object(_.j)(t.options.asyncData,k.context).then(function(e){Object(_.a)(t,e),h.$loading.increase&&h.$loading.increase(c)});o.push(f)}if(u){var d=t.options.fetch(k.context);d&&(d instanceof i.a||"function"==typeof d.then)||(d=i.a.resolve(d)),d.then(function(t){h.$loading.increase&&h.$loading.increase(c)}),o.push(d)}return i.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),$=c.map(function(t,n){return Object(_.b)(e.matched[s[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),$=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(l=w.a.layout)&&(l=l(k.context)),t.next=63,this.loadLayout(l);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])}));return function(e,n,r){return t.apply(this,arguments)}}(),C=function(){var t=p()(u.a.mark(function t(e){var n,r,o,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return k=e.app,E=e.router,R=e.store,t.next=5,i.a.all(A(E));case 5:return n=t.sent,r=new x.default(k),o=j.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),x.default.nextTick(function(){M(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(O(n,E.currentRoute)),$=E.currentRoute.matched.map(function(t){return Object(_.b)(t.path)(E.currentRoute.params)})),r.$loading={},j.error&&r.error(j.error),E.beforeEach(g.bind(r)),E.beforeEach(b.bind(r)),E.afterEach(q),E.afterEach(F.bind(r)),!j.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:b.call(r,E.currentRoute,E.currentRoute,function(t){if(!t)return q(E.currentRoute,E.currentRoute),L.call(r,E.currentRoute),void a();E.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),$=[],k=void 0,E=void 0,R=void 0,j=window.__NUXT__||{};function O(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=m()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);h()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function T(t,e){return j.serverRendered&&e&&Object(_.a)(t,e),t._Ctor=t,t}function A(t){var e=this,n=Object(_.d)(t.options.base,t.options.mode);return Object(_.c)(t.match(n),function(){var t=p()(u.a.mark(function t(n,r,o,a,i){var s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return s=T(Object(_.l)(n),j.data?j.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,e)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())}function S(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y.a[t])}),!a)return Object(_.i)(o,e)}function q(t,e){Object(_.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":o()(t))||t.options||((t=x.default.extend(t))._Ctor=t,n.components[r]=t),t})}function L(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?w.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(k.context)),this.setLayout(e)}function F(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||x.default.nextTick(function(){Object(_.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&$[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)x.default.set(t.$data,r,n[r])}}),L.call(n,t)})}function M(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),E.afterEach(function(e,n){x.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(w.b)().then(C).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},TWRO:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),m()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=w,e.e=_,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=g,e.k=b,n.d(e,"h",function(){return C}),n.d(e,"m",function(){return $}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return p.a.resolve();return k(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=k,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?R:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var d,p=i[f.name];if(null==p){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(d=u(p[l]),!e[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(d)+"`");a+=(0===l?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?j(p):u(p),!e[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');a+=f.prefix+d}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=E.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var d=t[a],p=n[2],l=n[3],h=n[4],v=n[5],m=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=p&&null!=d&&d!==p,w="+"===m||"*"===m,_="?"===m||"*"===m,g=n[2]||s,b=h||v;r.push({name:l||o++,prefix:p||"",delimiter:g,optional:_,repeat:w,partial:y,asterisk:!!x,pattern:b?T(b):x?".*":"[^"+O(g)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=m()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),d=n("//Fk"),p=n.n(d),l=n("fZjL"),h=n.n(l),v=n("Dd8w"),m=n.n(v),x=n("/5sW"),y=function(){return{}};function w(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function g(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function b(t){var e=this;return p.a.all(g(t,function(){var t=f()(u.a.mark(function t(n,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",o.components[a]=w(n));case 5:case"end":return t.stop()}},t,e)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C=function(){var t=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:return t.abrupt("return",m()({},e,{meta:_(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/jchat/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=A(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,C(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,C(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function k(t,e){var n=void 0;return(n=2===t.length?new p.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof p.a||"function"==typeof n.then)||(n=p.a.resolve(n)),n}var E=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function R(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function j(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},ct3O:function(t,e,n){"use strict";var r=n("TWRO"),o=n("QhKw"),a=!1;var i=function(t){a||n("Rf3+")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},iURK:function(t,e){},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/jchat/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:u,routes:[{path:"/",component:s,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var s=function(){return n.e(0).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var u=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},"pt0/":function(t,e){},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return R});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),d=n.n(f),p=n("exGp"),l=n.n(p),h=n("MU8w"),v=(n.n(h),n("/5sW")),m=n("p3jY"),x=n.n(m),y=n("mtxM"),w=n("0F0d"),_=n("HBB+"),g=n("WRRc"),b=n("ct3O"),C=n("Hot+"),$=n("yTq1"),k=n("YLfZ"),E=n("J2Ti");n.d(e,"a",function(){return b.a});var R=function(){var t=l()(o.a.mark(function t(e){var n,r,a,i,u,f;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(E.a)(e)).$router=n,a=d()({router:n,store:r,nuxt:{defaultTransition:j,transitions:[j],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},j,{name:t}):c()({},j,t):j}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},$.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object(k.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object(k.m)(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";v.default[n]||(v.default[n]=!0,v.default.use(function(){v.default.prototype.hasOwnProperty(t)||s()(v.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=15;break;case 15:return t.abrupt("return",{app:a,router:n,store:r});case 16:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();v.default.component(w.a.name,w.a),v.default.component(_.a.name,_.a),v.default.component(g.a.name,g.a),v.default.component(C.a.name,C.a),v.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var j={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},unZF:function(t,e,n){"use strict";e.a={}},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return{}},o={}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s=n("iURK"),u=(n.n(s),{_default:function(){return n.e(1).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),c={};e.a={head:{title:"jchat",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"JChat: Virtual Japanese chat partner"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(u["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?o.a.resolve(c[n]):u[n]().then(function(t){return c[n]=t,delete u[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}},yVss:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return[{id:1,content:"nice to meet you",loaded:!0,sender:"bot"},{id:2,content:"my name is TAKESHITAROU",loaded:!0,sender:"bot"},{id:3,content:"where from?",loaded:!0,sender:"bot"}]},o={add:function(t,e){t.push(e)},setLoaded:function(t,e){var n=t[t.findIndex(function(t){return t.id===e})];n&&(n.loaded=!0)}}}},["T23V"]);