(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{101:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(98),c=t(95),i=t(47),s=t.n(i);const l=37,p=39;n.a=function(e){const{block:n,children:t,defaultValue:i,values:b,groupId:d}=e,{tabGroupChoices:u,setTabGroupChoices:m}=Object(o.a)(),[f,O]=Object(a.useState)(i);if(null!=d){const e=u[d];null!=e&&e!==f&&b.some(n=>n.value===e)&&O(e)}const j=e=>{O(e),null!=d&&m(d,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n})},b.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case p:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(h,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===f)[0]))}},102:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),o=(t(0),t(93)),c=t(101),i=t(102),s={title:"Script Options"},l={unversionedId:"denon/configuration/script",id:"denon/configuration/script",isDocsHomePage:!1,title:"Script Options",description:"Example for now are mostly in JSON, tabs for other formats will",source:"@site/docs/denon/configuration/script.md",permalink:"/docs/denon/configuration/script",editUrl:"https://github.com/denosaurs/website/edit/master/website/docs/denon/configuration/script.md",lastUpdatedBy:"Qu4k",lastUpdatedAt:1596119060,sidebar:"denon",previous:{title:"Introduction",permalink:"/docs/denon/configuration/introduction"},next:{title:"Watcher Options",permalink:"/docs/denon/configuration/watcher"}},p=[{value:"Scripts",id:"scripts",children:[]},{value:"Script Options",id:"script-options",children:[{value:"Environment variables",id:"environment-variables",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"File watching",id:"file-watching",children:[]},{value:"Import Map",id:"import-map",children:[]},{value:"TS config",id:"ts-config",children:[]},{value:"Unstable",id:"unstable",children:[]},{value:"Inspect and InspectBrk",id:"inspect-and-inspectbrk",children:[]},{value:"Cert",id:"cert",children:[]},{value:"Log",id:"log",children:[]}]}],b={rightToc:p};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Example for now are mostly in JSON, tabs for other formats will\nbe available soon."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Denon")," takes inspiration from the awesome ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/umbopepato/velociraptor"}),"velociraptor")," module in the way it handles scripts."),Object(o.b)("h2",{id:"scripts"},"Scripts"),Object(o.b)("p",null,"Scripts are declared inside the ",Object(o.b)("inlineCode",{parentName:"p"},"scripts")," object and are identified by a name:"),Object(o.b)(c.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    // they all resolve to `deno run app.ts` when you run `denon start`\n    "start": "app.ts",\n    // OR\n    "start": "run app.ts",\n    // OR\n    "start": "deno run app.ts"\n  }\n}\n'))),Object(o.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'scripts:\n  # they all resolve to `deno run app.ts` when you run `denon start`\n  start: "app.ts"\n  # OR\n  start: "run app.ts"\n  # OR\n  start: "deno run app.ts"\n'))),Object(o.b)(i.a,{value:"typescript",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="template for denon.config.ts"',title:'"template',for:!0,'denon.config.ts"':!0}),'import { DenonConfig } from "https://deno.land/x/denon/mod.ts";\n\nconst config: DenonConfig = {\n  scripts: {\n    // they all resolve to `deno run app.ts` when you run `denon start`\n    start: "app.ts",\n    // OR\n    start: "run app.ts",\n    // OR\n    start: "deno run app.ts",\n  },\n};\n\nexport default config;\n')))),Object(o.b)("p",null,"Scripts can also be defined by a complex object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      // with an optional description that\n      // is shown when you run `denon` to list\n      // all the scripts\n      "desc": "Run the main server.",\n\n      // available options...\n      // they are described in the next paragraph\n      "allow": ["env", "write"],\n      "unstable": true\n\n      // running `denon start` will resolve in\n      // deno run --allow-env --allow-write --unstable app.ts\n    }\n  }\n}\n')),Object(o.b)("h2",{id:"script-options"},"Script Options"),Object(o.b)("p",null,"Options can be script specific or be declared as global in the root of the config file."),Object(o.b)("h3",{id:"environment-variables"},"Environment variables"),Object(o.b)("p",null,"Environment variables can be provided as an object and are passed directly to the child process."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  // globally applied to all scripts\n  "env": {\n    "TOKEN": "SUPER SECRET TOKEN"\n  },\n\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "env": {\n        "PORT": 3000\n      }\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"permissions"},"Permissions"),Object(o.b)("p",null,"Permission can be granted to child processes. You can provide specific permissions for each script,\nbut you can also declare permissions globally, following the same format."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  // globally applied to all scripts\n  // as object ...\n  "allow": {\n    "read": "/etc,/tmp", // --allow-read=/etc,/tmp\n    "env": true // --allow-env\n  },\n  // ... or as array\n  "allow": [\n    "run", // --allow-run\n    "net" // --allow-net\n  ],\n\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      // specific for a single script\n      // as object ...\n      "allow": {\n        "read": "/etc,/tmp", // --allow-read=/etc,/tmp\n        "env": true // --allow-env\n      },\n      // ... or as array\n      "allow": [\n        "run", // --allow-run\n        "net" // --allow-net\n      ]\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"file-watching"},"File watching"),Object(o.b)("p",null,"While file watching is a core feature of ",Object(o.b)("inlineCode",{parentName:"p"},"denon")," you always have the option\nof disabling file watching and run a script only once:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  // globally applied to all scripts\n  // now denon will essentialy be a script runner\n  "watch": false,\n\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      // you can still enable watch on a script-by-script basis\n      "watch": true\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"import-map"},"Import Map"),Object(o.b)("p",null,"Load import map file. Take a look a at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://deno.land/manual/linking_to_external_code/import_maps"}),"official docs")," for additional info."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This feature in unstable in the current version of the deno executable."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "importmap": "importmap.json"\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"ts-config"},"TS config"),Object(o.b)("p",null,"Load tsconfig.json configuration file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "tsconfig": "tsconfig.json"\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"unstable"},"Unstable"),Object(o.b)("p",null,"Enable if the script is using unstable features of deno stdlib:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "unstable": true\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"inspect-and-inspectbrk"},"Inspect and InspectBrk"),Object(o.b)("p",null,"Activate inspector on ",Object(o.b)("inlineCode",{parentName:"p"},"host:port"),". If ",Object(o.b)("inlineCode",{parentName:"p"},"inspectBrk")," is used the executions breaks at the start of the user script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "inspect": "127.0.0.1:9229",\n      // OR\n      "inspectBrk": "127.0.0.1:9229"\n    }\n  }\n}\n')),Object(o.b)("h4",{id:"lockfile"},"Lockfile"),Object(o.b)("p",null,"Check the specified lock file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "lock": "lock.json"\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"cert"},"Cert"),Object(o.b)("p",null,"Load certificate authority from PEM encoded file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "cert": "cert.pem"\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"log"},"Log"),Object(o.b)("p",null,"Set log level: (possible values: ",Object(o.b)("inlineCode",{parentName:"p"},"debug"),", ",Object(o.b)("inlineCode",{parentName:"p"},"info"),")"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "Run the main server.",\n\n      "log": "debug" // or "info"\n    }\n  }\n}\n')))}d.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return t?r.a.createElement(m,i(i({ref:n},l),{},{components:t})):r.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},97:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},98:function(e,n,t){"use strict";var a=t(0),r=t(97);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);