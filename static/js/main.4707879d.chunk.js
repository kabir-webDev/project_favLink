(this.webpackJsonpfavlinks=this.webpackJsonpfavlinks||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),u=(a(15),a(7)),i=a(2),m=a(3),o=a(6),s=a(5),h=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"URL"),l.a.createElement("th",null,"Remove")))},v=function(e){var t=e.linkData.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.name),l.a.createElement("td",null,l.a.createElement("a",{href:t.URL},t.URL)),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.removeLink(a)}},"Delete")))}));return l.a.createElement("tbody",null,t)},f=function(e){var t=e.linkData,a=e.removeLink;return l.a.createElement("table",null,l.a.createElement(h,null),l.a.createElement(v,{linkData:t,removeLink:a}))},b=a(4),E=a(1),k=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(E.a)(Object(E.a)({},n.state),{},Object(b.a)({},e.name,e.value)))},n.onFormSubmit=function(e){e.preventDefault();var t=n.state.name,a=n.state.URL,l=n.state.list;l.push({name:t,URL:a}),n.setState(Object(E.a)(Object(E.a)({},n.state),{},{list:l})),n.setState({name:""}),n.setState({URL:""}),n.props.handleSubmit(n.state.list)},n.state={name:"",URL:"",list:[]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.onFormSubmit},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t.target)}}),l.a.createElement("br",null),l.a.createElement("label",null,"URL:"),l.a.createElement("input",{type:"text",name:"URL",value:this.state.URL,onChange:function(t){return e.handleChange(t.target)}}),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),a}(n.Component),d=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).removeCharacter=function(e){console.log("Boom!! Deleted...."),console.log(e),e>-1&&(n.state.favLinks.splice(e,1),n.setState({favLinks:Object(u.a)(n.state.favLinks)}))},n.handleSubmit=function(e){e.map((function(e){return n.setState({favLinks:[].concat(Object(u.a)(n.state.favLinks),[e])})})),console.log(e),console.log(n.state.favLinks)},n.state={favLinks:[]},n}return Object(m.a)(a,[{key:"render",value:function(){return console.log(this.state.favLinks),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"My Favorite Links"),l.a.createElement("p",null,"Add a new url with a name and link to the table."),l.a.createElement(f,{linkData:this.state.favLinks,removeLink:this.removeCharacter}),l.a.createElement("br",null),l.a.createElement("h3",null,"Add New"),l.a.createElement(k,{handleSubmit:this.handleSubmit}))}}]),a}(l.a.Component);var p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null))};c.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4707879d.chunk.js.map