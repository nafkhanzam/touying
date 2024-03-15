"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9259],{2806:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=i(5893),t=i(1151);const l={sidebar_position:5},o="Aqua Theme",d={id:"themes/aqua",title:"Aqua Theme",description:"image",source:"@site/versioned_docs/version-0.3.2+/themes/aqua.md",sourceDirName:"themes",slug:"/themes/aqua",permalink:"/touying/docs/themes/aqua",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.3.2+/themes/aqua.md",tags:[],version:"0.3.2+",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"University Theme",permalink:"/touying/docs/themes/university"},next:{title:"Creating Your Own Theme",permalink:"/touying/docs/build-your-own-theme"}},r={},a=[{value:"Initialization",id:"initialization",level:2},{value:"Color Themes",id:"color-themes",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"<code>slides</code> Function",id:"slides-function",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"aqua-theme",children:"Aqua Theme"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/5f9b3c99-a22a-4f3d-a266-93dd75997593",alt:"image"})}),"\n",(0,s.jsxs)(n.p,{children:["This theme is created by ",(0,s.jsx)(n.a,{href:"https://github.com/pride7",children:"@pride7"}),", featuring beautiful backgrounds made with Typst's visualization capabilities."]}),"\n",(0,s.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsx)(n.p,{children:"You can initialize it with the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.2": *\n\n#let s = themes.aqua.register(aspect-ratio: "16-9", lang: "en")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, title-slide, outline-slide, focus-slide) = utils.slides(s)\n#show: slides\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"register"})," takes parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"aspect-ratio"}),': The aspect ratio of slides, either "16-9" or "4-3", default is "16-9".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"footer"}),": Content shown on the right side of the footer, default is ",(0,s.jsx)(n.code,{children:"states.slide-counter.display()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lang"}),": Language configuration, currently supports ",(0,s.jsx)(n.code,{children:'"en"'})," and ",(0,s.jsx)(n.code,{children:'"zh"'}),", default is ",(0,s.jsx)(n.code,{children:'"en"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Aqua theme also provides an ",(0,s.jsx)(n.code,{children:"#alert[..]"})," function, which you can utilize with ",(0,s.jsx)(n.code,{children:"#show strong: alert"})," using ",(0,s.jsx)(n.code,{children:"*alert text*"})," syntax."]}),"\n",(0,s.jsx)(n.h2,{id:"color-themes",children:"Color Themes"}),"\n",(0,s.jsx)(n.p,{children:"Aqua by default uses:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#let s = (s.methods.colors)(\n  self: s,\n  primary: rgb("#003F88"),\n  primary-light: rgb("#2159A5"),\n  primary-lightest: rgb("#F2F4F8"),\n'})}),"\n",(0,s.jsxs)(n.p,{children:["color themes, which you can modify by ",(0,s.jsx)(n.code,{children:"#let s = (s.methods.colors)(self: s, ..)"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,s.jsx)(n.p,{children:"Aqua theme offers a series of custom slide functions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#title-slide(..args)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"title-slide"})," will read information from ",(0,s.jsx)(n.code,{children:"self.info"})," for display."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#let outline-slide(self: none, enum-args: (:), leading: 50pt)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Display an outline slide."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#slide(\n  repeat: auto,\n  setting: body => body,\n  composer: utils.side-by-side,\n  section: none,\n  subsection: none,\n  // Aqua theme\n  title: auto,\n)[\n  ...\n]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A default ordinary slide function with title and footer, where ",(0,s.jsx)(n.code,{children:"title"})," defaults to the current section title."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#focus-slide[\n  ...\n]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Used to draw the audience's attention. The background color is ",(0,s.jsx)(n.code,{children:"self.colors.primary"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#new-section-slide(title)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start a new section with the given title."}),"\n",(0,s.jsxs)(n.h2,{id:"slides-function",children:[(0,s.jsx)(n.code,{children:"slides"})," Function"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"slides"})," function has parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"title-slide"}),": Default is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"outline-slide"}),": Default is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"slide-level"}),": Default is ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["They can be set via ",(0,s.jsx)(n.code,{children:"#show: slides.with(..)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["PS: The outline title can be modified via ",(0,s.jsx)(n.code,{children:"#(s.outline-title = [Outline])"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, you can disable the automatic inclusion of ",(0,s.jsx)(n.code,{children:"new-section-slide"})," functionality by ",(0,s.jsx)(n.code,{children:"#(s.methods.touying-new-section-slide = none)"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.2": *\n\n#let s = themes.aqua.register(aspect-ratio: "16-9", lang: "en")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, title-slide, outline-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/eea4df8d-d9fd-43ac-aaf7-bb459864a9ac",alt:"image"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.2": *\n\n#let s = themes.aqua.register(aspect-ratio: "16-9", lang: "en")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, title-slide, outline-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n= The Section\n\n== Slide Title\n\n#slide[\n  #lorem(40)\n]\n\n#focus-slide[\n  Another variant with primary color in background...\n]\n\n== Summary\n\n#align(center + horizon)[\n  #set text(size: 3em, weight: "bold", s.colors.primary)\n  THANKS FOR ALL\n]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var s=i(7294);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);