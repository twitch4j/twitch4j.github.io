"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3473],{3632:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});r(6540);var n=r(8215);const s={tabItem:"tabItem_Ymn6"};var i=r(4848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},2707:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(6540),s=r(8215),i=r(4319),a=r(6347),o=r(4280),l=r(3024),c=r(8417),u=r(4031);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=h(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=b({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=r(6916);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),s=o[r].value;s!==n&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function S(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"rest-helix/subscriptions-byuser","title":"Subscriptions - Check Subscription Status","description":"Description","source":"@site/versioned_docs/version-1.x/rest-helix/subscriptions-byuser.mdx","sourceDirName":"rest-helix","slug":"/rest-helix/subscriptions-byuser","permalink":"/rest-helix/subscriptions-byuser","draft":false,"unlisted":false,"editUrl":"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/subscriptions-byuser.mdx","tags":[],"version":"1.x","lastUpdatedBy":"iProdigy","lastUpdatedAt":1707598838000,"sidebarPosition":56,"frontMatter":{"sidebar_position":56},"sidebar":"version-1.x-docs","previous":{"title":"StreamTags - Replace Stream Tags","permalink":"/rest-helix/streamtags-replace"},"next":{"title":"Users - Get","permalink":"/rest-helix/users-get"}}');var s=r(4848),i=r(8453);r(2707),r(3632);const a={sidebar_position:56},o="Subscriptions - Check Subscription Status",l={},c=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2}];function u(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"subscriptions---check-subscription-status",children:"Subscriptions - Check Subscription Status"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets broadcaster\u2019s subscriptions by user ID (one or more)."}),"\n",(0,s.jsxs)(t.p,{children:["Required OAuth Scope: ",(0,s.jsx)(t.code,{children:"channel:read:subscriptions"})]}),"\n",(0,s.jsx)(t.h2,{id:"method-definition",children:"Method Definition"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@RequestLine("GET /subscriptions?broadcaster_id={broadcaster_id}&user_id={user_id}")\n@Headers("Authorization: Bearer {token}")\nHystrixCommand<SubscriptionList> getSubscriptionsByUser(\n    @Param("token") String authToken,\n    @Param("broadcaster_id") String broadcasterId,\n    @Param("user_id") List<String> userIds\n);\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Required Parameters"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"token"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsxs)(t.td,{style:{textAlign:"right"},children:["User access token from the broadcaster with the ",(0,s.jsx)(t.code,{children:"channel:read:subscriptions"})," scope."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"broadcaster_id"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"ID of the broadcaster. Must match the User ID in the Bearer token."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"user_id"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Returns streams broadcast by one or more specified user IDs. You can specify up to 100 IDs."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Optional Parameters"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"None"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(6540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);