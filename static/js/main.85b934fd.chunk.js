(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{198:function(e,t,n){},199:function(e,t,n){},242:function(e,t,n){},390:function(e,t,n){},391:function(e,t,n){},392:function(e,t,n){},393:function(e,t,n){},394:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(176),i=n.n(a),r=(n(198),n(72)),o=n(6),j=n(30),l=(n(199),n(1));function u(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],u=i[1];return Object(l.jsx)("div",{className:"joinOuterContainer",children:Object(l.jsxs)("div",{className:"joinInnerContainer",children:[Object(l.jsx)("h1",{className:"heading",children:"Chat Now!"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return s(e.target.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})}),Object(l.jsx)(r.b,{onClick:function(e){return n&&o?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(l.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})}var m,b=n(193),d=n(178),h=n.n(d),O=n(179),A=n.n(O),x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=",g=(n(242),function(e){var t=e.users;return Object(l.jsxs)("div",{className:"textContainer",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Realtime Chat Application ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\ud83d\udcac"})]}),Object(l.jsxs)("h2",{children:["Created with React, Express, Node and Socket.IO ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2764\ufe0f"})]}),Object(l.jsxs)("h2",{children:["Try it out right now! ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2b05\ufe0f"})]})]}),t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"People currently chatting:"}),Object(l.jsx)("div",{className:"activeContainer",children:Object(l.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(l.jsxs)("div",{className:"activeItem",children:[t,Object(l.jsx)("img",{alt:"Online Icon",src:x})]},t)}))})})]}):null]})}),f=n(192),p=(n(390),n(111)),v=n.n(p),N=function(e){var t=e.message,n=t.text,c=t.user,s=!1,a=e.name.trim().toLowerCase();return c===a&&(s=!0),s?Object(l.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(l.jsx)("p",{className:"sentText pr-10",children:a}),Object(l.jsx)("div",{className:"messageBox backgroundBlue",children:Object(l.jsx)("p",{className:"messageText colorWhite",children:v.a.emojify(n)})})]}):Object(l.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(l.jsx)("div",{className:"messageBox backgroundLight",children:Object(l.jsx)("p",{className:"messageText colorDark",children:v.a.emojify(n)})}),Object(l.jsx)("p",{className:"sentText pl-10 ",children:c})]})},C=(n(391),function(e){var t=e.messages,n=e.name;return Object(l.jsx)(f.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(N,{message:e,name:n})},t)}))})}),I=(n(392),function(e){var t=e.room;return Object(l.jsxs)("div",{className:"infoBar",children:[Object(l.jsxs)("div",{className:"leftInnerContainer",children:[Object(l.jsx)("img",{className:"onlineIcon",src:x,alt:"online icon"}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{className:"rightInnerContainer",children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close icon"})})})]})}),S=(n(393),function(e){var t=e.setMessage,n=e.sendMessage,c=e.message;return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:c,onChange:function(e){var n=e.target.value;return t(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(l.jsx)("button",{className:"sendButton",onClick:function(e){return n(e)},children:"Send"})]})}),y=(n(394),"https://chat-now012.herokuapp.com/"),w=function(e){var t=e.location,n=Object(c.useState)(""),s=Object(j.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)(""),o=Object(j.a)(r,2),u=o[0],d=o[1],O=Object(c.useState)(""),x=Object(j.a)(O,2),f=x[0],p=x[1],v=Object(c.useState)(""),N=Object(j.a)(v,2),w=N[0],E=N[1],R=Object(c.useState)([]),B=Object(j.a)(R,2),M=B[0],k=B[1];Object(c.useEffect)((function(){var e=h.a.parse(t.search),n=e.name,c=e.room;m=A()(y),d(c),i(n),m.emit("join",{name:n,room:c},(function(e){e&&alert(e)}))}),[y,t.search]),Object(c.useEffect)((function(){m.on("message",(function(e){k((function(t){return[].concat(Object(b.a)(t),[e])}))})),m.on("roomData",(function(e){var t=e.users;p(t)}))}),[]);return Object(l.jsxs)("div",{className:"outerContainer",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(I,{room:u}),Object(l.jsx)(C,{messages:M,name:a}),Object(l.jsx)(S,{message:w,setMessage:E,sendMessage:function(e){e.preventDefault(),w&&m.emit("sendMessage",w,(function(){return E("")}))}})]}),Object(l.jsx)(g,{users:f})]})};n(395);var E=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(o.a,{path:"/chat",component:w})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,397)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),R()}},[[396,1,2]]]);
//# sourceMappingURL=main.85b934fd.chunk.js.map