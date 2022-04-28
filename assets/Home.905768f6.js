import{d as A,s as B,g as ee,S as G,i as N,a as P,e as v,b as L,t as q,c as j,f as r,h as te,j as S,k as I,l as c,m as M,n as H,o as V,r as Y,p as Z,q as R,u as C,v as F,w as E,x as T,y as K,z as ie,A as le}from"./index.ca73cb12.js";function ne(i,e={borderStyle:"reactive",disableClicking:!1}){const t=B(i),l=(s=0,d=0,a=0,p=0)=>{const g=`calc(
      ${Math.max(a,p)}px * var(--exio-hover-border-scale)
    )`,b=e.borderStyle==="static",y=e.borderStyle==="hover",w=b||y?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${g} ${g} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,x=y?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(a,p)}px *
            var(--exio-hover-background-scale)
          ) at ${s}px ${d}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `;t.innerHTML=`
      .${t.id} {
        outline: none;
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.25em 0.75em;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 1px;
        ${b?w:""};

        --exio-mouse-x: ${s}px;
        --exio-mouse-y: ${d}px;
        --exio-hover-border-color: rgba(255, 255, 255, 1);
        --exio-hover-body-color: rgba(255, 255, 255, 0.2);
        --exio-border-width: 2px;
        --exio-scale-size: 0.95;
        --exio-transition-duration: 0.2s;
        --exio-hover-background-scale: 4;
        --exio-hover-border-scale: 2;
        transition: transform var(--exio-transition-duration);
      }
      .${t.id}:hover:not(.${t.id}-active) {
        ${w};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${x};
        transition: transform var(--exio-transition-duration);
      }
      .${t.id}.${t.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
      }
    `};l();function o(s){const{x:d,y:a,width:p,height:g}=ee(i,s);l(d,a,p,g),i.addEventListener("mousemove",o)}i.addEventListener("mouseenter",o);const n=()=>{i.classList.add(`${t.id}-active`)},u=()=>{i.classList.remove(`${t.id}-active`)};return e.disableClicking||(i.addEventListener("touchstart",n),window.addEventListener("touchend",u),i.addEventListener("mousedown",n),window.addEventListener("mouseup",u)),A(i.remove,t.remove)}function W(i){const e=ne(i),t=B(i);return t.innerHTML=`
    .${t.id} {
      user-select: none;
    }
  `,A(e.destroy,t.remove)}function se(i){const e=B(i);return e.innerHTML=`
    @keyframes exio-fly-in {
      from {
        transform: translateY(50%);
        opacity: 0;
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
    .${e.id} {
      animation: exio-fly-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
      transform: translateY(50%);
    }
  `,A(i.remove)}function X(i){const e=B(i);return e.innerHTML=`
    @keyframes exio-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${e.id} {
      animation: exio-fade-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,A(i.remove)}const oe=i=>{const e=B(i);return e.innerHTML=`
    @font-face {
      font-family: 'Exio Icons';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');
    }
    .${e.id} {
      font-family: 'Exio Icons';
    }
  `,A(i.remove)};var ae="/assets/pfp.1b1cb86e.png",re="/assets/github.7c0295c7.svg",ce="/assets/linkedin.4eae04cd.svg",de="/assets/gscholar.767788f5.svg",ue="/assets/wallpaper.64c86a4f.jpg";const O=.05;function D(i,e,t){const l=i.slice();return l[1]=e[t],l[3]=t,l}function J(i){let e,t,l,o,n,u,s,d=i[1].title+"",a,p,g,b,y,w,x;return{c(){e=v("a"),t=v("div"),l=v("button"),o=v("img"),u=L(),s=v("div"),a=q(d),b=L(),j(o.src,n=i[1].icon)||r(o,"src",n),r(o,"alt","GitHub"),r(o,"class","icon svelte-8lwyti"),te(o,"black-icon",!i[1].color),r(s,"class","title svelte-8lwyti"),r(l,"class","tile svelte-8lwyti"),S(t,"animation-delay",(i[3]+1)*O+"s"),r(t,"class","svelte-8lwyti"),r(e,"href",y=i[1].url),r(e,"target","_blank"),S(e,"text-decoration","none"),r(e,"class","svelte-8lwyti")},m(_,m){I(_,e,m),c(e,t),c(t,l),c(l,o),c(l,u),c(l,s),c(s,a),c(e,b),w||(x=[M(p=W.call(null,l)),M(g=X.call(null,t))],w=!0)},p:H,d(_){_&&V(e),w=!1,Y(x)}}}function ve(i){let e,t,l,o,n,u,s,d,a,p,g,b,y,w,x,_=i[0],m=[];for(let f=0;f<_.length;f+=1)m[f]=J(D(i,_,f));return{c(){e=v("div"),t=v("div"),l=v("img"),n=L(),u=v("div"),s=v("div"),d=v("img"),p=L(),g=v("div"),g.innerHTML=`<div class="name svelte-8lwyti">Kento Nishi</div> 
        <div class="email svelte-8lwyti"><a href="mailto:kento24gs@outlook.com" class="svelte-8lwyti">kento24gs@outlook.com</a></div> 
        <div class="affiliation svelte-8lwyti">Lynbrook High School</div>`,b=L(),y=v("div");for(let f=0;f<m.length;f+=1)m[f].c();j(l.src,o=ue)||r(l,"src",o),r(l,"alt","Wallpaper"),r(l,"class","wallpaper svelte-8lwyti"),r(t,"class","wallpaper-wrapper svelte-8lwyti"),j(d.src,a=ae)||r(d,"src",a),r(d,"alt","Kento Nishi"),r(d,"class","pfp svelte-8lwyti"),r(g,"class","info svelte-8lwyti"),r(s,"class","profile svelte-8lwyti"),r(y,"class","links svelte-8lwyti"),r(u,"class","parent svelte-8lwyti"),S(u,"width","calc(100% - 2 * var(--grid-padding))"),r(e,"class","banner svelte-8lwyti")},m(f,$){I(f,e,$),c(e,t),c(t,l),c(e,n),c(e,u),c(u,s),c(s,d),c(s,p),c(s,g),c(u,b),c(u,y);for(let h=0;h<m.length;h+=1)m[h].m(y,null);w||(x=M(X.call(null,s)),w=!0)},p(f,[$]){if($&1){_=f[0];let h;for(h=0;h<_.length;h+=1){const k=D(f,_,h);m[h]?m[h].p(k,$):(m[h]=J(k),m[h].c(),m[h].m(y,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=_.length}},i:H,o:H,d(f){f&&V(e),Z(m,f),w=!1,x()}}}function fe(i){return[[{title:"GitHub",url:"https://github.com/KentoNishi",icon:re},{title:"LinkedIn",url:"https://www.linkedin.com/in/kento-nishi-5696ab185/",icon:ce},{title:"Scholar",url:"https://scholar.google.com/citations?user=iQoZSr4AAAAJ&hl=en",icon:de,color:!0}]]}class me extends G{constructor(e){super(),N(this,e,fe,ve,P,{})}}function pe(i){let e,t,l,o,n,u,s=i[0].icon+"",d,a,p,g,b=i[0].title+"",y,w,x,_=i[0].description+"",m,f,$,h;return{c(){e=v("a"),t=v("div"),l=v("button"),o=v("div"),n=v("div"),u=v("span"),d=q(s),a=L(),p=v("div"),g=v("div"),y=q(b),w=L(),x=v("div"),m=q(_),r(u,"class","icon svelte-zu5vrn"),r(n,"class","left svelte-zu5vrn"),r(g,"class","title svelte-zu5vrn"),r(x,"class","description svelte-zu5vrn"),r(p,"class","right svelte-zu5vrn"),r(o,"class","split svelte-zu5vrn"),r(l,"class","tile svelte-zu5vrn"),r(t,"class","parent svelte-zu5vrn"),S(t,"animation-delay",i[1]+"s"),r(e,"href",f="#"+i[0].link)},m(k,z){I(k,e,z),c(e,t),c(t,l),c(l,o),c(o,n),c(n,u),c(u,d),c(o,a),c(o,p),c(p,g),c(g,y),c(p,w),c(p,x),c(x,m),$||(h=[M(oe.call(null,u)),M(W.call(null,l)),M(se.call(null,t))],$=!0)},p(k,[z]){z&1&&s!==(s=k[0].icon+"")&&R(d,s),z&1&&b!==(b=k[0].title+"")&&R(y,b),z&1&&_!==(_=k[0].description+"")&&R(m,_),z&2&&S(t,"animation-delay",k[1]+"s"),z&1&&f!==(f="#"+k[0].link)&&r(e,"href",f)},i:H,o:H,d(k){k&&V(e),$=!1,Y(h)}}}function he(i,e,t){let{data:l}=e,{delay:o=0}=e;return i.$$set=n=>{"data"in n&&t(0,l=n.data),"delay"in n&&t(1,o=n.delay)},[l,o]}class ge extends G{constructor(e){super(),N(this,e,he,pe,P,{data:0,delay:1})}}function Q(i,e,t){const l=i.slice();return l[1]=e[t],l[3]=t,l}function U(i){let e,t;return e=new ge({props:{data:i[1],delay:i[3]*O}}),{c(){C(e.$$.fragment)},m(l,o){F(e,l,o),t=!0},p:H,i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function _e(i){let e,t,l,o=i[0],n=[];for(let s=0;s<o.length;s+=1)n[s]=U(Q(i,o,s));const u=s=>T(n[s],1,1,()=>{n[s]=null});return{c(){e=v("div"),t=v("div");for(let s=0;s<n.length;s+=1)n[s].c();r(t,"class","grid svelte-uhfhk1"),r(e,"class","wrap svelte-uhfhk1")},m(s,d){I(s,e,d),c(e,t);for(let a=0;a<n.length;a+=1)n[a].m(t,null);l=!0},p(s,[d]){if(d&1){o=s[0];let a;for(a=0;a<o.length;a+=1){const p=Q(s,o,a);n[a]?(n[a].p(p,d),E(n[a],1)):(n[a]=U(p),n[a].c(),E(n[a],1),n[a].m(t,null))}for(ie(),a=o.length;a<n.length;a+=1)u(a);le()}},i(s){if(!l){for(let d=0;d<o.length;d+=1)E(n[d]);l=!0}},o(s){n=n.filter(Boolean);for(let d=0;d<n.length;d+=1)T(n[d]);l=!1},d(s){s&&V(e),Z(n,s)}}}function ye(i){return[[{title:"Publications",description:"View my published research.",icon:"school",link:"/publications"},{title:"Apps",description:"View my open-source apps, websites, and extensions.",icon:"mobile_friendly",link:"/apps"},{title:"Packages",description:"View my open-source packages and developer tools.",icon:"code",link:"/packages"},{title:"Music",description:"Listen to my original compositions and productions.",icon:"music_note",link:"/music"},{title:"Resume",description:"View my resume and contact information.",icon:"description",link:"/resume"},{title:"Blog Posts",description:"View my blog posts, tutorials, and write-ups.",icon:"edit_note",link:"/posts"}]]}class be extends G{constructor(e){super(),N(this,e,ye,_e,P,{})}}function we(i){let e,t,l,o;return e=new me({}),l=new be({}),{c(){C(e.$$.fragment),t=L(),C(l.$$.fragment)},m(n,u){F(e,n,u),I(n,t,u),F(l,n,u),o=!0},p:H,i(n){o||(E(e.$$.fragment,n),E(l.$$.fragment,n),o=!0)},o(n){T(e.$$.fragment,n),T(l.$$.fragment,n),o=!1},d(n){K(e,n),n&&V(t),K(l,n)}}}class ke extends G{constructor(e){super(),N(this,e,null,we,P,{})}}export{ke as default};
