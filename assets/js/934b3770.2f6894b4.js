"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2406],{6346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(4848),s=n(8453),i=n(1470),a=n(9365);const l={sidebar_position:10},o="Analytics - Extensions",d={id:"rest-helix/analytics-extension-url",title:"Analytics - Extensions",description:"Gets a URL that extension developers can use to download analytics reports (CSV files) for their extensions. The URL is valid for 5 minutes. For details about analytics and the fields returned, see the Insights & Analytics guide.",source:"@site/versioned_docs/version-1.x/rest-helix/analytics-extension-url.mdx",sourceDirName:"rest-helix",slug:"/rest-helix/analytics-extension-url",permalink:"/rest-helix/analytics-extension-url",draft:!1,unlisted:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/analytics-extension-url.mdx",tags:[],version:"1.x",lastUpdatedBy:"iProdigy",lastUpdatedAt:1707598838e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"version-1.x-docs",previous:{title:"API - Helix",permalink:"/rest-helix/"},next:{title:"Analytics - Game",permalink:"/rest-helix/analytics-game-url"}},c={},u=[{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"print report url (to download the files)",id:"print-report-url-to-download-the-files",level:3}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"analytics---extensions",children:"Analytics - Extensions"}),"\n",(0,r.jsx)(t.p,{children:"Gets a URL that extension developers can use to download analytics reports (CSV files) for their extensions. The URL is valid for 5 minutes. For details about analytics and the fields returned, see the Insights & Analytics guide."}),"\n",(0,r.jsx)(t.h2,{id:"method-definition",children:"Method Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@RequestLine("GET /analytics/extensions?after={after}&ended_at={ended_at}&first={first}&extension_id={extension_id}&started_at={started_at}&type={type}")\n@Headers("Authorization: Bearer {token}")\nHystrixCommand<ExtensionAnalyticsList> getExtensionAnalyticUrl(\n\t@Param("token") String authToken,\n\t@Param("after") String after,\n\t@Param("first") Integer limit,\n\t@Param("extension_id") String extensionId,\n\t@Param("type") String type,\n\t@Param("started_at") String startedAt,\n\t@Param("ended_at") String endedAt\n);\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Required Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authToken"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsxs)(t.td,{style:{textAlign:"right"},children:["User Access Token with the ",(0,r.jsx)(t.code,{children:"analytics:read:extensions"})," scope."]})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Optional Parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"after"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsxs)(t.td,{style:{textAlign:"right"},children:["Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response. This applies only to queries without ",(0,r.jsx)(t.code,{children:"extension_id"}),". If an ",(0,r.jsx)(t.code,{children:"extension_id"})," is specified, it supersedes any cursor/offset combinations. The cursor value specified here is from the pagination response field of a prior query."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"integer"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Maximum number of objects to return. Maximum: 100. Default: 20."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:'The type of analytics report to get. Possible values are: "overview_v2".'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"extension_id"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Client ID value assigned to the extension when it is created. If this is specified, the returned URL points to an analytics report for just the specified extension. If this is not specified, the response includes multiple URLs (paginated), pointing to separate analytics reports for each of the authenticated user\u2019s extensions."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"started_at"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsxs)(t.td,{style:{textAlign:"right"},children:["Starting date/time for returned reports, in RFC3339 format with the hours, minutes, and seconds zeroed out and the UTC timezone: ",(0,r.jsx)(t.code,{children:"YYYY-MM-DDT00:00:00Z"}),". This must be on or after January 31, 2018.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If this is provided, ",(0,r.jsx)(t.code,{children:"ended_at"})," also must be specified. If ",(0,r.jsx)(t.code,{children:"started_at"})," is earlier than the default start date, the default date is used. Default: January 31, 2018 (overview_v2) or 90 days (overview_v1) before the report was issued. The file contains one row of data per day."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ended_at"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsxs)(t.td,{style:{textAlign:"right"},children:["Ending date/time for returned reports, in RFC3339 format with the hours, minutes, and seconds zeroed out and the UTC timezone: ",(0,r.jsx)(t.code,{children:"YYYY-MM-DDT00:00:00Z"}),". The report covers the entire ending date; e.g., if ",(0,r.jsx)(t.code,{children:"2018-05-01T00:00:00Z"})," is specified, the report covers up to ",(0,r.jsx)(t.code,{children:"2018-05-01T23:59:59Z"}),". ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If this is provided, ",(0,r.jsx)(t.code,{children:"started_at"})," also must be specified. If ",(0,r.jsx)(t.code,{children:"ended_at"})," is later than the default end date, the default date is used. Default: 1-2 days before the request was issued (depending on report availability)."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"code-snippets",children:"Code-Snippets"}),"\n",(0,r.jsx)(t.h3,{id:"print-report-url-to-download-the-files",children:"print report url (to download the files)"}),"\n",(0,r.jsxs)(i.default,{groupId:"code",children:[(0,r.jsx)(a.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'ExtensionAnalyticsList resultList = twitchClient.getHelix().getExtensionAnalyticUrl(accessToken, null, 10, null, null, null, null).execute();\nresultList.getExtensionAnalytics().forEach(analytic -> {\n\tSystem.out.println("URL: " + analytic.getURL());\n});\n'})})}),(0,r.jsx)(a.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val resultList = twitchClient.helix.getExtensionAnalyticUrl(accessToken, null, 10, null, null, null, null).execute();\nresultList.extensionAnalytics.forEach { analytic ->\n\tprintln("URL: ${analytic.uRL}");\n}\n'})})}),(0,r.jsx)(a.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'def resultList = twitchClient.helix.getExtensionAnalyticUrl(accessToken, null, 10, null, null, null, null).execute();\nresultList.extensionAnalytics.each { analytic ->\n\tSystem.out.println "URL: ${analytic.uRL}"\n}\n'})})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});n(6540);var r=n(8215);const s={tabItem:"tabItem_Ymn6"};var i=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var r=n(6540),s=n(8215),i=n(3104),a=n(6347),l=n(205),o=n(7485),d=n(1682),c=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,u]=p({queryString:n,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),g=(()=>{const e=d??f;return x({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==r&&(d(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,y.jsx)(j,{...t,...e}),(0,y.jsx)(b,{...t,...e})]})}function A(e){const t=(0,m.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);