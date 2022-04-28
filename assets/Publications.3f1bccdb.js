import{s as X,d as Z,S as F,i as M,a as T,B as S,e as u,f as c,h as J,j as f,k as d,C as q,D as N,E as P,v as k,w as x,m,b as $,l as z,q as V,u as D,x as H,t as Y,n as G,r as O}from"./index.869ea2cb.js";import{c as Q,d as U,e as L}from"./animations.396e5f63.js";function ee(o){const t=Q(o,{borderStyle:"hover",disableClicking:!0}),n=X(o);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,Z(t.destroy,n.remove)}function te(o){let t,n,a;const i=o[1].default,s=S(i,o,o[0],null);return{c(){t=u("div"),n=u("div"),s&&s.c(),c(n,"class","grid svelte-115zgra"),c(t,"class","wrap svelte-115zgra"),J(t,"transform-origin","top center")},m(e,l){f(e,t,l),d(t,n),s&&s.m(n,null),a=!0},p(e,[l]){s&&s.p&&(!a||l&1)&&q(s,i,e,e[0],a?P(i,e[0],l,null):N(e[0]),null)},i(e){a||(k(s,e),a=!0)},o(e){x(s,e),a=!1},d(e){e&&m(t),s&&s.d(e)}}}function se(o,t,n){let{$$slots:a={},$$scope:i}=t;return o.$$set=s=>{"$$scope"in s&&n(0,i=s.$$scope)},[i,a]}class ne extends F{constructor(t){super(),M(this,t,se,te,T,{})}}const ae=o=>({}),E=o=>({}),le=o=>({}),K=o=>({});function oe(o){let t,n,a,i,s,e,l,h;const w=o[1].title,v=S(w,o,o[0],K),b=o[1].content,p=S(b,o,o[0],E);return{c(){t=u("div"),n=u("div"),a=u("h1"),v&&v.c(),i=$(),s=u("p"),p&&p.c(),c(a,"class","svelte-1rmppml"),c(s,"class","svelte-1rmppml"),c(n,"class","card svelte-1rmppml"),c(t,"class","parent svelte-1rmppml")},m(r,_){f(r,t,_),d(t,n),d(n,a),v&&v.m(a,null),d(n,i),d(n,s),p&&p.m(s,null),e=!0,l||(h=z(ee.call(null,n)),l=!0)},p(r,[_]){v&&v.p&&(!e||_&1)&&q(v,w,r,r[0],e?P(w,r[0],_,le):N(r[0]),K),p&&p.p&&(!e||_&1)&&q(p,b,r,r[0],e?P(b,r[0],_,ae):N(r[0]),E)},i(r){e||(k(v,r),k(p,r),e=!0)},o(r){x(v,r),x(p,r),e=!1},d(r){r&&m(t),v&&v.d(r),p&&p.d(r),l=!1,h()}}}function ie(o,t,n){let{$$slots:a={},$$scope:i}=t;return o.$$set=s=>{"$$scope"in s&&n(0,i=s.$$scope)},[i,a]}class B extends F{constructor(t){super(),M(this,t,ie,oe,T,{})}}function re(o){let t;return{c(){t=Y("Augmentation Strategies for Learning with Noisy Labels")},m(n,a){f(n,t,a)},d(n){n&&m(t)}}}function ce(o){let t,n,a,i,s,e,l,h,w,v,b,p,r,_,A,W,C,I,R,j;return{c(){t=u("i"),t.textContent="Conference on Computer Vision and Pattern Recognition (2021)",n=$(),a=u("p"),a.innerHTML=`<a href="mailto:kento24gs@outlook.com" class="svelte-1ctchzr">Kento Nishi</a>*,
          <a href="mailto:yding@cs.ucsb.edu" class="svelte-1ctchzr">Yi Ding</a>*,
          <a href="mailto:anrich@cs.ucsb.edu" class="svelte-1ctchzr">Alex Rich</a>,
          <a href="mailto:holl@cs.ucsb.edu" class="svelte-1ctchzr">Tobias H\xF6llerer</a>
          [<code>*</code>:
          <a href="mailto:kento24gs@outlook.com,yding@cs.ucsb.edu" class="svelte-1ctchzr">equal contribution</a>]`,i=$(),s=u("p"),s.textContent=`Imperfect labels are ubiquitous in real-world datasets. Several recent
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
          the real-world dataset Clothing1M.`,e=$(),l=u("div"),h=u("a"),w=u("button"),w.textContent="View on arXiv",v=$(),b=u("a"),p=u("button"),p.textContent="View PDF",r=$(),_=u("a"),A=u("button"),A.textContent="View code on GitHub",W=$(),C=u("a"),I=u("button"),I.textContent="Watch CVPR Video",c(w,"class","svelte-1ctchzr"),c(h,"href","https://arxiv.org/abs/2103.02130"),c(h,"target","_blank"),c(h,"class","svelte-1ctchzr"),c(p,"class","svelte-1ctchzr"),c(b,"href","https://arxiv.org/pdf/2103.02130.pdf"),c(b,"target","_blank"),c(b,"class","svelte-1ctchzr"),c(A,"class","svelte-1ctchzr"),c(_,"href","https://github.com/KentoNishi/Augmentation-for-LNL"),c(_,"target","_blank"),c(_,"class","svelte-1ctchzr"),c(I,"class","svelte-1ctchzr"),c(C,"href","https://kentonishi.github.io/Augmentation-for-LNL/CVPR_Video.mp4"),c(C,"target","_blank"),c(C,"class","svelte-1ctchzr"),c(l,"class","buttons svelte-1ctchzr")},m(g,y){f(g,t,y),f(g,n,y),f(g,a,y),f(g,i,y),f(g,s,y),f(g,e,y),f(g,l,y),d(l,h),d(h,w),d(l,v),d(l,b),d(b,p),d(l,r),d(l,_),d(_,A),d(l,W),d(l,C),d(C,I),R||(j=[z(L.call(null,w)),z(L.call(null,p)),z(L.call(null,A)),z(L.call(null,I))],R=!0)},p:G,d(g){g&&m(t),g&&m(n),g&&m(a),g&&m(i),g&&m(s),g&&m(e),g&&m(l),R=!1,O(j)}}}function ue(o){let t;return{c(){t=Y(`Improving Label Noise Robustness with Data Augmentation and
        Semi-Supervised Learning (Student Abstract)`)},m(n,a){f(n,t,a)},d(n){n&&m(t)}}}function fe(o){let t,n,a,i,s;return{c(){t=u("i"),t.textContent="Proceedings of the AAAI Conference on Artificial Intelligence (2021)",n=$(),a=u("p"),a.innerHTML=`<a href="mailto:kento24gs@outlook.com" class="svelte-1ctchzr">Kento Nishi</a>,
          <a href="mailto:yding@cs.ucsb.edu" class="svelte-1ctchzr">Yi Ding</a>,
          <a href="mailto:anrich@cs.ucsb.edu" class="svelte-1ctchzr">Alex Rich</a>,
          <a href="mailto:holl@cs.ucsb.edu" class="svelte-1ctchzr">Tobias H\xF6llerer</a>`,i=$(),s=u("p"),s.textContent=`Modern machine learning algorithms typically require large amounts of
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
          state-of-the-art.`},m(e,l){f(e,t,l),f(e,n,l),f(e,a,l),f(e,i,l),f(e,s,l)},p:G,d(e){e&&m(t),e&&m(n),e&&m(a),e&&m(i),e&&m(s)}}}function me(o){let t,n,a,i;return t=new B({props:{$$slots:{content:[ce],title:[re]},$$scope:{ctx:o}}}),a=new B({props:{$$slots:{content:[fe],title:[ue]},$$scope:{ctx:o}}}),{c(){V(t.$$.fragment),n=$(),V(a.$$.fragment)},m(s,e){D(t,s,e),f(s,n,e),D(a,s,e),i=!0},p(s,e){const l={};e&1&&(l.$$scope={dirty:e,ctx:s}),t.$set(l);const h={};e&1&&(h.$$scope={dirty:e,ctx:s}),a.$set(h)},i(s){i||(k(t.$$.fragment,s),k(a.$$.fragment,s),i=!0)},o(s){x(t.$$.fragment,s),x(a.$$.fragment,s),i=!1},d(s){H(t,s),s&&m(n),H(a,s)}}}function pe(o){let t,n,a,i,s;return n=new ne({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){t=u("div"),V(n.$$.fragment)},m(e,l){f(e,t,l),D(n,t,null),a=!0,i||(s=z(U.call(null,t)),i=!0)},p(e,[l]){const h={};l&1&&(h.$$scope={dirty:l,ctx:e}),n.$set(h)},i(e){a||(k(n.$$.fragment,e),a=!0)},o(e){x(n.$$.fragment,e),a=!1},d(e){e&&m(t),H(n),i=!1,s()}}}class ge extends F{constructor(t){super(),M(this,t,null,pe,T,{})}}export{ge as default};
