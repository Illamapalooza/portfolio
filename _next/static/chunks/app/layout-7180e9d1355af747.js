(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5197:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,8346,23)),Promise.resolve().then(i.t.bind(i,347,23)),Promise.resolve().then(i.bind(i,2837))},2837:(e,t,i)=>{"use strict";i.d(t,{Navbar:()=>z});var n=i(5155),a=i(7396),r=i(3312),s=i(1923),l=i(1626),o=i(4999),c=i(7401);let d=(0,c.A)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),h=(0,c.A)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),p=(0,c.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),u=(0,c.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var m=i(2115),f=i(8667),x=i(9656),g=i(9234),y=i(7249);class v extends m.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function b(e){let{children:t,isPresent:i}=e,a=(0,m.useId)(),r=(0,m.useRef)(null),s=(0,m.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,m.useContext)(y.Q);return(0,m.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:o}=s.current;if(i||!r.current||!e||!t)return;r.current.dataset.motionPopId=a;let c=document.createElement("style");return l&&(c.nonce=l),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(n,"px !important;\n            left: ").concat(o,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[i]),(0,n.jsx)(v,{isPresent:i,childRef:r,sizeRef:s,children:m.cloneElement(t,{ref:r})})}let w=e=>{let{children:t,initial:i,isPresent:a,onExitComplete:r,custom:s,presenceAffectsLayout:l,mode:o}=e,c=(0,g.M)(j),d=(0,m.useId)(),h=(0,m.useCallback)(e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;r&&r()},[c,r]),p=(0,m.useMemo)(()=>({id:d,initial:i,isPresent:a,custom:s,onExitComplete:h,register:e=>(c.set(e,!1),()=>c.delete(e))}),l?[Math.random(),h]:[a,h]);return(0,m.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[a]),m.useEffect(()=>{a||c.size||!r||r()},[a]),"popLayout"===o&&(t=(0,n.jsx)(b,{isPresent:a,children:t})),(0,n.jsx)(x.t.Provider,{value:p,children:t})};function j(){return new Map}var k=i(4710),N=i(5107);let C=e=>e.key||"";function P(e){let t=[];return m.Children.forEach(e,e=>{(0,m.isValidElement)(e)&&t.push(e)}),t}var E=i(5403);let A=e=>{let{children:t,exitBeforeEnter:i,custom:a,initial:r=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:o="sync"}=e;(0,N.V)(!i,"Replace exitBeforeEnter with mode='wait'");let c=(0,m.useMemo)(()=>P(t),[t]),d=c.map(C),h=(0,m.useRef)(!0),p=(0,m.useRef)(c),u=(0,g.M)(()=>new Map),[f,x]=(0,m.useState)(c),[y,v]=(0,m.useState)(c);(0,E.E)(()=>{h.current=!1,p.current=c;for(let e=0;e<y.length;e++){let t=C(y[e]);d.includes(t)?u.delete(t):!0!==u.get(t)&&u.set(t,!1)}},[y,d.length,d.join("-")]);let b=[];if(c!==f){let e=[...c];for(let t=0;t<y.length;t++){let i=y[t],n=C(i);d.includes(n)||(e.splice(t,0,i),b.push(i))}"wait"===o&&b.length&&(e=b),v(P(e)),x(c);return}let{forceRender:j}=(0,m.useContext)(k.L);return(0,n.jsx)(n.Fragment,{children:y.map(e=>{let t=C(e),i=c===y||d.includes(t);return(0,n.jsx)(w,{isPresent:i,initial:(!h.current||!!r)&&void 0,custom:i?void 0:a,presenceAffectsLayout:l,mode:o,onExitComplete:i?void 0:()=>{if(!u.has(t))return;u.set(t,!0);let e=!0;u.forEach(t=>{t||(e=!1)}),e&&(null==j||j(),v(p.current),s&&s())},children:e},t)})})};var R=i(1567);function z(){let[e,t]=(0,m.useState)(!1),[i,c]=(0,m.useState)("home"),x=e=>{t(!1),c(e);let i=document.getElementById(e);i&&i.scrollIntoView({behavior:"smooth"})};return(0,m.useEffect)(()=>{let e=()=>{for(let e of s.gT.map(e=>e.path.replace("/",""))){let t=document.getElementById(e);if(t){let i=t.getBoundingClientRect();if(i.top>=0&&i.top<=window.innerHeight/2){c(e);break}}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)(f.P.header,{initial:{y:-100},animate:{y:0},transition:{duration:.5},className:"sticky top-0 z-50 w-full border-b px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:[(0,n.jsxs)("nav",{className:"w-full flex h-16 items-center justify-center gap-32",children:[(0,n.jsx)(f.P.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.4},children:(0,n.jsx)(a.default,{href:"/",className:"flex items-center space-x-2",onClick:()=>x("home"),children:(0,n.jsx)("span",{className:"font-bold inline-block text-xl",children:s.CQ.name})})}),(0,n.jsx)(f.P.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"flex items-center gap-6 md:gap-10",children:(0,n.jsx)("div",{className:"hidden md:flex gap-6",children:s.gT.map((e,t)=>(0,n.jsx)(f.P.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1*(t+1)},children:(0,n.jsxs)("button",{onClick:()=>x(e.path.replace("/","")),className:(0,R.cn)("relative text-sm font-medium transition-colors group",i===e.path.replace("/","")?"text-primary":"hover:text-primary"),children:[e.name,(0,n.jsx)("span",{className:(0,R.cn)("absolute -bottom-[2px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",i===e.path.replace("/","")&&"w-full")})]})},e.path))})}),(0,n.jsxs)(f.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"flex items-center gap-2",children:[(0,n.jsx)("div",{className:"hidden md:flex gap-2",children:[{icon:l.A,href:s.CQ.links.github},{icon:o.A,href:s.CQ.links.linkedin},{icon:d,href:s.CQ.links.instagram},{icon:h,href:s.CQ.links.facebook}].map((e,t)=>(0,n.jsx)(f.P.div,{whileHover:{scale:1.1},whileTap:{scale:.95},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1*(t+1)},children:(0,n.jsx)(r.$,{variant:"ghost",size:"icon",asChild:!0,children:(0,n.jsxs)(a.default,{href:e.href,target:"_blank",children:[(0,n.jsx)(e.icon,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:e.href})]})})},e.href))}),(0,n.jsx)(f.P.div,{whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,n.jsxs)(r.$,{variant:"ghost",size:"icon",className:"md:hidden",onClick:()=>t(!e),children:[e?(0,n.jsx)(p,{className:"h-5 w-5"}):(0,n.jsx)(u,{className:"h-5 w-5"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle menu"})]})})]})]}),(0,n.jsx)(A,{children:e&&(0,n.jsx)(f.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"md:hidden overflow-hidden",children:(0,n.jsxs)("div",{className:"space-y-4 px-4 pb-4",children:[s.gT.map((e,t)=>(0,n.jsx)(f.P.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.2,delay:.1*t},children:(0,n.jsxs)("button",{onClick:()=>x(e.path.replace("/","")),className:(0,R.cn)("block w-full text-left py-2 text-sm font-medium transition-colors relative group",i===e.path.replace("/","")?"text-primary":"hover:text-primary"),children:[e.name,(0,n.jsx)("span",{className:(0,R.cn)("absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",i===e.path.replace("/","")&&"w-full")})]})},e.path)),(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.2,delay:.3},className:"flex gap-2 pt-2",children:[{icon:l.A,href:s.CQ.links.github},{icon:o.A,href:s.CQ.links.linkedin},{icon:d,href:s.CQ.links.instagram},{icon:h,href:s.CQ.links.facebook}].map(e=>(0,n.jsx)(f.P.div,{whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,n.jsx)(r.$,{variant:"ghost",size:"icon",asChild:!0,children:(0,n.jsxs)(a.default,{href:e.href,target:"_blank",children:[(0,n.jsx)(e.icon,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:e.href})]})})},e.href))})]})})})]})}},3312:(e,t,i)=>{"use strict";i.d(t,{$:()=>c});var n=i(5155),a=i(2115),r=i(2317),s=i(1027),l=i(1567);let o=(0,s.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:i,variant:a,size:s,asChild:c=!1,...d}=e,h=c?r.DX:"button";return(0,n.jsx)(h,{className:(0,l.cn)(o({variant:a,size:s,className:i})),ref:t,...d})});c.displayName="Button"},1923:(e,t,i)=>{"use strict";i.d(t,{CQ:()=>n,dt:()=>r,gT:()=>a});let n={name:"Julius Baliling",title:"Software Engineer",description:"Full-stack developer specializing in React, Next.js, and modern web technologies",url:"https://juliusbaliling.com",email:"juliusbaliling25@gmail.com",links:{github:"https://github.com/Illamapalooza",linkedin:"https://www.linkedin.com/in/juliusbaliling",instagram:"https://www.instagram.com/julio.ll",facebook:"https://www.facebook.com/dagreatjulio"}},a=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Projects",path:"/projects"},{name:"Contact",path:"/contact"}],r=[{title:"Memor",description:"A mobile note taking app with AI-powered search utilizing RAG",tech:["React Native","Expo","Supabase","Express","Node.js","PostgreSQL","OpenAI"],company:"Startup with Hostari Labs",type:"Professional"},{title:"Visual Note",description:"AI-powered note taking app for transforming images into efficient notes",tech:["Next.js 14","Tailwind CSS","Supabase","tRPC","React Query"],type:"Personal"}]},1567:(e,t,i)=>{"use strict";i.d(t,{cn:()=>r});var n=i(3463),a=i(9795);function r(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,a.QP)((0,n.$)(t))}},347:()=>{},8346:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[838,687,441,517,358],()=>t(5197)),_N_E=e.O()}]);