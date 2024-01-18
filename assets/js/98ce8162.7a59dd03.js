"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1543],{8194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(5893),o=t(1151);const i={sidebar_position:2},l="Getting Started",r={id:"start",title:"Getting Started",description:"Before you begin, make sure you have installed the Typst environment. If not, you can use the Web App or the Typst LSP and Typst Preview plugins for VS Code.",source:"@site/docs/start.md",sourceDirName:".",slug:"/start",permalink:"/docs/start",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to Touying",permalink:"/docs/intro"},next:{title:"Layout Your Contents",permalink:"/docs/layout"}},a={},d=[{value:"More Complex Examples",id:"more-complex-examples",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(n.p,{children:["Before you begin, make sure you have installed the Typst environment. If not, you can use the ",(0,s.jsx)(n.a,{href:"https://typst.app/",children:"Web App"})," or the Typst LSP and Typst Preview plugins for VS Code."]}),"\n",(0,s.jsx)(n.p,{children:"To use Touying, you only need to include the following code in your document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.2.0": *\n\n#let (init, slide, slides) = utils.methods(s)\n#show: init\n\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,s.jsx)(n.p,{children:"It's simple. Congratulations on creating your first Touying slide! \ud83c\udf89"}),"\n",(0,s.jsx)(n.h2,{id:"more-complex-examples",children:"More Complex Examples"}),"\n",(0,s.jsxs)(n.p,{children:["In fact, Touying provides various styles for writing slides. For example, the above example uses first-level and second-level titles to create new slides. However, you can also use the ",(0,s.jsx)(n.code,{children:"#slide[..]"})," format to access more powerful features provided by Touying."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.2.0": *\n\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slide) = utils.methods(s)\n#show: init\n\n// simple animations\n#slide[\n  a simple #pause *dynamic*\n\n  #pause\n  \n  slide.\n\n  #meanwhile\n\n  meanwhile #pause with pause.\n][\n  second #pause pause.\n]\n\n// complex animations\n#slide(setting: body => {\n  set text(fill: blue)\n  body\n}, repeat: 3, self => [\n  #let (uncover, only, alternatives) = utils.methods(self)\n\n  in subslide #self.subslide\n\n  test #uncover("2-")[uncover] function\n\n  test #only("2-")[only] function\n\n  #pause\n\n  and paused text.\n])\n\n// math equation animations\n#slide[\n  == Touying Equation\n\n  #touying-equation(`\n    f(x) &= pause x^2 + 2x + 1  \\\n         &= pause (x + 1)^2  \\\n  `)\n\n  #meanwhile\n\n  Touying equation is very simple.\n]\n\n// multiple pages for one slide\n#slide[\n  == Multiple Pages for One Slide\n\n  #lorem(200)\n]\n\n// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide,) = utils.methods(s)\n\n#slide[\n  == Appendix\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"In addition, Touying provides many built-in themes to easily create beautiful slides. Basically, you just need to add a line at the top of your document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'#let s = themes.metropolis.register(s, aspect-ratio: "16-9")\n'})}),"\n",(0,s.jsx)(n.p,{children:"This will allow you to use the Metropolis theme. For more detailed tutorials, you can refer to the following chapters."})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var s=t(7294);const o={},i=s.createContext(o);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);