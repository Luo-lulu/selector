(this.webpackJsonpselector=this.webpackJsonpselector||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),s=n.n(o),a=n(6),r=n.n(a),i=(n(14),n(8)),u=n(3);var l=function(e){var t=Object(o.useState)(""),n=Object(u.a)(t,2),s=n[0],a=n[1],r=Object(o.useRef)(null);return Object(o.useEffect)((function(){r.current.focus()})),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e5*Math.random()),text:s}),a("")},children:[Object(c.jsx)("input",{ref:r,type:"text",className:"choose__input",value:s,onChange:function(e){a(e.target.value)},name:"text",placeholder:"Some Ideas..."}),Object(c.jsx)("button",{className:"add__btn",children:"Add"})]})},j=n(7);var d=function(e){var t=e.chooses,n=e.removeChoose;return t.map((function(e,t){return Object(c.jsxs)("div",{className:"choose",children:[Object(c.jsx)("div",{className:"choose__text",children:e.text},e.id),Object(c.jsx)("div",{className:"icon__delete",children:Object(c.jsx)(j.a,{onClick:function(){n(e.id)},className:"delete__icon"})})]},t)}))};var b=function(e){var t=e.chooses,n=e.randomChoose,o=e.result;return Object(c.jsxs)("div",{className:"random__block",children:[Object(c.jsx)("button",{className:"random__btn",onClick:function(){n(t)},children:"\u62bd\u7c64"}),Object(c.jsx)("div",{className:"random__result",children:o.text})]})};n(15);var h=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(o.useState)(""),r=Object(u.a)(a,2),j=r[0],h=r[1];return Object(c.jsxs)("div",{className:"meal__list",children:[Object(c.jsx)("h1",{children:"If i have no idea.."}),Object(c.jsx)(l,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(i.a)(n));s(t)}}}),Object(c.jsx)(d,{chooses:n,removeChoose:function(e){var t=n.filter((function(t){return t.id!==e}));s(t)}}),Object(c.jsx)(b,{randomChoose:function(){var e=Math.floor(Math.random()*n.length),t=n[e];h(t)},result:j})]})};var f=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(h,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.fe8edfb5.chunk.js.map