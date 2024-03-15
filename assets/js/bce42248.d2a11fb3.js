"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5675],{806:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(5893),r=n(1151);const o={sidebar_position:1},i="Touying Counters",d={id:"progress/counters",title:"Touying Counters",description:"The states of Touying are placed under the states namespace, including all counters.",source:"@site/versioned_docs/version-0.3.2+/progress/counters.md",sourceDirName:"progress",slug:"/progress/counters",permalink:"/touying/docs/progress/counters",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.3.2+/progress/counters.md",tags:[],version:"0.3.2+",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Progress",permalink:"/touying/docs/category/progress"},next:{title:"Touying Sections",permalink:"/touying/docs/progress/sections"}},c={},l=[{value:"Slide Counter",id:"slide-counter",level:2},{value:"Last-Slide Counter",id:"last-slide-counter",level:2},{value:"Progress",id:"progress",level:2},{value:"Appendix",id:"appendix",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"touying-counters",children:"Touying Counters"}),"\n",(0,t.jsxs)(s.p,{children:["The states of Touying are placed under the ",(0,t.jsx)(s.code,{children:"states"})," namespace, including all counters."]}),"\n",(0,t.jsx)(s.h2,{id:"slide-counter",children:"Slide Counter"}),"\n",(0,t.jsxs)(s.p,{children:["You can access the slide counter using ",(0,t.jsx)(s.code,{children:"states.slide-counter"})," and display the current slide number with ",(0,t.jsx)(s.code,{children:"states.slide-counter.display()"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"last-slide-counter",children:"Last-Slide Counter"}),"\n",(0,t.jsx)(s.p,{children:"In some cases, we may need to add an appendix to slides, leading to the requirement to freeze the last-slide counter. Therefore, a second counter is maintained here."}),"\n",(0,t.jsxs)(s.p,{children:["You can use ",(0,t.jsx)(s.code,{children:"states.last-slide-number"})," to display the number of the last slide before the appendix."]}),"\n",(0,t.jsx)(s.h2,{id:"progress",children:"Progress"}),"\n",(0,t.jsx)(s.p,{children:"You can use"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typst",children:"#states.touying-progress(ratio => ..)\n"})}),"\n",(0,t.jsx)(s.p,{children:"to show the current progress."}),"\n",(0,t.jsx)(s.h2,{id:"appendix",children:"Appendix"}),"\n",(0,t.jsx)(s.p,{children:"You can use"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typst",children:"// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide,) = utils.methods(s)\n\n#slide[\n  appendix\n]\n"})}),"\n",(0,t.jsx)(s.p,{children:"syntax to enter the appendix."}),"\n",(0,t.jsxs)(s.p,{children:["Additionally, ",(0,t.jsx)(s.code,{children:"#let s = (s.methods.appendix-in-outline)(self: s, false)"})," can be used to hide the appendix section from the outline."]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>i});var t=n(7294);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);