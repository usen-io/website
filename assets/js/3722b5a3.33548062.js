"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5548],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={},o=void 0,l={unversionedId:"skill-ignition/generics/unix/ip",id:"skill-ignition/generics/unix/ip",title:"ip",description:"setup inital ip and gateway",source:"@site/docs/0-skill-ignition/0-generics/0-unix/ip.mdx",sourceDirName:"0-skill-ignition/0-generics/0-unix",slug:"/skill-ignition/generics/unix/ip",permalink:"/skill-ignition/generics/unix/ip",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"incron",permalink:"/skill-ignition/generics/unix/incron"},next:{title:"journalctl",permalink:"/skill-ignition/generics/unix/journalctl"}},p={},s=[{value:"setup inital ip and gateway",id:"setup-inital-ip-and-gateway",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"setup-inital-ip-and-gateway"},"setup inital ip and gateway"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nip address add 192.168.33.6/24 dev enp1s0\nip route add default via 192.168.33.1 dev enp1s0\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# retrive just data of specif interface\nip -h -4 addr show ens192\n\n# retrive just a lit of physical interfaces\nfind /sys/class/net -type l -not -lname '*virtual*' -printf '%f\\n' | xargs -I '{}'  ip -h -4 addr show {}\n\n## from: man find\n### -printf \n#### %f     Print the basename; the file's name with any leading directories removed (only the last element).  For /, the result is `/'.  See the EXAMPLES section for an example.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," \n")))}u.isMDXComponent=!0}}]);