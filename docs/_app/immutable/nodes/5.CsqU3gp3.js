import{$ as e,A as t,F as n,K as r,N as i,O as a,P as o,Q as s,S as c,St as l,T as u,Z as d,_ as f,a as p,at as m,b as h,bt as g,d as _,et as v,f as y,i as b,k as x,l as S,m as C,mt as w,o as T,ot as ee,p as E,pt as D,q as O,rt as k,s as A,st as j,tt as M,v as N,w as P,x as F,y as I,yt as L,z as R}from"../chunks/3vH3M6BD.js";import{o as z}from"../chunks/Bw-Ne1Kr.js";import"../chunks/xihTtKlq.js";import{M as B}from"../chunks/C7VHp-jD.js";import{t as te}from"../chunks/BBpPY3MP.js";import{t as ne}from"../chunks/DzH2hzS9.js";import"../chunks/B8XUBBf-.js";var re=t(`<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>`);function ie(e){var t=re();a(e,t)}var ae=t(`<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>`);function oe(e){var t=ae();a(e,t)}var se=t(`<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>`);function ce(e){let t=[{tag:`h3`,text:`I am a h3 tag.`},{tag:`p`,text:`I am p tag.`}];var n=se(),o=v(d(n),2);F(o,17,()=>t,c,(e,t)=>{let n=()=>R(t).tag,o=()=>R(t).text;var c=x(),l=s(c);f(l,n,!1,(e,t)=>{var n=i();r(()=>u(n,o())),a(t,n)}),a(e,c)}),g(n),a(e,n)}var le=t(`<p> </p>`);function ue(t,n){var i=le(),o=e(i);r(()=>u(o,`I am component A and my favorite number is ${n.number??``}.`)),a(t,i)}var de=t(`<p> </p>`);function fe(t,n){var i=de(),o=e(i);r(()=>u(o,`I am component B and my name is ${n.name??``}.`)),a(t,i)}var V=t(`<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>`);function pe(e){let t={A:ue,B:fe},n=[{component:`A`,number:42},{component:`B`,name:`Russell`}];var r=V(),i=v(d(r),2);F(i,17,()=>n,c,(e,n)=>{let r=j(()=>t[R(n).component]);var i=x(),o=s(i);N(o,()=>R(r),(e,t)=>{t(e,T(()=>R(n)))}),a(e,i)}),g(r),a(e,r)}var me=t(`<div><!></div>`);function H(e,t){w(t,!0);let n=b(t,`root`,3,null),r=b(t,`top`,3,0),i=b(t,`bottom`,3,0),o=b(t,`increments`,3,100),s=b(t,`value`,15,void 0),c=[],u=[],f=[],p=[],m;function h(){let e=0,t=0;for(let n=0;n<c.length;n++)c[n]>e&&(e=c[n],t=n);s(e>0?t:void 0)}function _(e,t){let a=e=>{e[0].isIntersecting;let n=e[0].intersectionRatio;c[t]=n,h()},o=`${r()?r()*-1:0}px 0px ${i()?i()*-1:0}px 0px`,s={root:n(),rootMargin:o,threshold:u};p[t]&&p[t].disconnect();let l=new IntersectionObserver(a,s);l.observe(e),p[t]=l}function v(){f.length&&f.forEach(_)}O(()=>{for(let e=0;e<o()+1;e++)u.push(e/o());f=m.querySelectorAll(`:scope > *:not(iframe)`),v()}),O(()=>{r(),i(),v()});var y=me(),x=d(y);I(x,()=>t.children??l),g(y),A(y,e=>m=e,()=>m),a(e,y),D()}var he=t(`<div><p class="svelte-1sxgmm9"> </p> <p class="sr-only svelte-1sxgmm9"> </p></div>`),ge=t(`<section id="scrolly"><div class="background svelte-1sxgmm9" aria-hidden="true"><h2>Scrolly <span> </span></h2></div> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>`);function _e(t){let n=m(void 0);var i=ge(),o=d(i),l=d(o),f=v(d(l)),p=e(f,!0);g(l),g(o),H(v(o,4),{get value(){return R(n)},set value(e){k(n,e,!0)},children:(t,i)=>{var o=x(),l=s(o);F(l,16,()=>[0,1,2,3,4],c,(t,i,o)=>{let s=j(()=>R(n)===o);var c=he();let l;var f=d(c),p=e(f,!0),m=v(f,2),h=e(m);g(c),r(()=>{l=C(c,1,`step svelte-1sxgmm9`,null,l,{active:R(s)}),u(p,i),u(h,`Describe the graphic in step ${i??``}`)}),a(t,c)}),a(t,o)},$$slots:{default:!0}}),L(2),g(i),r(()=>u(p,R(n)||`-`)),a(t,i)}var ve=new B(`(prefers-reduced-motion: reduce)`),U=(t,n=l,i=l,o=l)=>{var s=xe();let c;var f=d(s),p=e(f,!0),m=v(f,2),h=e(m);g(s),r(()=>{c=C(s,1,`step svelte-pus4ht`,null,c,{active:o()}),u(p,n()),u(h,`Describe the graphic in step ${n()??``}`)}),a(t,s)},ye=(e,t=l)=>{var n=Ce();F(n,21,t,c,(e,t)=>{var n=Se();let i;r(()=>i=E(n,``,i,{"--height":R(t)})),a(e,n)}),g(n),a(e,n)},be=t(`<h2>Scrolly <span> </span></h2> <!>`,1),xe=t(`<div><p class="svelte-pus4ht"> </p> <p class="sr-only svelte-pus4ht"> </p></div>`),Se=t(`<div class="col svelte-pus4ht"></div>`),Ce=t(`<div class="chart svelte-pus4ht"></div>`),we=t(`<section id="scrolly" class="svelte-pus4ht"><div class="background svelte-pus4ht" aria-hidden="true"><!></div> <div class="spacer svelte-pus4ht"></div> <!> <div class="spacer svelte-pus4ht"></div></section>`),Te=t(`<div><div class="background"><!></div> <!></div>`),Ee=t(`<section id="stacked"></section>`),De=t(`<div class="controls svelte-pus4ht"><p class="svelte-pus4ht">The graphics in this story will utilize scroll-driven animations. Use this
		toggle to disable this and view static graphics instead.</p> <!></div>   <!>`,1);function Oe(t,n){w(n,!0);let i=(t,n=l)=>{var i=be(),o=s(i),c=v(d(o)),f=e(c,!0);g(o),ye(v(o,2),()=>p[n()]),r(()=>u(f,n()||`-`)),a(t,i)},o=[0,1,2,3,4],f=m(void 0),p=[[20,8,17,30,25],[15,25,10,35,20],[25,15,20,10,30],[4,12,23,34,19],[10,20,30,40,50]],h=m(!ve.current);var _=De(),y=s(_),b=v(d(y),2);te(b,{labelText:`Animations enabled`,get checked(){return R(h)},set checked(e){k(h,e,!0)}}),g(y);var S=v(y,2),C=e=>{var t=we(),n=d(t),r=d(n);i(r,()=>R(f)),g(n),H(v(n,4),{get value(){return R(f)},set value(e){k(f,e,!0)},children:(e,t)=>{var n=x(),r=s(n);F(r,17,()=>o,c,(e,t,n)=>{let r=j(()=>R(f)===n);U(e,()=>R(t),()=>R(f),()=>R(r))}),a(e,n)},$$slots:{default:!0}}),L(2),g(t),a(e,t)},T=e=>{var t=Ee();F(t,21,()=>o,c,(e,t)=>{var n=Te(),r=d(n),o=d(r);i(o,()=>R(t)),g(r),U(v(r,2),()=>R(t)),g(n),a(e,n)}),g(t),a(e,t)};P(S,e=>{R(h)?e(C):e(T,-1)}),a(t,_),D()}var ke=`{
  "title": "Donate your accent",
  "description": "Help The Pudding create an accent quiz",
  "url": "https://pudding.cool/projects/donate-your-accent",
  "places": [
    {
      "id": "st-louis",
      "name": "St. Louis",
      "demonym": "St. Louisans",
      "sentence": "Her beer is right there."
    },
    {
      "id": "minnesota",
      "name": "Minnesota",
      "demonym": "Minnesotans",
      "sentence": "Let’s play in the snow today."
    },
    {
      "id": "socal",
      "name": "SoCal",
      "demonym": "Southern Californians",
      "sentence": "Turn the lights down low."
    },
    {
      "id": "new-orleans",
      "name": "New Orleans",
      "demonym": "New Orleanians",
      "sentence": "Tk"
    }
  ],
  "choose": {
    "hed": "Donate your accent!",
    "label": "Which place?",
    "placeholder": "Choose a place"
  },
  "intro": {
    "hed": "Donate your {name} accent!",
    "dek": "We're creating an accent quiz and we need your help to showcase the unique ways {demonym} pronounce words."
  },
  "record": {
    "prompt": "Record yourself reading the following sentence:",
    "start": "Start recording",
    "stop": "Finish",
    "recording": "Recording…",
    "review": "Listen back to make sure it sounds clear.",
    "retry": "Try again",
    "tooShort": "That was too short. Try again and read the whole sentence.",
    "micDenied": "We need permission to use your microphone. Allow it in your browser settings, then try again.",
    "micMissing": "We couldn’t find a microphone. Plug one in or try another device.",
    "micBusy": "Your microphone is being used by another app. Close it and try again.",
    "micError": "We couldn’t access your microphone. Check your browser permissions and try again.",
    "unsupported": "Your browser can’t record audio. Try the latest Chrome, Safari, or Firefox.",
    "inApp": "Recording may not work in this app’s browser. If it doesn’t, open this page in Safari or Chrome."
  },
  "questions": {
    "hed": "Some final questions",
    "email": {
      "label": "If we want to follow up for a better recording, what email can we reach you at?",
      "hint": "We’ll only use this to contact you about your recording.",
      "placeholder": "you@example.com"
    },
    "demographics": {
      "hed": "Optional: tell us a bit about yourself",
      "hint": "This helps us make sure the quiz represents a range of voices."
    },
    "race": {
      "label": "Race or ethnicity (select all that apply)",
      "options": [
        {
          "value": "asian",
          "label": "Asian"
        },
        {
          "value": "black",
          "label": "Black or African American"
        },
        {
          "value": "hispanic",
          "label": "Hispanic or Latino"
        },
        {
          "value": "mena",
          "label": "Middle Eastern or North African"
        },
        {
          "value": "native",
          "label": "American Indian or Alaska Native"
        },
        {
          "value": "pacific",
          "label": "Native Hawaiian or Pacific Islander"
        },
        {
          "value": "white",
          "label": "White"
        },
        {
          "value": "other",
          "label": "Another race or ethnicity"
        },
        {
          "value": "no_answer",
          "label": "Prefer not to say"
        }
      ]
    },
    "age": {
      "label": "Age",
      "placeholder": "Select an age range",
      "options": [
        {
          "value": "under_18",
          "label": "Under 18"
        },
        {
          "value": "18_24",
          "label": "18–24"
        },
        {
          "value": "25_34",
          "label": "25–34"
        },
        {
          "value": "35_44",
          "label": "35–44"
        },
        {
          "value": "45_54",
          "label": "45–54"
        },
        {
          "value": "55_64",
          "label": "55–64"
        },
        {
          "value": "65_plus",
          "label": "65+"
        },
        {
          "value": "no_answer",
          "label": "Prefer not to say"
        }
      ]
    },
    "consent": {
      "label": "I agree that The Pudding may use my recording in an accent quiz."
    }
  },
  "submit": {
    "button": "Submit",
    "submitting": "Submitting…",
    "needsRecording": "Record the sentence above to submit.",
    "needsConsent": "Check the box above to submit.",
    "error": "Something went wrong saving your recording. Please try again."
  },
  "thanks": {
    "hed": "Thank you!",
    "text": "Your accent is on its way to us. Keep an eye out for the quiz."
  }
}`,Ae=t(`<p></p>`),je=t(`<details><summary></summary> <div class="content"><!></div></details>`);function Me(e,t){let n=j(()=>typeof t.content==`string`),i=j(()=>t.open===`true`);var o=je(),l=d(o);h(l,()=>t.summary,!0),g(l);var u=v(l,2),f=d(u),p=e=>{var n=x(),r=s(n);h(r,()=>t.content),a(e,n)},m=e=>{var n=x(),r=s(n);F(r,17,()=>t.content,c,(e,t)=>{let n=()=>R(t).value;var r=Ae();h(r,n,!0),g(r),a(e,r)}),a(e,n)};P(f,e=>{R(n)?e(p):e(m,-1)}),g(u),g(o),r(()=>{o.open=R(i),_(o,`name`,t.name)}),a(e,o)}var Ne=t(`<li></li>`),Pe=t(`<ul></ul>`);function Fe(e,t){var n=Pe();F(n,21,()=>t.li,c,(e,t)=>{var n=Ne();h(n,()=>R(t),!0),g(n),a(e,n)}),g(n),a(e,n)}var Ie=t(`<li></li>`),Le=t(`<ol></ol>`);function Re(e,t){var n=Le();F(n,21,()=>t.li,c,(e,t)=>{var n=Ie();h(n,()=>R(t),!0),g(n),a(e,n)}),g(n),a(e,n)}var ze=t(`<p></p>`),Be=t(`<section><!></section>`);function Ve(e,t){w(t,!0);let n={details:Me,ul:Fe,ol:Re},i=b(t,`components`,19,()=>({})),o=b(t,`body`,19,()=>[]);var l=x(),u=s(l);F(u,17,o,c,(e,t)=>{let o=()=>R(t).section,l=()=>R(t).content,u=j(()=>o().toLowerCase().replace(/[^a-z0-9]/g,``)),p=j(()=>i()[o()]);var m=Be(),v=d(m),y=e=>{var t=x(),n=s(t);N(n,()=>R(p),(e,t)=>{t(e,T(l))}),a(e,t)},b=e=>{var t=x(),r=s(t);F(r,17,l,c,(e,t,r,o)=>{let c=()=>R(t).type,l=()=>R(t).value,u=j(()=>i()[c()]||n[c()]),d=j(()=>typeof l()==`string`);var p=x(),m=s(p),_=e=>{var t=x(),n=s(t);N(n,()=>R(u),(e,t)=>{t(e,T(l))}),a(e,t)},v=e=>{var t=ze();h(t,l,!0),g(t),a(e,t)},y=e=>{var t=x(),n=s(t);f(n,c,!1,(e,t)=>{var n=x(),r=s(n);h(r,l),a(t,n)}),a(e,t)},b=e=>{var t=x(),n=s(t);f(n,c,!1,(e,t)=>{S(e,()=>({...l()}))}),a(e,t)};P(m,e=>{R(u)?e(_):c()===`text`?e(v,1):R(d)?e(y,2):e(b,-1)}),a(e,p)}),a(e,t)};P(v,e=>{R(p)?e(y):e(b,-1)}),g(m),r(()=>_(m,`id`,R(u))),a(e,m)}),a(e,l),D()}var He=t(`<p> </p> <progress max="100"></progress>`,1);function Ue(t,n){let i=b(n,`label`,3,`A`),o=b(n,`value`,3,0);var c=He(),l=s(c),d=e(l,!0),f=v(l,2);r(()=>{u(d,i()),y(f,o())}),a(t,c)}var We=t(`<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>`);function Ge(t,n){w(n,!0);let{body:i}=ne,o={Test:Ue};var s=We(),c=v(d(s),2),l=d(c),f=e(l,!0);g(c),Ve(v(c,2),{get components(){return o},get body(){return i}}),g(s),r(e=>u(f,e),[()=>ke.replace(/\t/g,` `)]),a(t,s),D()}var Ke=(t,n=l)=>{var i=Je(),o=d(i),s=e(o,!0),c=v(o,2),f=e(c,!0);g(i),r(()=>{u(s,n().name),u(f,n().age)}),a(t,i)},qe=new Set([`$$slots`,`$$events`,`$$legacy`,`name`,`age`,`renamed`,`value`,`children`,`random`]),Je=t(`<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>`),Ye=t(`<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>`,1);function Xe(t,i){w(i,!0),b(i,`age`,3,30),p(i,qe);let o=[{name:`John`,age:30},{name:`Jill`,age:45}],f=m(0),h=j(()=>R(f)*2),_=j(()=>R(f)*2),y=m(0);O(()=>{k(y,R(f)*2)});var x=Ye(),S=v(s(x),4),C=v(S,2),T=e(C),E=v(C,2),A=e(E),M=v(E,2),N=e(M),P=v(M,4),L=d(P);I(L,()=>i.children??l),g(P);var z=v(P,4),B=v(z,4);F(B,21,()=>o,c,(e,t)=>{Ke(e,()=>R(t))}),g(B),r(()=>{u(T,`${R(f)??``} doubled is ${R(h)??``} (derived)`),u(A,`${R(f)??``} doubled is ${R(_)??``} (derived by)`),u(N,`${R(f)??``} doubled is ${R(y)??``} ($effect)`)}),n(`click`,S,()=>ee(f)),n(`click`,z,()=>i.random(Math.floor(Math.random()*10))),a(t,x),D()}o([`click`]);var W={},G={},K=34,q=10,J=13;function Y(e){return Function(`d`,`return {`+e.map(function(e,t){return JSON.stringify(e)+`: d[`+t+`] || ""`}).join(`,`)+`}`)}function Ze(e,t){var n=Y(e);return function(r,i){return t(n(r),i,e)}}function X(e){var t=Object.create(null),n=[];return e.forEach(function(e){for(var r in e)r in t||n.push(t[r]=r)}),n}function Z(e,t){var n=e+``,r=n.length;return r<t?Array(t-r+1).join(0)+n:n}function Qe(e){return e<0?`-`+Z(-e,6):e>9999?`+`+Z(e,6):Z(e,4)}function $e(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?`Invalid Date`:Qe(e.getUTCFullYear(),4)+`-`+Z(e.getUTCMonth()+1,2)+`-`+Z(e.getUTCDate(),2)+(i?`T`+Z(t,2)+`:`+Z(n,2)+`:`+Z(r,2)+`.`+Z(i,3)+`Z`:r?`T`+Z(t,2)+`:`+Z(n,2)+`:`+Z(r,2)+`Z`:n||t?`T`+Z(t,2)+`:`+Z(n,2)+`Z`:``)}function et(e){var t=RegExp(`["`+e+`
\r]`),n=e.charCodeAt(0);function r(e,t){var n,r,a=i(e,function(e,i){if(n)return n(e,i-1);r=e,n=t?Ze(e,t):Y(e)});return a.columns=r||[],a}function i(e,t){var r=[],i=e.length,a=0,o=0,s,c=i<=0,l=!1;e.charCodeAt(i-1)===q&&--i,e.charCodeAt(i-1)===J&&--i;function u(){if(c)return G;if(l)return l=!1,W;var t,r=a,o;if(e.charCodeAt(r)===K){for(;a++<i&&e.charCodeAt(a)!==K||e.charCodeAt(++a)===K;);return(t=a)>=i?c=!0:(o=e.charCodeAt(a++))===q?l=!0:o===J&&(l=!0,e.charCodeAt(a)===q&&++a),e.slice(r+1,t-1).replace(/""/g,`"`)}for(;a<i;){if((o=e.charCodeAt(t=a++))===q)l=!0;else if(o===J)l=!0,e.charCodeAt(a)===q&&++a;else if(o!==n)continue;return e.slice(r,t)}return c=!0,e.slice(r,i)}for(;(s=u())!==G;){for(var d=[];s!==W&&s!==G;)d.push(s),s=u();t&&(d=t(d,o++))==null||r.push(d)}return r}function a(t,n){return t.map(function(t){return n.map(function(e){return u(t[e])}).join(e)})}function o(t,n){return n??=X(t),[n.map(u).join(e)].concat(a(t,n)).join(`
`)}function s(e,t){return t??=X(e),a(e,t).join(`
`)}function c(e){return e.map(l).join(`
`)}function l(t){return t.map(u).join(e)}function u(e){return e==null?``:e instanceof Date?$e(e):t.test(e+=``)?`"`+e.replace(/"/g,`""`)+`"`:e}return{parse:r,parseRows:i,format:o,formatBody:s,formatRows:c,formatRow:l,formatValue:u}}var Q=et(`,`),tt=Q.parse;Q.parseRows,Q.format,Q.formatBody,Q.formatRows,Q.formatRow,Q.formatValue;var $=(e,t)=>{let n=m(M(e)),r=m(null),i=m(!0),a=m(void 0),o=(e=!0)=>{k(i,e,!0),e===!0&&(k(a,null),k(r,null))},s=async()=>{try{let e=await fetch(R(n),t);if(!e.ok)throw Error(`Unexpected error occurred (status ${e.status})`);let r;return r=R(n).includes(`.csv`)?tt(await e.text()):await e.json(),[null,r]}catch(e){let{errorMessage:t=`Unexpected error eccurred`}=e;return[t,null]}},c=async e=>{o(!0);let[t,i]=await s();if(e===R(n)){if(t){o(!1),k(a,t,!0);return}o(!1),k(r,i,!0)}};return O(()=>{c(R(n))}),{get data(){return R(r)},get loading(){return R(i)},get error(){return R(a)},get url(){return R(n)},set url(e){R(n)!==e&&k(n,e,!0)}}},nt=t(`<p>loading data...</p>`),rt=t(`<p> </p>`),it=t(`<p>data loaded</p> <pre> </pre>`,1),at=t(`<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>`);function ot(t,n){w(n,!0);let i=$(`${z}/assets/demo/test.csv`);O(()=>{});var o=at(),c=v(d(o),2),l=d(c),f=e=>{var t=nt();a(e,t)},p=t=>{var n=rt(),o=e(n);r(()=>u(o,`error: ${i.error??``}`)),a(t,n)},m=t=>{var n=it(),o=v(s(n),2),c=e(o,!0);r(e=>u(c,e),[()=>JSON.stringify(i.data,null,2)]),a(t,n)};P(l,e=>{i.loading?e(f):i.error?e(p,1):e(m,-1)}),g(c),g(o),a(t,o),D()}var st=t('<h2>Content Blocks</h2> <section id="demo-blocks" class="blocks-container svelte-1tadjbb"><div class="block-narrow svelte-1tadjbb"><p class="svelte-1tadjbb">Narrow Content goes here</p></div> <div class="block-content svelte-1tadjbb"><p class="svelte-1tadjbb">Default Content goes here</p></div> <div class="no-bg svelte-1tadjbb"><p class="svelte-1tadjbb">Example of default content without background</p></div> <div class="block-wide svelte-1tadjbb"><p class="svelte-1tadjbb">Wide content goes here</p></div> <div class="block-wider svelte-1tadjbb"><p class="svelte-1tadjbb">Wider content goes here</p></div> <div class="block-widest svelte-1tadjbb"><p class="svelte-1tadjbb">Widest goes here</p></div> <div class="block-full svelte-1tadjbb"><p class="svelte-1tadjbb">Full bleed content goes here</p></div> <div class="block-full blocks-container svelte-1tadjbb"><p class="svelte-1tadjbb">Full bleed parent container with child content. You can recursively apply\n			`.blocks-container` to keep consistent alignment.</p></div></section>',1);function ct(e){var t=st();L(2),a(e,t)}var lt=t(`<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div>`);function ut(e){let t=m(0);function n(e){console.log(e)}var r=lt(),i=v(d(r),2);ie(i,{});var o=v(i,2);oe(o,{});var s=v(o,2);ce(s,{});var c=v(s,2);pe(c,{});var l=v(c,2);Ge(l,{});var u=v(l,2);ot(u,{});var f=v(u,2);ct(f,{});var p=v(f,2);_e(p,{});var h=v(p,2);Oe(h,{}),Xe(v(h,2),{random:n,get value(){return R(t)},set value(e){k(t,e,!0)}}),g(r),a(e,r)}function dt(e){ut(e,{})}export{dt as component};