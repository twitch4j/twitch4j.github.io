"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3032],{3632:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(6540);var s=n(8215);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},2707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var s=n(6540),r=n(8215),a=n(4319),i=n(6347),l=n(4280),o=n(3024),u=n(8417),c=n(4031);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:n,groupId:r}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=u??x;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(6916);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==s&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function S(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},5308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"rest-helix/entitlements-codes","title":"Entitlements - Get Code Status","description":"Description","source":"@site/versioned_docs/version-1.x/rest-helix/entitlements-codes.mdx","sourceDirName":"rest-helix","slug":"/rest-helix/entitlements-codes","permalink":"/rest-helix/entitlements-codes","draft":false,"unlisted":false,"editUrl":"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/entitlements-codes.mdx","tags":[],"version":"1.x","lastUpdatedBy":"iProdigy","lastUpdatedAt":1707598838000,"sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"version-1.x-docs","previous":{"title":"Drops - Get Entitlements","permalink":"/rest-helix/drops-get-entitlements"},"next":{"title":"Entitlements - Redeem Code","permalink":"/rest-helix/entitlements-redeem-codes"}}');var r=n(4848),a=n(8453),i=n(2707),l=n(3632);const o={sidebar_position:20},u="Entitlements - Get Code Status",c={},d=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"print code status",id:"print-code-status",level:3}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"entitlements---get-code-status",children:"Entitlements - Get Code Status"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the status of one or more provided codes."}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Twitch decommissioned this endpoint on 2023-02-27."})}),"\n",(0,r.jsx)(t.h2,{id:"method-definition",children:"Method Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@Deprecated\n@RequestLine("GET /entitlements/codes?code={code}&user_id={user_id}")\n@Headers("Authorization: Bearer {token}")\nHystrixCommand<CodeStatusList> getCodeStatus(\n    @Param("token") String authToken,\n    @Param("code") List<String> code,\n    @Param("user_id") Integer userId\n);\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Required Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authToken"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"App Access Token"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"code"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The code to get the status of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userId"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"integer"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Represents a numeric Twitch user ID"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"code-snippets",children:"Code-Snippets"}),"\n",(0,r.jsx)(t.h3,{id:"print-code-status",children:"print code status"}),"\n",(0,r.jsxs)(i.default,{groupId:"code",children:[(0,r.jsx)(l.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'CodeStatusList codeStatusList = twitchClient.getHelix().getCodeStatus(authToken, Arrays.asList("KUHXV-4GXYP-AKAKK"), 156900877).execute();\ncodeStatusList.getStatuses().forEach(codeStatus -> {\n    System.out.println(codeStatus.getCode() + " " + codeStatus.getStatus());\n});\n'})})}),(0,r.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val codeStatusList = twitchClient.helix.getCodeStatus(authToken, listOf("KUHXV-4GXYP-AKAKK"), 156900877).execute();\ncodeStatusList.statuses.forEach { codeStatus -> \n    println("${codeStatus.code} ${codeStatus.status}")\n}\n'})})}),(0,r.jsx)(l.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'def codeStatusList = twitchClient.helix.getCodeStatus(authToken, ["KUHXV-4GXYP-AKAKK"], 156900877).execute();\ncodeStatusList.statuses.each { codeStatus -> \n    System.out.println "${codeStatus.code} ${codeStatus.status}"\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);