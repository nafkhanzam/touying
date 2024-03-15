"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2403],{9741:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=i(5893),t=i(1151);const l={sidebar_position:3},o="Dewdrop Theme",d={id:"themes/dewdrop",title:"Dewdrop Theme",description:"image",source:"@site/docs/themes/dewdrop.md",sourceDirName:"themes",slug:"/themes/dewdrop",permalink:"/touying/docs/next/themes/dewdrop",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/themes/dewdrop.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Metropolis Theme",permalink:"/touying/docs/next/themes/metropolis"},next:{title:"University Theme",permalink:"/touying/docs/next/themes/university"}},r={},c=[{value:"Initialization",id:"initialization",level:2},{value:"Color Theme",id:"color-theme",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"Special Functions",id:"special-functions",level:2},{value:"<code>slides</code> Function",id:"slides-function",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dewdrop-theme",children:"Dewdrop Theme"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/0b5b2bb2-c6ec-45c0-9cea-0af2ed896bba",alt:"image"})}),"\n",(0,s.jsxs)(n.p,{children:["This theme takes inspiration from Zhibo Wang's ",(0,s.jsx)(n.a,{href:"https://github.com/zbowang/BeamerTheme",children:"BeamerTheme"})," and has been modified by ",(0,s.jsx)(n.a,{href:"https://github.com/OrangeX4",children:"OrangeX4"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The Dewdrop theme features an elegantly designed navigation, including two modes: ",(0,s.jsx)(n.code,{children:"sidebar"})," and ",(0,s.jsx)(n.code,{children:"mini-slides"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsx)(n.p,{children:"You can initialize it using the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.2": *\n\n#let s = themes.dewdrop.register(\n  aspect-ratio: "16-9",\n  footer: [Dewdrop],\n  navigation: "mini-slides",\n  // navigation: "sidebar",\n  // navigation: none,\n)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, title-slide, new-section-slide, focus-slide) = utils.slides(s)\n#show: slides\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"register"})," function takes the following parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"aspect-ratio"}),': The aspect ratio of the slides, either "16-9" or "4-3," defaulting to "16-9."']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"navigation"}),": The navigation bar style, which can be ",(0,s.jsx)(n.code,{children:'"sidebar"'}),", ",(0,s.jsx)(n.code,{children:'"mini-slides"'}),", or ",(0,s.jsx)(n.code,{children:"none"}),", defaulting to ",(0,s.jsx)(n.code,{children:'"sidebar"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sidebar"}),": Sidebar navigation settings, defaulting to ",(0,s.jsx)(n.code,{children:"(width: 10em)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mini-slides"}),": Mini-slides settings, defaulting to ",(0,s.jsx)(n.code,{children:"(height: 2em, x: 2em, section: false, subsection: true)"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"height"}),": The height of mini-slides, defaulting to ",(0,s.jsx)(n.code,{children:"2em"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"}),": Padding on the x-axis for mini-slides, defaulting to ",(0,s.jsx)(n.code,{children:"2em"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"section"}),": Whether to display slides after the section and before the subsection, defaulting to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subsection"}),": Whether to split mini-slides based on subsections or compress them into one line, defaulting to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"footer"}),": Content displayed in the footer, defaulting to ",(0,s.jsx)(n.code,{children:"[]"}),", or it can be passed as a function like ",(0,s.jsx)(n.code,{children:"self => self.info.author"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"footer-right"}),": Content displayed on the right side of the footer, defaulting to ",(0,s.jsx)(n.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"primary"}),": Primary color, defaulting to ",(0,s.jsx)(n.code,{children:'rgb("#0c4842")'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alpha"}),": Transparency, defaulting to ",(0,s.jsx)(n.code,{children:"70%"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The Dewdrop theme also provides an ",(0,s.jsx)(n.code,{children:"#alert[..]"})," function, which you can use with ",(0,s.jsx)(n.code,{children:"#show strong: alert"})," using the ",(0,s.jsx)(n.code,{children:"*alert text*"})," syntax."]}),"\n",(0,s.jsx)(n.h2,{id:"color-theme",children:"Color Theme"}),"\n",(0,s.jsx)(n.p,{children:"Dewdrop uses the following default color theme:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#let s = (s.methods.colors)(\n  self: s,\n  neutral-darkest: rgb("#000000"),\n  neutral-dark: rgb("#202020"),\n  neutral-light: rgb("#f3f3f3"),\n  neutral-lightest: rgb("#ffffff"),\n  primary: primary,\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can modify this color theme using ",(0,s.jsx)(n.code,{children:"#let s = (s.methods.colors)(self: s, ..)"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,s.jsx)(n.p,{children:"The Dewdrop theme provides a variety of custom slide functions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#title-slide(extra: none, ..args)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"title-slide"})," reads information from ",(0,s.jsx)(n.code,{children:"self.info"})," for display, and you can also pass in an ",(0,s.jsx)(n.code,{children:"extra"})," parameter to display additional information."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#slide(\n  repeat: auto,\n  setting: body => body,\n  composer: utils.side-by-side,\n  section: none,\n  subsection: none,\n  // Dewdrop theme\n  footer: auto,\n)[\n  ...\n]\n"})}),"\n",(0,s.jsx)(n.p,{children:"A default slide with navigation and footer, where the footer is what you set."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#focus-slide[\n  ...\n]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Used to draw attention, with the background color set to ",(0,s.jsx)(n.code,{children:"self.colors.primary"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"special-functions",children:"Special Functions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#d-outline(enum-args: (:), list-args: (:), cover: true)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Displays the current table of contents. The ",(0,s.jsx)(n.code,{children:"cover"})," parameter specifies whether to hide sections in an inactive state."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#d-sidebar()\n"})}),"\n",(0,s.jsx)(n.p,{children:"An internal function used to display the sidebar."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#d-mini-slides()\n"})}),"\n",(0,s.jsx)(n.p,{children:"An internal function used to display mini-slides."}),"\n",(0,s.jsxs)(n.h2,{id:"slides-function",children:[(0,s.jsx)(n.code,{children:"slides"})," Function"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"slides"})," function has the following parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"title-slide"}),": Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"outline-slide"}),": Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"slide-level"}),": Defaults to ",(0,s.jsx)(n.code,{children:"2"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can set these using ",(0,s.jsx)(n.code,{children:"#show: slides.with(..)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["PS: You can modify the outline title using ",(0,s.jsx)(n.code,{children:"#(s.outline-title = [Outline])"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["And the function of automatically adding ",(0,s.jsx)(n.code,{children:"new-section-slide"})," can be turned off by ",(0,s.jsx)(n.code,{children:"#(s.methods.touying-new-section-slide = none)"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.2": *\n\n#let s = themes.dewdrop.register(aspect-ratio: "16-9", footer: [Dewdrop])\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, title-slide, new-section-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/09ddfb40-4f97-4062-8261-23f87690c33e",alt:"image"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.2": *\n\n#let s = themes.dewdrop.register(\n  aspect-ratio: "16-9",\n  footer: [Dewdrop],\n  navigation: "mini-slides",\n  // navigation: none,\n)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, title-slide, new-section-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n= Section A\n\n== Subsection A.1\n\n#slide[\n  A slide with equation:\n\n  $ x_(n+1) = (x_n + a/x_n) / 2 $\n]\n\n== Subsection A.2\n\n#slide[\n  A slide without a title but with *important* infos\n]\n\n= Section B\n\n== Subsection B.1\n\n#slide[\n  #lorem(80)\n]\n\n#focus-slide[\n  Wake up!\n]\n\n== Subsection B.2\n\n#slide[\n  We can use `#pause` to #pause display something later.\n\n  #pause\n  \n  Just like this.\n\n  #meanwhile\n  \n  Meanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.\n]\n\n// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide,) = utils.slides(s)\n\n= Appendix\n\n=== Appendix\n\n#slide[\n  Please pay attention to the current slide number.\n]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var s=i(7294);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);