(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,n){e.exports=n(60)},36:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),c=n.n(o),u=(n(36),n(3)),i=n.n(u),l=n(10),s=n(9),p=n(12),g=n(1),m=n(29),f=n.n(m),d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLEID:"956237608940-rkcol4ero2rjnoitf08okr0nbkvjjgq8.apps.googleusercontent.com"}).REACT_APP_API?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLEID:"956237608940-rkcol4ero2rjnoitf08okr0nbkvjjgq8.apps.googleusercontent.com"}).REACT_APP_API,"/api"):"/api";console.log("coolbeans",d);var v=window.localStorage.getItem("token");console.log(v,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLEID:"956237608940-rkcol4ero2rjnoitf08okr0nbkvjjgq8.apps.googleusercontent.com"}));var E=f.a.create({withCredentials:!0,baseURL:d,headers:{Authorization:"Bearer ".concat(v)}}),O={getUser:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/user");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("/signup",t);case 2:return r=e.sent,window.localStorage.setItem("token",null===(n=r.data)||void 0===n?void 0:n.token),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logIn:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("/login",t);case 2:return r=e.sent,window.localStorage.setItem("token",null===(n=r.data)||void 0===n?void 0:n.token),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.removeItem("token"),e.next=3,E.get("/logout");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},b=function(e){var t=Object(r.useState)("kiwi"),n=Object(s.a)(t,2),o=n[0],c=n[1];Object(r.useEffect)((function(){c("passion fruit")}),[]);return a.a.createElement("div",null,"Home ",o,a.a.createElement("button",{onClick:function(){c("pineapple")}},"Change Fruit"))};var j=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Not found"))},h=n(7),S=function(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1],u=Object(r.useState)(""),i=Object(s.a)(u,2),l=i[0],p=i[1];return a.a.createElement(r.Fragment,null,a.a.createElement("h2",null,"SignUP"),a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log(o,l),O.signUp({email:o,password:l}).then((function(t){console.log(t.data),e.setUser(Object(h.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))}},a.a.createElement("input",{name:"email",type:"email",onChange:function(e){return c(e.target.value)}}),a.a.createElement("input",{name:"password",type:"password",onChange:function(e){return p(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"Sign Up"})))};var w=function(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1],u=Object(r.useState)(""),i=Object(s.a)(u,2),l=i[0],p=i[1];return a.a.createElement(r.Fragment,null,a.a.createElement("h2",null,"LogIn"),a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log(o,l),O.logIn({email:o,password:l}).then((function(t){console.log(t.data),e.setUser(Object(h.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))}},a.a.createElement("input",{name:"email",type:"email",onChange:function(e){return c(e.target.value)}}),a.a.createElement("input",{name:"password",type:"password",onChange:function(e){return p(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"Log In"})))},_=function(e){var t,n;return console.log(e),(null===e||void 0===e?void 0:e.user)||e.history.push("/log-in"),a.a.createElement("div",null,"Profile Welcome ",null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.email," ",a.a.createElement("img",{src:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.imageUrl}),"!!!")},k=n(14),P=function(e){var t=function(t){var n;console.log(t);var r=Object(h.a)(Object(h.a)({},t.profileObj),{},{password:null===(n=t.profileObj)||void 0===n?void 0:n.googleId});O.signUp(r).then((function(t){e.setUser(Object(h.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))};return a.a.createElement(k.GoogleLogin,{clientId:"956237608940-rkcol4ero2rjnoitf08okr0nbkvjjgq8.apps.googleusercontent.com",buttonText:"Signup",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},C=function(e){var t=function(t){var n;console.log(t);var r=Object(h.a)(Object(h.a)({},t.profileObj),{},{password:null===(n=t.profileObj)||void 0===n?void 0:n.googleId});O.logIn(r).then((function(t){e.setUser(Object(h.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))};return a.a.createElement(k.GoogleLogin,{clientId:"956237608940-rkcol4ero2rjnoitf08okr0nbkvjjgq8.apps.googleusercontent.com",buttonText:"Login",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},T=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getUser();case 2:t=e.sent,console.log("user is",t),o(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var c=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.logOut();case 2:e.sent,o(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(p.a,null,null===n||void 0===n?void 0:n.email,a.a.createElement("nav",null,a.a.createElement(p.b,{to:"/"},"Home ||"),n?a.a.createElement(r.Fragment,null,a.a.createElement(p.b,{onClick:c,to:"/"},"Log Out |"),a.a.createElement(p.b,{to:"/profile"},"Profile||")):a.a.createElement(r.Fragment,null,a.a.createElement(p.b,{to:"/sign-up"},"Sign Up |"),a.a.createElement(p.b,{to:"/log-in"},"Log In |"))),a.a.createElement(g.c,null,a.a.createElement(g.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(b,e)}}),a.a.createElement(g.a,{exact:!0,path:"/sign-up",render:function(e){return a.a.createElement(S,Object.assign({},e,{setUser:o}))}}),a.a.createElement(g.a,{exact:!0,path:"/log-in",render:function(e){return a.a.createElement(w,Object.assign({},e,{setUser:o}))}}),a.a.createElement(g.a,{exact:!0,path:"/profile",render:function(e){return a.a.createElement(_,Object.assign({},e,{user:n}))}}),a.a.createElement(g.a,{component:j})),!n&&a.a.createElement(P,{setUser:o}),!n&&a.a.createElement(C,{setUser:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.4db4661c.chunk.js.map