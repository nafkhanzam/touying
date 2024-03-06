"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5166],{9557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(5893),r=t(1151);const s={sidebar_position:2},o="CeTZ",c={id:"integration/cetz",title:"CeTZ",description:"Touying \u63d0\u4f9b\u4e86 touying-reducer\uff0c\u5b83\u80fd\u4e3a cetz \u4e0e fletcher \u52a0\u5165 pause \u548c meanwhile \u52a8\u753b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integration/cetz.md",sourceDirName:"integration",slug:"/integration/cetz",permalink:"/touying/zh/docs/next/integration/cetz",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/integration/cetz.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pinit",permalink:"/touying/zh/docs/next/integration/pinit"},next:{title:"Fletcher",permalink:"/touying/zh/docs/next/integration/fletcher"}},l={},d=[{value:"\u7b80\u5355\u52a8\u753b",id:"\u7b80\u5355\u52a8\u753b",level:2},{value:"only \u4e0e uncover",id:"only-\u4e0e-uncover",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cetz",children:"CeTZ"}),"\n",(0,i.jsxs)(n.p,{children:["Touying \u63d0\u4f9b\u4e86 ",(0,i.jsx)(n.code,{children:"touying-reducer"}),"\uff0c\u5b83\u80fd\u4e3a cetz \u4e0e fletcher \u52a0\u5165 ",(0,i.jsx)(n.code,{children:"pause"})," \u548c ",(0,i.jsx)(n.code,{children:"meanwhile"})," \u52a8\u753b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7b80\u5355\u52a8\u753b",children:"\u7b80\u5355\u52a8\u753b"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.0": *\n#import "@preview/cetz:0.2.1"\n#import "@preview/fletcher:0.4.2" as fletcher: node, edge\n\n#let cetz-canvas = touying-reducer.with(reduce: cetz.canvas, cover: cetz.draw.hide.with(bounds: true))\n#let fletcher-diagram = touying-reducer.with(reduce: (arr, ..args) => fletcher.diagram(..args, ..arr))\n\n#let s = themes.metropolis.register(s, aspect-ratio: "16-9", footer: self => self.info.institution)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides.with(title-slide: false, outline-slide: false)\n\n// cetz animation\n#slide[\n  Cetz in Touying:\n\n  #cetz-canvas({\n    import cetz.draw: *\n    \n    rect((0,0), (5,5))\n\n    (pause,)\n\n    rect((0,0), (1,1))\n    rect((1,1), (2,2))\n    rect((2,2), (3,3))\n\n    (pause,)\n\n    line((0,0), (2.5, 2.5), name: "line")\n  })\n]\n\n// fletcher animation\n#slide[\n  Fletcher in Touying:\n\n  #fletcher-diagram(\n    node-stroke: .1em,\n    node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),\n    spacing: 4em,\n    edge((-1,0), "r", "-|>", `open(path)`, label-pos: 0, label-side: center),\n    node((0,0), `reading`, radius: 2em),\n    edge((0,0), (0,0), `read()`, "--|>", bend: 130deg),\n    pause,\n    edge(`read()`, "-|>"),\n    node((1,0), `eof`, radius: 2em),\n    pause,\n    edge(`close()`, "-|>"),\n    node((2,0), `closed`, radius: 2em, extrude: (-2.5, 0)),\n    edge((0,0), (2,0), `close()`, "-|>", bend: -40deg),\n  )\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/9ba71f54-2a5d-4144-996c-4a42833cc5cc",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"only-\u4e0e-uncover",children:"only \u4e0e uncover"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728 cetz \u5185\u90e8\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"only"})," \u548c ",(0,i.jsx)(n.code,{children:"uncover"}),"\uff0c\u53ea\u662f\u9700\u8981\u4e00\u70b9\u6280\u5de7\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#slide(repeat: 3, self => [\n  #let (uncover, only) = utils.methods(self)\n\n  Cetz in Touying in subslide #self.subslide:\n\n  #cetz.canvas({\n    import cetz.draw: *\n    let self = (self.methods.update-cover)(self: self, hide)\n    let (uncover,) = utils.methods(self)\n    \n    rect((0,0), (5,5))\n\n    uncover("2-3", {\n      rect((0,0), (1,1))\n      rect((1,1), (2,2))\n      rect((2,2), (3,3))\n    })\n\n    only(3, line((0,0), (2.5, 2.5), name: "line"))\n  })\n])\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);