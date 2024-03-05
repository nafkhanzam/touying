"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5658],{5086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(5893),s=t(1151);const r={sidebar_position:2},o="\u5f00\u59cb",a={id:"start",title:"\u5f00\u59cb",description:"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86 Typst \u73af\u5883\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u4f7f\u7528 Web App \u6216 VS Code \u7684 Typst LSP \u548c Typst Preview \u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/start.md",sourceDirName:".",slug:"/start",permalink:"/touying/zh/docs/next/start",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Touying \u4ecb\u7ecd",permalink:"/touying/zh/docs/next/intro"},next:{title:"\u6392\u7bc7\u5e03\u5c40",permalink:"/touying/zh/docs/next/layout"}},l={},d=[{value:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50",id:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5f00\u59cb",children:"\u5f00\u59cb"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86 Typst \u73af\u5883\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"https://typst.app/",children:"Web App"})," \u6216 VS Code \u7684 ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=nvarner.typst-lsp",children:"Typst LSP"})," \u548c ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=mgt19937.typst-preview",children:"Typst Preview"})," \u63d2\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u4f7f\u7528 Touying\uff0c\u60a8\u53ea\u9700\u8981\u5728\u6587\u6863\u91cc\u52a0\u5165"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.0": *\n\n#let s = themes.simple.register(s)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/f5bdbf8f-7bf9-45fd-9923-0fa5d66450b2",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u5f88\u7b80\u5355\uff0c\u60a8\u521b\u5efa\u4e86\u60a8\u7684\u7b2c\u4e00\u4e2a Touying slides\uff0c\u606d\u559c\uff01\ud83c\udf89"}),"\n",(0,i.jsx)(n.h2,{id:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50",children:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e8b\u5b9e\u4e0a\uff0cTouying \u63d0\u4f9b\u4e86\u591a\u79cd slides \u7f16\u5199\u98ce\u683c\uff0c\u5b9e\u9645\u4e0a\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"#slide[..]"})," \u7684\u5199\u6cd5\uff0c\u4ee5\u83b7\u5f97 Touying \u63d0\u4f9b\u7684\u66f4\u591a\u66f4\u5f3a\u5927\u7684\u529f\u80fd\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.0": *\n#import "@preview/cetz:0.2.1"\n#import "@preview/fletcher:0.4.2" as fletcher: node, edge\n\n// cetz and fletcher bindings for touying\n#let cetz-canvas = touying-reducer.with(reduce: cetz.canvas, cover: cetz.draw.hide.with(bounds: true))\n#let fletcher-diagram = touying-reducer.with(reduce: (arr, ..args) => fletcher.diagram(..args, ..arr))\n\n// Register university theme\n// You can remove the theme registration or replace other themes\n// it can still work normally\n#let s = themes.university.register(s, aspect-ratio: "16-9")\n\n// Global information configuration\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n\n// Pdfpc configuration\n// typst query --root . ./example.typ --field value --one "<pdfpc-file>" > ./example.pdfpc\n#let s = (s.methods.append-preamble)(self: s, pdfpc.config(\n  duration-minutes: 30,\n  start-time: datetime(hour: 14, minute: 10, second: 0),\n  end-time: datetime(hour: 14, minute: 40, second: 0),\n  last-minutes: 5,\n  note-font-size: 12,\n  disable-markdown: false,\n  default-transition: (\n    type: "push",\n    duration-seconds: 2,\n    angle: ltr,\n    alignment: "vertical",\n    direction: "inward",\n  ),\n))\n\n// Extract methods\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n// Extract slide functions\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Animation\n\n== Simple Animation\n\n#slide[\n  We can use `#pause` to #pause display something later.\n\n  #pause\n  \n  Just like this.\n\n  #meanwhile\n  \n  Meanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.\n]\n\n== Complex Animation\n\n#slide(repeat: 3, self => [\n  #let (uncover, only, alternatives) = utils.methods(self)\n\n  At subslide #self.subslide, we can\n\n  use #uncover("2-")[`#uncover` function] for reserving space,\n\n  use #only("2-")[`#only` function] for not reserving space,\n\n  #alternatives[call `#only` multiple times \\u{2717}][use `#alternatives` function #sym.checkmark] for choosing one of the alternatives.\n])\n\n== Math Equation Animation\n\n#slide[\n  Touying equation with `pause`:\n\n  #touying-equation(`\n    f(x) &= pause x^2 + 2x + 1  \\\n         &= pause (x + 1)^2  \\\n  `)\n\n  #meanwhile\n\n  Here, #pause we have the expression of $f(x)$.\n  \n  #pause\n\n  By factorizing, we can obtain this result.\n]\n\n== CeTZ Animation\n\n#slide[\n  CeTZ Animation in Touying:\n\n  #cetz-canvas({\n    import cetz.draw: *\n    \n    rect((0,0), (5,5))\n\n    (pause,)\n\n    rect((0,0), (1,1))\n    rect((1,1), (2,2))\n    rect((2,2), (3,3))\n\n    (pause,)\n\n    line((0,0), (2.5, 2.5), name: "line")\n  })\n]\n\n== Fletcher Animation\n\n#slide[\n  Fletcher Animation in Touying:\n\n  #fletcher-diagram(\n    node-stroke: .1em,\n    node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),\n    spacing: 4em,\n    edge((-1,0), "r", "-|>", `open(path)`, label-pos: 0, label-side: center),\n    node((0,0), `reading`, radius: 2em),\n    edge((0,0), (0,0), `read()`, "--|>", bend: 130deg),\n    pause,\n    edge(`read()`, "-|>"),\n    node((1,0), `eof`, radius: 2em),\n    pause,\n    edge(`close()`, "-|>"),\n    node((2,0), `closed`, radius: 2em, extrude: (-2.5, 0)),\n    edge((0,0), (2,0), `close()`, "-|>", bend: -40deg),\n  )\n]\n\n\n= Others\n\n== Side-by-side\n\n#slide[\n  First column.\n][\n  Second column.\n]\n\n== Setting\n\n#slide(setting: body => {\n  set text(fill: blue)\n  body\n})[\n  This slide has blue text.\n]\n\n== Multiple Pages\n\n#slide[\n  #lorem(200)\n]\n\n\n// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide,) = utils.slides(s)\n\n== Appendix\n\n#slide[\n  Please pay attention to the current slide number.\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/fcecb505-d2d1-4e36-945a-225f4661a694",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"Touying \u63d0\u4f9b\u4e86\u5f88\u591a\u5185\u7f6e\u7684\u4e3b\u9898\uff0c\u80fd\u591f\u7b80\u5355\u5730\u7f16\u5199\u7cbe\u7f8e\u7684 slides\uff0c\u4f8b\u5982\u6b64\u5904\u7684"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'#let s = themes.university.register(s, aspect-ratio: "16-9")\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528 university \u4e3b\u9898\u3002\u5173\u4e8e\u4e3b\u9898\u66f4\u8be6\u7ec6\u7684\u6559\u7a0b\uff0c\u60a8\u53ef\u4ee5\u53c2\u9605\u540e\u9762\u7684\u7ae0\u8282\u3002"})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);