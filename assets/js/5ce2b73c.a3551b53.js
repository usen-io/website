"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_label:"Docusaurus",tags:["completed"]},l="Docusaurus",o={unversionedId:"foundational/srvcs/docusaurus",id:"foundational/srvcs/docusaurus",title:"Docusaurus",description:"---",source:"@site/docs/0-foundational/srvcs/docusaurus.mdx",sourceDirName:"0-foundational/srvcs",slug:"/foundational/srvcs/docusaurus",permalink:"/foundational/srvcs/docusaurus",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/0-foundational/srvcs/docusaurus.mdx",tags:[{label:"completed",permalink:"/tags/completed"}],version:"current",frontMatter:{sidebar_label:"Docusaurus",tags:["completed"]},sidebar:"tutorialSidebar",previous:{title:"Srvcs",permalink:"/category/srvcs"},next:{title:"Github",permalink:"/foundational/srvcs/github"}},i={},u=[{value:"Deploying Docusaurus",id:"deploying-docusaurus",level:2},{value:"Generic",id:"generic",level:3},{value:"Remote acctions",id:"remote-acctions",level:3},{value:"From Typesense",id:"from-typesense",level:4},{value:"From Github",id:"from-github",level:4},{value:"From the DNS provider",id:"from-the-dns-provider",level:4},{value:"Local actions",id:"local-actions",level:2},{value:"Formating Content",id:"formating-content",level:2},{value:"Sidebar",id:"sidebar",level:4},{value:"tagging",id:"tagging",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docusaurus"},"Docusaurus"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Taking advantage of documentation with moder solution"),(0,r.kt)("h2",{id:"deploying-docusaurus"},"Deploying Docusaurus"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This guide aims to deploy docusaurus with GitHub Pages and Typesense as search engine.")),(0,r.kt)("h3",{id:"generic"},"Generic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This guide asume the following cross data")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"website: usen.io\ngithub entity: usen-io\ngithub repo: website\n")),(0,r.kt)("h3",{id:"remote-acctions"},"Remote acctions"),(0,r.kt)("h4",{id:"from-typesense"},"From Typesense"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate these ",(0,r.kt)("strong",{parentName:"li"},"four")," values following the ",(0,r.kt)("a",{parentName:"li",href:"https://usen.io/foundational/srvcs/typesense"},"Typesense")," guide")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"TYPESENSE_SCRAPER_API_KEY\nexample: z3diTzyuQRnBzPbVi2TVp3XKcVfM3Cjv\n\nTYPESENSE_INSTANCE_URL_01\nexample: europe-01-typesense.usen.io\n\nTYPESENSE_SEARCH_API_KEY\nexample: r3I89rG7eG36F4eEYSmkyc4NJHaYR5LE\n\nTYPESENSE_COLLECTION_NAME\nexample: usen-doc\n")),(0,r.kt)("h4",{id:"from-github"},"From Github"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub Repo > Settings > Security > Secrets > Actions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add a github secret for typesense scraper API key:  TYPESENSE_SCRAPER_API_KEY"),(0,r.kt)("li",{parentName:"ul"},"Add a github secret for typesense  instance URL: TYPESENSE_INSTANCE_URL_01"),(0,r.kt)("li",{parentName:"ul"},"Add a github secret for typesense search API key: TYPESENSE_SEARCH_API_KEY"),(0,r.kt)("li",{parentName:"ul"},"Add a github secret for typesense collection name: TYPESENSE_COLLECTION_NAME"))),(0,r.kt)("li",{parentName:"ul"},"Now continue with Local actions, ",(0,r.kt)("strong",{parentName:"li"},"after your first git push")," back to this point. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GitHub Repo > Settings > Build and deployment > Deploy from a branch > gh-pages"),(0,r.kt)("li",{parentName:"ul"},"Add custom domain: awesome.web")))),(0,r.kt)("h4",{id:"from-the-dns-provider"},"From the DNS provider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DNS provider setup the following records:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CNAME www usen-io.github.io"),(0,r.kt)("li",{parentName:"ul"},"CNAME @ usen-io.github.io")))),(0,r.kt)("h2",{id:"local-actions"},"Local actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FETCH:")," pre-requisits:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"asdf install nodejs 18.10.0 \nasdf global nodejs 18.10.0\nnpm install -g yarn\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"INSTALL:")," Docusarus base template:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-docusaurus@latest website classic\ncd website\nyarn add docusaurus-theme-search-typesense@next\nyarn install\nmkdir -p .github/workflows/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CREATE"),"  gh action pipeline for build and deploy:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/deploy.yml"',title:'".github/workflows/deploy.yml"'},"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          cache: yarn\n\n      - name: Install dependencies\n        run: yarn install --frozen-lockfile\n      - name: Build website\n        run: yarn build\n        env:\n          TS_SEARCH_API_KEY: ${{ secrets.TYPESENSE_SEARCH_API_KEY }}\n          TS_INSTANCE_URL_01: ${{ secrets.TYPESENSE_INSTANCE_URL_01 }}\n          TS_COLLECTION_NAME: ${{ secrets.TYPESENSE_COLLECTION_NAME }}\n\n      # Popular action to deploy to GitHub Pages:\n      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          # Build output to publish to the `gh-pages` branch:\n          publish_dir: ./build\n          cname: usen.io\n          user_name: github-actions[bot]\n          user_email: 41898282+github-actions[bot]@users.noreply.github.com\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CREATE")," gh action pipeline for scrape and push info to Typesense instance.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/typesense.yml"',title:'".github/workflows/typesense.yml"'},'name: Rebuild Search Index\n\non:\n  workflow_dispatch:\n  workflow_run:\n    workflows:\n    - pages-build-deployment\n    types:\n    - completed\n\njobs:\n  scrape:\n    name: Rebuild Index\n    runs-on: ubuntu-latest\n    container:\n      image: typesense/docsearch-scraper:latest\n      options: --user 0 ### incredible usefull variable.\n    strategy:\n      fail-fast: false\n      matrix:\n        node:\n        - hel\n        - fsn\n    steps:\n    -\n      name: Run scraper\n      env:\n        HOME: /root\n        TYPESENSE_API_KEY: ${{ secrets.TYPESENSE_SCRAPER_API_KEY }}\n        TYPESENSE_HOST: ${{ secrets.TYPESENSE_INSTANCE_URL_01 }}\n        TYPESENSE_PORT: \'443\'\n        TYPESENSE_PROTOCOL: https\n        CONFIG: |\n          {\n            "index_name": "${{ secrets.TYPESENSE_COLLECTION_NAME }}",\n            "start_urls": [\n              "https://usen.io/"\n            ],\n            "sitemap_urls": [\n              "https://usen.io/sitemap.xml"\n            ],\n            "sitemap_alternate_links": true,\n            "stop_urls": [],\n            "selectors": {\n              "lvl0": {\n                "selector": ".menu__link--sublist.menu__link--active",\n                "global": true,\n                "default_value": "Documentation"\n              },\n              "lvl1": "header h1",\n              "lvl2": "article h2",\n              "lvl3": "article h3",\n              "lvl4": "article h4",\n              "lvl5": "article h5, article td:first-child",\n              "lvl6": "article h6",\n              "text": "article p, article li, article td:last-child"\n            },\n            "strip_chars": " .,;:#",\n            "custom_settings": {\n              "separatorsToIndex": "_",\n              "attributesForFaceting": [\n                "language",\n                "version",\n                "type"\n              ],\n              "attributesToRetrieve": [\n                "hierarchy",\n                "content",\n                "anchor",\n                "url",\n                "url_without_anchor",\n                "type"\n              ]\n            },\n            "conversation_id": [\n              "1090805758"\n            ],\n            "nb_hits": 8687\n          }\n      run: pipenv run python -m src.index\n      working-directory: /root\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EDIT"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"\nurl: 'https://your-docusaurus-test-site.com',\norganizationName: 'facebook',\nprojectName: 'docusaurus'\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ADD"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"\ndeploymentBranch: 'gh-pages',\n\n    themes: ['docusaurus-theme-search-typesense'],\n    themeConfig:\n      typesense: {\n        typesenseCollectionName: process.env.TS_COLLECTION_NAME,        \n        typesenseServerConfig: {\n          nodes: [\n            {\n              host: process.env.TS_INSTANCE_URL_01,\n              port: 443,\n              protocol: 'https',\n            },\n          ],\n          apiKey: process.env.TS_SEARCH_API_KEY,\n        },\n        typesenseSearchParameters: {},\n        contextualSearch: true,\n      },\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ADD")," git repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git-setup\ngit remote add github git@aa-github:usen-io/website.git\ngit push github main\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"now return to github remote acction and finish these steps.\n~~ happy codign ~~")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TEST")," locally")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"formating-content"},"Formating Content"),(0,r.kt)("h4",{id:"sidebar"},"Sidebar"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"label"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"className"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"customProps"),"\xa0attributes are declared in front matter as\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_label"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_class_name"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_custom_props"),", respectively. Position can be specified in the same way, via\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_position"),"\xa0front matter.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"sidebar_position: 2  \nsidebar_label: Easy  \nsidebar_class_name: green\n")),(0,r.kt)("h3",{id:"tagging"},"tagging"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tags: \n  - Demo\n  - Getting started\n")))}p.isMDXComponent=!0}}]);