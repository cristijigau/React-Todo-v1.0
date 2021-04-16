(this["webpackJsonpreact-todo-v1.0"]=this["webpackJsonpreact-todo-v1.0"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},15:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var o=c(1),s=c.n(o),n=c(7),a=c.n(n),i=(c(13),c(3)),r=(c(14),c(15),"completed"),j="uncompleted",d="progress",u="light",l=Object(o.createContext)(u),b=c(0),O=function(t){var e=t.setStatus,c=Object(o.useContext)(l);return Object(b.jsx)("div",{className:"select ".concat(c),children:Object(b.jsxs)("select",{onChange:function(t){e(t.target.value)},name:"todos",className:"filter-todo ".concat(c),children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:r,children:"Completed"}),Object(b.jsx)("option",{value:j,children:"Uncompleted"}),Object(b.jsx)("option",{value:d,children:"In Progress"})]})})},x=c(2),f=c(8),m=Object(o.createContext)({todos:[],setTodos:function(){},action:"add",setAction:function(){},itemToEdit:void 0,setItemToEdit:function(){},inputText:"",setInputText:function(){}}),p=function(t){var e=t.todos,c=Object(o.useContext)(m),s=c.action,n=c.setAction,a=c.setTodos,i=c.inputText,r=c.setInputText,j=c.itemToEdit,d=Object(o.useContext)(l),u=function(t){t.preventDefault(),a([].concat(Object(f.a)(e),[{id:100*Math.random(),text:i,completed:!1,progress:!1}])),r("")},O=function(t){t.preventDefault(),a(e.map((function(t){return t.id===j?Object(x.a)(Object(x.a)({},t),{},{text:i}):t}))),r(""),n("add")};return function(){switch(s){case"add":return Object(b.jsx)("button",{onClick:u,className:"todo-button ".concat(d),type:"submit",children:Object(b.jsx)("i",{className:"fas fa-plus-circle"})});case"edit":return Object(b.jsx)("button",{onClick:O,className:"todo-button ".concat(d),type:"submit",children:Object(b.jsx)("i",{className:"fas fa-pen-square"})})}}()},h=function(){var t=Object(o.useContext)(m),e=t.inputText,c=t.setInputText,s=Object(o.useContext)(l);return Object(b.jsx)("input",{value:e,onChange:function(t){c(t.target.value)},type:"text",className:"todo-input ".concat(s)})},v=function(t){var e=t.todos,c=t.setFilteredTodos,s=Object(o.useState)("all"),n=Object(i.a)(s,2),a=n[0],u=n[1];Object(o.useEffect)((function(){l()}),[e,a]);var l=function(){switch(a){case r:c(e.filter((function(t){return t.completed})));break;case j:c(e.filter((function(t){return!t.completed})));break;case d:c(e.filter((function(t){return t.progress})));break;default:c(e)}};return Object(b.jsxs)("form",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(p,{todos:e}),Object(b.jsx)(O,{setStatus:u})]})},T=function(t){var e=t.toggleTheme;return Object(b.jsxs)("div",{className:"theme-switch",children:[Object(b.jsx)("input",{type:"checkbox",className:"checkbox",id:"checkbox",onClick:e}),Object(b.jsxs)("label",{htmlFor:"checkbox",className:"label",children:[Object(b.jsx)("i",{className:"fas fa-moon fa-xs"}),Object(b.jsx)("i",{className:"fas fa-sun fa-xs"}),Object(b.jsx)("div",{className:"ball"})]})]})},C=function(t){var e=t.todo,c=Object(o.useContext)(m),s=c.setTodos,n=c.todos,a=Object(o.useContext)(l);return Object(b.jsx)("button",{onClick:function(){s(n.map((function(t){return t.id===e.id?Object(x.a)(Object(x.a)({},t),{},{progress:!1,completed:!t.completed}):t})))},className:"complete-btn ".concat(a),children:Object(b.jsx)("i",{className:"fas fa-check"})})},N=function(t){var e=t.todo,c=Object(o.useContext)(m),s=c.setTodos,n=c.todos,a=Object(o.useContext)(l);return Object(b.jsx)("button",{onClick:function(){s(n.filter((function(t){return t.id!==e.id})))},className:"trash-btn ".concat(a),children:Object(b.jsx)("i",{className:"fas fa-trash"})})},g=function(t){var e=t.todo,c=Object(o.useContext)(m),s=c.setAction,n=c.setItemToEdit,a=c.setInputText,i=Object(o.useContext)(l);return Object(b.jsx)("button",{onClick:function(){s("edit"),a(e.text),n(e.id)},className:"edit-btn ".concat(i),children:Object(b.jsx)("i",{className:"fas fa-edit"})})},k=function(t){var e=t.todo,c=Object(o.useContext)(m),s=c.setTodos,n=c.todos,a=Object(o.useContext)(l);return Object(b.jsx)("button",{onClick:function(){s(n.map((function(t){return t.id===e.id?Object(x.a)(Object(x.a)({},t),{},{progress:!t.progress}):t})))},disabled:e.completed,className:"progress-btn ".concat(e.completed?"disabled":""," ").concat(a),children:Object(b.jsx)("i",{className:"fas fa-spinner"})})},I=function(t){var e=t.todo,c=Object(o.useContext)(l);return Object(b.jsxs)("div",{className:"todo",children:[Object(b.jsx)("li",{className:"todo-item ".concat(e.completed?r:""," ").concat(e.progress?"in-progress":""," ").concat(c),children:e.text}),Object(b.jsx)(g,{todo:e}),Object(b.jsx)(k,{todo:e}),Object(b.jsx)(C,{todo:e}),Object(b.jsx)(N,{todo:e})]})},S=function(t){var e=t.filteredTodos;return Object(b.jsx)("div",{className:"todo-container",children:Object(b.jsx)("ul",{className:"todo-list",children:e.map((function(t){return Object(b.jsx)(I,{todo:t},t.id)}))})})};var E=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),c=e[0],s=e[1],n=Object(o.useState)("add"),a=Object(i.a)(n,2),r=a[0],j=a[1],d=Object(o.useState)(void 0),O=Object(i.a)(d,2),x=O[0],f=O[1],p=Object(o.useState)([]),h=Object(i.a)(p,2),C=h[0],N=h[1],g=Object(o.useState)(""),k=Object(i.a)(g,2),I=k[0],E=k[1],A=Object(o.useState)(u),w=Object(i.a)(A,2),y=w[0],F=w[1];return Object(b.jsxs)("div",{className:"App  ".concat(y),children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Todo List"}),Object(b.jsx)(T,{toggleTheme:function(){F(y===u?"dark":u)}})]}),Object(b.jsx)(m.Provider,{value:{todos:c,setTodos:s,action:r,setAction:j,setItemToEdit:f,setInputText:E,itemToEdit:x,inputText:I},children:Object(b.jsxs)(l.Provider,{value:y,children:[Object(b.jsx)(v,{setFilteredTodos:N,todos:c}),Object(b.jsx)(S,{filteredTodos:C})]})})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.becf7a26.chunk.js.map