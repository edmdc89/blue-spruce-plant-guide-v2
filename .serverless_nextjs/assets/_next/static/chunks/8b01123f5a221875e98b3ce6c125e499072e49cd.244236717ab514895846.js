(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var l=p[u];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=a.props[l],f=r[l]||new Set;f.has(s)?o=!1:(f.add(s),r[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},B5Ud:function(e,t,n){"use strict";var r=n("o0o1"),a=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),l=n("yXPU");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}var f=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var p=f(n("q1tI")),d=n("g/15");function h(e){return v.apply(this,arguments)}function v(){return(v=l(r.mark((function e(t){var n,a,o;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,a=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,a);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var y=function(e){i(n,e);var t=s(n);function n(){return a(this,n),t.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=e.__N_SSG,o=e.__N_SSP;return p.default.createElement(n,Object.assign({},r,a||o?{}:{url:m(t)}))}}]),n}(p.default.Component);function m(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",a=n||t;return e.push(r,a)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",a=n||t;return e.replace(r,a)}}}t.default=y,y.origGetInitialProps=h,y.getInitialProps=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},LXf5:function(e,t,n){"use strict";var r=n("VX74"),a=n("8Bbg"),o=n.n(a),i=n("8Kt/"),u=n.n(i),c=n("q1tI"),l=n.n(c),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var f=null,p=function(e,t,n){var r="function"==typeof e?e(n):e;return"undefined"==typeof window?d(r,t,n):(f||(f=d(r,t,n)),f)};var d=function(e,t,n){var r="function"==typeof e?e(n):e;return r.ssrMode=Boolean(n),r.cache.restore(t),r},h=n("4egG"),v=n("rePB");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=new r.HttpLink({uri:"https://mz4y6djivh.execute-api.us-east-1.amazonaws.com/dev/graphql"}),g=new r.ApolloLink((function(e,t){return e.setContext((function(e){var t=e.headers;return{headers:m({},void 0===t?{}:t)}})),t(e)})).concat(b),w=new r.ApolloClient({ssrMode:!1,link:g,cache:h.a,connectToDevTools:!0});t.a=function(e){var t=this;return function(a){var i=(void 0===a?{}:a).ssr,c=void 0!==i&&i;return function(a){var i=function(t){var n;return n=t.apolloClient?t.apolloClient:p(e,t.apolloState,void 0),l.a.createElement(r.ApolloProvider,{client:n},l.a.createElement(a,s({},t)))};return(c||a.getInitialProps)&&(i.getInitialProps=function(r){return function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))}(t,void 0,void 0,(function(){var t,i,f,d,h,v,y;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(this,(function(m){switch(m.label){case 0:return t=Boolean(r.ctx),i=function(e,t){var n="function"==typeof e?e(t):e,r=Boolean(t.ctx),a=t.apolloClient||p(n,t.apolloState||{},r?t.ctx:t);return a.toJSON=function(){return null},t.apolloClient=a,r&&(t.ctx.apolloClient=a),t}(e,r).apolloClient,f={},a.getInitialProps?[4,a.getInitialProps(r)]:[3,2];case 1:return f=m.sent(),[3,4];case 2:return t?[4,o.a.getInitialProps(r)]:[3,4];case 3:f=m.sent(),m.label=4;case 4:if("undefined"!=typeof window)return[3,10];if(d=r.AppTree,r.res&&r.res.writableEnded)return[2,f];if(!c||!d)return[3,10];m.label=5;case 5:return m.trys.push([5,8,,9]),[4,Promise.all([n.e(1),n.e(13)]).then(n.bind(null,"ShjV"))];case 6:return h=m.sent().getDataFromTree,void 0,v=t?s(s({},f),{apolloClient:i}):{pageProps:s(s({},f),{apolloClient:i})},[4,h(l.a.createElement(d,s({},v)))];case 7:return m.sent(),[3,9];case 8:return y=m.sent(),console.error("Error while running `getDataFromTree`",y),[3,9];case 9:u.a.rewind(),m.label=10;case 10:return[2,s(s({},f),{apolloState:i.cache.extract(),apolloClient:r.apolloClient})]}}))}))}),i}}}(w)},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},kOll:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n("VX74");function o(){var e=r(["\n  query GetRandomPlantQuiz {\n    plantQuiz {\n      answerID\n      choices {\n        id\n        commonName\n        scientificName\n        imageUrl\n      }\n    }\n  }\n"]);return o=function(){return e},e}function i(){var e=r(["\n  query GetRandomPlantPage {\n    randomPlantCatalog {\n      commonName\n      scientificName\n      id\n      imageUrl\n      familyScientificName\n      familyCommonName\n    }\n  }\n"]);return i=function(){return e},e}function u(){var e=r(["\n  query GetPlantPage {\n    plantCatalog {\n      commonName\n      id\n      imageUrl\n      scientificName\n      familyScientificName\n      familyCommonName\n    }\n  }\n"]);return u=function(){return e},e}var c=Object(a.gql)(u()),l=Object(a.gql)(i()),s=Object(a.gql)(o())},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}}]);