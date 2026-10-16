(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17089,31638,85233,62461,68757,61950,e=>{"use strict";e.s(["theme",0,{colors:{primary:"#1d048a",primaryDark:"#0e0245",secondary:"rgb(0, 1, 43)",accent:"#ff7b00",accent2:"#ffae00",purple:"#420177",purpleLight:"#57059e",purpleDark:"#4a00e0",yellow:"#ffd900",yellowLight:"rgb(255, 230, 0)",white:"#fff",black:"#000",gray:"#f7f7f7",grayLight:"#e5ecfb",dark:"#222",darkBlue:"#002057",darkNavy:"rgb(0, 1, 43)",text:"rgb(32, 32, 32)",textSecondary:"#ccc"},fonts:{poppins:"'Poppins', sans-serif",nunito:"'Nunito', sans-serif"},breakpoints:{mobile:"500px",tablet:"887px",desktop:"900px"}}],17089);var t=e.i(43476),r=e.i(71645),n=e.i(507),o=e.i(11180);let i={en:n.default,pt:o.default},l="language";function a(e){return`/${e}/`}function c(e,t){let r=e.replace(/^\/(en|pt)(\/|$)/,"");return`${a(t)}${r}`}e.s(["htmlLanguages",0,{en:"en",pt:"pt-BR"},"languagePath",()=>a,"languageStorageKey",0,l,"switchLanguagePath",()=>c],31638);let s=(0,r.createContext)(void 0);e.s(["LanguageProvider",0,({children:e,language:n})=>{let o=(0,r.useCallback)(e=>{try{globalThis.window.localStorage.setItem(l,e)}catch{}let{pathname:t,hash:r}=globalThis.window.location;globalThis.window.location.assign(`${c(t,e)}${r}`)},[]),a=(0,r.useMemo)(()=>({language:n,setLanguage:o,t:i[n]}),[n,o]);return(0,t.jsx)(s.Provider,{value:a,children:e})},"useLanguage",0,()=>{let e=(0,r.useContext)(s);if(void 0===e)throw Error("useLanguage must be used within a LanguageProvider");return e}],85233),e.s([],62461);var d={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},f={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},u={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M290.4 19.8C295.4 7.8 307.1 0 320 0L480 0c17.7 0 32 14.3 32 32l0 160c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9L400 157.3 246.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L354.7 112 297.4 54.6c-9.2-9.2-11.9-22.9-6.9-34.9zM0 176c0-44.2 35.8-80 80-80l80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-80 0c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 176z"]},m={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},p={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"]},h={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},g={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]},b={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M0 416L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 288c0 13.3 10.7 24 24 24s24-10.7 24-24L96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM160 128l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0zm-24-72c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0c-13.3 0-24 10.7-24 24zM360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0z"]},x={prefix:"fas",iconName:"hospital",icon:[576,512,[127973,62589,"hospital-alt","hospital-wide"],"f0f8","M128 64c0-35.3 28.7-64 64-64L384 0c35.3 0 64 28.7 64 64l0 64 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l64 0 0-64zM272 352c-17.7 0-32 14.3-32 32l0 80 96 0 0-80c0-17.7-14.3-32-32-32l-32 0zM128 368l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM112 256c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zM512 368l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM496 256c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zM264 104l0 32-32 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"]},y={prefix:"fas",iconName:"heart-pulse",icon:[512,512,["heartbeat"],"f21e","M256 107.9L241 87.1C216 52.5 175.9 32 133.1 32 59.6 32 0 91.6 0 165.1l0 2.6c0 23.6 6.2 48 16.6 72.3l106 0c3.2 0 6.1-1.9 7.4-4.9l31.8-76.3c3.7-8.8 12.3-14.6 21.8-14.8s18.3 5.4 22.2 14.1l51.3 113.9 41.4-82.8c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3l23.2 46.3c1.4 2.7 4.1 4.4 7.2 4.4l123.6 0c10.5-24.3 16.6-48.7 16.6-72.3l0-2.6C512 91.6 452.4 32 378.9 32 336.2 32 296 52.5 271 87.1l-15 20.7zM469.6 288l-97.8 0c-21.2 0-40.6-12-50.1-31l-1.7-3.4-42.5 85.1c-4.1 8.3-12.7 13.5-22 13.3s-17.6-5.7-21.4-14.1l-49.3-109.5-10.5 25.2c-8.7 20.9-29.1 34.5-51.7 34.5l-80.2 0c47.2 73.8 123 141.7 170.4 177.9 12.4 9.4 27.6 14.1 43.1 14.1s30.8-4.6 43.1-14.1C346.6 429.7 422.4 361.8 469.6 288z"]},w={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]},v={prefix:"fas",iconName:"circle-arrow-down",icon:[512,512,["arrow-circle-down"],"f0ab","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM239 377l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l39 39 0-150.1c0-13.3 10.7-24 24-24s24 10.7 24 24l0 150.1 39-39c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0z"]},z={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},C={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},L={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M224.3-2.5c19.8-11.4 44.2-11.4 64 0L464.2 99c19.8 11.4 32 32.6 32 55.4l0 203c0 22.9-12.2 44-32 55.4L288.3 514.5c-19.8 11.4-44.2 11.4-64 0L48.5 413c-19.8-11.4-32-32.6-32-55.4l0-203c0-22.9 12.2-44 32-55.4L224.3-2.5zm207.8 360l0-166.1-143.8 83 0 166.1 143.8-83z"]},M={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},k={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},j={prefix:"fas",iconName:"graduation-cap",icon:[576,512,[127891,"mortar-board"],"f19d","M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"]},$={prefix:"fas",iconName:"file-pdf",icon:[576,512,[],"f1c1","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l80 0 0-112c0-35.3 28.7-64 64-64l176 0 0-165.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM240 380c-11 0-20 9-20 20l0 128c0 11 9 20 20 20s20-9 20-20l0-28 12 0c33.1 0 60-26.9 60-60s-26.9-60-60-60l-32 0zm32 80l-12 0 0-40 12 0c11 0 20 9 20 20s-9 20-20 20zm96-80c-11 0-20 9-20 20l0 128c0 11 9 20 20 20l32 0c28.7 0 52-23.3 52-52l0-64c0-28.7-23.3-52-52-52l-32 0zm20 128l0-88 12 0c6.6 0 12 5.4 12 12l0 64c0 6.6-5.4 12-12 12l-12 0zm88-108l0 128c0 11 9 20 20 20s20-9 20-20l0-44 28 0c11 0 20-9 20-20s-9-20-20-20l-28 0 0-24 28 0c11 0 20-9 20-20s-9-20-20-20l-48 0c-11 0-20 9-20 20z"]},N={prefix:"fas",iconName:"laptop-medical",icon:[640,512,[],"f812","M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM288 160c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 40 40 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-40 0 0 40c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-40-40 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l40 0 0-40z"]},_={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z"]},P={prefix:"fas",iconName:"angle-up",icon:[384,512,[8963],"f106","M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},S={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]},E={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},I={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};e.s(["faAngleUp",()=>P,"faArrowRight",()=>M,"faBars",()=>I,"faBook",()=>p,"faBriefcase",()=>S,"faCalendarDays",()=>f,"faChevronRight",()=>h,"faCircleArrowDown",()=>v,"faCode",()=>w,"faCube",()=>L,"faEnvelope",()=>d,"faEye",()=>m,"faFilePdf",()=>$,"faGraduationCap",()=>j,"faHeartPulse",()=>y,"faHospital",()=>x,"faLaptopCode",()=>z,"faLaptopMedical",()=>N,"faLocationDot",()=>E,"faNewspaper",()=>b,"faRobot",()=>_,"faUpRightFromSquare",()=>u,"faUser",()=>C,"faUsers",()=>g,"faXmark",()=>k],68757);var O=e.i(97053);let T=O.default.i.withConfig({displayName:"styled__Container",componentId:"sc-18e70e48-0"})`
  display: inline-block;
  font-style: normal;
  line-height: 1;

  svg {
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
    fill: currentColor;
  }
`,R={"angle-up":P,"arrow-circle-down":v,"arrow-right":M,bars:I,book:p,briefcase:S,calendar:f,"chevron-right":h,code:w,cube:L,envelope:d,"external-link-alt":u,eye:m,"file-pdf":$,github:{prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z"]},google:{prefix:"fab",iconName:"google",icon:[512,512,[],"f1a0","M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"]},"graduation-cap":j,"heart-pulse":y,hospital:x,"laptop-code":z,"laptop-medical":N,linkedin:{prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},"map-marker-alt":E,newspaper:b,orcid:{prefix:"fab",iconName:"orcid",icon:[512,512,[],"f8d2","M294.7 188.2l-45.9 0 0 153.8 47.5 0c67.6 0 83.1-51.3 83.1-76.9 0-41.6-26.5-76.9-84.7-76.9zM256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM175.2 368.8l-29.8 0 0-207.5 29.8 0 0 207.5zM160.3 98.5a19.6 19.6 0 1 1 0 39.2 19.6 19.6 0 1 1 0-39.2zM300 369l-81 0 0-207.7 80.6 0c76.7 0 110.4 54.8 110.4 103.9 0 53.3-41.7 103.9-110 103.9z"]},robot:_,times:k,"user-alt":C,users:g};function A(e){return e in R}e.s(["Icon",0,({icon:e,className:r})=>{let n=e.split(/\s+/).map(e=>e.replace(/^fa-/,"")).find(A);if(!n)return null;let[o,i,,,l]=R[n].icon,a=Array.isArray(l)?l:[l];return(0,t.jsx)(T,{className:r,"aria-hidden":"true",children:(0,t.jsx)("svg",{viewBox:`0 0 ${o} ${i}`,style:{width:`${o/i}em`},focusable:"false",children:a.map(e=>(0,t.jsx)("path",{d:e},e))})})}],61950)},71183,e=>{"use strict";var t=e.i(43476),r=e.i(17089),n=e.i(97053);let o=n.default.section.withConfig({displayName:"styled__Container",componentId:"sc-bc5b6b72-0"})`
  background-color: ${r.theme.colors.white};
  display: flex;
  flex-direction: column;
`,i=n.default.h2.withConfig({displayName:"styled__Heading",componentId:"sc-f72ade36-0"})`
  font-size: 1.5rem;
  text-align: center;
  font-family: ${r.theme.fonts.nunito};
  font-weight: 600;
  margin-top: 0.5rem;
`,l=n.default.h2.withConfig({displayName:"styled__Heading",componentId:"sc-f006d503-0"})`
  font-size: 3.5rem;
  color: ${({color:e})=>e};
  font-weight: 800;
  text-align: center;

  span {
    color: ${({$highlighted:e,color:t})=>e||t};
  }
`;var a=e.i(61950);let c=n.default.div.withConfig({displayName:"styled__Container",componentId:"sc-76763b3c-0"})`
  background-color: ${({$fill:e})=>e};
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 100vw;
`,s=({children:e,id:r,className:n})=>(0,t.jsx)(o,{id:r,className:n,children:e});s.Title=({color:e,highlightedColor:r,primaryText:n,highlightedText:o,icon:i,className:c})=>(0,t.jsxs)(l,{color:e,$highlighted:r,className:c,children:[(0,t.jsx)(a.Icon,{icon:i})," ",n," ",(0,t.jsx)("span",{children:o})]}),s.Subtitle=({color:e,text:r})=>(0,t.jsx)(i,{color:e,children:r}),s.WaveDivider=({fillTop:e,fillBottom:r})=>(0,t.jsx)(c,{$fill:r,children:(0,t.jsx)("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",children:(0,t.jsx)("path",{fill:e,d:"M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"})})}),e.s(["Section",0,s],71183)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return c},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return a}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function l(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,l(e));else t.set(r,l(n));return t}function c(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return a},formatWithValidation:function(){return s},urlObjectKeys:function(){return c}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809)._(e.r(98183)),l=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",a=e.hash||"",c=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(s+=":"+e.port)),c&&"object"==typeof c&&(c=String(i.urlQueryToSearchParams(c)));let d=e.search||c&&`?${c}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||l.test(n))&&!1!==s?(s="//"+(s||""),o&&"/"!==o[0]&&(o="/"+o)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),d&&"?"!==d[0]&&(d="?"+d),o=o.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${s}${o}${d}${a}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return a(e)}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return w},NormalizeError:function(){return x},PageNotFoundError:function(){return y},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return l},getDisplayName:function(){return f},getLocationOrigin:function(){return s},getURL:function(){return d},isAbsoluteUrl:function(){return c},isResSent:function(){return u},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return z}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>a.test(e);function s(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=s();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let h="undefined"!=typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class x extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function z(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),o=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return y}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809),l=e.r(43476),a=i._(e.r(71645)),c=e.r(95057),s=e.r(8372),d=e.r(18581),f=e.r(18967),u=e.r(5550);e.r(33525);let m=e.r(91949),p=e.r(73668),h=e.r(9396);function g(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}function b(t){var r;let n,o,i,[c,b]=(0,a.useOptimistic)(m.IDLE_LINK_STATUS),y=(0,a.useRef)(null),{href:w,as:v,children:z,prefetch:C=null,passHref:L,replace:M,shallow:k,scroll:j,onClick:$,onMouseEnter:N,onTouchStart:_,legacyBehavior:P=!1,onNavigate:S,ref:E,unstable_dynamicOnHover:I,...O}=t;n=z,P&&("string"==typeof n||"number"==typeof n)&&(n=(0,l.jsx)("a",{children:n}));let T=a.default.useContext(s.AppRouterContext),R=!1!==C,A=!1!==C?null===(r=C)||"auto"===r?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:B,as:U}=a.default.useMemo(()=>{let e=g(w);return{href:e,as:v?g(v):e}},[w,v]);if(P){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=a.default.Children.only(n)}let D=P?o&&"object"==typeof o&&o.ref:E,F=a.default.useCallback(e=>(null!==T&&(y.current=(0,m.mountLinkInstance)(e,B,T,A,R,b)),()=>{y.current&&((0,m.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,m.unmountPrefetchableInstance)(e)}),[R,B,T,A,b]),K={ref:(0,d.useMergedRef)(F,D),onClick(t){P||"function"!=typeof $||$(t),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!T||t.defaultPrevented||function(t,r,n,o,i,l,c){if("undefined"!=typeof window){let s,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,p.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),c){let e=!1;if(c({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);a.default.startTransition(()=>{f(n||r,i?"replace":"push",l??!0,o.current)})}}(t,B,U,y,M,j,S)},onMouseEnter(e){P||"function"!=typeof N||N(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),T&&R&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){P||"function"!=typeof _||_(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),T&&R&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,f.isAbsoluteUrl)(U)?K.href=U:P&&!L&&("a"!==o.type||"href"in o.props)||(K.href=(0,u.addBasePath)(U)),i=P?a.default.cloneElement(o,K):(0,l.jsx)("a",{...O,...K,children:n}),(0,l.jsx)(x.Provider,{value:c,children:i})}e.r(84508);let x=(0,a.createContext)(m.IDLE_LINK_STATUS),y=()=>(0,a.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},31980,e=>{"use strict";var t=e.i(60754),r=e.i(31638);let n=[...t.default].sort((e,t)=>t.date.localeCompare(e.date));function o(e){return void 0===e?n:n.slice(0,e)}function i(e){return`${(0,r.languagePath)(e)}blog/`}function l(e,t){return new Intl.DateTimeFormat(r.htmlLanguages[t],{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(`${e}T00:00:00Z`))}e.s(["blogPath",()=>i,"formatBlogDate",()=>l,"getBlogPosts",()=>o])},23363,10180,17509,e=>{"use strict";var t=e.i(97053),r=e.i(17089);let n=t.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    transition: all 0.2s linear;
    user-select:none
  }

  img, svg {
    -webkit-user-drag: none;
    -webkit-touch-callout: none; /* iOS Safari */
    user-select: none;
  }

  /* Visible focus ring for keyboard navigation only */
  :focus-visible {
    outline: 2px solid ${r.theme.colors.primary};
    outline-offset: 3px;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    background: ${r.theme.colors.gray};
    font-family: ${r.theme.fonts.poppins};
  }

  *::selection {
    background: #2b3dda;
    color: #fff;
  }

  html::-webkit-scrollbar {
    width: 0.8rem;
  }

  html::-webkit-scrollbar-track {
    background: ${r.theme.colors.grayLight};
  }

  html::-webkit-scrollbar-thumb {
    background: ${r.theme.colors.primary};
  }

  /* scroll top starts */
  #scroll-top {
    position: fixed;
    top: -140%;
    right: 2rem;
    padding: 1rem 1.5rem;
    font-size: 2rem;
    background: ${r.theme.colors.dark};
    color: ${r.theme.colors.white};
    border-radius: 50%;
    transition: 1s linear;
    z-index: 1000;
  }

  #scroll-top.active {
    top: calc(100% - 12rem);
  }
  /* scroll top ends */

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    html {
      font-size: 55%;
    }
    body {
      padding-right: 0;
    }
  }
`;e.s(["GlobalStyles",0,n],23363);var o=e.i(43476),i=e.i(71645),l=e.i(22016),a=e.i(18566);let c=t.default.header.withConfig({displayName:"styled__StyledHeader",componentId:"sc-2c6d7fae-0"})`
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
  background-color: ${r.theme.colors.white};
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.3);

  @media screen and (max-width: 1024px) {
    padding: 1.7rem;
  }
`,s=t.default.div.withConfig({displayName:"styled__HeaderActions",componentId:"sc-2c6d7fae-1"})`
  display: flex;
  align-items: center;
`,d=(0,t.default)(l.default).withConfig({displayName:"styled__Logo",componentId:"sc-2c6d7fae-2"})`
  font-size: 1.9rem;
  font-weight: 800;
  text-decoration: none;
  color: ${r.theme.colors.dark};

  i {
    font-size: 2.2rem;
  }

  &:hover {
    color: ${r.theme.colors.primary};
  }
`,f=t.default.button.withConfig({displayName:"styled__MenuIcon",componentId:"sc-2c6d7fae-3"})`
  font-size: 3rem;
  cursor: pointer;
  color: rgb(24, 2, 63);
  background: none;
  padding: 0;
  line-height: 1;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }

  &.fa-times {
    transform: rotate(180deg);
  }
`,u=t.default.nav.withConfig({displayName:"styled__Nav",componentId:"sc-2c6d7fae-4"})`
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
    color: ${r.theme.colors.dark};
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.04rem;
    transition: 0.2s;
  }

  ul li a.active,
  ul li a:hover {
    color: ${r.theme.colors.dark};
    border-bottom: 0.2rem solid ${r.theme.colors.primary};
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
      color: ${r.theme.colors.white};
      font-size: 2rem;
      height: 5.5rem;
    }

    ul li a.active,
    ul li a:hover {
      padding: 1rem;
      color: ${r.theme.colors.white};
      border-bottom: 0.3rem solid ${r.theme.colors.white};
    }
  }

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    width: 100%;
  }
`,m=t.default.div.withConfig({displayName:"styled__LanguageSwitcherWrapper",componentId:"sc-2c6d7fae-5"})`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 900px) {
    position: absolute;
    right: 7.5rem;
    top: 1.8rem;
  }
`;e.i(62461);var p=e.i(85233),h=e.i(31638);let g=t.default.a.withConfig({displayName:"styled__Container",componentId:"sc-5a5f31b4-0"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid ${r.theme.colors.primary};
  border-radius: 0.5rem;
  color: ${r.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;

  &:hover {
    background: ${r.theme.colors.primary};
    color: ${r.theme.colors.white};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,b=t.default.span.withConfig({displayName:"styled__Flag",componentId:"sc-5a5f31b4-1"})`
  font-size: 1.2rem;
`,x=t.default.span.withConfig({displayName:"styled__Language",componentId:"sc-5a5f31b4-2"})`
  font-weight: 600;
`,y=()=>{let{language:e,setLanguage:t}=(0,p.useLanguage)(),r=(0,a.usePathname)(),n="en"===e?"pt":"en";return(0,o.jsxs)(g,{href:(0,h.switchLanguagePath)(r,n),hrefLang:n,onClick:e=>{e.preventDefault(),t(n)},title:"en"===e?"Mudar para Português":"Switch to English",children:[(0,o.jsx)(b,{children:"en"===e?"🇧🇷":"🇺🇸"}),(0,o.jsx)(x,{children:n.toUpperCase()})]})};var w=e.i(61950),v=e.i(31980);e.s(["Header",0,()=>{let{t:e,language:t}=(0,p.useLanguage)(),[r,n]=(0,i.useState)(!1),g=function(e=200){let[t,r]=(0,i.useState)("");return(0,i.useEffect)(()=>{let t=()=>{let t=document.querySelectorAll("section[id]"),n=window.pageYOffset;t.forEach(t=>{let o=t.getBoundingClientRect().height,i=t.offsetTop-e,l=t.getAttribute("id");n>i&&n<=i+o&&r(l||"")})};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),t}(),b=(0,a.usePathname)(),x=(0,h.languagePath)(t),z=b.replace(/\/?$/,"/")===x,C=(e,t)=>{if(n(!1),!z)return;let r=document.getElementById(t);r&&(e.preventDefault(),r.scrollIntoView({behavior:"smooth"}),window.history.replaceState(null,"",`#${t}`))},L=e=>z&&e.startsWith("#")?g===e.substring(1):b===e;return(0,o.jsxs)(c,{children:[(0,o.jsx)(d,{href:x,children:"William Niemiec"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(f,{id:"menu",type:"button",className:r?"fa-times":void 0,onClick:()=>{n(!r)},$isOpen:r,"aria-label":e.header.menu,"aria-expanded":r,"aria-controls":"main-navigation",children:(0,o.jsx)(w.Icon,{icon:r?"fa-times":"fa-bars"})}),(0,o.jsx)(u,{id:"main-navigation",$isOpen:r,children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(l.default,{href:`${x}#home`,className:L("#home")?"active":"",onClick:e=>C(e,"home"),children:e.header.home})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.default,{href:`${x}#about`,className:L("#about")?"active":"",onClick:e=>C(e,"about"),children:e.header.about})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.default,{href:`${x}#skills`,className:L("#skills")?"active":"",onClick:e=>C(e,"skills"),children:e.header.skills})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.default,{href:`${x}#education`,className:L("#education")?"active":"",onClick:e=>C(e,"education"),children:e.header.education})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.default,{href:`${x}#work`,className:L("#work")?"active":"",onClick:e=>C(e,"work"),children:e.header.work})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.default,{href:`${x}#experience`,className:L("#experience")?"active":"",onClick:e=>C(e,"experience"),children:e.header.experience})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.default,{href:`${x}#research`,className:L("#research")?"active":"",onClick:e=>C(e,"research"),children:e.header.research})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.default,{href:`${x}#blog`,className:L("#blog")||b.startsWith((0,v.blogPath)(t))?"active":"",onClick:e=>C(e,"blog"),children:e.header.blog})})]})}),(0,o.jsx)(m,{children:(0,o.jsx)(y,{})})]})]})}],10180);let z=t.default.section.withConfig({displayName:"styled__Container",componentId:"sc-e1e6dedf-0"})`
  min-height: auto;
  padding-top: 0;
  margin-top: 2rem;
  background: ${r.theme.colors.primaryDark};
`,C=t.default.div.withConfig({displayName:"styled__BoxContainer",componentId:"sc-e1e6dedf-1"})`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  margin: auto;
`,L=t.default.div.withConfig({displayName:"styled__Box",componentId:"sc-e1e6dedf-2"})`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 2.5rem;
    color: ${r.theme.colors.white};
    padding-bottom: 1rem;
    font-weight: normal;
  }

  p {
    font-size: 1.5rem;
    color: ${r.theme.colors.textSecondary};
    padding: 0.7rem 0;

    i {
      padding-right: 1rem;
      color: ${r.theme.colors.white};
    }
  }

  @media (max-width: ${r.theme.breakpoints.tablet}) {
    p {
      text-align: center;
    }
  }

  @media (max-width: ${r.theme.breakpoints.mobile}) {
    margin: 1.5rem;

    p {
      padding: 0.7rem;
    }
  }
`,M=t.default.div.withConfig({displayName:"styled__Share",componentId:"sc-e1e6dedf-3"})`
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
    background: ${r.theme.colors.white};
    color: ${r.theme.colors.primaryDark};
    border: 2px solid ${r.theme.colors.primaryDark};

    &:hover {
      background: transparent;
      border: 2px solid ${r.theme.colors.white};
      color: ${r.theme.colors.white};
    }

    @media (max-width: ${r.theme.breakpoints.mobile}) {
      padding: 1.2rem;
    }
  }
`,k=t.default.div.withConfig({displayName:"styled__Credit",componentId:"sc-e1e6dedf-4"})`
  padding: 1rem 0 0 0;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-family: ${r.theme.fonts.nunito};
  font-weight: 600;
  color: ${r.theme.colors.white};
  background-color: ${r.theme.colors.secondary};

  a {
    color: ${r.theme.colors.white};
    text-decoration: underline;
  }

  .fa {
    color: #e90606;
    margin: 0 0.3rem;
    font-size: 1.5rem;
  }
`;e.s(["Box",0,L,"BoxContainer",0,C,"Container",0,z,"Credit",0,k,"Share",0,M],17509)},86250,e=>{"use strict";var t=e.i(43476),r=e.i(97053),n=e.i(17089),o=e.i(23363),i=e.i(10180),l=e.i(17509),a=e.i(71183),c=e.i(74404);e.i(62461);var s=e.i(85233),d=e.i(61950);let f=()=>{let{t:e}=(0,s.useLanguage)();return(0,t.jsx)(a.Section,{children:(0,t.jsxs)(l.Container,{children:[(0,t.jsx)(l.BoxContainer,{children:(0,t.jsxs)(l.Box,{children:[(0,t.jsx)("h3",{children:e.footer.socials}),(0,t.jsx)(l.Share,{children:c.default.map(e=>(0,t.jsx)("a",{href:e.url,"aria-label":e.name,target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(d.Icon,{icon:e.icon})},e.name))})]})}),(0,t.jsx)(l.Credit,{children:e.footer.copyright})]})})};function u({language:e,children:l}){return(0,t.jsx)(s.LanguageProvider,{language:e,children:(0,t.jsxs)(r.ThemeProvider,{theme:n.theme,children:[(0,t.jsx)(o.GlobalStyles,{}),(0,t.jsx)(i.Header,{}),l,(0,t.jsx)(f,{})]})})}e.s(["SiteShell",()=>u],86250)}]);