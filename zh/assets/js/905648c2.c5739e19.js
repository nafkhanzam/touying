"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8698],{2728:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=s(5893),t=s(1151);const l={sidebar_position:3},d="Dewdrop \u4e3b\u9898",r={id:"themes/dewdrop",title:"Dewdrop \u4e3b\u9898",description:"image",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.3.x/themes/dewdrop.md",sourceDirName:"themes",slug:"/themes/dewdrop",permalink:"/touying/zh/docs/0.3.x/themes/dewdrop",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.3.x/themes/dewdrop.md",tags:[],version:"0.3.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Metropolis \u4e3b\u9898",permalink:"/touying/zh/docs/0.3.x/themes/metropolis"},next:{title:"University \u4e3b\u9898",permalink:"/touying/zh/docs/0.3.x/themes/university"}},o={},c=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u989c\u8272\u4e3b\u9898",id:"\u989c\u8272\u4e3b\u9898",level:2},{value:"slide \u51fd\u6570\u65cf",id:"slide-\u51fd\u6570\u65cf",level:2},{value:"\u7279\u6b8a\u51fd\u6570",id:"\u7279\u6b8a\u51fd\u6570",level:2},{value:"<code>slides</code> \u51fd\u6570",id:"slides-\u51fd\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dewdrop-\u4e3b\u9898",children:"Dewdrop \u4e3b\u9898"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/0b5b2bb2-c6ec-45c0-9cea-0af2ed896bba",alt:"image"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4e3b\u9898\u7684\u7075\u611f\u6765\u81ea Zhibo Wang \u521b\u4f5c\u7684 ",(0,i.jsx)(n.a,{href:"https://github.com/zbowang/BeamerTheme",children:"BeamerTheme"}),"\uff0c\u7531 ",(0,i.jsx)(n.a,{href:"https://github.com/OrangeX4",children:"OrangeX4"})," \u6539\u9020\u800c\u6765\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4e3b\u9898\u62e5\u6709\u4f18\u96c5\u7f8e\u89c2\u7684 navigation\uff0c\u5305\u62ec ",(0,i.jsx)(n.code,{children:"sidebar"})," \u548c ",(0,i.jsx)(n.code,{children:"mini-slides"})," \u4e24\u79cd\u6a21\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,i.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u521d\u59cb\u5316\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.dewdrop.register(\n  s,\n  aspect-ratio: "16-9",\n  footer: [Dewdrop],\n  navigation: "mini-slides",\n  // navigation: "sidebar",\n  // navigation: none,\n)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, title-slide, new-section-slide, focus-slide) = utils.slides(s)\n#show: slides\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,i.jsx)(n.code,{children:"register"})," \u63a5\u6536\u53c2\u6570:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aspect-ratio"}),': \u5e7b\u706f\u7247\u7684\u957f\u5bbd\u6bd4\u4e3a "16-9" \u6216 "4-3"\uff0c\u9ed8\u8ba4\u4e3a "16-9"\u3002']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigation"}),": \u5bfc\u822a\u680f\u6837\u5f0f\uff0c\u53ef\u4ee5\u662f ",(0,i.jsx)(n.code,{children:'"sidebar"'}),"\u3001",(0,i.jsx)(n.code,{children:'"mini-slides"'})," \u548c ",(0,i.jsx)(n.code,{children:"none"}),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:'"sidebar"'}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sidebar"}),": \u4fa7\u8fb9\u5bfc\u822a\u680f\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"(width: 10em)"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mini-slides"}),": mini-slides \u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"(height: 2em, x: 2em, section: false, subsection: true)"}),"\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"height"}),": mini-slides \u9ad8\u5ea6\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"2em"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"}),": mini-slides \u7684 x \u8f74 padding\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"2em"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"section"}),": \u662f\u5426\u663e\u793a section \u4e4b\u540e\uff0csubsection \u4e4b\u524d\u7684 slides\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subsection"}),": \u662f\u5426\u6839\u636e subsection \u5206\u5272 mini-slides\uff0c\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"false"})," \u6324\u538b\u4e3a\u4e00\u884c\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer"}),": \u5c55\u793a\u5728\u9875\u811a\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"[]"}),"\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u5f62\u5982 ",(0,i.jsx)(n.code,{children:"self => self.info.author"})," \u7684\u51fd\u6570\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer-right"}),": \u5c55\u793a\u5728\u9875\u811a\u53f3\u4fa7\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"primary"}),": primary \u989c\u8272\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:'rgb("#0c4842")'}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alpha"}),": \u900f\u660e\u5ea6\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"70%"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5e76\u4e14 Dewdrop \u4e3b\u9898\u4f1a\u63d0\u4f9b\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"#alert[..]"})," \u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"#show strong: alert"})," \u6765\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"*alert text*"})," \u8bed\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u989c\u8272\u4e3b\u9898",children:"\u989c\u8272\u4e3b\u9898"}),"\n",(0,i.jsx)(n.p,{children:"Dewdrop \u9ed8\u8ba4\u4f7f\u7528\u4e86"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#let s = (s.methods.colors)(\n  self: s,\n  neutral-darkest: rgb("#000000"),\n  neutral-dark: rgb("#202020"),\n  neutral-light: rgb("#f3f3f3"),\n  neutral-lightest: rgb("#ffffff"),\n  primary: primary,\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u989c\u8272\u4e3b\u9898\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"#let s = (s.methods.colors)(self: s, ..)"})," \u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"slide-\u51fd\u6570\u65cf",children:"slide \u51fd\u6570\u65cf"}),"\n",(0,i.jsx)(n.p,{children:"Dewdrop \u4e3b\u9898\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u81ea\u5b9a\u4e49 slide \u51fd\u6570\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#title-slide(extra: none, ..args)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"title-slide"})," \u4f1a\u8bfb\u53d6 ",(0,i.jsx)(n.code,{children:"self.info"})," \u91cc\u7684\u4fe1\u606f\u7528\u4e8e\u663e\u793a\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4e3a\u5176\u4f20\u5165 ",(0,i.jsx)(n.code,{children:"extra"})," \u53c2\u6570\uff0c\u663e\u793a\u989d\u5916\u7684\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide(\n  repeat: auto,\n  setting: body => body,\n  composer: utils.side-by-side,\n  section: none,\n  subsection: none,\n  // Dewdrop theme\n  footer: auto,\n)[\n  ...\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u9ed8\u8ba4\u62e5\u6709\u5bfc\u822a\u680f\u548c\u9875\u811a\u7684\u666e\u901a slide \u51fd\u6570\uff0c\u9875\u811a\u4e3a\u60a8\u8bbe\u7f6e\u7684\u9875\u811a\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#focus-slide[\n  ...\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4e8e\u5f15\u8d77\u89c2\u4f17\u7684\u6ce8\u610f\u529b\u3002\u80cc\u666f\u8272\u4e3a ",(0,i.jsx)(n.code,{children:"self.colors.primary"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7279\u6b8a\u51fd\u6570",children:"\u7279\u6b8a\u51fd\u6570"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#d-outline(enum-args: (:), list-args: (:), cover: true)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u663e\u793a\u5f53\u524d\u7684\u76ee\u5f55\uff0c",(0,i.jsx)(n.code,{children:"cover"})," \u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u662f\u5426\u8981\u9690\u85cf\u5904\u4e8e inactive \u72b6\u6001\u7684 sections\u3002"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#d-sidebar()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u90e8\u51fd\u6570\uff0c\u7528\u4e8e\u663e\u793a\u4fa7\u8fb9\u680f\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#d-mini-slides()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u90e8\u51fd\u6570\uff0c\u7528\u4e8e\u663e\u793a mini-slides\u3002"}),"\n",(0,i.jsxs)(n.h2,{id:"slides-\u51fd\u6570",children:[(0,i.jsx)(n.code,{children:"slides"})," \u51fd\u6570"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"slides"})," \u51fd\u6570\u62e5\u6709\u53c2\u6570"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"title-slide"}),": \u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"outline-slide"}),": \u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"slide-level"}),": \u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"2"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"#show: slides.with(..)"})," \u7684\u65b9\u5f0f\u8bbe\u7f6e\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["PS: \u5176\u4e2d outline title \u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"#(s.outline-title = [Outline])"})," \u7684\u65b9\u5f0f\u4fee\u6539\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.dewdrop.register(s, aspect-ratio: "16-9", footer: [Dewdrop])\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, title-slide, new-section-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/09ddfb40-4f97-4062-8261-23f87690c33e",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.dewdrop.register(\n  s,\n  aspect-ratio: "16-9",\n  footer: [Dewdrop],\n  navigation: "mini-slides",\n  // navigation: none,\n)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, title-slide, new-section-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n= Section A\n\n== Subsection A.1\n\n#slide[\n  A slide with equation:\n\n  $ x_(n+1) = (x_n + a/x_n) / 2 $\n]\n\n== Subsection A.2\n\n#slide[\n  A slide without a title but with *important* infos\n]\n\n= Section B\n\n== Subsection B.1\n\n#slide[\n  #lorem(80)\n]\n\n#focus-slide[\n  Wake up!\n]\n\n== Subsection B.2\n\n#slide[\n  We can use `#pause` to #pause display something later.\n\n  #pause\n  \n  Just like this.\n\n  #meanwhile\n  \n  Meanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.\n]\n\n// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide,) = utils.slides(s)\n\n= Appendix\n\n=== Appendix\n\n#slide[\n  Please pay attention to the current slide number.\n]\n'})})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>d});var i=s(7294);const t={},l=i.createContext(t);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);