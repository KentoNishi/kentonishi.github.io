import{S as C,i as h,s as x,e as _,o as u,j as P,c,p as f,k as q,C as H,q as p,u as m,f as $,v as d,D as L,Y as M,g as S,t as T,z as j,b as v,n as w}from"./index.639fdf16.js";import{C as k,a as g}from"./Cards.83623d4f.js";const b={title:"Placeholder Post",description:"Posts will show up here!",tags:["placeholder"]};function z(a){let t=a[0]("entries.blog.title")+"",s;return{c(){s=T(t)},m(e,r){c(e,s,r)},p(e,r){r&1&&t!==(t=e[0]("entries.blog.title")+"")&&j(s,t)},d(e){e&&$(s)}}}function A(a){let t,s=b.title+"";return{c(){t=_("div"),v(t,"slot","title")},m(e,r){c(e,t,r),t.innerHTML=s},p:w,d(e){e&&$(t)}}}function B(a){let t,s=b.description+"";return{c(){t=_("div"),v(t,"slot","content")},m(e,r){c(e,t,r),t.innerHTML=s},p:w,d(e){e&&$(t)}}}function D(a){let t,s,e,r;return t=new g({props:{titleCard:!0,$$slots:{title:[z]},$$scope:{ctx:a}}}),e=new g({props:{$$slots:{content:[B],title:[A]},$$scope:{ctx:a}}}),{c(){u(t.$$.fragment),s=S(),u(e.$$.fragment)},m(n,o){f(t,n,o),c(n,s,o),f(e,n,o),r=!0},p(n,o){const i={};o&3&&(i.$$scope={dirty:o,ctx:n}),t.$set(i);const l={};o&2&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){r||(p(t.$$.fragment,n),p(e.$$.fragment,n),r=!0)},o(n){m(t.$$.fragment,n),m(e.$$.fragment,n),r=!1},d(n){d(t,n),n&&$(s),d(e,n)}}}function I(a){let t,s,e,r,n;return s=new k({props:{$$slots:{default:[D]},$$scope:{ctx:a}}}),{c(){t=_("div"),u(s.$$.fragment),P(t,"transform-origin","top center")},m(o,i){c(o,t,i),f(s,t,null),e=!0,r||(n=q(H.call(null,t)),r=!0)},p(o,[i]){const l={};i&3&&(l.$$scope={dirty:i,ctx:o}),s.$set(l)},i(o){e||(p(s.$$.fragment,o),e=!0)},o(o){m(s.$$.fragment,o),e=!1},d(o){o&&$(t),d(s),r=!1,n()}}}function Y(a,t,s){let e;return L(a,M,r=>s(0,e=r)),[e]}class F extends C{constructor(t){super(),h(this,t,Y,I,x,{})}}export{F as default};