"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4597],{2299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(5893),s=r(1151),l=r(4866),i=r(5162);const a={sidebar_position:60},u="Users - Get",o={id:"rest-helix/users-get",title:"Users - Get",description:"Description",source:"@site/versioned_docs/version-1.x/rest-helix/users-get.mdx",sourceDirName:"rest-helix",slug:"/rest-helix/users-get",permalink:"/rest-helix/users-get",draft:!1,unlisted:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/users-get.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"version-1.x-docs",previous:{title:"Subscriptions - Check Subscription Status",permalink:"/rest-helix/subscriptions-byuser"},next:{title:"Users - Get Follows",permalink:"/rest-helix/users-followers"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"print user list - search by id",id:"print-user-list---search-by-id",level:3},{value:"print user list - search by name",id:"print-user-list---search-by-name",level:3}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"users---get",children:"Users - Get"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets information about one or more specified Twitch users. Users are identified by optional user IDs and/or login name. If neither a user ID nor a login name is specified, the user is looked up by Bearer token."}),"\n",(0,n.jsx)(t.h2,{id:"method-definition",children:"Method Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'@RequestLine("GET /users?id={id}&login={login}")\n@Headers("Authorization: Bearer {token}")\nHystrixCommand<UserList> getUsers(\n\t@Param("token") String authToken,\n\t@Param("id") List<Long> userIds,\n\t@Param("login") List<String> userNames\n);\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Required Parameters"})}),"\n",(0,n.jsx)(t.p,{children:"None"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Optional Parameters"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"authToken"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Can be used if requesting information about your own account, to include the email"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:["User ID. Multiple user IDs can be specified. Limit: ",(0,n.jsx)(t.code,{children:"100"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"login"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:["User login name. Multiple login names can be specified. Limit: ",(0,n.jsx)(t.code,{children:"100"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"code-snippets",children:"Code-Snippets"}),"\n",(0,n.jsx)(t.h3,{id:"print-user-list---search-by-id",children:"print user list - search by id"}),"\n",(0,n.jsxs)(l.default,{groupId:"code",children:[(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'UserList resultList = twitchClient.getHelix().getUsers(null, Arrays.asList("149223493"), null).execute();\nresultList.getUsers().forEach(user -> {\n\tSystem.out.println(user);\n});\n'})})}),(0,n.jsx)(i.default,{value:"kotlin",label:"Kotlin",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'val resultList = twitchClient.helix.getUsers(null, listOf("149223493"), null).execute()\nresultList.users.forEach { user ->\n\tprintln(user)\n}\n'})})}),(0,n.jsx)(i.default,{value:"groovy",label:"Groovy",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-groovy",children:'def resultList = twitchClient.helix.getUsers(null, ["149223493"], null).execute()\nresultList.users.forEach { user ->\n\tSystem.out.println user\n}\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"print-user-list---search-by-name",children:"print user list - search by name"}),"\n",(0,n.jsxs)(l.default,{groupId:"code",children:[(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'UserList resultList = twitchClient.getHelix().getUsers(null, null, Arrays.asList("twitch4j")).execute();\nresultList.getUsers().forEach(user -> {\n\tSystem.out.println(user);\n});\n'})})}),(0,n.jsx)(i.default,{value:"kotlin",label:"Kotlin",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'val resultList = twitchClient.helix.getUsers(null, null, listOf("twitch4j")).execute()\nresultList.users.forEach { user ->\n\tprintln(user)\n}\n'})})}),(0,n.jsx)(i.default,{value:"groovy",label:"Groovy",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-groovy",children:'def resultList = twitchClient.helix.getUsers(null, null, ["twitch4j"]).execute()\nresultList.users.each { user ->\n\tSystem.out.println user\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});r(7294);var n=r(512);const s={tabItem:"tabItem_Ymn6"};var l=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},4866:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(7294),s=r(512),l=r(2466),i=r(6550),a=r(469),u=r(1980),o=r(7392),c=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,l=h(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,d]=x({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,c.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),b=(()=>{const e=o??m;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:a}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),s=a[r].value;s!==n&&(o(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,s.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(7294);const s={},l=n.createContext(s);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);