"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5579],{3632:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n,children:t})}},2707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(6540),l=n(8215),a=n(4319),s=n(6347),o=n(4280),i=n(3024),u=n(8417),c=n(4031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=f({queryString:n,groupId:l}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,c.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),x=(()=>{const e=u??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(6916);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),l=o[n].value;l!==r&&(u(t),s(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},7206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"graphql/user-unfollow","title":"User - Unfollow","description":"Description","source":"@site/versioned_docs/version-1.x/graphql/user-unfollow.mdx","sourceDirName":"graphql","slug":"/graphql/user-unfollow","permalink":"/graphql/user-unfollow","draft":false,"unlisted":false,"editUrl":"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/graphql/user-unfollow.mdx","tags":[],"version":"1.x","lastUpdatedBy":"iProdigy","lastUpdatedAt":1707598838000,"sidebarPosition":21,"frontMatter":{"sidebar_position":21},"sidebar":"version-1.x-docs","previous":{"title":"User - Follow","permalink":"/graphql/user-follow"},"next":{"title":"PubSub","permalink":"/pubsub/"}}');var l=n(4848),a=n(8453),s=n(2707),o=n(3632);const i={sidebar_position:21},u="User - Unfollow",c={},d=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"unfollow a user",id:"unfollow-a-user",level:3}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"user---unfollow",children:"User - Unfollow"})}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Unfollow a user on twitch."}),"\n",(0,l.jsx)(t.admonition,{type:"danger",children:(0,l.jsx)(t.p,{children:"This mutation no longer works, and can risk your account getting banned."})}),"\n",(0,l.jsx)(t.h2,{id:"method-definition",children:"Method Definition"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:"Required Parameters"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"authToken"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"User Auth Token"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"targetUserId"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"number"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Target User Id"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:"Optional Parameters"})}),"\n",(0,l.jsx)(t.p,{children:"None"}),"\n",(0,l.jsx)(t.h2,{id:"code-snippets",children:"Code-Snippets"}),"\n",(0,l.jsx)(t.h3,{id:"unfollow-a-user",children:"unfollow a user"}),"\n",(0,l.jsxs)(s.default,{groupId:"code",children:[(0,l.jsx)(o.default,{value:"java",label:"Java",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"twitchClient.getGraphQL().unfollowUser(credential, 24943033l).execute();\n"})})}),(0,l.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-kotlin",children:"twitchClient.graphQL.unfollowUser(credential, 24943033l).execute()\n"})})}),(0,l.jsx)(o.default,{value:"groovy",label:"Groovy",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-groovy",children:"twitchClient.graphQL.unfollowUser(credential, 24943033l).execute()\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);