import{s as F,d as ne,a as ae,S as D,i as G,b as j,e as f,c as N,f as u,g as y,h as p,n as T,j as w,k as A,t as E,l as oe,m as z,o as M,p as ee,q as te,r as U,u as S,v as C,w as L,x,y as I,z as Y,A as re,B as ce,C as K,D as ie,E as le,F as de,G as ue,H as pe,I as q,J as fe,Y as me,K as ve,L as ge}from"./index.bfc3b1cc.js";import{C as _e,a as he}from"./Cards.584f3612.js";function ke(l){let e=Boolean(l.open);const t=F(l);t.innerHTML=`
    @keyframes exio-dialog-fade-in {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes exio-dialog-fade-out {
      0% {
        opacity: 1;
        transform: scale(1) translateY(-50%);
      }
      100% {
        opacity: 0;
        transform: scale(0) translateY(-50%);
      }
    }
    .${t.id} {
      border-radius: 0px;
      border: 0px solid transparent;
    }
    .${t.id}::backdrop {
      background-color: transparent;
    }
    .${t.id}:not([open]) {
      display: block;
      position: fixed;
      left: 0px;
      top: 50%;
      margin: auto auto;
      transform: translateY(-50%);
      transform-origin: top center;
    }
    .${t.id}[open] {
      transform-origin: center center;
      animation-name: exio-dialog-fade-in;
      animation-duration: var(--exio-slow-transition-duration);
      animation-fill-mode: forwards;
    }
  `,ne.registerDialog(l),l.close(),e&&l.showModal();const i=F(l);i.innerHTML=`
    .${i.id}:not([open]) {
      display: none;
    }
  `;const a=()=>{i.innerHTML=`
      .${i.id}:not([open]) {
        animation-name: exio-dialog-fade-out;
        animation-duration: var(--exio-slow-transition-duration);
        animation-fill-mode: forwards;
      }
    `,l.removeEventListener("animationstart",a)};l.addEventListener("animationstart",a);const s=document.createElement("div"),d=F(s),o=()=>{const r=getComputedStyle(l),m=r.getPropertyValue("--exio-slow-transition-duration"),k=r.getPropertyValue("--exio-backdrop-color");d.innerHTML=`
      .${d.id} {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: ${k};
        transition: opacity ${m};
        pointer-events: none;
        touch-action: none;
      }
    `,s.style.opacity=e?"1":"0"};o(),document.body.appendChild(s);const c=()=>n.observe(l,{attributes:!0,attributeFilter:["open"]}),n=new MutationObserver(()=>{e=Boolean(l.open),n.disconnect(),l.show(),l.close(),o(),e&&l.showModal(),c()});return c(),ae(t.remove,()=>{i&&i.remove(),d.remove()},n.disconnect)}var be="/assets/pfp.1b1cb86e.png",$e="/assets/github.7c0295c7.svg",ye="/assets/linkedin.4eae04cd.svg",we="/assets/gscholar.767788f5.svg";const se=.05;var ze="/assets/wallpaper.64c86a4f.jpg";function Le(l){let e,t,i;return{c(){e=f("div"),t=f("img"),N(t.src,i=ze)||u(t,"src",i),u(t,"alt","Wallpaper"),u(t,"class","wallpaper svelte-oojjsb"),u(e,"class","wallpaper-wrapper svelte-oojjsb")},m(a,s){y(a,e,s),p(e,t)},p:T,i:T,o:T,d(a){a&&w(e)}}}class Ae extends D{constructor(e){super(),G(this,e,null,Le,j,{})}}function P(l,e,t){const i=l.slice();return i[1]=e[t],i[3]=t,i}function W(l){let e,t,i,a,s,d,o,c=l[1].title+"",n,r,m,k,v,$,b;return{c(){e=f("a"),t=f("div"),i=f("button"),a=f("img"),d=A(),o=f("div"),n=E(c),k=A(),N(a.src,s=l[1].icon)||u(a,"src",s),u(a,"alt","GitHub"),u(a,"class","icon svelte-ikp0z4"),oe(a,"black-icon",!l[1].color),u(o,"class","title svelte-ikp0z4"),u(i,"class","tile svelte-ikp0z4"),z(t,"animation-delay",(l[3]+1)*se+"s"),u(t,"class","svelte-ikp0z4"),u(e,"href",v=l[1].url),u(e,"target","_blank"),z(e,"text-decoration","none"),u(e,"class","svelte-ikp0z4")},m(g,_){y(g,e,_),p(e,t),p(t,i),p(i,a),p(i,d),p(i,o),p(o,n),p(e,k),$||(b=[M(r=ee.call(null,i)),M(m=te.call(null,t))],$=!0)},p:T,d(g){g&&w(e),$=!1,U(b)}}}function He(l){let e,t,i,a,s,d,o,c,n,r,m,k,v,$;t=new Ae({});let b=l[0],g=[];for(let _=0;_<b.length;_+=1)g[_]=W(P(l,b,_));return{c(){e=f("div"),S(t.$$.fragment),i=A(),a=f("div"),s=f("div"),d=f("img"),c=A(),n=f("div"),n.innerHTML=`<div class="name svelte-ikp0z4">Kento Nishi</div> 
        <div class="affiliation svelte-ikp0z4">Harvard University</div> 
        <div class="email svelte-ikp0z4"><a href="mailto:kento24gs@outlook.com" class="svelte-ikp0z4">kento24gs@outlook.com</a></div>`,r=A(),m=f("div");for(let _=0;_<g.length;_+=1)g[_].c();N(d.src,o=be)||u(d,"src",o),u(d,"alt","Kento Nishi"),u(d,"class","pfp svelte-ikp0z4"),u(n,"class","info svelte-ikp0z4"),u(s,"class","profile svelte-ikp0z4"),u(m,"class","links svelte-ikp0z4"),u(a,"class","parent svelte-ikp0z4"),z(a,"width","calc(100% - 2 * var(--grid-padding))"),u(e,"class","banner svelte-ikp0z4")},m(_,V){y(_,e,V),C(t,e,null),p(e,i),p(e,a),p(a,s),p(s,d),p(s,c),p(s,n),p(a,r),p(a,m);for(let h=0;h<g.length;h+=1)g[h].m(m,null);k=!0,v||($=M(te.call(null,s)),v=!0)},p(_,[V]){if(V&1){b=_[0];let h;for(h=0;h<b.length;h+=1){const R=P(_,b,h);g[h]?g[h].p(R,V):(g[h]=W(R),g[h].c(),g[h].m(m,null))}for(;h<g.length;h+=1)g[h].d(1);g.length=b.length}},i(_){k||(L(t.$$.fragment,_),k=!0)},o(_){x(t.$$.fragment,_),k=!1},d(_){_&&w(e),I(t),Y(g,_),v=!1,$()}}}function xe(l){return[[{title:"GitHub",url:"https://github.com/KentoNishi",icon:$e},{title:"LinkedIn",url:"https://www.linkedin.com/in/kento-nishi-5696ab185/",icon:ye},{title:"Scholar",url:"https://scholar.google.com/citations?user=iQoZSr4AAAAJ&hl=en",icon:we,color:!0}]]}class Ve extends D{constructor(e){super(),G(this,e,xe,He,j,{})}}function Me(l){let e,t,i,a,s,d,o=l[0].icon+"",c,n,r,m,k=l[0].title+"",v,$,b,g=l[0].description+"",_,V,h,R;return{c(){e=f("a"),t=f("div"),i=f("button"),a=f("div"),s=f("div"),d=f("span"),c=E(o),n=A(),r=f("div"),m=f("div"),v=E(k),$=A(),b=f("div"),_=E(g),u(d,"class","icon svelte-10lt189"),u(s,"class","left svelte-10lt189"),u(m,"class","title svelte-10lt189"),u(b,"class","description svelte-10lt189"),u(r,"class","right svelte-10lt189"),u(a,"class","split svelte-10lt189"),u(i,"class","tile svelte-10lt189"),u(t,"class","parent svelte-10lt189"),z(t,"animation-delay",l[1]+"s"),u(e,"href",V=(l[0].realURL?"":"#")+l[0].link),u(e,"class","svelte-10lt189")},m(H,B){y(H,e,B),p(e,t),p(t,i),p(i,a),p(a,s),p(s,d),p(d,c),p(a,n),p(a,r),p(r,m),p(m,v),p(r,$),p(r,b),p(b,_),h||(R=[M(re.call(null,d)),M(ee.call(null,i)),M(ce.call(null,t))],h=!0)},p(H,[B]){B&1&&o!==(o=H[0].icon+"")&&K(c,o),B&1&&k!==(k=H[0].title+"")&&K(v,k),B&1&&g!==(g=H[0].description+"")&&K(_,g),B&2&&z(t,"animation-delay",H[1]+"s"),B&1&&V!==(V=(H[0].realURL?"":"#")+H[0].link)&&u(e,"href",V)},i:T,o:T,d(H){H&&w(e),h=!1,U(R)}}}function Be(l,e,t){let{data:i}=e,{delay:a=0}=e;return l.$$set=s=>{"data"in s&&t(0,i=s.data),"delay"in s&&t(1,a=s.delay)},[i,a]}class Te extends D{constructor(e){super(),G(this,e,Be,Me,j,{data:0,delay:1})}}function Z(l,e,t){const i=l.slice();return i[1]=e[t],i[3]=t,i}function J(l){let e,t;return e=new Te({props:{data:l[1],delay:(l[3]+1)*se}}),{c(){S(e.$$.fragment)},m(i,a){C(e,i,a),t=!0},p(i,a){const s={};a&1&&(s.data=i[1]),e.$set(s)},i(i){t||(L(e.$$.fragment,i),t=!0)},o(i){x(e.$$.fragment,i),t=!1},d(i){I(e,i)}}}function Ee(l){let e,t,i,a=l[0],s=[];for(let o=0;o<a.length;o+=1)s[o]=J(Z(l,a,o));const d=o=>x(s[o],1,1,()=>{s[o]=null});return{c(){e=f("div"),t=f("div");for(let o=0;o<s.length;o+=1)s[o].c();u(t,"class","grid svelte-l4z9m3"),u(e,"class","wrap svelte-l4z9m3")},m(o,c){y(o,e,c),p(e,t);for(let n=0;n<s.length;n+=1)s[n].m(t,null);i=!0},p(o,[c]){if(c&1){a=o[0];let n;for(n=0;n<a.length;n+=1){const r=Z(o,a,n);s[n]?(s[n].p(r,c),L(s[n],1)):(s[n]=J(r),s[n].c(),L(s[n],1),s[n].m(t,null))}for(ie(),n=a.length;n<s.length;n+=1)d(n);le()}},i(o){if(!i){for(let c=0;c<a.length;c+=1)L(s[c]);i=!0}},o(o){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)x(s[c]);i=!1},d(o){o&&w(e),Y(s,o)}}}function Se(l,e,t){let{tiles:i=[]}=e;return l.$$set=a=>{"tiles"in a&&t(0,i=a.tiles)},[i]}class Ce extends D{constructor(e){super(),G(this,e,Se,Ee,j,{tiles:0})}}function O(l,e,t){const i=l.slice();return i[6]=e[t],i}function Q(l){let e,t,i,a,s,d,o,c,n,r,m,k;return t=new Ve({}),s=new _e({props:{$$slots:{default:[De]},$$scope:{ctx:l}}}),n=new Ce({props:{tiles:[{title:l[2]("entries.research.title"),description:"View my ongoing and published research.",icon:"school",link:"/publications"},{title:l[2]("entries.apps.title"),description:"View my open-source apps, websites, and extensions.",icon:"mobile_friendly",link:"/apps"},{title:l[2]("entries.packages.title"),description:"View my open-source packages and developer tools.",icon:"code",link:"/packages"},{title:l[2]("entries.music.title"),description:"Listen to my original compositions and productions.",icon:"music_note",link:"/music"},{title:l[2]("entries.resume.title"),description:"View my resume and contact information.",icon:"description",link:"/resume.pdf",realURL:!0},{title:l[2]("entries.blog.title"),description:"View my blog posts, tutorials, and write-ups.",icon:"edit_note",link:"/posts"}]}}),{c(){e=f("div"),S(t.$$.fragment),i=A(),a=f("div"),S(s.$$.fragment),o=A(),c=f("div"),S(n.$$.fragment)},m(v,$){y(v,e,$),C(t,e,null),p(e,i),p(e,a),C(s,a,null),p(e,o),p(e,c),C(n,c,null),r=!0,m||(k=M(d=de.call(null,a)),m=!0)},p(v,$){const b={};$&516&&(b.$$scope={dirty:$,ctx:v}),s.$set(b);const g={};$&4&&(g.tiles=[{title:v[2]("entries.research.title"),description:"View my ongoing and published research.",icon:"school",link:"/publications"},{title:v[2]("entries.apps.title"),description:"View my open-source apps, websites, and extensions.",icon:"mobile_friendly",link:"/apps"},{title:v[2]("entries.packages.title"),description:"View my open-source packages and developer tools.",icon:"code",link:"/packages"},{title:v[2]("entries.music.title"),description:"Listen to my original compositions and productions.",icon:"music_note",link:"/music"},{title:v[2]("entries.resume.title"),description:"View my resume and contact information.",icon:"description",link:"/resume.pdf",realURL:!0},{title:v[2]("entries.blog.title"),description:"View my blog posts, tutorials, and write-ups.",icon:"edit_note",link:"/posts"}]),n.$set(g)},i(v){r||(L(t.$$.fragment,v),L(s.$$.fragment,v),L(n.$$.fragment,v),r=!0)},o(v){x(t.$$.fragment,v),x(s.$$.fragment,v),x(n.$$.fragment,v),r=!1},d(v){v&&w(e),I(t),I(s),I(n),m=!1,k()}}}function Ie(l){let e;return{c(){e=E("About Me")},m(t,i){y(t,e,i)},d(t){t&&w(e)}}}function X(l){let e,t,i,a,s;return{c(){e=f("img"),N(e.src,t=`${l[6].src}&seed=`)||u(e,"src",t),u(e,"alt",i=l[6].alt),u(e,"class","svelte-159x97u")},m(d,o){y(d,e,o),a||(s=ge(e,"load",l[4]),a=!0)},p:T,d(d){d&&w(e),a=!1,s()}}}function Re(l){let e,t=l[2]("info.bio")+"",i,a,s,d=l[3],o=[];for(let c=0;c<d.length;c+=1)o[c]=X(O(l,d,c));return{c(){e=f("div"),i=E(t),a=A(),s=f("div");for(let c=0;c<o.length;c+=1)o[c].c();u(s,"class","stats svelte-159x97u")},m(c,n){y(c,e,n),p(e,i),y(c,a,n),y(c,s,n);for(let r=0;r<o.length;r+=1)o[r].m(s,null)},p(c,n){if(n&4&&t!==(t=c[2]("info.bio")+"")&&K(i,t),n&24){d=c[3];let r;for(r=0;r<d.length;r+=1){const m=O(c,d,r);o[r]?o[r].p(m,n):(o[r]=X(m),o[r].c(),o[r].m(s,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=d.length}},d(c){c&&w(e),c&&w(a),c&&w(s),Y(o,c)}}}function De(l){let e,t;return e=new he({props:{$$slots:{content:[Re],title:[Ie]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},m(i,a){C(e,i,a),t=!0},p(i,a){const s={};a&516&&(s.$$scope={dirty:a,ctx:i}),e.$set(s)},i(i){t||(L(e.$$.fragment,i),t=!0)},o(i){x(e.$$.fragment,i),t=!1},d(i){I(e,i)}}}function Ge(l){let e,t,i,a,s,d,o,c,n=l[1]&&Q(l);return{c(){e=f("dialog"),t=f("div"),a=A(),n&&n.c(),s=ue(),z(t,"height","5px"),z(t,"width","100%"),z(t,"--exio-loader-fill-color","var(--blue-accent)"),z(t,"background-color","rgb(18, 18, 18)"),e.open=i=!l[0],z(e,"padding","10px"),z(e,"width","min(500px, 100%)"),z(e,"--exio-backdrop-color","black")},m(r,m){y(r,e,m),p(e,t),y(r,a,m),n&&n.m(r,m),y(r,s,m),d=!0,o||(c=[M(pe.call(null,t)),M(ke.call(null,e))],o=!0)},p(r,[m]){(!d||m&1&&i!==(i=!r[0]))&&(e.open=i),r[1]?n?(n.p(r,m),m&2&&L(n,1)):(n=Q(r),n.c(),L(n,1),n.m(s.parentNode,s)):n&&(ie(),x(n,1,1,()=>{n=null}),le())},i(r){d||(L(n),d=!0)},o(r){x(n),d=!1},d(r){r&&w(e),r&&w(a),n&&n.d(r),r&&w(s),o=!1,U(c)}}}function je(l,e,t){let i,a;q(l,fe,n=>t(0,i=n)),q(l,me,n=>t(2,a=n));const s=[{src:"https://github-readme-streak-stats.herokuapp.com/?theme=dark&user=KentoNishi&hide_border=true",alt:"GitHub README Streak Stats"},{src:"https://github-readme-stats.vercel.app/api?username=KentoNishi&show_icons=true&theme=dark&hide_border=true",alt:"GitHub README Stats"}],d=n=>{n.target.classList.add("loaded")};let o=!0;const c=async()=>{t(1,o=!1),await ve(),t(1,o=!0)};return l.$$.update=()=>{l.$$.dirty&1&&i&&c()},[i,o,a,s,d]}class Fe extends D{constructor(e){super(),G(this,e,je,Ge,j,{})}}export{Fe as default};
