"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5430],{3632:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});n(6540);var r=n(8215);const s={tabItem:"tabItem_Ymn6"};var i=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},2707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(6540),s=n(8215),i=n(4319),a=n(6347),l=n(4280),o=n(3024),c=n(8417),u=n(4031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=b({queryString:n,groupId:s}),[v,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),m=(()=>{const e=c??v;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(6916);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==r&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=v(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},2786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"pubsub/topic-whispers","title":"Topic - Whispers","description":"Description","source":"@site/versioned_docs/version-1.x/pubsub/topic-whispers.mdx","sourceDirName":"pubsub","slug":"/pubsub/topic-whispers","permalink":"/pubsub/topic-whispers","draft":false,"unlisted":false,"editUrl":"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/pubsub/topic-whispers.mdx","tags":[],"version":"1.x","lastUpdatedBy":"Philipp Heuer","lastUpdatedAt":1660511578000,"sidebarPosition":50,"frontMatter":{"sidebar_position":50},"sidebar":"version-1.x-docs","previous":{"title":"Topic - Video Playback Events","permalink":"/pubsub/topic-video-playback-events"},"next":{"title":"Events","permalink":"/events/"}}');var s=n(4848),i=n(8453),a=n(2707),l=n(3632);const o={sidebar_position:50},c="Topic - Whispers",u={},d=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"topic---whispers",children:"Topic - Whispers"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This topic can be used to monitor whenever a specified user receives a whisper."}),"\n",(0,s.jsxs)(t.p,{children:["Note that this can cause duplication of ",(0,s.jsx)(t.code,{children:"PrivateMessageEvent"})," if one is also using ",(0,s.jsx)(t.code,{children:"TwitchChat"})," to monitor whispers."]}),"\n",(0,s.jsx)(t.h2,{id:"method-definition",children:"Method Definition"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Required Parameters"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"credential"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"OAuth2Credential"}),(0,s.jsxs)(t.td,{style:{textAlign:"right"},children:["User Auth Token for the target user id, with the scope ",(0,s.jsx)(t.code,{children:"whispers:read"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"userId"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Target User Id"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Optional Parameters"})}),"\n",(0,s.jsx)(t.p,{children:"None"}),"\n",(0,s.jsx)(t.h2,{id:"code-snippets",children:"Code-Snippets"}),"\n",(0,s.jsx)(t.p,{children:"Subscribe to all whispers to user twitch4j and register a listener that prints all messages to console"}),"\n",(0,s.jsxs)(a.default,{groupId:"code",children:[(0,s.jsx)(l.default,{value:"java",label:"Java",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'twitchClient.getPubSub().listenForWhisperEvents(credential, "149223493");\n\ntwitchClient.getEventManager().onEvent(PrivateMessageEvent.class, System.out::println);\n'})})}),(0,s.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:'twitchClient.pubSub.listenForWhisperEvents(credential, "149223493")\n\ntwitchClient.eventManager.onEvent(PrivateMessageEvent, System.out::println)\n'})})}),(0,s.jsx)(l.default,{value:"groovy",label:"Groovy",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-groovy",children:'twitchClient.pubSub.listenForWhisperEvents(credential, "149223493")\n\ntwitchClient.eventManager.onEvent(PrivateMessageEvent, System.out::println)\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);