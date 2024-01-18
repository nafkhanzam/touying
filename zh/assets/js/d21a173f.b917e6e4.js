"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5658],{5086:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=s(5893),i=s(1151);const o={sidebar_position:2},l="\u5f00\u59cb",r={id:"start",title:"\u5f00\u59cb",description:"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86 Typst \u73af\u5883\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u4f7f\u7528 Web App \u6216 VS Code \u7684 Typst LSP \u548c Typst Preview \u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/start.md",sourceDirName:".",slug:"/start",permalink:"/touying/zh/docs/start",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Touying \u4ecb\u7ecd",permalink:"/touying/zh/docs/intro"},next:{title:"\u6392\u7bc7\u5e03\u5c40",permalink:"/touying/zh/docs/layout"}},a={},d=[{value:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50",id:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50",level:2}];function p(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u5f00\u59cb",children:"\u5f00\u59cb"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86 Typst \u73af\u5883\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(e.a,{href:"https://typst.app/",children:"Web App"})," \u6216 VS Code \u7684 ",(0,t.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=nvarner.typst-lsp",children:"Typst LSP"})," \u548c ",(0,t.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=mgt19937.typst-preview",children:"Typst Preview"})," \u63d2\u4ef6\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u8981\u4f7f\u7528 Touying\uff0c\u60a8\u53ea\u9700\u8981\u5728\u6587\u6863\u91cc\u52a0\u5165"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typst",children:'#import "@preview/touying:0.2.0": *\n\n#let (init, slide, slides) = utils.methods(s)\n#show: init\n\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u5f88\u7b80\u5355\uff0c\u60a8\u521b\u5efa\u4e86\u60a8\u7684\u7b2c\u4e00\u4e2a Touying slides\uff0c\u606d\u559c\uff01\ud83c\udf89"}),"\n",(0,t.jsx)(e.h2,{id:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50",children:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50"}),"\n",(0,t.jsxs)(e.p,{children:["\u4e8b\u5b9e\u4e0a\uff0cTouying \u63d0\u4f9b\u4e86\u591a\u79cd slides \u7f16\u5199\u98ce\u683c\uff0c\u4f8b\u5982\u4e0a\u9762\u7684\u4f8b\u5b50\u4f9d\u9760\u4e00\u7ea7\u548c\u4e8c\u7ea7\u6807\u9898\u6765\u5212\u5206\u65b0 slide\uff0c\u5b9e\u9645\u4e0a\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"#slide[..]"})," \u7684\u5199\u6cd5\uff0c\u4ee5\u83b7\u5f97 Touying \u63d0\u4f9b\u7684\u66f4\u591a\u66f4\u5f3a\u5927\u7684\u529f\u80fd\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typst",children:'#import "@preview/touying:0.2.0": *\n\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slide) = utils.methods(s)\n#show: init\n\n// simple animations\n#slide[\n  a simple #pause *dynamic*\n\n  #pause\n  \n  slide.\n\n  #meanwhile\n\n  meanwhile #pause with pause.\n][\n  second #pause pause.\n]\n\n// complex animations\n#slide(setting: body => {\n  set text(fill: blue)\n  body\n}, repeat: 3, self => [\n  #let (uncover, only, alternatives) = utils.methods(self)\n\n  in subslide #self.subslide\n\n  test #uncover("2-")[uncover] function\n\n  test #only("2-")[only] function\n\n  #pause\n\n  and paused text.\n])\n\n// math equation animations\n#slide[\n  == Touying Equation\n\n  #touying-equation(`\n    f(x) &= pause x^2 + 2x + 1  \\\n         &= pause (x + 1)^2  \\\n  `)\n\n  #meanwhile\n\n  Touying equation is very simple.\n]\n\n// multiple pages for one slide\n#slide[\n  == Multiple Pages for One Slide\n\n  #lorem(200)\n]\n\n// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide,) = utils.methods(s)\n\n#slide[\n  == Appendix\n]\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0cTouying \u8fd8\u63d0\u4f9b\u4e86\u5f88\u591a\u5185\u7f6e\u7684\u4e3b\u9898\uff0c\u80fd\u591f\u7b80\u5355\u5730\u7f16\u5199\u7cbe\u7f8e\u7684 slides\uff0c\u57fa\u672c\u4e0a\uff0c\u60a8\u53ea\u9700\u8981\u5728\u6587\u6863\u9876\u90e8\u52a0\u5165\u4e00\u884c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'#let s = themes.metropolis.register(s, aspect-ratio: "16-9")\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5373\u53ef\u4f7f\u7528 metropolis \u4e3b\u9898\u3002\u5173\u4e8e\u66f4\u8be6\u7ec6\u7684\u6559\u7a0b\uff0c\u60a8\u53ef\u4ee5\u53c2\u9605\u540e\u9762\u7684\u7ae0\u8282\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>r,a:()=>l});var t=s(7294);const i={},o=t.createContext(i);function l(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);