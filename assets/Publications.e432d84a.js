import{s as X,d as Z,S as M,i as T,a as W,B as q,e as u,f as c,h as J,j as f,k as d,C as N,D as P,E as V,v as x,w as A,m,b as $,l as C,q as D,u as H,x as F,t as Y,n as G,r as O}from"./index.ae719768.js";import{c as Q,d as U,e as R}from"./animations.13e92569.js";function ee(o){const t=Q(o,{borderStyle:"hover",disableClicking:!0}),n=X(o);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,Z(t.destroy,n.remove)}function te(o){let t,n,a;const i=o[1].default,s=q(i,o,o[0],null);return{c(){t=u("div"),n=u("div"),s&&s.c(),c(n,"class","grid svelte-crx187"),c(t,"class","wrap svelte-crx187"),J(t,"transform-origin","top center")},m(e,l){f(e,t,l),d(t,n),s&&s.m(n,null),a=!0},p(e,[l]){s&&s.p&&(!a||l&1)&&N(s,i,e,e[0],a?V(i,e[0],l,null):P(e[0]),null)},i(e){a||(x(s,e),a=!0)},o(e){A(s,e),a=!1},d(e){e&&m(t),s&&s.d(e)}}}function se(o,t,n){let{$$slots:a={},$$scope:i}=t;return o.$$set=s=>{"$$scope"in s&&n(0,i=s.$$scope)},[i,a]}class ne extends M{constructor(t){super(),T(this,t,se,te,W,{})}}const ae=o=>({}),K=o=>({}),le=o=>({}),z=o=>({});function oe(o){let t,n,a,i,s,e,l,g;const k=o[1].title,h=q(k,o,o[0],z),_=o[1].content,p=q(_,o,o[0],K);return{c(){t=u("div"),n=u("div"),a=u("h1"),h&&h.c(),i=$(),s=u("p"),p&&p.c(),c(a,"class","svelte-1rmppml"),c(s,"class","svelte-1rmppml"),c(n,"class","card svelte-1rmppml"),c(t,"class","parent svelte-1rmppml")},m(r,v){f(r,t,v),d(t,n),d(n,a),h&&h.m(a,null),d(n,i),d(n,s),p&&p.m(s,null),e=!0,l||(g=C(ee.call(null,n)),l=!0)},p(r,[v]){h&&h.p&&(!e||v&1)&&N(h,k,r,r[0],e?V(k,r[0],v,le):P(r[0]),z),p&&p.p&&(!e||v&1)&&N(p,_,r,r[0],e?V(_,r[0],v,ae):P(r[0]),K)},i(r){e||(x(h,r),x(p,r),e=!0)},o(r){A(h,r),A(p,r),e=!1},d(r){r&&m(t),h&&h.d(r),p&&p.d(r),l=!1,g()}}}function ie(o,t,n){let{$$slots:a={},$$scope:i}=t;return o.$$set=s=>{"$$scope"in s&&n(0,i=s.$$scope)},[i,a]}class B extends M{constructor(t){super(),T(this,t,ie,oe,W,{})}}function re(o){let t;return{c(){t=Y("Augmentation Strategies for Learning with Noisy Labels")},m(n,a){f(n,t,a)},d(n){n&&m(t)}}}function ce(o){let t,n,a,i,s,e,l,g,k,h,_,p,r,v,I,j,y,L,S,E;return{c(){t=u("i"),t.textContent="Conference on Computer Vision and Pattern Recognition (2021)",n=$(),a=u("p"),a.innerHTML=`<a href="mailto:kento24gs@outlook.com" class="svelte-67gkb2">Kento Nishi</a>*,
          <a href="mailto:yding@cs.ucsb.edu" class="svelte-67gkb2">Yi Ding</a>*,
          <a href="mailto:anrich@cs.ucsb.edu" class="svelte-67gkb2">Alex Rich</a>,
          <a href="mailto:holl@cs.ucsb.edu" class="svelte-67gkb2">Tobias H\xF6llerer</a>
          [<code>*</code>:
          <a href="mailto:kento24gs@outlook.com,yding@cs.ucsb.edu" class="svelte-67gkb2">equal contribution</a>]`,i=$(),s=u("p"),s.textContent=`Imperfect labels are ubiquitous in real-world datasets. Several recent
          successful methods for training deep neural networks (DNNs) robust to
          label noise have used two primary techniques: filtering samples based
          on loss during a warm-up phase to curate an initial set of cleanly
          labeled samples, and using the output of a network as a pseudo-label
          for subsequent loss calculations. In this paper, we evaluate different
          augmentation strategies for algorithms tackling the "learning with
          noisy labels" problem. We propose and examine multiple augmentation
          strategies and evaluate them using synthetic datasets based on
          CIFAR-10 and CIFAR-100, as well as on the real-world dataset
          Clothing1M. Due to several commonalities in these algorithms, we find
          that using one set of augmentations for loss modeling tasks and
          another set for learning is the most effective, improving results on
          the state-of-the-art and other previous methods. Furthermore, we find
          that applying augmentation during the warm-up period can negatively
          impact the loss convergence behavior of correctly versus incorrectly
          labeled samples. We introduce this augmentation strategy to the
          state-of-the-art technique and demonstrate that we can improve
          performance across all evaluated noise levels. In particular, we
          improve accuracy on the CIFAR-10 benchmark at 90% symmetric noise by
          more than 15% in absolute accuracy, and we also improve performance on
          the real-world dataset Clothing1M.`,e=$(),l=u("div"),g=u("a"),k=u("button"),k.textContent="View on arXiv",h=$(),_=u("a"),p=u("button"),p.textContent="View PDF",r=$(),v=u("a"),I=u("button"),I.textContent="View code on GitHub",j=$(),y=u("a"),L=u("button"),L.textContent="Watch CVPR Video",c(k,"class","svelte-67gkb2"),c(g,"href","https://arxiv.org/abs/2103.02130"),c(g,"target","_blank"),c(g,"class","svelte-67gkb2"),c(p,"class","svelte-67gkb2"),c(_,"href","https://arxiv.org/pdf/2103.02130.pdf"),c(_,"target","_blank"),c(_,"class","svelte-67gkb2"),c(I,"class","svelte-67gkb2"),c(v,"href","https://github.com/KentoNishi/Augmentation-for-LNL"),c(v,"target","_blank"),c(v,"class","svelte-67gkb2"),c(L,"class","svelte-67gkb2"),c(y,"href","https://kentonishi.github.io/Augmentation-for-LNL/CVPR_Video.mp4"),c(y,"target","_blank"),c(y,"class","svelte-67gkb2"),c(l,"class","buttons svelte-67gkb2")},m(b,w){f(b,t,w),f(b,n,w),f(b,a,w),f(b,i,w),f(b,s,w),f(b,e,w),f(b,l,w),d(l,g),d(g,k),d(l,h),d(l,_),d(_,p),d(l,r),d(l,v),d(v,I),d(l,j),d(l,y),d(y,L),S||(E=[C(R.call(null,k)),C(R.call(null,p)),C(R.call(null,I)),C(R.call(null,L))],S=!0)},p:G,d(b){b&&m(t),b&&m(n),b&&m(a),b&&m(i),b&&m(s),b&&m(e),b&&m(l),S=!1,O(E)}}}function ue(o){let t;return{c(){t=Y(`Improving Label Noise Robustness with Data Augmentation and
        Semi-Supervised Learning (Student Abstract)`)},m(n,a){f(n,t,a)},d(n){n&&m(t)}}}function fe(o){let t,n,a,i,s;return{c(){t=u("i"),t.textContent="Proceedings of the AAAI Conference on Artificial Intelligence (2021)",n=$(),a=u("p"),a.innerHTML=`<a href="mailto:kento24gs@outlook.com" class="svelte-67gkb2">Kento Nishi</a>,
          <a href="mailto:yding@cs.ucsb.edu" class="svelte-67gkb2">Yi Ding</a>,
          <a href="mailto:anrich@cs.ucsb.edu" class="svelte-67gkb2">Alex Rich</a>,
          <a href="mailto:holl@cs.ucsb.edu" class="svelte-67gkb2">Tobias H\xF6llerer</a>`,i=$(),s=u("p"),s.textContent=`Modern machine learning algorithms typically require large amounts of
          labeled training data to fit a reliable model. To minimize the cost of
          data collection, researchers often employ techniques such as
          crowdsourcing and web scraping. However, web data and human
          annotations are known to exhibit high margins of error, resulting in
          sizable amounts of incorrect labels. Poorly labeled training data can
          cause models to overfit to the noise distribution, crippling
          performance in real-world applications. In this work, we investigate
          the viability of using data augmentation in conjunction with
          semi-supervised learning to improve the label noise robustness of
          image classification models. We conduct several experiments using
          noisy variants of the CIFAR-10 image classification dataset to
          benchmark our method against existing algorithms. Experimental results
          show that our augmentative SSL approach improves upon the
          state-of-the-art.`},m(e,l){f(e,t,l),f(e,n,l),f(e,a,l),f(e,i,l),f(e,s,l)},p:G,d(e){e&&m(t),e&&m(n),e&&m(a),e&&m(i),e&&m(s)}}}function me(o){let t,n,a,i;return t=new B({props:{$$slots:{content:[ce],title:[re]},$$scope:{ctx:o}}}),a=new B({props:{$$slots:{content:[fe],title:[ue]},$$scope:{ctx:o}}}),{c(){D(t.$$.fragment),n=$(),D(a.$$.fragment)},m(s,e){H(t,s,e),f(s,n,e),H(a,s,e),i=!0},p(s,e){const l={};e&1&&(l.$$scope={dirty:e,ctx:s}),t.$set(l);const g={};e&1&&(g.$$scope={dirty:e,ctx:s}),a.$set(g)},i(s){i||(x(t.$$.fragment,s),x(a.$$.fragment,s),i=!0)},o(s){A(t.$$.fragment,s),A(a.$$.fragment,s),i=!1},d(s){F(t,s),s&&m(n),F(a,s)}}}function pe(o){let t,n,a,i,s;return n=new ne({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){t=u("div"),D(n.$$.fragment)},m(e,l){f(e,t,l),H(n,t,null),a=!0,i||(s=C(U.call(null,t)),i=!0)},p(e,[l]){const g={};l&1&&(g.$$scope={dirty:l,ctx:e}),n.$set(g)},i(e){a||(x(n.$$.fragment,e),a=!0)},o(e){A(n.$$.fragment,e),a=!1},d(e){e&&m(t),F(n),i=!1,s()}}}class be extends M{constructor(t){super(),T(this,t,null,pe,W,{})}}export{be as default};
