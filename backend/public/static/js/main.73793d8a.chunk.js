(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),c=(a(33),a(34),a(11)),u=a(7),s=a(8),i="https://immersive-demo.herokuapp.com",m=r.a.createContext(),E=function(e){var t=r.a.useState([]),a=Object(s.a)(t,2),n=a[0],o=a[1],l=r.a.useState(!1),c=Object(s.a)(l,2),u=c[0],E=c[1],d=r.a.useState(""),h=Object(s.a)(d,2),p=h[0],f=h[1];return r.a.createElement(m.Provider,{value:{users:n,loggedIn:u,checkUser:function(e,t){var a=!1;return fetch("".concat(i,"/").concat("api/v1","/login"),{method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify({userName:e,password:t})}).then((function(e){if(!e.ok)throw new Error("Login Error");return e.json()})).then((function(e){console.log(Response),e.hasOwnProperty("authenticated")&&(E(e.authenticated),!0===e.authenticated&&f(e.token),a=e.authenticated)})).catch((function(e){console.log(e.message)})),a},setUsers:o,token:p}},e.children)},d=m.Consumer,h=a(27),p=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return r.a.createElement(d,null,(function(e){var n=e.loggedIn;return r.a.createElement(u.b,Object.assign({render:function(e){return n?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/"})}},a))}))},f=a(6),g=a(13),v=function(e){var t=r.a.useState(""),a=Object(s.a)(t,2),o=a[0],l=a[1],u=r.a.useState(""),E=Object(s.a)(u,2),h=E[0],p=E[1],v=Object(n.useContext)(m).token;return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"signUpUserName"},r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Username",onChange:function(e){e.preventDefault(),l(e.target.value)},value:o})),r.a.createElement(f.a.Group,{controlId:"signUpPassword"},r.a.createElement(f.a.Label,null," New Password"),r.a.createElement(f.a.Control,{type:"password",placeholder:"Password",onChange:function(e){e.preventDefault(),p(e.target.value)},value:h})),r.a.createElement(g.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault();try{!function(e,t,a){console.log(a),fetch(e,{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(t){if(!t.ok)throw new Error("Error with POST at ".concat(e));return t.json()})).catch((function(e){throw e}))}("".concat(i,"/").concat("api/v1","/users"),v,{userName:o,password:h}),console.log("added")}catch(t){console.log(t.message)}}},"Submit")),r.a.createElement("br",null),r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(d,null,(function(e){return e.loggedIn?r.a.createElement("h3",null,"Logged In"):r.a.createElement("h3",null,"Not Logged In")})))},w=function(e){var t=r.a.useState(""),a=Object(s.a)(t,2),n=a[0],o=a[1],l=r.a.useState(""),u=Object(s.a)(l,2),i=u[0],E=u[1],h=r.a.useContext(m).checkUser;return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"loginUserName"},r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Username",onChange:function(e){e.preventDefault(),o(e.target.value)},value:n})),r.a.createElement(f.a.Group,{controlId:"loginPassword"},r.a.createElement(f.a.Label,null," New Password"),r.a.createElement(f.a.Control,{type:"password",placeholder:"Password",onChange:function(e){e.preventDefault(),E(e.target.value)},value:i})),r.a.createElement(g.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),h(n,i)}},"Submit")),r.a.createElement("br",null),r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(d,null,(function(e){return e.loggedIn?r.a.createElement("h3",null,"Logged In"):r.a.createElement("h3",null,"Not Logged In")})))},b=function(e){var t=r.a.useState(""),a=Object(s.a)(t,2),n=a[0],o=a[1],l=r.a.useState(""),u=Object(s.a)(l,2),m=u[0],E=u[1];return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"forgotPassUserName"},r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Username",onChange:function(e){e.preventDefault(),o(e.target.value)},value:n})),r.a.createElement(f.a.Group,{controlId:"forgotPassPassword"},r.a.createElement(f.a.Label,null," New Password"),r.a.createElement(f.a.Control,{type:"password",placeholder:"New Password",onChange:function(e){e.preventDefault(),E(e.target.value)},value:m})),r.a.createElement(g.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault();try{t="".concat(i,"/").concat("api/v1","/users/").concat(n),a={password:m},fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(!e.ok)throw new Error("Error with PUT at ".concat(t));return e.json()})).catch((function(e){throw e})),console.log("Patched")}catch(r){console.log(r.message)}var t,a}},"Submit")),r.a.createElement("br",null),r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(d,null,(function(e){return e.loggedIn?r.a.createElement("h3",null,"Logged In"):r.a.createElement("h3",null,"Not Logged In")})))};var y=function(e){var t=r.a.useContext(m),a=t.users,n=t.loggedIn;return r.a.createElement("div",null,a.map((function(e){return r.a.createElement("li",{key:e.username},e.username)})),r.a.createElement("br",null),r.a.createElement(c.b,{to:"signup"},"Sign Up"),r.a.createElement("br",null),r.a.createElement(c.b,{to:"login"},"Login"),r.a.createElement("br",null),r.a.createElement(c.b,{to:"Forgotpw"},"Forgot Password"),r.a.createElement("br",null),r.a.createElement(c.b,{to:"admin"},"Edit Users"),n?r.a.createElement("h3",null,"Logged In"):r.a.createElement("h3",null,"Not Logged In"))},C=a(17),j=a(16),O=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(e.user.userName),u=Object(s.a)(c,2),m=u[0],E=u[1],d=Object(n.useState)(e.password),h=Object(s.a)(d,2),p=h[0],v=h[1],w=function(){return l(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"primary",onClick:function(){return l(!0)}},"Edit"),r.a.createElement(j.a,{show:o,onHide:w},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,"Editing ".concat(m))),r.a.createElement(j.a.Body,null,r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"editUserModalUserName"},r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Username",onChange:function(e){e.preventDefault(),E(e.target.value)},value:m})),r.a.createElement(f.a.Group,{controlId:"editUserModalPassword"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",placeholder:"Password",onChange:function(e){e.preventDefault(),v(e.target.value)},value:p})))),r.a.createElement(j.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",onClick:w},"Cancel"),r.a.createElement(g.a,{variant:"primary",onClick:function(t){t.preventDefault();try{a="".concat(i,"/").concat("api/v1","/users/").concat(e.user.userName),n={userName:m,password:p},fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw new Error("Error with PUT at ".concat(a));return e.json()})).catch((function(e){throw e})),console.log("updated")}catch(r){console.log(r.message)}var a,n;l(!1),e.refresh()}},"Save Changes"))))},S=function(e){return r.a.createElement("div",null,r.a.createElement(C.a,{style:{width:"18rem"}},r.a.createElement(C.a.Img,{variant:"top",src:"holder.js/100px180"}),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,e.user.userName),r.a.createElement(C.a.Text,null,"motorcycle goes BRRRRRRRRR"),r.a.createElement(O,{user:e.user,refresh:e.refresh}),r.a.createElement(g.a,{variant:"primary",onClick:function(t){var a;(a="".concat(i,"/").concat("api/v1","/users/").concat(e.user.userName),e.user,fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Error with DELETE at ".concat(a));return e.json()})).catch((function(e){throw e}))).then((function(t){e.refresh()})).catch((function(e){console.log(e.message)}))}},"Delete"))))},k=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),o=a[0],l=a[1],c=function(){var e;(e="".concat(i,"/").concat("api/v1","/users"),fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){if(!t.ok)throw new Error("Error with GET at ".concat(e));return t.json()})).catch((function(e){throw e}))).then((function(e){l(e)})).catch((function(e){console.log(e)}))};return Object(n.useEffect)((function(){c()}),[]),r.a.createElement("div",null,r.a.createElement("h2",null," users "),o.map((function(e){return r.a.createElement(S,{key:e._id,user:e,refresh:c})})))};function P(){return r.a.createElement(E,null,r.a.createElement(c.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/signup",component:v}),r.a.createElement(u.b,{path:"/login",component:w}),r.a.createElement(u.b,{path:"/Forgotpw",component:b}),r.a.createElement(p,{path:"/admin",component:k}),r.a.createElement(u.b,{path:"/",component:y}))))}var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.73793d8a.chunk.js.map