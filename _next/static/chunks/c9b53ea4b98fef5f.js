(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,i)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:i,blurHeight:r,blurDataURL:a,objectFit:n}){let o=i?40*i:e,l=r?40*r:t,s=o&&l?`viewBox='0 0 ${o} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${s}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${s?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},87690,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return o}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let n=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let r=e.r(43369),a=e.r(88143),n=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:i=!1,priority:d=!1,preload:c=!1,loading:m,className:p,quality:h,width:f,height:g,fill:u=!1,style:x,overrideSrc:b,onLoad:y,onLoadingComplete:w,placeholder:j="empty",blurDataURL:v,fetchPriority:_,decoding:C="async",layout:$,objectFit:k,objectPosition:N,lazyBoundary:I,lazyRoot:S,...z},P){var E;let O,R,T,{imgConf:M,showAltText:A,blurComplete:D,defaultLoader:L}=P,B=M||n.imageConfigDefault;if("allSizes"in B)O=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),i=B.qualities?.sort((e,t)=>e-t);O={...B,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let H=z.loader||L;delete z.loader,delete z.srcSet;let F="__next_img_default"in H;if(F){if("custom"===O.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=H;H=t=>{let{config:i,...r}=t;return e(r)}}if($){"fill"===$&&(u=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[$];e&&(x={...x,...e});let i={responsive:"100vw",fill:"100vw"}[$];i&&!t&&(t=i)}let U="",W=s(f),q=s(g);if((E=e)&&"object"==typeof E&&(l(E)||void 0!==E.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(R=t.blurWidth,T=t.blurHeight,v=v||t.blurDataURL,U=t.src,!u)if(W||q){if(W&&!q){let e=W/t.width;q=Math.round(t.height*e)}else if(!W&&q){let e=q/t.height;W=Math.round(t.width*e)}}else W=t.width,q=t.height}let G=!d&&!c&&("lazy"===m||void 0===m);(!(e="string"==typeof e?e:U)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,G=!1),O.unoptimized&&(i=!0),F&&!O.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let X=s(h),Y=Object.assign(u?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:N}:{},A?{}:{color:"transparent"},x),V=D||"empty"===j?null:"blur"===j?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:W,heightInt:q,blurWidth:R,blurHeight:T,blurDataURL:v||"",objectFit:Y.objectFit})}")`:`url("${j}")`,J=o.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,K=V?{backgroundSize:J,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Q=function({config:e,src:t,unoptimized:i,width:a,quality:n,sizes:o,loader:l}){if(i){let e=(0,r.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let i=t.includes("?")?"&":"?";t=`${t}${i}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:d}=function({deviceSizes:e,allSizes:t},i,r){if(r){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=i.exec(r);)a.push(parseInt(e[2]));if(a.length){let i=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,o),c=s.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:s.map((i,r)=>`${l({config:e,src:t,quality:n,width:i})} ${"w"===d?i:r+1}${d}`).join(", "),src:l({config:e,src:t,quality:n,width:s[c]})}}({config:O,src:e,unoptimized:i,width:W,quality:X,sizes:t,loader:H}),Z=G?"lazy":m;return{props:{...z,loading:Z,fetchPriority:_,width:W,height:q,decoding:C,className:p,style:{...Y,...K},sizes:Q.sizes,srcSet:Q.srcSet,src:b||Q.src},meta:{unoptimized:i,preload:c||d,placeholder:j,fill:u}}}},98879,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return l}});let r=e.r(71645),a="undefined"==typeof window,n=a?()=>{}:r.useLayoutEffect,o=a?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:i}=e;function l(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return a&&(t?.mountedInstances?.add(e.children),l()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return g},defaultHead:function(){return m}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let n=e.r(55682),o=e.r(90809),l=e.r(43476),s=o._(e.r(71645)),d=n._(e.r(98879)),c=e.r(42732);function m(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let h=["name","httpEquiv","charSet","itemProp"];function f(e){let t,i,r,a;return e.reduce(p,[]).reverse().concat(m().reverse()).filter((t=new Set,i=new Set,r=new Set,a={},e=>{let n=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?n=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?n=!1:i.add(e.type);break;case"meta":for(let t=0,i=h.length;t<i;t++){let i=h[t];if(e.props.hasOwnProperty(i))if("charSet"===i)r.has(i)?n=!1:r.add(i);else{let t=e.props[i],r=a[i]||new Set;("name"!==i||!o)&&r.has(t)?n=!1:(r.add(t),a[i]=r)}}}return n})).reverse().map((e,t)=>{let i=e.key||t;return s.default.cloneElement(e,{key:i})})}let g=function({children:e}){let t=(0,s.useContext)(c.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:f,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},18556,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let r=e.r(55682)._(e.r(71645)),a=e.r(87690),n=r.default.createContext(a.imageConfigDefault)},65856,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,i)=>{"use strict";function r(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,0):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return r}})},1948,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return o}});let r=e.r(70965),a=e.r(43369);function n({config:e,src:t,width:i,quality:n}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,r.findClosestQuality)(n,e),l=(0,a.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${o}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}n.__next_img_default=!0;let o=n},5500,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return w}});let r=e.r(55682),a=e.r(90809),n=e.r(43476),o=a._(e.r(71645)),l=r._(e.r(74080)),s=r._(e.r(25633)),d=e.r(8927),c=e.r(87690),m=e.r(18556);e.r(33525);let p=e.r(65856),h=r._(e.r(1948)),f=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function u(e,t,i,r,a,n,o){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function x(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,o.forwardRef)(({src:e,srcSet:t,sizes:i,height:r,width:a,decoding:l,className:s,style:d,fetchPriority:c,placeholder:m,loading:p,unoptimized:h,fill:g,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:j,sizesInput:v,onLoad:_,onError:C,...$},k)=>{let N=(0,o.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&u(e,m,b,y,w,h,v))},[e,m,b,y,w,C,h,v]),I=(0,f.useMergedRef)(k,N);return(0,n.jsx)("img",{...$,...x(c),loading:p,width:a,height:r,decoding:l,"data-nimg":g?"fill":"1",className:s,style:d,sizes:i,srcSet:t,src:e,ref:I,onLoad:e=>{u(e.currentTarget,m,b,y,w,h,v)},onError:e=>{j(!0),"empty"!==m&&w(!0),C&&C(e)}})});function y({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,i),null):(0,n.jsx)(s.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,o.forwardRef)((e,t)=>{let i=(0,o.useContext)(p.RouterContext),r=(0,o.useContext)(m.ImageConfigContext),a=(0,o.useMemo)(()=>{let e=g||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:a,localPatterns:"undefined"==typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:l,onLoadingComplete:s}=e,f=(0,o.useRef)(l);(0,o.useEffect)(()=>{f.current=l},[l]);let u=(0,o.useRef)(s);(0,o.useEffect)(()=>{u.current=s},[s]);let[x,w]=(0,o.useState)(!1),[j,v]=(0,o.useState)(!1),{props:_,meta:C}=(0,d.getImgProps)(e,{defaultLoader:h.default,imgConf:a,blurComplete:x,showAltText:j});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{..._,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:f,onLoadingCompleteRef:u,setBlurComplete:w,setShowAltText:v,sizesInput:e.sizes,ref:t}),C.preload?(0,n.jsx)(y,{isAppRouter:!i,imgAttributes:_}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},94909,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return c},getImageProps:function(){return d}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let n=e.r(55682),o=e.r(8927),l=e.r(5500),s=n._(e.r(1948));function d(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let c=l.Image},57688,(e,t,i)=>{t.exports=e.r(94909)},58627,e=>{"use strict";var t=e.i(43476),i=e.i(97053),r=e.i(17089);let a=i.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-9788becc-0"})`
  font-size: 5rem;
  font-weight: 800;
  color: ${r.theme.colors.dark};

  span {
    font-size: 5rem;
    font-weight: 800;
    color: ${r.theme.colors.primary};
  }
`,n=i.default.div.withConfig({displayName:"styled__Content",componentId:"sc-9788becc-1"})`
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

  @media (max-width: ${r.theme.breakpoints.tablet}) {
    padding-top: 30rem;
  }

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    padding-top: 15rem;
  }
`,o=i.default.section.withConfig({displayName:"styled__HomeSection",componentId:"sc-de76255f-0"})`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${r.theme.colors.white};
  padding: 4rem 2rem;
  margin-top: 6.5rem;

  @media (min-width: 1393px) {
    gap: 12rem;
  }

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    margin-bottom: -5rem;
  }
`,l=({children:e})=>(0,t.jsx)(o,{id:"home",className:"home",children:e}),s=i.default.p.withConfig({displayName:"styled__Typing",componentId:"sc-87e2459c-0"})`
  font-size: 2.5rem;
  color: ${r.theme.colors.dark};
  font-weight: 600;
  min-height: 14rem;

  span {
    font-size: 2.5rem;
    color: ${r.theme.colors.primary};
    font-weight: 600;
    padding: 1rem 0;
  }

  @media (max-width: ${r.theme.breakpoints.tablet}) {
    min-height: 12rem;
  }
`;e.i(62461);var d=e.i(85233);let c=({typedRef:e})=>{let{t:i}=(0,d.useLanguage)();return(0,t.jsxs)(s,{children:[i.introduction.iAmInto," ",(0,t.jsx)("span",{className:"typing-text",ref:e})]})},m=i.default.ul.withConfig({displayName:"styled__Socials",componentId:"sc-40a172ef-0"})`
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
    color: ${r.theme.colors.white};
    background-color: ${r.theme.colors.primary};
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    transition: all 0.2s linear;

    &:active,
    &:focus,
    &:hover {
      color: ${r.theme.colors.white};
      background-color: ${r.theme.colors.primaryDark};
    }
  }

  @media (max-width: ${r.theme.breakpoints.tablet}) {
    justify-content: center;
    margin-top: 3rem;
  }

  @media (max-width: 350px) {
    gap: 0;
  }
`;var p=e.i(74404),h=e.i(61950);let f=()=>(0,t.jsx)(m,{children:p.default.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:e.className,"aria-label":e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(h.Icon,{icon:e.icon})})},e.name))}),g=i.default.div.withConfig({displayName:"styled__Avatar",componentId:"sc-4b774eee-0"})`
  flex: 1 1 20rem;
  z-index: 1;

  max-width: 415px;

  svg {
    fill: ${r.theme.colors.primary};
    max-width: 415px;
  }

  @media screen and (max-width: 887px) {
    width: 35rem;
    position: absolute;
    top: 4rem;
    left: calc(50% - 18rem);
    
    img {
      margin-top: -12rem;
    }
  }

  @media only screen and (max-width: ${r.theme.breakpoints.tablet}) {
    width: 30rem;
    left: calc(50% - 15rem);
  }

  @media only screen and (max-width: ${r.theme.breakpoints.mobile}) {
    width: 25rem;
    left: calc(50% - 12.5rem);
  }
`,u=()=>(0,t.jsx)(g,{className:"image",children:(0,t.jsxs)("svg",{className:"home__blob",viewBox:"0 0 479 467",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("mask",{id:"mask0","mask-type":"alpha",children:(0,t.jsx)("path",{d:"M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"})}),(0,t.jsxs)("g",{mask:"url(#mask0)",children:[(0,t.jsx)("path",{d:"M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"}),(0,t.jsx)("image",{href:"/assets/images/perfil.png",className:"home__blob-img",x:"60",y:"-15",width:350})]})]})}),x=i.default.a.withConfig({displayName:"styled__Button",componentId:"sc-e725d20c-0"})`
  position: relative;
  line-height: 0;
  padding: 1.6rem 3rem;
  border-radius: 0.5em;
  transition: 0.5s;
  color: ${r.theme.colors.white};
  font-weight: 700;
  border: 2px solid ${r.theme.colors.white};
  box-shadow: 0px 5px 10px rgba(65, 84, 241, 0.4);
  text-align: center;

  span {
    font-weight: 600;
    font-size: 1.7rem;
    font-family: ${r.theme.fonts.nunito};
  }

  i {
    margin-left: 0.3rem;
    font-size: 1.5rem;
    transition: 0.3s;
  }

  &:hover {
    background: ${r.theme.colors.white};
    color: ${r.theme.colors.black};

    i {
      transform: translateX(5px);
    }
  }
`,b=({href:e,children:i,icon:r,id:a,target:n,rel:o})=>(0,t.jsxs)(x,{href:e,id:a,target:n,rel:o,children:[(0,t.jsx)("span",{children:i}),(0,t.jsx)(h.Icon,{icon:r})]}),y=i.default.a.withConfig({displayName:"styled__Button",componentId:"sc-e11ab9a2-0"})`
  margin-top: 1rem;
  position: relative;
  line-height: 0;
  padding: 1.6rem 3rem;
  border-radius: 4em;
  transition: 0.5s;
  color: ${r.theme.colors.white};
  background: ${r.theme.colors.primary};
  box-shadow: 0px 5px 18px rgba(48, 68, 247, 0.6);
  font-family: ${r.theme.fonts.nunito};

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
    background: ${r.theme.colors.primaryDark};

    i {
      transform: translateX(5px);
    }
  }
`,w=({href:e,children:i,icon:r,id:a,target:n,rel:o})=>(0,t.jsxs)(y,{href:e,id:a,target:n,rel:o,className:"btn",children:[(0,t.jsx)("span",{children:i}),(0,t.jsx)(h.Icon,{icon:r})]}),j=({type:e,...i})=>{switch(e){case"primary":return(0,t.jsx)(w,{...i});case"outlined":return(0,t.jsx)(b,{...i});default:return null}};var v=e.i(71645);let _=({typedRef:e})=>{let{t:i}=(0,d.useLanguage)(),r=(0,v.useRef)(!1);return(0,v.useEffect)(()=>{if(!r.current){let e=i.introduction.welcomeMessage;console.log(`%c${e}`,"font-weight: bold;font-size:20px"),r.current=!0}},[i]),(0,t.jsxs)(l,{children:[(0,t.jsxs)(n,{className:"content",children:[(0,t.jsxs)(a,{children:[i.introduction.hi," ",(0,t.jsx)("br",{})," ",i.introduction.im," ",(0,t.jsx)("span",{children:"William"})]}),(0,t.jsx)(c,{typedRef:e}),(0,t.jsx)(j,{type:"primary",href:"#about",icon:"fa-arrow-circle-down",children:i.introduction.aboutMe}),(0,t.jsx)(f,{})]}),(0,t.jsx)(u,{})]})},C=i.default.div.withConfig({displayName:"styled__Body",componentId:"sc-8e740af4-0"})`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    padding: 4rem 2rem;
  }
`,$=i.default.div.withConfig({displayName:"styled__Content",componentId:"sc-8e740af4-1"})`
  flex: 1 1 45rem;
  padding: 3rem 0;

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`,k=i.default.div.withConfig({displayName:"styled__Biography",componentId:"sc-8e740af4-2"})`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  flex-wrap: wrap;

  @media screen and (max-width: ${r.theme.breakpoints.tablet}) {
    gap: 3rem;
  }
`,N=i.default.h3.withConfig({displayName:"styled__Name",componentId:"sc-8e740af4-3"})`
  color: rgb(27, 27, 27);
  font-size: 2.5rem;
`,I=i.default.span.withConfig({displayName:"styled__Tag",componentId:"sc-8e740af4-4"})`
  font-size: 1.4rem;
  color: #020133;
  font-weight: 600;
  margin-top: 1rem;
  display: block;
`,S=i.default.p.withConfig({displayName:"styled__Description",componentId:"sc-8e740af4-5"})`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  font-family: ${r.theme.fonts.nunito};
  font-weight: 600;
  text-transform: none;
  text-align: justify;
  margin-bottom: 2.5rem;
`,z=i.default.div.withConfig({displayName:"styled__Buttons",componentId:"sc-8e740af4-6"})`
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
`,P=i.default.div.withConfig({displayName:"styled__Chips",componentId:"sc-8e740af4-7"})`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  
`;var E=e.i(71183),O=e.i(57688);let R=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-f5c7d617-0"})`
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


  @media screen and (max-width: ${r.theme.breakpoints.tablet}) {
    margin-top: 2rem;
    margin: 0 auto;

    img {
      margin: 0;
      width: 27rem;
    }
  }

  @media screen and (max-width: ${r.theme.breakpoints.mobile}) {
    img {
      width: 60%;
      /* mix-blend-mode: normal; */
    }
  }
`,T=()=>(0,t.jsx)(R,{children:(0,t.jsx)(O.default,{src:"/assets/images/perfil2.webp",alt:"William Niemiec - PMP | Full-Stack Developer | Ph.D. Student",width:300,height:450,className:"tilt",draggable:!1})}),M=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-1c304c16-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${r.theme.colors.primary};
  color: ${r.theme.colors.white};
  padding: 2rem 1rem;
  border-radius: 5px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  p {
    font-weight: 600;
    font-family: ${r.theme.fonts.nunito};
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
`,A=({label:e,value:i})=>(0,t.jsxs)(M,{children:[(0,t.jsx)("p",{children:i}),(0,t.jsx)("p",{children:e})]}),D=()=>{let{t:e,language:i}=(0,d.useLanguage)(),a=`/assets/files/cv/${i}`;return(0,t.jsxs)(E.Section,{id:"about",children:[(0,t.jsx)(E.Section.Title,{color:r.theme.colors.text,highlightedColor:r.theme.colors.primary,primaryText:e.about.title,highlightedText:e.about.titleHighlighted,icon:"fa-user-alt",className:"scroll-reveal"}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(T,{}),(0,t.jsxs)($,{className:"content scroll-reveal",children:[(0,t.jsx)(N,{children:e.about.name}),(0,t.jsx)(I,{children:e.about.tag}),(0,t.jsx)(S,{children:e.about.description}),(0,t.jsxs)(z,{children:[(0,t.jsx)(j,{type:"primary",id:"resumebtn",href:`${a}/professional-resume.pdf`,icon:"fa-chevron-right",target:"_blank",rel:"noopener noreferrer",children:e.about.professionalResume}),(0,t.jsx)(j,{type:"primary",id:"resumebtn",href:`${a}/academic-resume.pdf`,icon:"fa-chevron-right",target:"_blank",rel:"noopener noreferrer",children:e.about.academicResume})]})]})]}),(0,t.jsxs)(P,{className:"scroll-reveal",children:[(0,t.jsx)(A,{label:e.about.yearsExperience,value:"+5"}),(0,t.jsx)(A,{label:e.about.projectsDelivered,value:"+35"}),(0,t.jsx)(A,{label:e.about.teamsLed,value:"7"})]})]})]})},L=i.default.div.withConfig({displayName:"styled__Content",componentId:"sc-3eabc077-0"})`
  min-height: 90vh;
  background: linear-gradient(to bottom, ${r.theme.colors.primary}, ${r.theme.colors.primaryDark});
  padding: 0 2rem;
  @media (max-width: 450px) {
    & {
        padding: 2rem;
    }
}
`,B=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-3eabc077-1"})`
  background: rgba(0, 0, 22, 0.4);
  color: ${r.theme.colors.white};
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
`,H=i.default.div.withConfig({displayName:"styled__Category",componentId:"sc-3eabc077-2"})`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`,F=i.default.h3.withConfig({displayName:"styled__CategoryTitle",componentId:"sc-3eabc077-3"})`
  font-family: ${r.theme.fonts.poppins};
  font-size: 2.2rem;
  font-weight: 600;
  color: ${r.theme.colors.white};
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media screen and (max-width: 600px) {
    margin: 0 1rem;
    padding-top: 2rem;
  }
`,U=i.default.div.withConfig({displayName:"styled__Grid",componentId:"sc-3eabc077-4"})`
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

  @media screen and (max-width: ${r.theme.breakpoints.tablet}) {
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
`,W=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-934abddd-0"})`
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
      font-family: ${r.theme.fonts.poppins};
      margin-left: 0.5rem;
      text-align: center;
    }
  }
`,q=({name:e,icon:i})=>(0,t.jsx)(W,{children:(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)(O.default,{src:i,alt:e,width:48,height:48,draggable:!1}),(0,t.jsx)("span",{children:e})]})}),G=({skills:e})=>{let{t:i}=(0,d.useLanguage)();return(0,t.jsxs)(E.Section,{children:[(0,t.jsx)(E.Section.WaveDivider,{fillTop:"#fff",fillBottom:r.theme.colors.primary}),(0,t.jsxs)(L,{id:"skills",children:[(0,t.jsx)(E.Section.Title,{color:r.theme.colors.white,highlightedColor:r.theme.colors.white,primaryText:i.skills.title,highlightedText:i.skills.titleHighlighted,icon:"fa-laptop-code",className:"scroll-reveal"}),(0,t.jsx)(B,{className:"container scroll-reveal",children:(0,t.jsx)("div",{id:"skillsContainer",children:e.map(({category:e,skills:r})=>(0,t.jsxs)(H,{className:"scroll-reveal",children:[(0,t.jsx)(F,{children:i.skills.categories[e]??e}),(0,t.jsx)(U,{children:r.map(e=>(0,t.jsx)(q,{name:e.name,icon:e.icon},e.name))})]},e))})})]}),(0,t.jsx)(E.Section.WaveDivider,{fillTop:r.theme.colors.primaryDark,fillBottom:r.theme.colors.white})]})},X=i.default.div.withConfig({displayName:"styled__Institutions",componentId:"sc-81238338-0"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 2rem;
`,Y=i.default.div.withConfig({displayName:"styled__Box",componentId:"sc-95354f25-0"})`
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
    font-family: ${r.theme.fonts.nunito};
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
`,V=({imageSrc:e,imageAlt:i,title:r,institution:a,period:n})=>(0,t.jsxs)(Y,{className:"box scroll-reveal",children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)(O.default,{src:e,alt:i,width:400,height:300,draggable:!1})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h3",{children:r}),(0,t.jsx)("p",{children:a}),(0,t.jsx)("h4",{children:n})]})]}),J=({institutions:e})=>{let{t:i}=(0,d.useLanguage)();return(0,t.jsxs)(E.Section,{id:"education",className:"education",children:[(0,t.jsx)(E.Section.Title,{color:r.theme.colors.text,highlightedColor:r.theme.colors.primary,primaryText:i.education.title,highlightedText:i.education.titleHighlighted,icon:"fa-graduation-cap",className:"scroll-reveal"}),(0,t.jsx)(X,{className:"scroll-reveal",children:e.map(e=>(0,t.jsx)(V,{imageSrc:e.imageSrc,imageAlt:e.imageAlt,title:e.title,institution:e.institution,period:e.period},e.title))})]})},K=i.default.div.withConfig({displayName:"styled__Content",componentId:"sc-d1d60b2e-0"})`
  background: linear-gradient(to bottom, ${r.theme.colors.primaryDark}, ${r.theme.colors.primary});
`,Q=i.default.div.withConfig({displayName:"styled__Actions",componentId:"sc-d1d60b2e-1"})`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`,Z=i.default.div.withConfig({displayName:"styled__Projects",componentId:"sc-d1d60b2e-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 2rem;
`,ee=i.default.div.withConfig({displayName:"styled__Box",componentId:"sc-b209b36e-0"})`
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
      background: ${r.theme.colors.primary};
      color: ${r.theme.colors.white};

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
          color: ${r.theme.colors.white};
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
            background: ${r.theme.colors.primary};
            
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
`,et=({href:e,children:i})=>e?(0,t.jsx)("a",{href:e,className:"btn",target:"_blank",rel:"noopener noreferrer",children:i}):(0,t.jsx)("span",{className:"btn disabled","aria-disabled":"true",children:i}),ei=({project:e})=>{let{t:i}=(0,d.useLanguage)();return(0,t.jsxs)(ee,{className:"box tilt scroll-reveal",children:[(0,t.jsx)("img",{src:`/assets/images/projects/${e.image}`,alt:e.name,width:400,height:300,loading:"lazy",decoding:"async",draggable:!1}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("div",{className:"tag",children:(0,t.jsx)("h3",{children:e.name})}),(0,t.jsxs)("div",{className:"desc",children:[(0,t.jsx)("p",{children:e.desc}),(0,t.jsxs)("div",{className:"btns",children:[(0,t.jsxs)(et,{href:e.links.view,children:[(0,t.jsx)(h.Icon,{icon:"fa-eye"})," ",i.common.view]}),(0,t.jsxs)(et,{href:e.links.code,children:[(0,t.jsx)(h.Icon,{icon:"fa-code"})," ",i.common.code]})]})]})]})]})},er=({projects:e})=>{let{t:i}=(0,d.useLanguage)();return(0,t.jsxs)(E.Section,{id:"work",className:"work",children:[(0,t.jsx)(E.Section.WaveDivider,{fillTop:r.theme.colors.white,fillBottom:r.theme.colors.primaryDark}),(0,t.jsxs)(K,{id:"work",className:"work",children:[(0,t.jsx)(E.Section.Title,{color:r.theme.colors.white,highlightedColor:r.theme.colors.white,primaryText:i.work.title,highlightedText:i.work.titleHighlighted,icon:"fa-laptop-code",className:"scroll-reveal"}),(0,t.jsx)(Z,{children:e.map((e,i)=>(0,t.jsx)(ei,{project:e},i))}),(0,t.jsx)(Q,{className:"scroll-reveal",children:(0,t.jsx)(j,{type:"outlined",href:"https://github.com/williamniemiec?tab=repositories",icon:"fa-arrow-right",target:"_blank",rel:"noopener noreferrer",children:i.common.viewAll})})]}),(0,t.jsx)(E.Section.WaveDivider,{fillTop:r.theme.colors.primary,fillBottom:r.theme.colors.white})]})},ea=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-78232b0a-0"})`
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
`,[en,eo,,,el]=e.i(68757).faBriefcase.icon,es=`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${en} ${eo}'><path fill='${r.theme.colors.primary}' d='${el}'/></svg>`)}")`,ed=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-bb082ca7-0"})`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  ${e=>"left"===e.$side?"left: 0;":"left: 50%;"}

  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    ${e=>"left"===e.$side?"right: -17px;":"left: -16px;"}
    background: ${r.theme.colors.white} ${es} center / 1.5rem no-repeat;
    border: 4px solid ${r.theme.colors.secondary};
    top: 15px;
    border-radius: 50%;
    z-index: 100;
  }

  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    ${e=>"left"===e.$side?`right: 30px; border: medium solid ${r.theme.colors.secondary}; border-width: 10px 0 10px 10px; border-color: transparent transparent transparent ${r.theme.colors.primary};`:`left: 30px; border: medium solid ${r.theme.colors.secondary}; border-width: 10px 10px 10px 0; border-color: transparent ${r.theme.colors.primary} transparent transparent;`}
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
      border: medium solid ${r.theme.colors.primary};
      border-width: 10px 10px 10px 0;
      border-color: transparent${r.theme.colors.primary} transparent transparent;
    }
  }

  @media screen and (max-width: 500px) {
    &::before {
      left: 54px;
    }
  }
`,ec=i.default.div.withConfig({displayName:"styled__Content",componentId:"sc-bb082ca7-1"})`
  background-color: ${r.theme.colors.primary};
  position: relative;
  border-radius: 6px;
  color: ${r.theme.colors.white};

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
`,em=({children:e})=>(0,t.jsx)(ea,{className:"timeline scroll-reveal",children:e});em.Item=({side:e,title:i,role:r,period:a})=>(0,t.jsx)(ed,{$side:e,className:"scroll-reveal",children:(0,t.jsxs)(ec,{children:[(0,t.jsx)("div",{className:"tag",children:(0,t.jsx)("h2",{children:i})}),(0,t.jsxs)("div",{className:"desc",children:[(0,t.jsx)("h3",{children:r}),(0,t.jsx)("p",{children:a})]})]})});let ep=({experiences:e})=>{let{t:i}=(0,d.useLanguage)();return(0,t.jsxs)(E.Section,{id:"experience",className:"experience",children:[(0,t.jsx)(E.Section.Title,{color:r.theme.colors.text,highlightedColor:r.theme.colors.primary,primaryText:i.experience.title,icon:"fa-briefcase",className:"scroll-reveal"}),(0,t.jsx)(em,{children:e.map((e,i)=>(0,t.jsx)(em.Item,{side:i%2==0?"left":"right",title:e.title,role:e.role,period:e.period},i))})]})};var eh=e.i(27313),ef=e.i(85780),eg=e.i(24550),eu=e.i(47724),ex=e.i(97306),eb=e.i(59780),ey=e.i(73113);let ew={origin:"top",distance:"50px",duration:700,reset:!0,threshold:.1,viewOffset:{top:100}},ej=null,ev=i.default.a.withConfig({displayName:"styled__Container",componentId:"sc-de659976-0"})`
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
  background: ${r.theme.colors.dark};
  color: rgb(13, 0, 44);
  border-radius: 50%;
  transition: 1s linear;
  z-index: 1000;

  &.active {
    top: calc(100% - 12rem);
  }
`,e_=()=>(0,t.jsx)(ev,{href:"#home","aria-label":"Scroll to top",id:"scroll-top",children:(0,t.jsx)(h.Icon,{icon:"fa-angle-up"})}),eC=i.default.div.withConfig({displayName:"styled__Content",componentId:"sc-96348927-0"})`
  background-color: ${r.theme.colors.white};
  margin: 10rem 0;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 10rem auto;
`;i.default.div.withConfig({displayName:"styled__Actions",componentId:"sc-96348927-1"})`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;let e$=i.default.div.withConfig({displayName:"styled__Projects",componentId:"sc-96348927-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  gap: 3.5rem;
`,ek=i.default.section.withConfig({displayName:"styled__YearGroup",componentId:"sc-96348927-3"})`
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  gap: 2.25rem;
  align-items: start;

  @media (max-width: ${r.theme.breakpoints.tablet}) {
    grid-template-columns: 5rem 1fr;
    gap: 1.5rem;
  }

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,eN=i.default.h3.withConfig({displayName:"styled__YearHeading",componentId:"sc-96348927-4"})`
  margin: 0;
  padding-top: 2.5rem;
  font-family: ${r.theme.fonts.poppins};
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${r.theme.colors.primary};
  position: sticky;
  top: 8rem;

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    font-size: 1.6rem;
    padding-top: 0;
    position: static;
  }
`,eI=i.default.div.withConfig({displayName:"styled__YearPublications",componentId:"sc-96348927-5"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-top: 1px solid ${r.theme.colors.grayLight};
`,eS=i.default.p.withConfig({displayName:"styled__Description",componentId:"sc-96348927-6"})`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 5rem;
  font-family: ${r.theme.fonts.nunito};
  font-weight: 600;
  text-transform: none;
  text-align: justify;
`,ez=i.default.div.withConfig({displayName:"styled__Chips",componentId:"sc-96348927-7"})`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 4rem 0;
`,eP=i.default.ul.withConfig({displayName:"styled__InterestsList",componentId:"sc-96348927-8"})`
  list-style: none;
  padding: 0;
  margin: 2.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.25rem 0;

  @media (max-width: ${r.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,eE=i.default.li.withConfig({displayName:"styled__InterestItem",componentId:"sc-96348927-9"})`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,eO=i.default.span.withConfig({displayName:"styled__IconCircle",componentId:"sc-96348927-10"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  min-width: 4.5rem;
  min-height: 4.5rem;
  border-radius: 50%;
  background-color: ${r.theme.colors.primary};
  color: ${r.theme.colors.white};
  font-size: 1.7rem;
`,eR=i.default.span.withConfig({displayName:"styled__InterestLabel",componentId:"sc-96348927-11"})`
  font-family: ${r.theme.fonts.nunito};
  font-size: 1.5rem;
  color: ${r.theme.colors.text};
  font-weight: 600;
`,eT=i.default.article.withConfig({displayName:"styled__Row",componentId:"sc-e3ef1113-0"})`
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: 2.25rem;
  align-items: start;
  width: 100%;
  padding: 2.5rem 0;
  border-bottom: 1px solid ${r.theme.colors.grayLight};
  transition: transform 0.25s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    transform: translateX(4px);
  }

  @media (max-width: ${r.theme.breakpoints.tablet}) {
    grid-template-columns: 7.5rem 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
  }

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 1.75rem 0;
  }
`,eM=i.default.img.withConfig({displayName:"styled__Cover",componentId:"sc-e3ef1113-1"})`
  width: 100%;
  max-width: 9rem;
  aspect-ratio: 3 / 4;
  object-position: top center;
  border-radius: 0.35rem;
  box-shadow: 0 0.6rem 1.4rem rgba(29, 4, 138, 0.12);

  @media (max-width: ${r.theme.breakpoints.tablet}) {
    max-width: 7.5rem;
  }

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    display: none;
  }
`,eA=i.default.div.withConfig({displayName:"styled__Body",componentId:"sc-e3ef1113-2"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 0.65rem;
`,eD=i.default.div.withConfig({displayName:"styled__Meta",componentId:"sc-e3ef1113-3"})`
  display: flex;
  align-items: center;
  gap: 1rem;
`,eL=i.default.span.withConfig({displayName:"styled__Publisher",componentId:"sc-e3ef1113-4"})`
  font-family: ${r.theme.fonts.nunito};
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${r.theme.colors.primary};
  opacity: 0.85;
`,eB=i.default.h4.withConfig({displayName:"styled__Title",componentId:"sc-e3ef1113-5"})`
  margin: 0;
  font-family: ${r.theme.fonts.poppins};
  font-size: 1.65rem;
  font-weight: 600;
  line-height: 1.35;
  color: ${r.theme.colors.text};

  a {
    color: inherit;

    &:hover {
      color: ${r.theme.colors.primary};
      text-decoration: underline;
    }
  }

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`,eH=i.default.p.withConfig({displayName:"styled__Abstract",componentId:"sc-e3ef1113-6"})`
  margin: 0;
  font-family: ${r.theme.fonts.nunito};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.55;
  color: ${r.theme.colors.text};
  opacity: 0.78;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    -webkit-line-clamp: 4;
    font-size: 1.2rem;
  }
`,eF=i.default.div.withConfig({displayName:"styled__Actions",componentId:"sc-e3ef1113-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 0.5rem;
`,eU=i.default.a.withConfig({displayName:"styled__Link",componentId:"sc-e3ef1113-8"})`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 1.15rem;
  font-family: ${r.theme.fonts.poppins};
  font-size: 1.15rem;
  font-weight: 600;
  color: ${r.theme.colors.primary};
  border: 1.5px solid ${r.theme.colors.primary};
  border-radius: 0.35rem;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  i {
    font-size: 1.05rem;
  }

  &:hover {
    background-color: ${r.theme.colors.primary};
    color: ${r.theme.colors.white};
    transform: translateY(-1px);
  }
`;var eW=e.i(22016),eq=e.i(73057);let eG=({publication:e})=>{let{language:i}=(0,d.useLanguage)(),r=(0,eq.publicationPath)(i,e.slug);return(0,t.jsxs)(eT,{children:[(0,t.jsx)(eM,{src:(0,eq.publicationImage)(e),alt:e.name,width:120,height:160,loading:"lazy",decoding:"async",draggable:!1}),(0,t.jsxs)(eA,{children:[(0,t.jsx)(eD,{children:(0,t.jsx)(eL,{children:e.publisher})}),(0,t.jsx)(eB,{children:(0,t.jsx)(eW.default,{href:r,children:e.name})}),(0,t.jsx)(eH,{children:e.abstract}),(0,t.jsxs)(eF,{children:[(0,t.jsxs)(eU,{href:e.links.pdf,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(h.Icon,{icon:"fa-file-pdf"}),"PDF"]}),e.links.doi&&(0,t.jsxs)(eU,{href:e.links.doi,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(h.Icon,{icon:"fa-external-link-alt"}),"DOI"]})]})]})]})},eX=({publications:e})=>{let{t:i}=(0,d.useLanguage)(),a=e.reduce((e,t)=>{let i=e.find(e=>e.year===t.year);return i?i.items.push(t):e.push({year:t.year,items:[t]}),e},[]);return(0,t.jsx)(E.Section,{id:"research",className:"research",children:(0,t.jsxs)(eC,{id:"research",className:"research",children:[(0,t.jsx)(E.Section.Title,{color:r.theme.colors.text,highlightedColor:r.theme.colors.primary,primaryText:i.research.title,highlightedText:i.research.titleHighlighted,icon:"fa-book",className:"scroll-reveal"}),(0,t.jsx)(eS,{className:"scroll-reveal",dangerouslySetInnerHTML:{__html:i.research.description.replaceAll("Takere",'<a target="_blank" href="https://www.takere.com.br">Takere</a>').replaceAll("UFRGS",'<a target="_blank" href="https://www.ufrgs.br">UFRGS</a>').replaceAll("HCPA - Hospital de Clínicas de Porto Alegre",'<a target="_blank" href="https://www.hcpa.edu.br">HCPA - Hospital de Clínicas de Porto Alegre</a>').replaceAll("Érika Fernandes Cota",'<a target="_blank" href="https://www.inf.ufrgs.br/site/docente/erika-fernandes-cota">Érika Fernandes Cota</a>').replaceAll("Douglas Nuernberg de Matos",'<a target="_blank" href="https://www.linkedin.com/in/douglasnmatos">Douglas Nuernberg de Matos</a>')}}),(0,t.jsx)(eP,{className:"scroll-reveal","aria-label":i.research.title+" "+i.research.titleHighlighted,children:[{icon:"fa-code",label:i.research.sw},{icon:"fa-laptop-medical",label:i.research.digitalHealth},{icon:"fa-cube",label:i.research.cbse},{icon:"fa-robot",label:i.research.aiHealthcare},{icon:"fa-heart-pulse",label:i.research.swHealthcare},{icon:"fa-hospital",label:i.research.healthSystemsInteroperability}].map((e,i)=>(0,t.jsxs)(eE,{children:[(0,t.jsx)(eO,{children:(0,t.jsx)(h.Icon,{icon:e.icon})}),(0,t.jsx)(eR,{children:e.label})]},i))}),(0,t.jsxs)(ez,{className:"scroll-reveal",children:[(0,t.jsx)(A,{label:i.research.publications,value:String(e.length)}),(0,t.jsx)(A,{label:i.research.peerReviews,value:"2"}),(0,t.jsx)(A,{label:i.research.orientations,value:"9"}),(0,t.jsx)(A,{label:i.research.committeeMember,value:"2"})]}),(0,t.jsx)(e$,{children:a.map(({year:e,items:i})=>(0,t.jsxs)(ek,{className:"scroll-reveal",children:[(0,t.jsx)(eN,{children:e}),(0,t.jsx)(eI,{children:i.map((i,r)=>(0,t.jsx)(eG,{publication:i},`${e}-${r}`))})]},e))})]})})};var eY=e.i(86250);function eV(){var i;let r,{t:a}=(0,d.useLanguage)(),n=(i={strings:[a.typed.frontend,a.typed.backend,a.typed.mobile,a.typed.software,a.typed.component,a.typed.nocode,a.typed.ai,a.typed.healthcare,a.typed.hl7],loop:!0},r=(0,v.useRef)(null),(0,v.useEffect)(()=>{let t=null,a=!1;return e.A(89648).then(({default:e})=>{!a&&r.current&&(t=new e(r.current,{...i,loop:!0,typeSpeed:50,backSpeed:25,backDelay:1500}))}),()=>{a=!0,t?.destroy(),t=null}},[JSON.stringify(i)]),r),o=eh.default,l=function(e={}){let{language:t}=(0,d.useLanguage)(),{limit:i,filterCategory:r}=e;return(0,v.useMemo)(()=>{let e=[..."pt"===t?eg.default:ef.default];return r&&(e=e.filter(e=>e.category!==r)),i&&(e=e.slice(0,i)),e},[t,i,r])}(),s=function(){let{language:e}=(0,d.useLanguage)();return(0,v.useMemo)(()=>"pt"===e?ex.default:eu.default,[e])}(),c=function(){let{language:e}=(0,d.useLanguage)();return(0,v.useMemo)(()=>"pt"===e?ey.default:eb.default,[e])}(),m=function(){let{language:e}=(0,d.useLanguage)();return(0,v.useMemo)(()=>(0,eq.getPublications)(e),[e])}();return(0,v.useEffect)(()=>{let e=e=>{let t=e.target.closest('a[href^="#"]');if(t){e.preventDefault();let i=t.getAttribute("href");if(i&&"#"!==i){let e=document.querySelector(i);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[]),!function(e="scroll-top"){(0,v.useEffect)(()=>{let t=()=>{let t=document.getElementById(e);t&&(window.scrollY>60?t.classList.add("active"):t.classList.remove("active"))};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e])}(),!function(t,i=[]){let r=(0,v.useRef)(new Set);(0,v.useEffect)(()=>{let i=!1;return e.A(31555).then(({default:e})=>{i||(ej||(ej=e(ew)),t.forEach(({selector:e,options:t={}})=>{let i=`${e}-${JSON.stringify(t)}`;document.querySelectorAll(e).length>0&&!r.current.has(i)&&(ej.reveal(e,t),r.current.add(i))}))}),()=>{i=!0}},i)}([{selector:".scroll-reveal",options:{delay:200}}],[o,l,s,c,m]),!function(t=".tilt",i={max:15},r=[]){(0,v.useEffect)(()=>{let r=!1,a=[];return e.A(68301).then(({default:e})=>{!r&&(a=Array.from(document.querySelectorAll(t))).length>0&&e.init(a,i)}),()=>{r=!0,a.forEach(e=>e.vanillaTilt?.destroy())}},r)}(".tilt",{max:15},[l]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_,{typedRef:n}),(0,t.jsx)(D,{}),(0,t.jsx)(G,{skills:o}),(0,t.jsx)(J,{institutions:s}),(0,t.jsx)(er,{projects:l}),(0,t.jsx)(ep,{experiences:c}),(0,t.jsx)(eX,{publications:m}),(0,t.jsx)(e_,{})]})}function eJ({language:e}){return(0,t.jsx)(eY.SiteShell,{language:e,children:(0,t.jsx)(eV,{})})}e.s(["Home",()=>eJ],58627)}]);