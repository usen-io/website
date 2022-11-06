"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9125],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=l(r),f=i,g=y["".concat(a,".").concat(f)]||y[f]||p[f]||s;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=y;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5265:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(7462),i=(r(7294),r(3905));const s={},o=void 0,c={unversionedId:"skill-ignition/generics/unix/ssh",id:"skill-ignition/generics/unix/ssh",title:"ssh",description:"ssh-keygen",source:"@site/docs/0-skill-ignition/0-generics/0-unix/ssh.mdx",sourceDirName:"0-skill-ignition/0-generics/0-unix",slug:"/skill-ignition/generics/unix/ssh",permalink:"/skill-ignition/generics/unix/ssh",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sealert",permalink:"/skill-ignition/generics/unix/sealert"},next:{title:"systemctl",permalink:"/skill-ignition/generics/unix/systemctl"}},a={},l=[{value:"ssh-keygen",id:"ssh-keygen",level:3}],u={toc:l};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ssh-keygen"},"ssh-keygen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ssh-keygen -t rsa -m PEM -b 4096 -C "rocky@crosskey"\n\nssh-keygen -o -a 600 -t ed25519 -f ~/.ssh/id_rsa -C "rocky@crosskey"\n\nssh-copy-id -i ~/.ssh/id_rsa.pub azureuser@myserver\n\n')))}p.isMDXComponent=!0}}]);