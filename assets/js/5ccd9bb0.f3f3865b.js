"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4733],{3632:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});r(6540);var n=r(8215);const i={tabItem:"tabItem_Ymn6"};var l=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:r,children:t})}},2707:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(6540),i=r(8215),l=r(4319),s=r(6347),a=r(4280),d=r(3024),o=r(8417),c=r(4031);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,l=h(e),[s,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=f({queryString:r,groupId:i}),[x,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,l]=(0,c.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:i}),m=(()=>{const e=o??x;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{m&&d(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var g=r(6916);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const t=e.currentTarget,r=d.indexOf(t),i=a[r].value;i!==n&&(o(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...l,className:(0,i.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function v(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},5159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"rest-helix/clips-get","title":"Clips - Get","description":"Description","source":"@site/versioned_docs/version-1.x/rest-helix/clips-get.mdx","sourceDirName":"rest-helix","slug":"/rest-helix/clips-get","permalink":"/rest-helix/clips-get","draft":false,"unlisted":false,"editUrl":"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/clips-get.mdx","tags":[],"version":"1.x","lastUpdatedBy":"iProdigy","lastUpdatedAt":1707598838000,"sidebarPosition":31,"frontMatter":{"sidebar_position":31},"sidebar":"version-1.x-docs","previous":{"title":"Clips - Create","permalink":"/rest-helix/clips-create"},"next":{"title":"Games - Get","permalink":"/rest-helix/games-get"}}');var i=r(4848),l=r(8453),s=r(2707),a=r(3632);const d={sidebar_position:31},o="Clips - Get",c={},u=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"print clip id&#39;s",id:"print-clip-ids",level:3}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"clips---get",children:"Clips - Get"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets clip information by clip ID (one or more), broadcaster ID (one only), or game ID (one only)."}),"\n",(0,i.jsxs)(t.p,{children:["The response has a JSON payload with a ",(0,i.jsx)(t.code,{children:"data"})," field containing an array of clip information elements and a ",(0,i.jsx)(t.code,{children:"pagination"})," field containing information required to query for more streams."]}),"\n",(0,i.jsx)(t.h2,{id:"method-definition",children:"Method Definition"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'@RequestLine("GET /clips?broadcaster_id={broadcaster_id}&game_id={game_id}&id={id}&after={after}&before={before}&first={first}&started_at={started_at}&ended_at={ended_at}&is_featured={is_featured}")\n@Headers("Authorization: Bearer {token}")\nHystrixCommand<ClipList> getClips(\n    @Param("token") String authToken,\n    @Param("broadcaster_id") String broadcasterId,\n    @Param("game_id") String gameId,\n    @Param("id") List<String> ids,\n    @Param("after") String after,\n    @Param("before") String before,\n    @Param("first") Integer limit,\n    @Param("started_at") Instant startedAt,\n    @Param("ended_at") Instant endedAt,\n    @Param("is_featured") Boolean isFeatured\n);\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Required Parameters (one of)"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"broadcaster_id"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,i.jsxs)(t.td,{style:{textAlign:"right"},children:["ID of the broadcaster for whom clips are returned. The number of clips returned is determined by the ",(0,i.jsx)(t.code,{children:"first"})," query-string parameter (default: 20). Results are ordered by view count."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"game_id"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,i.jsxs)(t.td,{style:{textAlign:"right"},children:["ID of the game for which clips are returned. The number of clips returned is determined by the ",(0,i.jsx)(t.code,{children:"first"})," query-string parameter (default: 20). Results are ordered by view count."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"id"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"ID of the clip being queried. Limit: 100."})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Optional Parameters"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"authToken"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"User or App Access Token (or null if authentication was passed to the module builder)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"after"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response. This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination response field of a prior query."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"before"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Cursor for backward pagination: tells the server where to start fetching the next set of results, in a multi-page response. This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination response field of a prior query."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"integer"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Maximum number of objects to return. Maximum: 100. Default: 20."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"started_at"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Starting date/time for returned clips, in RFC3339 format. (Note that the seconds value is ignored.) If this is specified, ended_at also should be specified; otherwise, the ended_at date/time will be 1 week after the started_at value."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ended_at"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Ending date/time for returned clips, in RFC3339 format. (Note that the seconds value is ignored.) If this is specified, started_at also must be specified; otherwise, the time period is ignored."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"is_featured"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"boolean"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Whether the response includes featured clips. If true, returns only clips that are featured. If false, returns only clips that aren\u2019t featured. All clips are returned if this parameter is not specified."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"code-snippets",children:"Code-Snippets"}),"\n",(0,i.jsx)(t.h3,{id:"print-clip-ids",children:"print clip id's"}),"\n",(0,i.jsxs)(s.default,{groupId:"code",children:[(0,i.jsx)(a.default,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'ClipList clipList = twitchClient.getHelix().getClips(null, "488552", null, null, null, null, null, null, null, null).execute();\nclipList.getData().forEach(clip -> {\n    System.out.println("Found Clip: " + clip.getId());\n});\n'})})}),(0,i.jsx)(a.default,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'val clipList = twitchClient.helix.getClips(null, "488552", null, null, null, null, null, null, null, null).execute();\nclipList.`data`.forEach { clip ->\n    println("Found Clip: ${clip.id}")\n}\n'})})}),(0,i.jsx)(a.default,{value:"groovy",label:"Groovy",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-groovy",children:'def clipList = twitchClient.helix.getClips(null, "488552", null, null, null, null, null, null, null, null).execute();\nclipList.data.each { clip ->\n    System.out.println "Found Clip: ${clip.id}"\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(6540);const i={},l=n.createContext(i);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);