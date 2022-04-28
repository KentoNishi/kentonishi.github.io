import{d as i,s as t,A as h}from"./index.869ea2cb.js";function p(e,o={borderStyle:"reactive",disableClicking:!1}){const r=t(e),m=(a=0,n=0,s=0,d=0)=>{const c=`calc(
      ${Math.max(s,d)}px * var(--exio-hover-border-scale)
    )`,f=o.borderStyle==="static",u=o.borderStyle==="hover",b=f||u?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${c} ${c} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,y=u?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(s,d)}px *
            var(--exio-hover-background-scale)
          ) at ${a}px ${n}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `;r.innerHTML=`
      .${r.id} {
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
        ${f?b:""};

        --exio-mouse-x: ${a}px;
        --exio-mouse-y: ${n}px;
        --exio-hover-border-color: rgba(255, 255, 255, 1);
        --exio-hover-body-color: rgba(255, 255, 255, 0.2);
        --exio-border-width: 2px;
        --exio-scale-size: 0.95;
        --exio-transition-duration: 0.2s;
        --exio-hover-background-scale: 4;
        --exio-hover-border-scale: 2;
        transition: transform var(--exio-transition-duration);
      }
      .${r.id}:hover:not(.${r.id}-active) {
        ${b};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${y};
        transition: transform var(--exio-transition-duration);
      }
      .${r.id}.${r.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
      }
    `};m();function l(a){const{x:n,y:s,width:d,height:c}=h(e,a);m(n,s,d,c),e.addEventListener("mousemove",l)}e.addEventListener("mouseenter",l);const v=()=>{e.classList.add(`${r.id}-active`)},x=()=>{e.classList.remove(`${r.id}-active`)};return o.disableClicking||(e.addEventListener("touchstart",v),window.addEventListener("touchend",x),e.addEventListener("mousedown",v),window.addEventListener("mouseup",x)),i(e.remove,r.remove)}function g(e){const o=p(e),r=t(e);return r.innerHTML=`
    .${r.id} {
      user-select: none;
    }
  `,i(o.destroy,r.remove)}function w(e){const o=t(e);return o.innerHTML=`
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
    .${o.id} {
      animation: exio-fly-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,i(e.remove)}function L(e){const o=t(e);return o.innerHTML=`
    @keyframes exio-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${o.id} {
      animation: exio-fade-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,i(e.remove)}function k(e){const o=t(e);return o.innerHTML=`
    @keyframes exio-zoom-in {
      from {
        transform: scale(90%);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    .${o.id} {
      animation: exio-zoom-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,i(e.remove)}export{L as a,w as b,p as c,k as d,g as e};
