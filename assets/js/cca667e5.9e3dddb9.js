"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},a=void 0,u={unversionedId:"skill-ignition/generics/unix/git",id:"skill-ignition/generics/unix/git",title:"git",description:"useful commands",source:"@site/docs/0-skill-ignition/0-generics/0-unix/git.mdx",sourceDirName:"0-skill-ignition/0-generics/0-unix",slug:"/skill-ignition/generics/unix/git",permalink:"/skill-ignition/generics/unix/git",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"firewall-cmd",permalink:"/skill-ignition/generics/unix/firewall-cmd"},next:{title:"incron",permalink:"/skill-ignition/generics/unix/incron"}},s={},c=[{value:"useful commands",id:"useful-commands",level:3},{value:"create private fork of a public repo",id:"create-private-fork-of-a-public-repo",level:3}],l={toc:c};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"useful-commands"},"useful commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# check if local repo is up to date\n\ngit fetch -v --dry-run\n\n# download submodules\n\n## Add a submodule\ngit submodule add https://github.com/tomanistor/osprey.git themes/osprey\n\n## Pull all submodules using\n\ngit submodule update --init --recursive\n\n## update submodules\n\ngit submodule update --recursive --remote\n\n### or\n\ngit pull --recurse-submodules\n\n# tell git exclude specific files when doing a git merge\n\n## FIRST activate merge ours\n\ngit config --global merge.ours.driver true\n\ngit config merge.ours.driver true\n\ncat .git/config\n\n[merge "ours"]\n\ndriver = true\n\n## SECOND on the main git directory\n\ntouch .gitattributes\n\n*__dev* merge=ours\n\n.gitattributes merge=ours\n\n.gitignore merge=ours\n\ngit-archive\n')),(0,i.kt)("h3",{id:"create-private-fork-of-a-public-repo"},"create private fork of a public repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a bare clone of the repository.\ngit clone --bare https://github.com/sherifabdlnaby/elastdocker.git\ngit clone --bare git@github.com:usi-systems/easytrace.git\n\n# Create a new private repository on Github and name it easytrace.\n## Mirror-push your bare clone to your new easytrace repository.\n\ncd easytrace.git\ngit push --mirror git@github.com:<your_username>/easytrace.git\n\ncd ..\nrm -rf easytrace.git\ncd \n\ngit clone git@github.com:<your_username>/easytrace.git\n\n# If you want, add the original repo as remote to fetch (potential) future changes. Make sure you also disable push on the remote (as you are not allowed to push to it anyway).\n\ngit remote add upstream git@github.com:usi-systems/easytrace.git\ngit remote set-url --push upstream DISABLE\n\n# You can list all your remotes with git remote -v. You should see:\n\n  origin    git@github.com:<your_username>/easytrace.git (fetch)\n  origin    git@github.com:<your_username>/easytrace.git (push)\n  upstream  git@github.com:usi-systems/easytrace.git (fetch)\n  upstream  DISABLE (push)\n\n")))}g.isMDXComponent=!0}}]);