(this["webpackJsonpgym-log"]=this["webpackJsonpgym-log"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),a=n.n(i),u=(n(12),n(7)),o=n(2),s=(n(13),n(0));var j=function(){return Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)("h2",{children:"gTrack"})})};var d=function(e){var t=e.onClickAdd,n=void 0===t?function(e){return e}:t,r=e.buttonLabel,i=void 0===r?"Add":r,a=Object(c.useState)(""),u=Object(o.a)(a,2),j=u[0],d=u[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",value:j,onChange:function(e){return d(e.target.value)}}),Object(s.jsx)("button",{type:"button",onClick:function(){return n(j)},children:i})]})},b=n(19);var l,O=function(e){var t=e.exercises;return t.length?Object(s.jsx)(s.Fragment,{children:t.map((function(e){return Object(s.jsxs)("div",{children:[e.id," - ",e.name," - ",e.category]},e.id)}))}):null};n(15);!function(e){e.CHEST="CHEST",e.BACK="BACK",e.BICEPS="BICEPS",e.TRICEPS="TRICPES",e.LEGS="LEGS"}(l||(l={}));var f=function(e){var t=e.exercises,n=e.onAddExercise,r=void 0===n?function(e){return e}:n,i=Object(c.useState)(l.CHEST),a=Object(o.a)(i,2),u=a[0],j=a[1];function f(e){if(e.length&&!function(e){return!!t.find((function(t){return t.name===e}))}(e)){var n={id:Object(b.a)(),name:e,category:u,history:[]};r(n)}}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"ex-input-cont",children:[Object(s.jsx)("select",{value:u,onChange:function(e){return j(e.target.value)},children:Object.keys(l).map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))}),Object(s.jsx)(d,{onClickAdd:function(e){return f(e)},buttonLabel:"Add Exercise"})]}),Object(s.jsx)(O,{exercises:t})]})};n(16);var x=function(){var e=function(e,t){var n=localStorage.getItem(e),r=n?JSON.parse(n):t,i=Object(c.useState)(r),a=Object(o.a)(i,2),u=a[0],s=a[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(u))}),[e,u]),[u,s]}("exList",[]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j,{}),Object(s.jsx)(f,{exercises:n,onAddExercise:function(e){return r([].concat(Object(u.a)(n),[e]))}})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.11560e47.chunk.js.map