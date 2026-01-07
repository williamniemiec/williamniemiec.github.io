(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,82357,(e,t,r)=>{t.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var d=e[c],u=t[c];if(!1===(i=r?r.call(n,d,u,c):void 0)||void 0===i&&d!==u)return!1}return!0}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return s}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});function o(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));else t.set(r,a(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),i=i.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${i}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(71645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=o(e,n)),t&&(i.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return v},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return j}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let h="undefined"!=typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(18967),i=e.r(52817);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return x},useLinkStatus:function(){return b}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(90809),a=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(91949),m=e.r(73668),h=e.r(9396);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function x(t){var r;let n,i,o,[l,x]=(0,s.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,s.useRef)(null),{href:v,as:w,children:j,prefetch:S=null,passHref:$,replace:k,shallow:_,scroll:C,onClick:E,onMouseEnter:P,onTouchStart:N,legacyBehavior:O=!1,onNavigate:I,ref:T,unstable_dynamicOnHover:R,...z}=t;n=j,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let A=s.default.useContext(c.AppRouterContext),D=!1!==S,M=!1!==S?null===(r=S)||"auto"===r?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:L,as:F}=s.default.useMemo(()=>{let e=g(v);return{href:e,as:w?g(w):e}},[v,w]);if(O){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=s.default.Children.only(n)}let B=O?i&&"object"==typeof i&&i.ref:T,U=s.default.useCallback(e=>(null!==A&&(b.current=(0,p.mountLinkInstance)(e,L,A,M,D,x)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[D,L,A,M,x]),W={ref:(0,d.useMergedRef)(U,B),onClick(t){O||"function"!=typeof E||E(t),O&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!A||t.defaultPrevented||function(t,r,n,i,o,a,l){if("undefined"!=typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(n||r,o?"replace":"push",a??!0,i.current)})}}(t,L,F,b,k,C,I)},onMouseEnter(e){O||"function"!=typeof P||P(e),O&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),A&&D&&(0,p.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){O||"function"!=typeof N||N(e),O&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),A&&D&&(0,p.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,u.isAbsoluteUrl)(F)?W.href=F:O&&!$&&("a"!==i.type||"href"in i.props)||(W.href=(0,f.addBasePath)(F)),o=O?s.default.cloneElement(i,W):(0,a.jsx)("a",{...z,...W,children:n}),(0,a.jsx)(y.Provider,{value:l,children:o})}e.r(84508);let y=(0,s.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18566,(e,t,r)=>{t.exports=e.r(76562)},88143,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:n,blurDataURL:i,objectFit:o}){let a=r?40*r:e,s=n?40*n:t,l=a&&s?`viewBox='0 0 ${a} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return a}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(33525);let n=e.r(43369),i=e.r(88143),o=e.r(87690),a=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:d=!1,loading:u,className:f,quality:p,width:m,height:h,fill:g=!1,style:x,overrideSrc:y,onLoad:b,onLoadingComplete:v,placeholder:w="empty",blurDataURL:j,fetchPriority:S,decoding:$="async",layout:k,objectFit:_,objectPosition:C,lazyBoundary:E,lazyRoot:P,...N},O){var I;let T,R,z,{imgConf:A,showAltText:D,blurComplete:M,defaultLoader:L}=O,F=A||o.imageConfigDefault;if("allSizes"in F)T=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),r=F.qualities?.sort((e,t)=>e-t);T={...F,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=N.loader||L;delete N.loader,delete N.srcSet;let U="__next_img_default"in B;if(U){if("custom"===T.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(k){"fill"===k&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(x={...x,...e});let r={responsive:"100vw",fill:"100vw"}[k];r&&!t&&(t=r)}let W="",G=l(m),q=l(h);if((I=e)&&"object"==typeof I&&(s(I)||void 0!==I.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(R=t.blurWidth,z=t.blurHeight,j=j||t.blurDataURL,W=t.src,!g)if(G||q){if(G&&!q){let e=G/t.width;q=Math.round(t.height*e)}else if(!G&&q){let e=q/t.height;G=Math.round(t.width*e)}}else G=t.width,q=t.height}let V=!c&&!d&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,V=!1),T.unoptimized&&(r=!0),U&&!T.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let Y=l(p),H=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:C}:{},D?{}:{color:"transparent"},x),X=M||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:G,heightInt:q,blurWidth:R,blurHeight:z,blurDataURL:j||"",objectFit:H.objectFit})}")`:`url("${w}")`,K=a.includes(H.objectFit)?"fill"===H.objectFit?"100% 100%":"cover":H.objectFit,J=X?{backgroundSize:K,backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Z=function({config:e,src:t,unoptimized:r,width:i,quality:o,sizes:a,loader:s}){if(r){let e=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let r=t.includes("?")?"&":"?";t=`${t}${r}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:c}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(n);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((r,n)=>`${s({config:e,src:t,quality:o,width:r})} ${"w"===c?r:n+1}${c}`).join(", "),src:s({config:e,src:t,quality:o,width:l[d]})}}({config:T,src:e,unoptimized:r,width:G,quality:Y,sizes:t,loader:B}),Q=V?"lazy":u;return{props:{...N,loading:Q,fetchPriority:S,width:G,height:q,decoding:$,className:f,style:{...H,...J},sizes:Z.sizes,srcSet:Z.srcSet,src:y||Z.src},meta:{unoptimized:r,preload:d||c,placeholder:w,fill:g}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let n=e.r(71645),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return h},defaultHead:function(){return u}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(55682),a=e.r(90809),s=e.r(43476),l=a._(e.r(71645)),c=o._(e.r(98879)),d=e.r(42732);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let p=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,n,i;return e.reduce(f,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,n=new Set,i={},e=>{let o=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?o=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?o=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?o=!1:n.add(r);else{let t=e.props[r],n=i[r]||new Set;("name"!==r||!a)&&n.has(t)?o=!1:(n.add(t),i[r]=n)}}}return o})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let h=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=e.r(55682)._(e.r(71645)),i=e.r(87690),o=n.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});let n=e.r(70965),i=e.r(43369);function o({config:e,src:t,width:r,quality:o}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let a=(0,n.findClosestQuality)(o,e),s=(0,i.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}o.__next_img_default=!0;let a=o},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return v}});let n=e.r(55682),i=e.r(90809),o=e.r(43476),a=i._(e.r(71645)),s=n._(e.r(74080)),l=n._(e.r(25633)),c=e.r(8927),d=e.r(87690),u=e.r(18556);e.r(33525);let f=e.r(65856),p=n._(e.r(1948)),m=e.r(18581),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,n,i,o,a){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function x(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:i,decoding:s,className:l,style:c,fetchPriority:d,placeholder:u,loading:f,unoptimized:p,fill:h,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:v,setShowAltText:w,sizesInput:j,onLoad:S,onError:$,...k},_)=>{let C=(0,a.useCallback)(e=>{e&&($&&(e.src=e.src),e.complete&&g(e,u,y,b,v,p,j))},[e,u,y,b,v,$,p,j]),E=(0,m.useMergedRef)(_,C);return(0,o.jsx)("img",{...k,...x(d),loading:f,width:i,height:n,decoding:s,"data-nimg":h?"fill":"1",className:l,style:c,sizes:r,srcSet:t,src:e,ref:E,onLoad:e=>{g(e.currentTarget,u,y,b,v,p,j)},onError:e=>{w(!0),"empty"!==u&&v(!0),$&&$(e)}})});function b({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(u.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=h||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"undefined"==typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:s,onLoadingComplete:l}=e,m=(0,a.useRef)(s);(0,a.useEffect)(()=>{m.current=s},[s]);let g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let[x,v]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),{props:S,meta:$}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:x,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...S,unoptimized:$.unoptimized,placeholder:$.placeholder,fill:$.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:j,sizesInput:e.sizes,ref:t}),$.preload?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return d},getImageProps:function(){return c}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(55682),a=e.r(8927),s=e.r(5500),l=o._(e.r(1948));function c(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=s.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},31713,e=>{"use strict";var t=e.i(43476),r=e.i(47167),n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;Object.create(null);var o=e.i(71645),a=e.i(82357),s="-ms-",l="-moz-",c="-webkit-",d="comm",u="rule",f="decl",p="@keyframes",m=Math.abs,h=String.fromCharCode,g=Object.assign;function x(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,r){return e.replace(t,r)}function b(e,t,r){return e.indexOf(t,r)}function v(e,t){return 0|e.charCodeAt(t)}function w(e,t,r){return e.slice(t,r)}function j(e){return e.length}function S(e,t){return t.push(e),e}function $(e,t){return e.filter(function(e){return!x(e,t)})}var k=1,_=1,C=0,E=0,P=0,N="";function O(e,t,r,n,i,o,a,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:k,column:_,length:a,return:"",siblings:s}}function I(e,t){return g(O("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function T(e){for(;e.root;)e=I(e.root,{children:[e]});S(e,e.siblings)}function R(){return P=E<C?v(N,E++):0,_++,10===P&&(_=1,k++),P}function z(){return v(N,E)}function A(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D(e){var t,r;return(t=E-1,r=function e(t){for(;R();)switch(P){case t:return E;case 34:case 39:34!==t&&39!==t&&e(P);break;case 40:41===t&&e(t);break;case 92:R()}return E}(91===e?e+2:40===e?e+1:e),w(N,t,r)).trim()}function M(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function L(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case d:return"";case p:return e.return=e.value+"{"+M(e.children,n)+"}";case u:if(!j(e.value=e.props.join(",")))return""}return j(r=M(e.children,n))?e.return=e.value+"{"+r+"}":""}function F(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case f:e.return=function e(t,r,n){var i;switch(i=r,45^v(t,0)?(((i<<2^v(t,0))<<2^v(t,1))<<2^v(t,2))<<2^v(t,3):0){case 5103:return c+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+t+t;case 4789:return l+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return c+t+l+t+s+t+t;case 5936:switch(v(t,r+11)){case 114:return c+t+s+y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return c+t+s+y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return c+t+s+y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return c+t+s+t+t;case 6165:return c+t+s+"flex-"+t+t;case 5187:return c+t+y(t,/(\w+).+(:[^]+)/,c+"box-$1$2"+s+"flex-$1$2")+t;case 5443:return c+t+s+"flex-item-"+y(t,/flex-|-self/g,"")+(x(t,/flex-|baseline/)?"":s+"grid-row-"+y(t,/flex-|-self/g,""))+t;case 4675:return c+t+s+"flex-line-pack"+y(t,/align-content|flex-|-self/g,"")+t;case 5548:return c+t+s+y(t,"shrink","negative")+t;case 5292:return c+t+s+y(t,"basis","preferred-size")+t;case 6060:return c+"box-"+y(t,"-grow","")+c+t+s+y(t,"grow","positive")+t;case 4554:return c+y(t,/([^-])(transform)/g,"$1"+c+"$2")+t;case 6187:return y(y(y(t,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),t,"")+t;case 5495:case 3959:return y(t,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return y(y(t,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+s+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+t+t;case 4200:if(!x(t,/flex-|baseline/))return s+"grid-column-align"+w(t,r)+t;break;case 2592:case 3360:return s+y(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,x(e.props,/grid-\w+-end/)}))return~b(t+(n=n[r].value),"span",0)?t:s+y(t,"-start","")+t+s+"grid-row-span:"+(~b(n,"span",0)?x(n,/\d+/):x(n,/\d+/)-x(t,/\d+/))+";";return s+y(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return x(e.props,/grid-\w+-start/)})?t:s+y(y(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return y(t,/(.+)-inline(.+)/,c+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(t)-1-r>6)switch(v(t,r+1)){case 109:if(45!==v(t,r+4))break;case 102:return y(t,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+l+(108==v(t,r+3)?"$3":"$2-$3"))+t;case 115:return~b(t,"stretch",0)?e(y(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return y(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,i,o,a,l){return s+r+":"+n+l+(i?s+r+"-span:"+(o?a:a-n)+l:"")+t});case 4949:if(121===v(t,r+6))return y(t,":",":"+c)+t;break;case 6444:switch(v(t,45===v(t,14)?18:11)){case 120:return y(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===v(t,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+s+"$2box$3")+t;case 100:return y(t,":",":"+s)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case p:return M([I(e,{value:y(e.value,"@","@"+c)})],n);case u:if(e.length){var i,o;return i=r=e.props,o=function(t){switch(x(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":T(I(e,{props:[y(t,/:(read-\w+)/,":"+l+"$1")]})),T(I(e,{props:[t]})),g(e,{props:$(r,n)});break;case"::placeholder":T(I(e,{props:[y(t,/:(plac\w+)/,":"+c+"input-$1")]})),T(I(e,{props:[y(t,/:(plac\w+)/,":"+l+"$1")]})),T(I(e,{props:[y(t,/:(plac\w+)/,s+"input-$1")]})),T(I(e,{props:[t]})),g(e,{props:$(r,n)})}return""},i.map(o).join("")}}}function B(e,t,r,n,i,o,a,s,l,c,d,f){for(var p=i-1,h=0===i?o:[""],g=h.length,x=0,b=0,v=0;x<n;++x)for(var j=0,S=w(e,p+1,p=m(b=a[x])),$=e;j<g;++j)($=(b>0?h[j]+" "+S:y(S,/&\f/g,h[j])).trim())&&(l[v++]=$);return O(e,t,r,0===i?u:s,l,c,d,f)}function U(e,t,r,n,i){return O(e,t,r,f,w(e,0,n),w(e,n+1,-1),n,i)}var W={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},G=void 0!==r.default&&void 0!==r.default.env&&(r.default.env.REACT_APP_SC_ATTR||r.default.env.SC_ATTR)||"data-styled",q="active",V="data-styled-version",Y="6.1.19",H="/*!sc*/\n",X="undefined"!=typeof window&&"undefined"!=typeof document,K=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==r.default&&void 0!==r.default.env&&void 0!==r.default.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==r.default.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==r.default.env.REACT_APP_SC_DISABLE_SPEEDY&&r.default.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==r.default&&void 0!==r.default.env&&void 0!==r.default.env.SC_DISABLE_SPEEDY&&""!==r.default.env.SC_DISABLE_SPEEDY&&"false"!==r.default.env.SC_DISABLE_SPEEDY&&r.default.env.SC_DISABLE_SPEEDY),J={},Z=Object.freeze([]),Q=Object.freeze({});function ee(e,t,r){return void 0===r&&(r=Q),e.theme!==r.theme&&e.theme||t||r.theme}var et=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),er=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,en=/(^-|-$)/g;function ei(e){return e.replace(er,"-").replace(en,"")}var eo=/(a)(d)/gi,ea=function(e){return String.fromCharCode(e+(e>25?39:97))};function es(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=ea(t%52)+r;return(ea(t%52)+r).replace(eo,"$1-$2")}var el,ec=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},ed=function(e){return ec(5381,e)};function eu(e){return es(ed(e)>>>0)}function ef(e){return"string"==typeof e}var ep="function"==typeof Symbol&&Symbol.for,em=ep?Symbol.for("react.memo"):60115,eh=ep?Symbol.for("react.forward_ref"):60112,eg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ex={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ey={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eb=((el={})[eh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},el[em]=ey,el);function ev(e){return("type"in e&&e.type.$$typeof)===em?ey:"$$typeof"in e?eb[e.$$typeof]:eg}var ew=Object.defineProperty,ej=Object.getOwnPropertyNames,eS=Object.getOwnPropertySymbols,e$=Object.getOwnPropertyDescriptor,ek=Object.getPrototypeOf,e_=Object.prototype;function eC(e){return"function"==typeof e}function eE(e){return"object"==typeof e&&"styledComponentId"in e}function eP(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eN(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function eO(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eI(e,t){Object.defineProperty(e,"toString",{value:t})}function eT(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eR=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw eT(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(H);return t},e}(),ez=new Map,eA=new Map,eD=1,eM=function(e){if(ez.has(e))return ez.get(e);for(;eA.has(eD);)eD++;var t=eD++;return ez.set(e,t),eA.set(t,e),t},eL=function(e,t){eD=t+1,ez.set(e,t),eA.set(t,e)},eF="style[".concat(G,"][").concat(V,'="').concat(Y,'"]'),eB=new RegExp("^".concat(G,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eU=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},eW=function(e,t){for(var r,n=(null!=(r=t.textContent)?r:"").split(H),i=[],o=0,a=n.length;o<a;o++){var s=n[o].trim();if(s){var l=s.match(eB);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(eL(d,c),eU(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},eG=function(e){for(var t=document.querySelectorAll(eF),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(G)!==q&&(eW(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function eq(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var eV=function(e){var t,r=document.head,n=e||r,i=document.createElement("style"),o=(t=Array.from(n.querySelectorAll("style[".concat(G,"]"))))[t.length-1],a=void 0!==o?o.nextSibling:null;i.setAttribute(G,q),i.setAttribute(V,Y);var s=eq();return s&&i.setAttribute("nonce",s),n.insertBefore(i,a),i},eY=function(){function e(e){this.element=eV(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}throw eT(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eH=function(){function e(e){this.element=eV(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eX=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eK=X,eJ={isServer:!X,useCSSOMInjection:!K},eZ=function(){function e(e,t,r){void 0===e&&(e=Q),void 0===t&&(t={});var i=this;this.options=n(n({},eJ),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&X&&eK&&(eK=!1,eG(this)),eI(this,function(){for(var e=i.getTag(),t=e.length,r="",n=0;n<t;n++)!function(t){var n=eA.get(t);if(void 0===n)return;var o=i.names.get(n),a=e.getGroup(t);if(void 0!==o&&o.size&&0!==a.length){var s="".concat(G,".g").concat(t,'[id="').concat(n,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(H)}}(n);return r})}return e.registerId=function(e){return eM(e)},e.prototype.rehydrate=function(){!this.server&&X&&eG(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(n(n({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,r=e.target,new eR(e.isServer?new eX(r):t?new eY(r):new eH(r))))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(eM(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(eM(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(eM(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eQ=/&/g,e0=/^\s*\/\/.*$/gm;function e1(e){var t,r,n,i=void 0===e?Q:e,o=i.options,a=void 0===o?Q:o,s=i.plugins,l=void 0===s?Z:s,c=function(e,n,i){return i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,"").length>0?".".concat(t):e},f=l.slice();f.push(function(e){e.type===u&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(eQ,r).replace(n,c))}),a.prefix&&f.push(F),f.push(L);var p=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,r=i,n=RegExp("\\".concat(r,"\\b"),"g");var l,c,u,p,g,x,$=e.replace(e0,""),I=(g=function e(t,r,n,i,o,a,s,l,c){for(var u,f,p,g,x=0,$=0,C=s,I=0,T=0,M=0,L=1,F=1,W=1,G=0,q="",V=o,Y=a,H=i,X=q;F;)switch(M=G,G=R()){case 40:if(108!=M&&58==v(X,C-1)){-1!=b(X+=y(D(G),"&","&\f"),"&\f",m(x?l[x-1]:0))&&(W=-1);break}case 34:case 39:case 91:X+=D(G);break;case 9:case 10:case 13:case 32:X+=function(e){for(;P=z();)if(P<33)R();else break;return A(e)>2||A(P)>3?"":" "}(M);break;case 92:X+=function(e,t){for(var r;--t&&R()&&!(P<48)&&!(P>102)&&(!(P>57)||!(P<65))&&(!(P>70)||!(P<97)););return r=E+(t<6&&32==z()&&32==R()),w(N,e,r)}(E-1,7);continue;case 47:switch(z()){case 42:case 47:S((u=function(e,t){for(;R();)if(e+P===57)break;else if(e+P===84&&47===z())break;return"/*"+w(N,t,E-1)+"*"+h(47===e?e:R())}(R(),E),f=r,p=n,g=c,O(u,f,p,d,h(P),w(u,2,-2),0,g)),c);break;default:X+="/"}break;case 123*L:l[x++]=j(X)*W;case 125*L:case 59:case 0:switch(G){case 0:case 125:F=0;case 59+$:-1==W&&(X=y(X,/\f/g,"")),T>0&&j(X)-C&&S(T>32?U(X+";",i,n,C-1,c):U(y(X," ","")+";",i,n,C-2,c),c);break;case 59:X+=";";default:if(S(H=B(X,r,n,x,$,o,l,q,V=[],Y=[],C,a),a),123===G)if(0===$)e(X,r,H,H,V,a,C,l,Y);else switch(99===I&&110===v(X,3)?100:I){case 100:case 108:case 109:case 115:e(t,H,H,i&&S(B(t,H,H,0,0,o,l,q,o,V=[],C,Y),Y),o,Y,C,l,i?V:Y);break;default:e(X,H,H,H,[""],Y,0,l,Y)}}x=$=T=0,L=W=1,q=X="",C=s;break;case 58:C=1+j(X),T=M;default:if(L<1){if(123==G)--L;else if(125==G&&0==L++&&125==(P=E>0?v(N,--E):0,_--,10===P&&(_=1,k--),P))continue}switch(X+=h(G),G*L){case 38:W=$>0?1:(X+="\f",-1);break;case 44:l[x++]=(j(X)-1)*W,W=1;break;case 64:45===z()&&(X+=D(R())),I=z(),$=C=j(q=X+=function(e){for(;!A(z());)R();return w(N,e,E)}(E)),G++;break;case 45:45===M&&2==j(X)&&(L=0)}}return a}("",null,null,null,[""],(p=u=o||i?"".concat(o," ").concat(i," { ").concat($," }"):$,k=_=1,C=j(N=p),E=0,u=[]),0,[0],u),N="",g);a.namespace&&(I=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(I,a.namespace));var T=[];return M(I,(c=(l=f.concat((x=function(e){return T.push(e)},function(e){!e.root&&(e=e.return)&&x(e)}))).length,function(e,t,r,n){for(var i="",o=0;o<c;o++)i+=l[o](e,t,r,n)||"";return i})),T};return p.hash=l.length?l.reduce(function(e,t){return t.name||eT(15),ec(e,t.name)},5381).toString():"",p}var e5=new eZ,e2=e1(),e4=o.default.createContext({shouldForwardProp:void 0,styleSheet:e5,stylis:e2}),e3=(e4.Consumer,o.default.createContext(void 0));function e6(){return(0,o.useContext)(e4)}function e8(e){var t=(0,o.useState)(e.stylisPlugins),r=t[0],n=t[1],i=e6().styleSheet,s=(0,o.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,o.useMemo)(function(){return e1({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,o.useEffect)(function(){(0,a.default)(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var c=(0,o.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:s,stylis:l}},[e.shouldForwardProp,s,l]);return o.default.createElement(e4.Provider,{value:c},o.default.createElement(e3.Provider,{value:l},e.children))}var e9=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=e2);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eI(this,function(){throw eT(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=e2),this.name+e.hash},e}();function e7(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;n>="A"&&n<="Z"?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var te=function(e){return null==e||!1===e||""===e},tt=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!te(n)&&(Array.isArray(n)&&n.isCss||eC(n)?t.push("".concat(e7(r),":"),n,";"):eO(n)?t.push.apply(t,i(i(["".concat(r," {")],tt(n),!1),["}"],!1)):t.push("".concat(e7(r),": ").concat(null==n||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||r in W||r.startsWith("--")?String(n).trim():"".concat(n,"px"),";")))}return t};function tr(e,t,r,n){if(te(e))return[];if(eE(e))return[".".concat(e.styledComponentId)];if(eC(e))return!eC(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:tr(e(t),t,r,n);return e instanceof e9?r?(e.inject(r,n),[e.getName(n)]):[e]:eO(e)?tt(e):Array.isArray(e)?Array.prototype.concat.apply(Z,e.map(function(e){return tr(e,t,r,n)})):[e.toString()]}function tn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(eC(r)&&!eE(r))return!1}return!0}var ti=ed(Y),to=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&tn(e),this.componentId=t,this.baseHash=ec(ti,t),this.baseStyle=r,eZ.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=eP(n,this.staticRulesId);else{var i=eN(tr(this.rules,e,t,r)),o=es(ec(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=eP(n,o),this.staticRulesId=o}else{for(var s=ec(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=eN(tr(d,e,t,r));s=ec(s,u+c),l+=u}}if(l){var f=es(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),n=eP(n,f)}}return n},e}(),ta=o.default.createContext(void 0);function ts(e){var t=o.default.useContext(ta),r=(0,o.useMemo)(function(){var r=e.theme;if(!r)throw eT(14);if(eC(r))return r(t);if(Array.isArray(r)||"object"!=typeof r)throw eT(8);return t?n(n({},t),r):r},[e.theme,t]);return e.children?o.default.createElement(ta.Provider,{value:r},e.children):null}ta.Consumer;var tl={};function tc(e,t,r){var i,a,s,l,c=eE(e),d=!ef(e),u=t.attrs,f=void 0===u?Z:u,p=t.componentId,m=void 0===p?(i=t.displayName,a=t.parentComponentId,tl[s="string"!=typeof i?"sc":ei(i)]=(tl[s]||0)+1,l="".concat(s,"-").concat(eu(Y+s+tl[s])),a?"".concat(a,"-").concat(l):l):p,h=t.displayName,g=void 0===h?ef(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):h,x=t.displayName&&t.componentId?"".concat(ei(t.displayName),"-").concat(t.componentId):t.componentId||m,y=c&&e.attrs?e.attrs.concat(f).filter(Boolean):f,b=t.shouldForwardProp;if(c&&e.shouldForwardProp){var v=e.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;b=function(e,t){return v(e,t)&&w(e,t)}}else b=v}var j=new to(r,x,c?e.componentStyle:void 0);function S(e,t){return function(e,t,r){var i,a=e.attrs,s=e.componentStyle,l=e.defaultProps,c=e.foldedComponentIds,d=e.styledComponentId,u=e.target,f=o.default.useContext(ta),p=e6(),m=e.shouldForwardProp||p.shouldForwardProp,h=ee(t,f,l)||Q,g=function(e,t,r){for(var i,o=n(n({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var s=eC(i=e[a])?i(o):i;for(var l in s)o[l]="className"===l?eP(o[l],s[l]):"style"===l?n(n({},o[l]),s[l]):s[l]}return t.className&&(o.className=eP(o.className,t.className)),o}(a,t,h),x=g.as||u,y={};for(var b in g)void 0===g[b]||"$"===b[0]||"as"===b||"theme"===b&&g.theme===h||("forwardedAs"===b?y.as=g.forwardedAs:m&&!m(b,x)||(y[b]=g[b]));var v=(i=e6(),s.generateAndInjectStyles(g,i.styleSheet,i.stylis)),w=eP(c,d);return v&&(w+=" "+v),g.className&&(w+=" "+g.className),y[ef(x)&&!et.has(x)?"class":"className"]=w,r&&(y.ref=r),(0,o.createElement)(x,y)}($,e,t)}S.displayName=g;var $=o.default.forwardRef(S);return $.attrs=y,$.componentStyle=j,$.displayName=g,$.shouldForwardProp=b,$.foldedComponentIds=c?eP(e.foldedComponentIds,e.styledComponentId):"",$.styledComponentId=x,$.target=c?e.target:e,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=c?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)!function e(t,r,n){if(void 0===n&&(n=!1),!n&&!eO(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var i=0;i<r.length;i++)t[i]=e(t[i],r[i]);else if(eO(r))for(var i in r)t[i]=e(t[i],r[i]);return t}(e,t[n],!0);return e}({},e.defaultProps,t):t}}),eI($,function(){return".".concat($.styledComponentId)}),d&&function e(t,r,n){if("string"!=typeof r){if(e_){var i=ek(r);i&&i!==e_&&e(t,i,n)}var o=ej(r);eS&&(o=o.concat(eS(r)));for(var a=ev(t),s=ev(r),l=0;l<o.length;++l){var c=o[l];if(!(c in ex||n&&n[c]||s&&c in s||a&&c in a)){var d=e$(r,c);try{ew(t,c,d)}catch(e){}}}}return t}($,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function td(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var tu=function(e){return Object.assign(e,{isCss:!0})};function tf(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return eC(e)||eO(e)?tu(tr(td(Z,i([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?tr(e):tu(tr(td(e,t)))}var tp=function(e){return function e(t,r,o){if(void 0===o&&(o=Q),!r)throw eT(1,r);var a=function(e){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];return t(r,o,tf.apply(void 0,i([e],n,!1)))};return a.attrs=function(i){return e(t,r,n(n({},o),{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},a.withConfig=function(i){return e(t,r,n(n({},o),i))},a}(tc,e)};et.forEach(function(e){tp[e]=tp(e)});var tm=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=tn(e),eZ.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var i=n(eN(tr(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&eZ.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function th(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=eN(tf.apply(void 0,i([e],t,!1)));return new e9(eu(n),n)}function tg(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=eq(),n=eN([r&&'nonce="'.concat(r,'"'),"".concat(G,'="true"'),"".concat(V,'="').concat(Y,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw eT(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw eT(2);var t,r=e.instance.toString();if(!r)return[];var i=((t={})[G]="",t[V]=Y,t.dangerouslySetInnerHTML={__html:r},t),a=eq();return a&&(i.nonce=a),[o.default.createElement("style",n({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new eZ({isServer:!0}),this.sealed=!1}tg.prototype.collectStyles=function(e){if(this.sealed)throw eT(2);return o.default.createElement(e8,{sheet:this.instance},e)},tg.prototype.interleaveWithNodeStream=function(e){throw eT(3)};let tx={colors:{primary:"#1d048a",primaryDark:"#0e0245",secondary:"rgb(0, 1, 43)",accent:"#ff7b00",accent2:"#ffae00",purple:"#420177",purpleLight:"#57059e",purpleDark:"#4a00e0",yellow:"#ffd900",yellowLight:"rgb(255, 230, 0)",white:"#fff",black:"#000",gray:"#f7f7f7",grayLight:"#e5ecfb",dark:"#222",darkBlue:"#002057",darkNavy:"rgb(0, 1, 43)",text:"rgb(32, 32, 32)",textSecondary:"#ccc"},fonts:{poppins:"'Poppins', sans-serif",nunito:"'Nunito', sans-serif"},breakpoints:{mobile:"500px",tablet:"850px",desktop:"900px"}},ty=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var a=tf.apply(void 0,i([e],t,!1)),s="sc-global-".concat(eu(JSON.stringify(a))),l=new tm(a,s),c=function(e){var t=e6(),r=o.default.useContext(ta),n=o.default.useRef(t.styleSheet.allocateGSInstance(s)).current;return t.styleSheet.server&&d(n,e,t.styleSheet,r,t.stylis),o.default.useLayoutEffect(function(){if(!t.styleSheet.server)return d(n,e,t.styleSheet,r,t.stylis),function(){return l.removeStyles(n,t.styleSheet)}},[n,e,t.styleSheet,r,t.stylis]),null};function d(e,t,r,i,o){if(l.isStatic)l.renderStyles(e,J,r,o);else{var a=n(n({},t),{theme:ee(t,i,c.defaultProps)});l.renderStyles(e,a,r,o)}}return o.default.memo(c)})`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    transition: all 0.2s linear;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    background: ${tx.colors.gray};
    font-family: ${tx.fonts.poppins};
  }

  *::selection {
    background: #2b3dda;
    color: #fff;
  }

  html::-webkit-scrollbar {
    width: 0.8rem;
  }

  html::-webkit-scrollbar-track {
    background: ${tx.colors.grayLight};
  }

  html::-webkit-scrollbar-thumb {
    background: ${tx.colors.primary};
  }

  /* scroll top starts */
  #scroll-top {
    position: fixed;
    top: -140%;
    right: 2rem;
    padding: 1rem 1.5rem;
    font-size: 2rem;
    background: ${tx.colors.dark};
    color: ${tx.colors.white};
    border-radius: 50%;
    transition: 1s linear;
    z-index: 1000;
  }

  #scroll-top.active {
    top: calc(100% - 12rem);
  }
  /* scroll top ends */

  @media (max-width: ${tx.breakpoints.mobile}) {
    html {
      font-size: 55%;
    }
    body {
      padding-right: 0;
    }
  }
`;var tb=e.i(22016),tv=e.i(18566);let tw=tp.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.7rem 10%;
  height: 6.5rem;
  background-color: ${tx.colors.white};
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.3);

  @media screen and (max-width: 1024px) {
    padding: 1.7rem;
  }
`,tj=tp(tb.default)`
  font-size: 1.9rem;
  font-weight: 800;
  text-decoration: none;
  color: ${tx.colors.dark};

  i {
    font-size: 2.2rem;
  }

  &:hover {
    color: ${tx.colors.primary};
  }
`,tS=tp.div`
  font-size: 3rem;
  cursor: pointer;
  color: rgb(24, 2, 63);
  display: none;

  @media (max-width: 900px) {
    display: block;
  }

  &.fa-times {
    transform: rotate(180deg);
  }
`,t$=tp.nav`
  display: flex;
  align-items: center;
  
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  li {
    margin-left: 2.5rem;
  }

  ul li a {
    font-size: 1.57rem;
    color: ${tx.colors.dark};
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.04rem;
    transition: 0.2s;
  }

  ul li a.active,
  ul li a:hover {
    color: ${tx.colors.dark};
    border-bottom: 0.2rem solid ${tx.colors.primary};
    padding: 0.5rem 0;
  }

  @media (max-width: 900px) {
    position: fixed;
    top: 6.5rem;
    right: ${e=>e.$isOpen?"0":"-120%"};
    width: 28rem;
    height: 100%;
    text-align: left;
    align-items: flex-start;
    background-color: #0e0f31;
    transition: right 0.3s ease;

    ul {
      flex-flow: column;
      padding: 1rem;
      width: 100%;
    }

    ul li {
      text-align: center;
      width: 100%!important;
      margin: 1rem 0;
      border-radius: 0.5rem;
      width: 26rem;
    }

    ul li a {
      display: block;
      padding: 1rem;
      text-align: left;
      color: ${tx.colors.white};
      font-size: 2rem;
      height: 5.5rem;
    }

    ul li a.active,
    ul li a:hover {
      padding: 1rem;
      color: ${tx.colors.white};
      border-bottom: 0.3rem solid ${tx.colors.white};
    }
  }

  @media (max-width: ${tx.breakpoints.mobile}) {
    width: 100%;
  }
`,tk=tp.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 900px) {
    position: absolute;
    right: 7.5rem;
    top: 1.8rem;
  }
`;var t_=e.i(507),tC=e.i(11180);let tE=(0,o.createContext)(void 0),tP={en:t_.default,pt:tC.default},tN=({children:e,initialLanguage:r})=>{let[n,i]=(0,o.useState)(r||"en"),[a,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(s(!0),void 0!==globalThis.window){let e=globalThis.window.localStorage.getItem("language");if(e&&("en"===e||"pt"===e))return void i(e);(globalThis.navigator.language||globalThis.navigator.userLanguage).startsWith("pt")&&i("pt")}},[]),(0,o.useEffect)(()=>{"undefined"!=typeof document&&(document.documentElement.lang=n),a&&void 0!==globalThis.window&&globalThis.window.localStorage.setItem("language",n)},[n,a]);let l=e=>{i(e)},c=(0,o.useMemo)(()=>({language:n,setLanguage:l,t:tP[n]}),[n]);return(0,t.jsx)(tE.Provider,{value:c,children:e})},tO=()=>{let e=(0,o.useContext)(tE);if(void 0===e)throw Error("useLanguage must be used within a LanguageProvider");return e},tI=tp.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid ${tx.colors.primary};
  border-radius: 0.5rem;
  color: ${tx.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;

  &:hover {
    background: ${tx.colors.primary};
    color: ${tx.colors.white};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,tT=tp.span`
  font-size: 1.2rem;
`,tR=tp.span`
  font-weight: 600;
`,tz=()=>{let{language:e,setLanguage:r}=tO();return(0,t.jsxs)(tI,{onClick:()=>{r("en"===e?"pt":"en")},title:"en"===e?"Mudar para Português":"Switch to English",children:[(0,t.jsx)(tT,{children:"en"===e?"🇺🇸":"🇧🇷"}),(0,t.jsx)(tR,{children:e.toUpperCase()})]})},tA=()=>{let{t:e}=tO(),[r,n]=(0,o.useState)(!1),i=function(e=200){let[t,r]=(0,o.useState)("");return(0,o.useEffect)(()=>{let t=()=>{let t=document.querySelectorAll("section[id]"),n=window.pageYOffset;t.forEach(t=>{let i=t.getBoundingClientRect().height,o=t.offsetTop-e,a=t.getAttribute("id");n>o&&n<=o+i&&r(a||"")})};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),t}(),a=(0,tv.usePathname)(),s=()=>{n(!1)},l=e=>"/"===a&&e.startsWith("#")?i===e.substring(1):a===e;return(0,t.jsxs)(tw,{children:[(0,t.jsx)(tj,{href:"/",children:"William Niemiec"}),(0,t.jsx)(tS,{id:"menu",className:`fas ${r?"fa-times":"fa-bars"}`,onClick:()=>{n(!r)},$isOpen:r}),(0,t.jsx)(t$,{$isOpen:r,children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(tb.default,{href:"/#home",className:l("#home")?"active":"",onClick:s,children:e.header.home})}),(0,t.jsx)("li",{children:(0,t.jsx)(tb.default,{href:"/#about",className:l("#about")?"active":"",onClick:s,children:e.header.about})}),(0,t.jsx)("li",{children:(0,t.jsx)(tb.default,{href:"/#skills",className:l("#skills")?"active":"",onClick:s,children:e.header.skills})}),(0,t.jsx)("li",{children:(0,t.jsx)(tb.default,{href:"/#education",className:l("#education")?"active":"",onClick:s,children:e.header.education})}),(0,t.jsx)("li",{children:(0,t.jsx)(tb.default,{href:"/#work",className:l("#work")?"active":"",onClick:s,children:e.header.work})}),(0,t.jsx)("li",{children:(0,t.jsx)(tb.default,{href:"/#experience",className:l("#experience")?"active":"",onClick:s,children:e.header.experience})}),(0,t.jsx)("li",{children:(0,t.jsx)(tb.default,{href:"/#research",className:l("#research")?"active":"",onClick:s,children:e.header.research})})]})}),(0,t.jsx)(tk,{children:(0,t.jsx)(tz,{})})]})},tD=tp.section`
  min-height: auto;
  padding-top: 0;
  margin-top: 2rem;
  background: ${tx.colors.primaryDark};
`,tM=tp.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  margin: auto;
`,tL=tp.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 2.5rem;
    color: ${tx.colors.white};
    padding-bottom: 1rem;
    font-weight: normal;
  }

  p {
    font-size: 1.5rem;
    color: ${tx.colors.textSecondary};
    padding: 0.7rem 0;

    i {
      padding-right: 1rem;
      color: ${tx.colors.white};
    }
  }

  @media (max-width: ${tx.breakpoints.tablet}) {
    p {
      text-align: center;
    }
  }

  @media (max-width: ${tx.breakpoints.mobile}) {
    margin: 1.5rem;

    p {
      padding: 0.7rem;
    }
  }
`,tF=tp.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  gap: 1rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 4rem;
    padding: 1rem;
    text-align: center;
    border-radius: 5rem;
    font-size: 1.7rem;
    margin-right: 1rem;
    transition: 0.2s;
    background: ${tx.colors.white};
    color: ${tx.colors.primaryDark};
    border: 2px solid ${tx.colors.primaryDark};

    &:hover {
      background: transparent;
      border: 2px solid ${tx.colors.white};
      color: ${tx.colors.white};
    }

    @media (max-width: ${tx.breakpoints.mobile}) {
      padding: 1.2rem;
    }
  }
`,tB=tp.div`
  padding: 1rem 0 0 0;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-family: ${tx.fonts.nunito};
  font-weight: 600;
  color: ${tx.colors.white};
  background-color: ${tx.colors.secondary};

  a {
    color: ${tx.colors.white};
    text-decoration: underline;
  }

  .fa {
    color: #e90606;
    margin: 0 0.3rem;
    font-size: 1.5rem;
  }
`,tU=tp.section`
  background-color: ${tx.colors.white};
  display: flex;
  flex-direction: column;
`,tW=tp.h2`
  font-size: 1.5rem;
  text-align: center;
  font-family: ${tx.fonts.nunito};
  font-weight: 600;
  margin-top: 0.5rem;
`,tG=tp.h2`
  font-size: 3.5rem;
  color: ${({color:e})=>e};
  font-weight: 800;
  text-align: center;

  span {
    color: ${({$highlighted:e,color:t})=>e||t};
  }
`,tq=tp.div`
  background-color: ${({$fill:e})=>e};
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 100vw;
`,tV=({children:e,id:r,className:n})=>(0,t.jsx)(tU,{id:r,className:n,children:e});tV.Title=({color:e,highlightedColor:r,primaryText:n,highlightedText:i,icon:o,className:a})=>(0,t.jsxs)(tG,{color:e,$highlighted:r,className:a,children:[(0,t.jsx)("i",{className:`fas ${o}`})," ",n," ",(0,t.jsx)("span",{children:i})]}),tV.Subtitle=({color:e,text:r})=>(0,t.jsx)(tW,{color:e,children:r}),tV.WaveDivider=({fillTop:e,fillBottom:r})=>(0,t.jsx)(tq,{$fill:r,children:(0,t.jsx)("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",children:(0,t.jsx)("path",{fill:e,d:"M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"})})});var tY=e.i(74404);let tH=()=>{let{t:e}=tO();return(0,t.jsx)(tV,{children:(0,t.jsxs)(tD,{children:[(0,t.jsx)(tM,{children:(0,t.jsxs)(tL,{children:[(0,t.jsx)("h3",{children:e.footer.socials}),(0,t.jsx)(tF,{children:tY.default.map(e=>(0,t.jsx)("a",{href:e.url,className:e.icon,"aria-label":e.name,target:"_blank",rel:"noopener noreferrer"},e.name))})]})}),(0,t.jsx)(tB,{children:e.footer.copyright})]})})},tX=tp.h2`
  font-size: 5rem;
  font-weight: 800;
  color: ${tx.colors.dark};

  span {
    font-size: 5rem;
    font-weight: 800;
    color: ${tx.colors.primary};
  }
`,tK=tp.div`
  padding-top: 1rem;
  z-index: 1;
  width: 50rem;

  @media screen and (max-width: 887px) {
    padding-top: 35rem;
    width: 100%;
    
    .btn {
      width: 100%;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: ${tx.breakpoints.tablet}) {
    padding-top: 30rem;
  }

  @media (max-width: ${tx.breakpoints.mobile}) {
    padding-top: 26rem;
  }
`,tJ=tp.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${tx.colors.white};
  padding: 4rem 2rem;
  margin-top: 6.5rem;

  @media (max-width: ${tx.breakpoints.mobile}) {
    margin-bottom: -5rem;
  }
`,tZ=({children:e})=>(0,t.jsx)(tJ,{id:"home",className:"home",children:e}),tQ=tp.p`
  font-size: 2.5rem;
  color: ${tx.colors.dark};
  font-weight: 600;
  min-height: 14rem;

  span {
    font-size: 2.5rem;
    color: ${tx.colors.primary};
    font-weight: 600;
    padding: 1rem 0;
  }

  @media (max-width: ${tx.breakpoints.tablet}) {
    min-height: 12rem;
  }
`,t0=({typedRef:e})=>{let{t:r}=tO();return(0,t.jsxs)(tQ,{children:[r.introduction.iAmInto," ",(0,t.jsx)("span",{className:"typing-text",ref:e})]})},t1=tp.ul`
  position: relative;
  margin-top: 6rem;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  display: flex;
  gap: 1rem;

  li {
    display: inline-block;
    margin-bottom: 14px;
  }

  a {
    font-size: 2rem;
    display: inline-block;
    line-height: 44px;
    color: ${tx.colors.white};
    background-color: ${tx.colors.primary};
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    transition: all 0.2s linear;

    &:active,
    &:focus,
    &:hover {
      color: ${tx.colors.white};
      background-color: ${tx.colors.primaryDark};
    }
  }

  @media (max-width: ${tx.breakpoints.tablet}) {
    justify-content: center;
    margin-top: 3rem;
  }

  @media (max-width: 350px) {
    gap: 0;
  }
`,t5=()=>(0,t.jsx)(t1,{children:tY.default.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:e.className,"aria-label":e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("i",{className:e.icon})})},e.name))}),t2=tp.div`
  flex: 1 1 20rem;
  z-index: 1;

  max-width: 415px;

  svg {
    fill: ${tx.colors.primary};
    max-width: 415px;
  }

  @media screen and (max-width: 887px) {
    width: 35rem;
    position: absolute;
    top: 6rem;
    left: calc(50% - 18rem);
    
    img {
      margin-top: -12rem;
    }
  }

  @media only screen and (max-width: ${tx.breakpoints.tablet}) {
    width: 30rem;
    left: calc(50% - 15rem);
  }

  @media only screen and (max-width: ${tx.breakpoints.mobile}) {
    width: 25rem;
    left: calc(50% - 12.5rem);
  }
`,t4=()=>(0,t.jsx)(t2,{className:"image",children:(0,t.jsxs)("svg",{className:"home__blob",viewBox:"0 0 479 467",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("mask",{id:"mask0","mask-type":"alpha",children:(0,t.jsx)("path",{d:"M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"})}),(0,t.jsxs)("g",{mask:"url(#mask0)",children:[(0,t.jsx)("path",{d:"M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"}),(0,t.jsx)("image",{href:"/assets/images/perfil.png",className:"home__blob-img",x:"60",y:"10",width:350})]})]})}),t3=tp.a`
  position: relative;
  line-height: 0;
  padding: 1.6rem 3rem;
  border-radius: 0.5em;
  transition: 0.5s;
  color: ${tx.colors.white};
  font-weight: 700;
  border: 2px solid ${tx.colors.white};
  box-shadow: 0px 5px 10px rgba(65, 84, 241, 0.4);
  text-align: center;

  span {
    font-weight: 600;
    font-size: 1.7rem;
    font-family: ${tx.fonts.nunito};
  }

  i {
    margin-left: 0.3rem;
    font-size: 1.5rem;
    transition: 0.3s;
  }

  &:hover {
    background: ${tx.colors.white};
    color: ${tx.colors.black};

    i {
      transform: translateX(5px);
    }
  }
`,t6=({href:e,children:r,icon:n,id:i,target:o,rel:a})=>(0,t.jsxs)(t3,{href:e,id:i,target:o,rel:a,children:[(0,t.jsx)("span",{children:r}),(0,t.jsx)("i",{className:`fas ${n}`})]}),t8=tp.a`
  margin-top: 1rem;
  position: relative;
  line-height: 0;
  padding: 1.6rem 3rem;
  border-radius: 4em;
  transition: 0.5s;
  color: ${tx.colors.white};
  background: ${tx.colors.primary};
  box-shadow: 0px 5px 18px rgba(48, 68, 247, 0.6);
  font-family: ${tx.fonts.nunito};

  span {
    font-weight: 700;
    font-size: 1.7rem;
    letter-spacing: 0.1rem;
  }

  i {
    margin-left: 0.3rem;
    font-size: 1.5rem;
    transition: 0.3s;
  }

  &:hover {
    background: ${tx.colors.primaryDark};

    i {
      transform: translateX(5px);
    }
  }
`,t9=({href:e,children:r,icon:n,id:i,target:o,rel:a})=>(0,t.jsxs)(t8,{href:e,id:i,target:o,rel:a,className:"btn",children:[(0,t.jsx)("span",{children:r}),(0,t.jsx)("i",{className:`fas ${n}`})]}),t7=({type:e,...r})=>{switch(e){case"primary":return(0,t.jsx)(t9,{...r});case"outlined":return(0,t.jsx)(t6,{...r});default:return null}},re=({typedRef:e})=>{let{t:r}=tO(),n=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{if(!n.current){let e=r.introduction.welcomeMessage;console.log(`%c${e}`,"font-weight: bold;font-size:20px"),n.current=!0}},[r]),(0,t.jsxs)(tZ,{children:[(0,t.jsxs)(tK,{className:"content",children:[(0,t.jsxs)(tX,{children:[r.introduction.hi," ",(0,t.jsx)("br",{})," ",r.introduction.im," ",(0,t.jsx)("span",{children:"William"})]}),(0,t.jsx)(t0,{typedRef:e}),(0,t.jsx)(t7,{type:"primary",href:"#about",icon:"fa-arrow-circle-down",children:r.introduction.aboutMe}),(0,t.jsx)(t5,{})]}),(0,t.jsx)(t4,{})]})},rt=tp.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    padding: 4rem 2rem;
  }
`,rr=tp.div`
  flex: 1 1 45rem;
  padding: 3rem 0;

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`,rn=tp.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  flex-wrap: wrap;

  @media screen and (max-width: ${tx.breakpoints.tablet}) {
    gap: 3rem;
  }
`,ri=tp.h3`
  color: rgb(27, 27, 27);
  font-size: 2.5rem;
`,ro=tp.span`
  font-size: 1.4rem;
  color: #020133;
  font-weight: 600;
  margin-top: 1rem;
  display: block;
`,ra=tp.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  font-family: ${tx.fonts.nunito};
  font-weight: 600;
  text-transform: none;
  text-align: justify;
  margin-bottom: 2.5rem;
`,rs=tp.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  a {
    flex: 1;
    text-align: center;
    width: 100%;
  }

  @media screen and (max-width: 924px) {
    flex-direction: column;
  }
`,rl=tp.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  
`;var rc=e.i(57688);let rd=tp.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 4rem 0;
    width: 30rem;
    height: auto;
    border-radius: 5%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
    mix-blend-mode: luminosity;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      mix-blend-mode: normal;
    }
  }


  @media screen and (max-width: ${tx.breakpoints.tablet}) {
    margin-top: 2rem;
    margin: 0 auto;

    img {
      margin: 0;
      width: 27rem;
    }
  }

  @media screen and (max-width: ${tx.breakpoints.mobile}) {
    img {
      width: 60%;
      /* mix-blend-mode: normal; */
    }
  }
`,ru=()=>(0,t.jsx)(rd,{children:(0,t.jsx)(rc.default,{src:"/assets/images/perfil2.jpg",alt:"William Niemiec - Full-Stack Developer and Ph.D Student at UFRGS",width:300,height:400,className:"tilt",draggable:!1})}),rf=tp.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${tx.colors.primary};
  color: ${tx.colors.white};
  padding: 2rem 1rem;
  border-radius: 5px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  p {
    font-weight: 600;
    font-family: ${tx.fonts.nunito};
    margin: 0;
    padding: 0 1rem;
    min-width: 15rem;

    &:first-child {
      font-weight: 1000;
      font-size: 5rem;
    }

    &:last-child {
      font-size: 2rem;
    }
  }
`,rp=({label:e,value:r})=>(0,t.jsxs)(rf,{children:[(0,t.jsx)("p",{children:r}),(0,t.jsx)("p",{children:e})]}),rm=()=>{let{t:e}=tO();return(0,t.jsxs)(tV,{id:"about",children:[(0,t.jsx)(tV.Title,{color:tx.colors.text,highlightedColor:tx.colors.primary,primaryText:e.about.title,highlightedText:e.about.titleHighlighted,icon:"fa-user-alt",className:"scroll-reveal"}),(0,t.jsxs)(rt,{children:[(0,t.jsxs)(rn,{children:[(0,t.jsx)(ru,{}),(0,t.jsxs)(rr,{className:"content scroll-reveal",children:[(0,t.jsx)(ri,{children:e.about.name}),(0,t.jsx)(ro,{children:e.about.tag}),(0,t.jsx)(ra,{children:e.about.description}),(0,t.jsxs)(rs,{children:[(0,t.jsx)(t7,{type:"primary",id:"resumebtn",href:"/assets/files/cv/professional-resume.pdf",icon:"fa-chevron-right",target:"_blank",rel:"noopener noreferrer",children:e.about.professionalResume}),(0,t.jsx)(t7,{type:"primary",id:"resumebtn",href:"/assets/files/cv/academic-resume.pdf",icon:"fa-chevron-right",target:"_blank",rel:"noopener noreferrer",children:e.about.academicResume})]})]})]}),(0,t.jsxs)(rl,{className:"scroll-reveal",children:[(0,t.jsx)(rp,{label:e.about.yearsExperience,value:"+5"}),(0,t.jsx)(rp,{label:e.about.projectsDelivered,value:"+35"}),(0,t.jsx)(rp,{label:e.about.teamsLed,value:"7"})]})]})]})},rh=tp.div`
  min-height: 90vh;
  background: linear-gradient(to bottom, ${tx.colors.primary}, ${tx.colors.primaryDark});
  padding: 0 2rem;
  @media (max-width: 450px) {
    & {
        padding: 2rem;
    }
}
`,rg=tp.div`
  background: rgba(0, 0, 22, 0.4);
  color: ${tx.colors.white};
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  margin: auto;
  margin-top: 2rem;

  @media screen and (max-width: 600px) {
    padding: 0;
    margin: 0;
    width: 100%;
    margin-top: 5px;
  }
`,rx=tp.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  flex-wrap: wrap;
  gap: 1.8rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    margin: 1rem;
    padding: 2rem 0.2rem 2rem 0.2rem;
    gap: 1rem 2rem;
  }

  @media screen and (max-width: ${tx.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    margin: 1rem;
    padding: 2rem 0.2rem 2rem 0.2rem;
    gap: 1rem 2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem;
    padding: 2rem 0.2rem 2rem 0.2rem;
    gap: 1rem;
  }
`,ry=tp.div`
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 22, 0.9);
  transition: 0.2s;

  &:hover {
    box-shadow: 0 8px 10px rgba(0, 2, 68, 0.8) !important;
    background-color: rgba(0, 0, 0, 0.9) !important;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    span {
      font-size: 1.8rem;
      font-weight: 500;
      font-family: ${tx.fonts.poppins};
      margin-left: 0.5rem;
      text-align: center;
    }
  }
`,rb=({name:e,icon:r})=>(0,t.jsx)(ry,{children:(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)(rc.default,{src:r,alt:e,width:48,height:48}),(0,t.jsx)("span",{children:e})]})}),rv=({skills:e})=>{let{t:r}=tO();return(0,t.jsxs)(tV,{children:[(0,t.jsx)(tV.WaveDivider,{fillTop:"#fff",fillBottom:tx.colors.primary}),(0,t.jsxs)(rh,{id:"skills",children:[(0,t.jsx)(tV.Title,{color:tx.colors.white,highlightedColor:tx.colors.white,primaryText:r.skills.title,highlightedText:r.skills.titleHighlighted,icon:"fa-laptop-code",className:"scroll-reveal"}),(0,t.jsx)(rg,{className:"container scroll-reveal",children:(0,t.jsx)(rx,{id:"skillsContainer",className:"scroll-reveal",children:e.map((e,r)=>(0,t.jsx)(rb,{name:e.name,icon:e.icon},r))})})]}),(0,t.jsx)(tV.WaveDivider,{fillTop:tx.colors.primaryDark,fillBottom:tx.colors.white})]})},rw=tp.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 2rem;
`,rj=tp.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15rem;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  margin-top: 2rem;
  overflow: hidden;
  transition: 0.3s;
  background: rgb(252, 252, 252);
  max-width: 1200px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 1rem 0.5rem 1.2rem rgba(0, 0, 0, 0.3);
  }

  .image {
    flex: 1 1 20rem;
    width: 100%;

    img {
      object-fit: cover;
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    flex-wrap: wrap;
    flex: 1 1 70rem;

    h3 {
      font-size: 2.5rem;
      color: #012970;
      padding: 0.5rem 0;
      font-weight: 600;
      text-align: left;
      margin-left: 1rem;
    }

    p {
      font-size: 1.5rem;
      margin-left: 1rem;
      text-align: left;
    }
  }

  h4 {
    font-size: 2rem;
    color: rgb(34, 109, 0);
    text-align: left;
    margin: 1rem;
    font-family: ${tx.fonts.nunito};
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    height: auto;

    .image {
      width: 100%;
      height: 25rem;

      img {
        width: 100%;
      }
    }

    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      flex-wrap: wrap;
      flex: 0;
    }
  }
`,rS=({imageSrc:e,imageAlt:r,title:n,institution:i,period:o})=>(0,t.jsxs)(rj,{className:"box scroll-reveal",children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)(rc.default,{src:e,alt:r,width:400,height:300,draggable:!1})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h3",{children:n}),(0,t.jsx)("p",{children:i}),(0,t.jsx)("h4",{children:o})]})]}),r$=({institutions:e})=>{let{t:r}=tO();return(0,t.jsxs)(tV,{id:"education",className:"education",children:[(0,t.jsx)(tV.Title,{color:tx.colors.text,highlightedColor:tx.colors.primary,primaryText:r.education.title,highlightedText:r.education.titleHighlighted,icon:"fa-graduation-cap",className:"scroll-reveal"}),(0,t.jsx)(rw,{className:"scroll-reveal",children:e.map(e=>(0,t.jsx)(rS,{imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title,institution:e.institution,period:e.period},e.title))})]})},rk=tp.div`
  background: linear-gradient(to bottom, ${tx.colors.primaryDark}, ${tx.colors.primary});
`,r_=tp.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`,rC=tp.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 2rem;
`,rE=tp.div`
  flex: 1 1 30rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  height: 30rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 85%;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    transition: top 0.3s ease;

    .tag {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 4.5rem;
      min-height: 4.5rem;
      width: 100%;
      padding-left: 1rem;
      background: ${tx.colors.primary};
      color: ${tx.colors.white};

      h3 {
        font-size: 2rem;
      }
    }

    .desc {
      margin: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-size: 1.5rem;
        overflow-y: auto;
      }

      .btns {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 2rem;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          line-height: 0;
          padding: 1.5rem 2.5rem;
          border-radius: 0.5rem;
          font-size: 1.5rem;
          color: ${tx.colors.white};
          background: rgb(12, 12, 12);
          margin-right: 2rem;

          &.disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          i {
            margin-right: 1rem;
            font-size: 1.5rem;
            transition: 0.3s;
          }

          &:hover {
            background: ${tx.colors.primary};
            
            i {
              transform: translateX(5px);
            }
          }
        }
      }
    }
  }

  &:hover .content {
    top: 0;
  }
`,rP=({project:e})=>{let{t:r}=tO();return(0,t.jsxs)(rE,{className:"box tilt scroll-reveal",children:[(0,t.jsx)("img",{src:`/assets/images/projects/${e.image}`,alt:e.name,width:400,height:300,draggable:!1}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("div",{className:"tag",children:(0,t.jsx)("h3",{children:e.name})}),(0,t.jsxs)("div",{className:"desc",children:[(0,t.jsx)("p",{children:e.desc}),(0,t.jsxs)("div",{className:"btns",children:[(0,t.jsxs)("a",{href:e.links.view,className:`btn ${e.links.view?"":"disabled"}`,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)("i",{className:"fas fa-eye"})," ",r.common.view]}),(0,t.jsxs)("a",{href:e.links.code,className:`btn ${e.links.code?"":"disabled"}`,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)("i",{className:"fas fa-code"})," ",r.common.code]})]})]})]})]})},rN=({projects:e})=>{let{t:r}=tO();return(0,t.jsxs)(tV,{id:"work",className:"work",children:[(0,t.jsx)(tV.WaveDivider,{fillTop:tx.colors.white,fillBottom:tx.colors.primaryDark}),(0,t.jsxs)(rk,{id:"work",className:"work",children:[(0,t.jsx)(tV.Title,{color:tx.colors.white,highlightedColor:tx.colors.white,primaryText:r.work.title,highlightedText:r.work.titleHighlighted,icon:"fa-laptop-code",className:"scroll-reveal"}),(0,t.jsx)(rC,{children:e.map((e,r)=>(0,t.jsx)(rP,{project:e},r))}),(0,t.jsx)(r_,{className:"scroll-reveal",children:(0,t.jsx)(t7,{type:"outlined",href:"https://github.com/williamniemiec?tab=repositories",icon:"fa-arrow-right",target:"_blank",rel:"noopener noreferrer",children:r.common.viewAll})})]}),(0,t.jsx)(tV.WaveDivider,{fillTop:tx.colors.primary,fillBottom:tx.colors.white})]})},rO=tp.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background: #020133;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
  }

  @media screen and (max-width: 600px) {
    margin-top: 2rem;

    &::after {
      left: 31px;
    }
  }
`,rI=tp.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  ${e=>"left"===e.$side?"left: 0;":"left: 50%;"}

  &::after {
    content: "\\f0b1";
    position: absolute;
    width: 25px;
    height: 25px;
    ${e=>"left"===e.$side?"right: -17px;":"left: -16px;"}
    background-color: ${tx.colors.white};
    border: 4px solid ${tx.colors.secondary};
    top: 15px;
    border-radius: 50%;
    z-index: 100;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    color: ${tx.colors.primary};
    font-family: "Font Awesome 5 Free";
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    ${e=>"left"===e.$side?`right: 30px; border: medium solid ${tx.colors.secondary}; border-width: 10px 0 10px 10px; border-color: transparent transparent transparent ${tx.colors.primary};`:`left: 30px; border: medium solid ${tx.colors.secondary}; border-width: 10px 10px 10px 0; border-color: transparent ${tx.colors.primary} transparent transparent;`}
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 7rem;
    padding-right: 2rem;
    left: 0;

    &::after {
      left: 15px;
    }

    &::before {
      left: 62px;
      border: medium solid ${tx.colors.primary};
      border-width: 10px 10px 10px 0;
      border-color: transparent${tx.colors.primary} transparent transparent;
    }
  }

  @media screen and (max-width: 500px) {
    &::before {
      left: 54px;
    }
  }
`,rT=tp.div`
  background-color: ${tx.colors.primary};
  position: relative;
  border-radius: 6px;
  color: ${tx.colors.white};

  .tag {
    font-size: 1.3rem;
    padding-top: 1.5rem;
    padding-left: 1.5rem;
  }

  .desc {
    margin-left: 1.5rem;
    padding-bottom: 1rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    p {
      font-size: 1.2rem;
    }
  }
`,rR=({children:e})=>(0,t.jsx)(rO,{className:"timeline scroll-reveal",children:e});rR.Item=({side:e,title:r,role:n,period:i})=>(0,t.jsx)(rI,{$side:e,className:"scroll-reveal",children:(0,t.jsxs)(rT,{children:[(0,t.jsx)("div",{className:"tag",children:(0,t.jsx)("h2",{children:r})}),(0,t.jsxs)("div",{className:"desc",children:[(0,t.jsx)("h3",{children:n}),(0,t.jsx)("p",{children:i})]})]})});let rz=({experiences:e})=>{let{t:r}=tO();return(0,t.jsxs)(tV,{id:"experience",className:"experience",children:[(0,t.jsx)(tV.Title,{color:tx.colors.text,highlightedColor:tx.colors.primary,primaryText:r.experience.title,icon:"fa-briefcase",className:"scroll-reveal"}),(0,t.jsx)(rR,{children:e.map((e,r)=>(0,t.jsx)(rR.Item,{side:r%2==0?"left":"right",title:e.title,role:e.role,period:e.period},r))})]})};var rA=e.i(27313),rD=e.i(85780),rM=e.i(24550),rL=e.i(47724),rF=e.i(97306),rB=e.i(59780),rU=e.i(73113);let rW=null,rG=tp.a`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -140%;
  right: 2rem;
  width: 50px;
  height: 50px;
  padding: 1rem 1.5rem;
  font-size: 2rem;
  background: ${tx.colors.dark};
  color: rgb(13, 0, 44);
  border-radius: 50%;
  transition: 1s linear;
  z-index: 1000;

  &.active {
    top: calc(100% - 12rem);
  }
`,rq=()=>(0,t.jsx)(rG,{href:"#home","aria-label":"ScrollTop",className:"fas fa-angle-up",id:"scroll-top"}),rV=tp.div`
  background-color: ${tx.colors.white};
  margin: 10rem 0;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 10rem auto;
`;tp.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;let rY=tp.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`,rH=tp.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  font-family: ${tx.fonts.nunito};
  font-weight: 600;
  text-transform: none;
  text-align: justify;
`,rX=tp.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 4rem 0;
`,rK=tp.div`
  flex: 1 1 27rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  height: 50rem;
  max-width: 30rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top center;
    padding-bottom: 100px;
  }

  .content {
    height: 50rem;
    width: 100%;
    position: absolute;
    top: 77%;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    transition: top 0.3s ease;

    .tag {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-height: 115px;
      width: 100%;
      padding-left: 1rem;
      background: ${tx.colors.primary};

      h3 {
        font-size: 1.4rem;
        color: ${tx.colors.white};
        padding: 0 0.5rem;

      }
    }

    .desc {
      height: calc(50rem - 115px);
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      p {
        overflow-y: auto;
        font-size: 1rem;
        text-align: justify;
      }

      .btns {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 2rem;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          line-height: 0;
          padding: 1.5rem .5rem;
          border-radius: 0.5rem;
          font-size: 1.5rem;
          color: ${tx.colors.white};
          background: rgb(12, 12, 12);
          margin-right: 2rem;

          i {
            margin-right: 1rem;
            font-size: 1.5rem;
            transition: 0.3s;
          }

          &:hover {
            background: ${tx.colors.primary};
            
            i {
              transform: translateX(5px);
            }
          }
        }
      }
    }
  }

  &:hover .content {
    top: 0%;
  }

  @media (max-width: ${tx.breakpoints.tablet}) {
    max-width: 48%;
  }

  @media (max-width: ${tx.breakpoints.mobile}) {
    max-width: 100%;

    .desc p {
      font-size: 1.3rem!important;
    }
  }
`,rJ=({publication:e})=>(0,t.jsxs)(rK,{className:"box scroll-reveal",children:[(0,t.jsx)("img",{src:`/assets/images/research/publications/${e.image}`,alt:e.name,width:300,height:500,draggable:!1}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("div",{className:"tag",children:(0,t.jsxs)("h3",{children:[e.name," (",e.year,")"]})}),(0,t.jsxs)("div",{className:"desc",children:[(0,t.jsx)("p",{children:e.abstract}),(0,t.jsxs)("div",{className:"btns",children:[(0,t.jsxs)("a",{href:e.links.pdf,className:"btn",target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)("i",{className:"fas fa-file-pdf"}),"PDF"]}),(0,t.jsxs)("a",{href:e.links.doi,className:"btn",target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)("i",{className:"fas fa-link"}),"DOI"]})]})]})]})]}),rZ=({publications:e})=>{let{t:r}=tO();return(0,t.jsx)(tV,{id:"research",className:"research",children:(0,t.jsxs)(rV,{id:"research",className:"research",children:[(0,t.jsx)(tV.Title,{color:tx.colors.text,highlightedColor:tx.colors.primary,primaryText:r.research.title,highlightedText:r.research.titleHighlighted,icon:"fa-book",className:"scroll-reveal"}),(0,t.jsx)(rH,{className:"scroll-reveal",children:r.research.description}),(0,t.jsxs)(rX,{className:"scroll-reveal",children:[(0,t.jsx)(rp,{label:r.research.publications,value:"6"}),(0,t.jsx)(rp,{label:r.research.peerReviews,value:"2"}),(0,t.jsx)(rp,{label:r.research.orientations,value:"6"})]}),(0,t.jsx)(rY,{children:e.map((e,r)=>(0,t.jsx)(rJ,{publication:e},r))})]})})};var rQ=e.i(48480),r0=e.i(64561);let r1=th`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,r5=th`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,r2={small:"30px",medium:"50px",large:"80px"},r4=tp.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({$fullScreen:e})=>e&&`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.9);
    z-index: 9999;
    backdrop-filter: blur(4px);
  `}
`,r3=tp.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`,r6=tp.div`
  position: relative;
  width: ${({$size:e="medium"})=>r2[e]};
  height: ${({$size:e="medium"})=>r2[e]};
  animation: ${r1} 1.5s linear infinite;
`,r8=tp.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: ${tx.colors.primary};
  border-right-color: ${tx.colors.primary};
  border-radius: 50%;
  animation: ${r5} 1.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.3s;
    border-top-color: ${tx.colors.accent};
    border-right-color: ${tx.colors.purple};
    transform: scale(0.8);
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
    border-top-color: ${tx.colors.purple};
    border-right-color: ${tx.colors.primary};
    transform: scale(0.6);
  }
`,r9=tp.p`
  font-family: ${tx.fonts.poppins};
  font-size: 1rem;
  color: ${tx.colors.text};
  font-weight: 400;
  margin: 0;
  text-align: center;
`,r7=({size:e="medium",fullScreen:r=!1,message:n})=>(0,t.jsx)(r4,{$fullScreen:r,children:(0,t.jsxs)(r3,{children:[(0,t.jsx)(r6,{$size:e,children:(0,t.jsx)(r8,{})}),n&&(0,t.jsx)(r9,{children:n})]})});function ne(){var e;let r,{t:n}=tO(),i=function(){let[e,t]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},500);return()=>clearTimeout(e)},[]),e}(),a=(e={strings:[n.typed.frontend,n.typed.backend,n.typed.mobile,n.typed.software,n.typed.component,n.typed.nocode,n.typed.ai,n.typed.healthcare,n.typed.hl7],loop:!0},r=(0,o.useRef)(null),(0,o.useEffect)(()=>{let t=null,n=null,i=()=>{window.Typed&&r.current?(t&&t.destroy(),Object.assign(e,{loop:!0,typeSpeed:50,backSpeed:25,backDelay:1500}),t=new window.Typed(r.current,e)):n=setTimeout(i,100)};return i(),()=>{n&&clearTimeout(n),t&&(t.destroy(),t=null)}},[JSON.stringify(e)]),r),s=function(){let[e,t]=(0,o.useState)([]);return(0,o.useEffect)(()=>{t(rA.default)},[]),e}(),l=function(e={}){let{language:t}=tO(),[r,n]=(0,o.useState)([]),{limit:i,filterCategory:a}=e;return(0,o.useEffect)(()=>{let e=[..."pt"===t?rM.default:rD.default];a&&(e=e.filter(e=>e.category!==a)),i&&(e=e.slice(0,i)),n(e)},[t,i,a]),r}(),c=function(){let{language:e}=tO(),[t,r]=(0,o.useState)([]);return(0,o.useEffect)(()=>{r("pt"===e?rF.default:rL.default)},[e]),t}(),d=function(){let{language:e}=tO(),[t,r]=(0,o.useState)([]);return(0,o.useEffect)(()=>{r("pt"===e?rU.default:rB.default)},[e]),t}(),u=function(){let{language:e}=tO(),[t,r]=(0,o.useState)([]);return(0,o.useEffect)(()=>{r("pt"===e?r0.default:rQ.default)},[e]),t}();return((0,o.useEffect)(()=>{let e=e=>{let t=e.target.closest('a[href^="#"]');if(t){e.preventDefault();let r=t.getAttribute("href");if(r&&"#"!==r){let e=document.querySelector(r);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[]),!function(e="scroll-top"){(0,o.useEffect)(()=>{let t=()=>{let t=document.getElementById(e);t&&(window.scrollY>60?t.classList.add("active"):t.classList.remove("active"))};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e])}(),!function(e,t=[]){let r=(0,o.useRef)(new Set);(0,o.useEffect)(()=>{if(void 0===globalThis.window)return;let t=null,n=null,i=()=>!!globalThis.window.ScrollReveal&&!!e.some(({selector:e})=>document.querySelectorAll(e).length>0)&&(rW||(rW=globalThis.window.ScrollReveal({origin:"top",distance:"50px",duration:700,reset:!0,threshold:.1,viewOffset:{top:100}})),e.forEach(({selector:e,options:t={}})=>{if(document.querySelectorAll(e).length>0){let n=`${e}-${JSON.stringify(t)}`;r.current.has(n)||(rW.reveal(e,t),r.current.add(n))}}),!0),o=()=>{i()||(t=setInterval(()=>{i()&&t&&(clearInterval(t),t=null)},200),n=setTimeout(()=>{t&&(clearInterval(t),t=null)},15e3))};if("complete"===document.readyState||"interactive"===document.readyState){let e=setTimeout(o,500);return()=>{clearTimeout(e),t&&clearInterval(t),n&&clearTimeout(n)}}{let e=()=>{o(),globalThis.window.removeEventListener("load",e)};globalThis.window.addEventListener("load",e);let r=setTimeout(o,1e3);return()=>{globalThis.window.removeEventListener("load",e),clearTimeout(r),t&&clearInterval(t),n&&clearTimeout(n)}}},t)}([{selector:".scroll-reveal",options:{delay:200}}],[i,s,l,c,d,u]),!function(e=".tilt",t={max:15},r=[]){let n=(0,o.useRef)([]);(0,o.useEffect)(()=>{let r=()=>{if(!window.VanillaTilt)return!1;document.querySelectorAll(e).forEach(e=>{e.vanillaTilt&&e.vanillaTilt.destroy&&e.vanillaTilt.destroy()}),n.current=[];let r=document.querySelectorAll(e);if(r.length>0)try{return window.VanillaTilt.init(Array.from(r),t),r.forEach(e=>{e.vanillaTilt&&n.current.push(e.vanillaTilt)}),!0}catch(e){console.error("Error initializing VanillaTilt:",e)}return!1},i=null;if(!r()){let e=0;i=setInterval(()=>{window.VanillaTilt?r()?i&&(clearInterval(i),i=null):e>=50&&(console.warn("VanillaTilt: Elements not found after maximum retries"),i&&(clearInterval(i),i=null)):e>=50&&(console.warn("VanillaTilt failed to load after maximum retries"),i&&(clearInterval(i),i=null)),e++},100)}return()=>{i&&clearInterval(i),document.querySelectorAll(e).forEach(e=>{e.vanillaTilt&&e.vanillaTilt.destroy&&e.vanillaTilt.destroy()}),n.current=[]}},r)}(".tilt",{max:15},[l]),i)?(0,t.jsxs)(ts,{theme:tx,children:[(0,t.jsx)(ty,{}),(0,t.jsx)(r7,{fullScreen:!0,message:n.common.loading})]}):(0,t.jsxs)(ts,{theme:tx,children:[(0,t.jsx)(ty,{}),(0,t.jsx)(tA,{}),(0,t.jsx)(re,{typedRef:a}),(0,t.jsx)(rm,{}),(0,t.jsx)(rv,{skills:s}),(0,t.jsx)(r$,{institutions:c}),(0,t.jsx)(rN,{projects:l}),(0,t.jsx)(rz,{experiences:d}),(0,t.jsx)(rZ,{publications:u}),(0,t.jsx)(tH,{}),(0,t.jsx)(rq,{})]})}function nt(){return(0,t.jsx)(tN,{children:(0,t.jsx)(ne,{})})}e.s(["default",()=>nt],31713)}]);