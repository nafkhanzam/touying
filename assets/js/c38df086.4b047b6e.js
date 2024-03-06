"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6154],{82:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=e(5893),s=e(1151);const o={sidebar_position:1},a="Pinit",r={id:"integration/pinit",title:"Pinit",description:"Pinit \u5305\u5176\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e\u9875\u9762\u7edd\u5bf9\u5b9a\u4f4d\u4e0e\u57fa\u4e8e\u300c\u56fe\u9489\u300dpins \u76f8\u5bf9\u5b9a\u4f4d\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u4e3a slides \u5b9e\u73b0\u7bad\u5934\u6307\u793a\u4e0e\u89e3\u91ca\u8bf4\u660e\u7684\u6548\u679c\u3002",source:"@site/docs/integration/pinit.md",sourceDirName:"integration",slug:"/integration/pinit",permalink:"/touying/docs/next/integration/pinit",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/integration/pinit.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e09\u65b9\u5305\u96c6\u6210",permalink:"/touying/docs/next/category/\u7b2c\u4e09\u65b9\u5305\u96c6\u6210"},next:{title:"CeTZ",permalink:"/touying/docs/next/integration/cetz"}},p={},l=[{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:2},{value:"\u590d\u6742\u793a\u4f8b",id:"\u590d\u6742\u793a\u4f8b",level:2}];function c(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"pinit",children:"Pinit"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/OrangeX4/typst-pinit/",children:"Pinit"})," \u5305\u5176\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e\u9875\u9762\u7edd\u5bf9\u5b9a\u4f4d\u4e0e\u57fa\u4e8e\u300c\u56fe\u9489\u300dpins \u76f8\u5bf9\u5b9a\u4f4d\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u4e3a slides \u5b9e\u73b0\u7bad\u5934\u6307\u793a\u4e0e\u89e3\u91ca\u8bf4\u660e\u7684\u6548\u679c\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u7b80\u5355\u793a\u4f8b",children:"\u7b80\u5355\u793a\u4f8b"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typst",children:'#import "@preview/pinit:0.1.3": *\n\n#set text(size: 24pt)\n\nA simple #pin(1)highlighted text#pin(2).\n\n#pinit-highlight(1, 2)\n\n#pinit-point-from(2)[It is simple.]\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/touying-typ/touying/assets/34951714/b17f9b80-5a8b-4943-a222-bcb0eb38611d",alt:"image"})}),"\n",(0,i.jsxs)(t.p,{children:["\u53e6\u4e00\u4e2a ",(0,i.jsx)(t.a,{href:"https://github.com/OrangeX4/typst-pinit/blob/main/examples/equation-desc.typ",children:"\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/touying-typ/touying/assets/34951714/9b4a6b50-fcfd-497d-9649-ae1f7762ee3f",alt:"image"})}),"\n",(0,i.jsx)(t.h2,{id:"\u590d\u6742\u793a\u4f8b",children:"\u590d\u6742\u793a\u4f8b"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/touying-typ/touying/assets/34951714/7fb0095a-fd86-49ec-af95-15bc81a341c2",alt:"image"})}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u4e0e Touying \u5171\u540c\u4f7f\u7528\u7684\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typst",children:'#import "@preview/touying:0.3.0": *\n#import "@preview/pinit:0.1.3": *\n\n#(s.page-args.paper = "presentation-4-3")\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#set text(size: 20pt, font: "Calibri", ligatures: false)\n#show heading: set text(weight: "regular")\n#show heading: set block(above: 1.4em, below: 1em)\n#show heading.where(level: 1): set text(size: 1.5em)\n\n// Useful functions\n#let crimson = rgb("#c00000")\n#let greybox(..args, body) = rect(fill: luma(95%), stroke: 0.5pt, inset: 0pt, outset: 10pt, ..args, body)\n#let redbold(body) = {\n  set text(fill: crimson, weight: "bold")\n  body\n}\n#let blueit(body) = {\n  set text(fill: blue)\n  body\n}\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n// Main body\n#slide(self => [\n  #let (uncover, only) = utils.methods(self)\n\n  = Asymptotic Notation: $O$\n\n  Use #pin("h1")asymptotic notations#pin("h2") to describe asymptotic efficiency of algorithms.\n  (Ignore constant coefficients and lower-order terms.)\n\n  #pause\n\n  #greybox[\n    Given a function $g(n)$, we denote by $O(g(n))$ the following *set of functions*:\n    #redbold(${f(n): "exists" c > 0 "and" n_0 > 0, "such that" f(n) <= c dot g(n) "for all" n >= n_0}$)\n  ]\n\n  #pinit-highlight("h1", "h2")\n\n  #pause\n\n  $f(n) = O(g(n))$: #pin(1)$f(n)$ is *asymptotically smaller* than $g(n)$.#pin(2)\n\n  // #absolute-place(dx: 550pt, dy: 320pt, image(width: 25%, "asymptotic.png"))\n\n  #pause\n\n  $f(n) redbold(in) O(g(n))$: $f(n)$ is *asymptotically* #redbold[at most] $g(n)$.\n\n  #only("4-", pinit-line(stroke: 3pt + crimson, start-dy: -0.25em, end-dy: -0.25em, 1, 2))\n\n  #pause\n\n  #block[Insertion Sort as an #pin("r1")example#pin("r2"):]\n\n  - Best Case: $T(n) approx c n + c\' n - c\'\'$ #pin(3)\n  - Worst case: $T(n) approx c n + (c\' \\/ 2) n^2 - c\'\'$ #pin(4)\n\n  #pinit-rect("r1", "r2")\n\n  #pause\n\n  #pinit-place(3, dx: 15pt, dy: -15pt)[#redbold[$T(n) = O(n)$]]\n  #pinit-place(4, dx: 15pt, dy: -15pt)[#redbold[$T(n) = O(n)$]]\n\n  #pause\n\n  #blueit[Q: Is $n^(3) = O(n^2)$#pin("que")? How to prove your answer#pin("ans")?]\n\n  #pause\n\n  #only("8-", pinit-point-to("que", fill: crimson, redbold[No.]))\n  #only("8-", pinit-point-from("ans", body-dx: -150pt)[\n    Show that the equation $(3/2)^n >= c$ \\\n    has infinitely many solutions for $n$.\n  ])\n])\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/touying-typ/touying/assets/34951714/f36a026f-491c-4290-90d5-0aa3c2086567",alt:"image"})})]})}function d(n={}){const{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>r,a:()=>a});var i=e(7294);const s={},o=i.createContext(s);function a(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);