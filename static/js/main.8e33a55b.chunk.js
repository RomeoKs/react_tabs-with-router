(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(9),s=a.n(c),n=a(4),i=(a(14),a(15),a(16),a(6)),b=a.n(i),l=a(1),j=a(2),d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],r=function(){var e,t=Object(l.g)().tabId,a=d.find((function(e){return e.id===t}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:d.map((function(e){var t;return Object(j.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":(null===(t=a)||void 0===t?void 0:t.id)===e.id}),children:Object(j.jsx)(n.b,{to:"/tabs/".concat(e.id),onClick:function(){a=e},children:e.title})},e.content)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===(e=a)||void 0===e?void 0:e.content)||"Please select a tab"})]})},o=function(){var e=Object(l.e)().pathname;return Object(j.jsxs)("div",{className:"has-navbar-fixed-top",children:[Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(n.b,{to:"/",className:b()("navbar-item",{"is-active":"/"===e}),children:"Home"}),Object(j.jsx)(n.b,{to:"/tabs",className:b()("navbar-item",{"is-active":"/tabs"===e}),children:"Tabs"})]})})}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Home page"})})})}),Object(j.jsx)(l.a,{path:"tabs/*",element:Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{index:!0,element:Object(j.jsx)(r,{})}),Object(j.jsx)(l.a,{path:":tabId",element:Object(j.jsx)(r,{})})]})})})}),Object(j.jsx)(l.a,{path:"*",element:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})]})]})};s.a.render(Object(j.jsx)(n.a,{children:Object(j.jsx)(o,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8e33a55b.chunk.js.map