"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8565],{2857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(5893),i=t(1151);const o={sidebar_position:3},a="Layout Your Contents",c={id:"layout",title:"Layout Your Contents",description:"To better manage every detail in the slides and achieve better rendering results, like Beamer, Touying has introduced some unique concepts. This helps you maintain global information better and easily switch between different themes.",source:"@site/docs/layout.md",sourceDirName:".",slug:"/layout",permalink:"/docs/layout",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/layout.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/start"},next:{title:"Code Styles",permalink:"/docs/style"}},l={},d=[{value:"Global Information",id:"global-information",level:2},{value:"Sections and Subsections",id:"sections-and-subsections",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Page Management",id:"page-management",level:2},{value:"Page Columns",id:"page-columns",level:2}];function r(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"layout-your-contents",children:"Layout Your Contents"}),"\n",(0,s.jsx)(n.p,{children:"To better manage every detail in the slides and achieve better rendering results, like Beamer, Touying has introduced some unique concepts. This helps you maintain global information better and easily switch between different themes."}),"\n",(0,s.jsx)(n.h2,{id:"global-information",children:"Global Information"}),"\n",(0,s.jsx)(n.p,{children:"You can set the title, subtitle, author, date, and institution information for slides using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"date"})," parameter can accept ",(0,s.jsx)(n.code,{children:"datetime"})," format and ",(0,s.jsx)(n.code,{children:"content"})," format. The display format of the date in ",(0,s.jsx)(n.code,{children:"datetime"})," format can be changed using:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#let s = (s.methods.datetime-format)(self: s, "[year]-[month]-[day]")\n'})}),"\n",(0,s.jsxs)(n.admonition,{title:"Internals",type:"tip",children:[(0,s.jsx)(n.p,{children:"Here, we introduce a bit of the OOP concept in Touying."}),(0,s.jsxs)(n.p,{children:["You should know that Typst is a typesetting language that supports incremental rendering. That is, Typst caches the results of previous function calls. This requires Typst to have only pure functions, meaning functions that do not change external variables. Therefore, it's challenging to modify a global variable in the true sense, as done in LaTeX. Even if you use ",(0,s.jsx)(n.code,{children:"state"})," or ",(0,s.jsx)(n.code,{children:"counter"}),", you need to use ",(0,s.jsx)(n.code,{children:"locate"})," and callback functions to access their values, and this approach has a significant impact on performance."]}),(0,s.jsxs)(n.p,{children:["Touying does not use ",(0,s.jsx)(n.code,{children:"state"})," and ",(0,s.jsx)(n.code,{children:"counter"}),", nor does it violate the Internals of Typst's pure functions. Instead, it cleverly uses a method in an object-oriented style to maintain a global singleton ",(0,s.jsx)(n.code,{children:"s"}),". In Touying, an object refers to a Typst dictionary with its own member variables and methods. We have a convention that methods have a named parameter ",(0,s.jsx)(n.code,{children:"self"})," to pass the object itself, and all methods are placed in the ",(0,s.jsx)(n.code,{children:".methods"})," domain. With this concept, it's not difficult to write a method to update ",(0,s.jsx)(n.code,{children:"info"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#let s = (\n  info: (:),\n  methods: (\n    // update info\n    info: (self: none, ..args) => {\n      self.info += args.named()\n      self\n    },\n  )\n)\n\n#let s = (s.methods.info)(self: s, title: [title])\n\nTitle is #s.info.title\n"})}),(0,s.jsxs)(n.p,{children:["This way, you can also understand the purpose of the ",(0,s.jsx)(n.code,{children:"utils.methods()"})," function: it binds ",(0,s.jsx)(n.code,{children:"self"})," to all methods of ",(0,s.jsx)(n.code,{children:"s"})," and returns it. It simplifies the subsequent use through unpacking syntax."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#let (init, slide, slides) = utils.methods(s)\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"sections-and-subsections",children:"Sections and Subsections"}),"\n",(0,s.jsx)(n.p,{children:"Similar to Beamer, Touying also has the concepts of sections and subsections."}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"#show: slides"})," mode, sections and subsections correspond to first-level and second-level titles, respectively. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.2.0": *\n\n#let (init, slide, slides) = utils.methods(s)\n#show: init\n\n#show: slides\n\n= Section\n\n== Subsection\n\nHello, Touying!\n'})}),"\n",(0,s.jsx)(n.p,{children:"However, the second-level title does not always correspond to the subsection. The specific mapping may vary depending on the theme."}),"\n",(0,s.jsxs)(n.p,{children:["In the more general ",(0,s.jsx)(n.code,{children:"#slide[..]"})," mode, sections and subsections are passed as parameters to the ",(0,s.jsx)(n.code,{children:"slide"})," function, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#slide(section: [Let's start a new section!])[..]\n\n#slide(subsection: [Let's start a new subsection!])[..]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will create a new section and a new subsection, respectively. However, this change typically only affects the internal ",(0,s.jsx)(n.code,{children:"sections"})," state of Touying and is not displayed on the slide by default. The specific display may vary depending on the theme."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.code,{children:"section"})," and ",(0,s.jsx)(n.code,{children:"subsection"})," parameters of ",(0,s.jsx)(n.code,{children:"slide"})," can accept both content blocks and arrays in the format ",(0,s.jsx)(n.code,{children:"([title], [short-title])"})," or dictionaries in the format ",(0,s.jsx)(n.code,{children:"(title: [title], short-title: [short-title])"}),". The ",(0,s.jsx)(n.code,{children:"short-title"})," will be used in some special cases, such as in the navigation of the ",(0,s.jsx)(n.code,{children:"dewdrop"})," theme."]}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsx)(n.p,{children:"Displaying a table of contents in Touying is straightforward:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.2.0": *\n\n#let (init, slide, touying-outline) = utils.methods(s)\n#show: init\n\n#slide[\n  == Table of contents\n\n  #touying-outline()\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The definition of ",(0,s.jsx)(n.code,{children:"touying-oultine()"})," is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#let touying-outline(enum-args: (:), padding: 0pt) = { .. }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can modify the internal enum parameters with ",(0,s.jsx)(n.code,{children:"enum-args"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you have complex custom requirements for the table of contents, you can use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#slide[\n  == Table of contents\n\n  #states.touying-final-sections(sections => ..)\n]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"page-management",children:"Page Management"}),"\n",(0,s.jsxs)(n.p,{children:["Due to the use of the ",(0,s.jsx)(n.code,{children:"set page(..)"})," command in Typst, which creates a new page instead of modifying the current one, Touying chooses to maintain a ",(0,s.jsx)(n.code,{children:"s.page-args"})," member variable in the singleton ",(0,s.jsx)(n.code,{children:"s"}),". These parameters are only applied when creating a new slide."]}),"\n",(0,s.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,s.jsxs)(n.p,{children:["Therefore, you should not use the ",(0,s.jsx)(n.code,{children:"set page(..)"})," command yourself. Instead, you should modify the ",(0,s.jsx)(n.code,{children:"s.page-args"})," member variable inside ",(0,s.jsx)(n.code,{children:"s"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["This way, we can query the parameters of the current page in real-time using ",(0,s.jsx)(n.code,{children:"s.page-args"}),". This is useful for some functions that need to get page margins or the current page background color, such as ",(0,s.jsx)(n.code,{children:"transparent-cover"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"page-columns",children:"Page Columns"}),"\n",(0,s.jsxs)(n.p,{children:["If you need to divide a page into two or three columns, you can use the default ",(0,s.jsx)(n.code,{children:"compose"})," feature provided by the Touying ",(0,s.jsx)(n.code,{children:"slide"})," function. The simplest examples are:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#slide[\n  First column.\n][\n  Second column.\n]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to change the way columns are composed, you can modify the ",(0,s.jsx)(n.code,{children:"composer"})," parameter of ",(0,s.jsx)(n.code,{children:"slide"}),". The default parameter is ",(0,s.jsx)(n.code,{children:"utils.with.side-by-side(columns: auto, gutter: 1em)"}),". If we want the left column to occupy the remaining width, we can use:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#slide(composer: utils.side-by-side.with(columns: (1fr, auto), gutter: 1em))[\n  First column.\n][\n  Second column.\n]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var s=t(7294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);