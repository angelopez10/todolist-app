(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(t,e,a){t.exports=a(24)},18:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(5),r=a.n(c),o=(a(18),a(6)),l=a(7),u=a(11),i=a(8),d=a(12),m=a(9),k=a(10),p=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(u.a)(this,Object(i.a)(e).call(this,t))).addTask=function(t){13===t.keyCode&&""!==t.target.value&&(a.setState({tasks:a.state.tasks.concat(t.target.value),counter:a.state.counter+1}),t.target.value="")},a.deleteTask=function(t){var e=Object.assign({},a.state);e.tasks.splice(t,1),a.setState({newState:e,counter:a.state.counter-1})},a.state={tasks:[],counter:0},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{id:"mainDiv"},s.a.createElement("h1",null,"TODOS"),s.a.createElement("ul",{className:"content"},s.a.createElement("input",{className:"content",name:"nowrap",type:"text",placeholder:"What needs to be done?",onKeyDown:function(e){return t.addTask(e)}}),this.state.tasks.map((function(e,a){return s.a.createElement("li",{key:a},e,s.a.createElement("span",{onClick:function(e){return t.deleteTask(a)}},s.a.createElement(m.a,{icon:k.a})))})),s.a.createElement("p",null,this.state.counter," items left")))}}]),e}(n.Component);r.a.render(s.a.createElement(p,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5237e5c0.chunk.js.map