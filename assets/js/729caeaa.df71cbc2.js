"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7708],{3632:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(6540);var a=n(8215);const l={tabItem:"tabItem_Ymn6"};var r=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:n,children:t})}},2707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(6540),l=n(8215),r=n(4319),i=n(6347),s=n(4280),o=n(3024),c=n(8417),d=n(4031);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const l=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,u]=b({queryString:n,groupId:l}),[v,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,d.Dv)(n);return[l,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),x=(()=>{const e=c??v;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,r]),tabValues:r}}var y=n(6916);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(4848);function f(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),l=s[n].value;l!==a&&(c(t),i(l))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,l.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=v(e);return(0,m.jsxs)("div",{className:(0,l.A)("tabs-container",x.tabList),children:[(0,m.jsx)(f,{...t,...e}),(0,m.jsx)(j,{...t,...e})]})}function w(e){const t=(0,y.A)();return(0,m.jsx)(g,{...e,children:u(e.children)},String(t))}},7007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"pubsub/topic-video-playback-events","title":"Topic - Video Playback Events","description":"Description","source":"@site/versioned_docs/version-1.x/pubsub/topic-video-playback-events.mdx","sourceDirName":"pubsub","slug":"/pubsub/topic-video-playback-events","permalink":"/pubsub/topic-video-playback-events","draft":false,"unlisted":false,"editUrl":"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/pubsub/topic-video-playback-events.mdx","tags":[],"version":"1.x","lastUpdatedBy":"Philipp Heuer","lastUpdatedAt":1660511578000,"sidebarPosition":50,"frontMatter":{"sidebar_position":50},"sidebar":"version-1.x-docs","previous":{"title":"Topic - User Community Points Events","permalink":"/pubsub/topic-user-community-points-events"},"next":{"title":"Topic - Whispers","permalink":"/pubsub/topic-whispers"}}');var l=n(4848),r=n(8453),i=n(2707),s=n(3632);const o={sidebar_position:50},c="Topic - Video Playback Events",d={},u=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"By Channel ID (Preferred)",id:"by-channel-id-preferred",level:3},{value:"By Channel Name (Alternative)",id:"by-channel-name-alternative",level:3},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"Subscribe to topic",id:"subscribe-to-topic",level:3},{value:"By Channel ID",id:"by-channel-id",level:4},{value:"By Channel Name",id:"by-channel-name",level:4},{value:"Listen for Events",id:"listen-for-events",level:3}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"topic---video-playback-events",children:"Topic - Video Playback Events"})}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"This topic can be used to monitor video playback events for a specified channel."}),"\n",(0,l.jsx)(t.p,{children:"Subtypes include:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Commercial started"}),"\n",(0,l.jsx)(t.li,{children:"Stream went down"}),"\n",(0,l.jsx)(t.li,{children:"Stream went up"}),"\n",(0,l.jsx)(t.li,{children:"View count update"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Note: The stream up/down events tend to be fired significantly faster than what is reported by Helix.\nNote: the view count reported by this topic is more reflective of the value on the website than API - TMI > Get Viewers"}),"\n",(0,l.jsx)(t.p,{children:"With all undocumented topics, use at your own risk."}),"\n",(0,l.jsx)(t.h2,{id:"method-definition",children:"Method Definition"}),"\n",(0,l.jsx)(t.h3,{id:"by-channel-id-preferred",children:"By Channel ID (Preferred)"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"credential"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"OAuth2Credential"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Auth Token (may not necessarily be required)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"channelId"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Target Channel Id"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"by-channel-name-alternative",children:"By Channel Name (Alternative)"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"credential"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"OAuth2Credential"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Auth Token (may not necessarily be required)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"channelName"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Target Channel Name"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"code-snippets",children:"Code-Snippets"}),"\n",(0,l.jsx)(t.h3,{id:"subscribe-to-topic",children:"Subscribe to topic"}),"\n",(0,l.jsx)(t.h4,{id:"by-channel-id",children:"By Channel ID"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Preferred"})," way to subscribe to the topic; used by first-party clients and more resistant to name weirdness."]}),"\n",(0,l.jsxs)(i.default,{groupId:"code",children:[(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'twitchClient.getPubSub().listenForVideoPlaybackEvents(credential, "149223493");\n'})})}),(0,l.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-kotlin",children:'twitchClient.pubSub.listenForVideoPlaybackEvents(credential, "149223493")\n'})})}),(0,l.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-groovy",children:'twitchClient.pubSub.listenForVideoPlaybackEvents(credential, "149223493")\n'})})})]}),"\n",(0,l.jsx)(t.h4,{id:"by-channel-name",children:"By Channel Name"}),"\n",(0,l.jsxs)(t.p,{children:["An ",(0,l.jsx)(t.em,{children:"alternative"})," means to subscribe to the topic, if one does not have the channel ID and does not wish to query it."]}),"\n",(0,l.jsxs)(i.default,{groupId:"code",children:[(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'twitchClient.getPubSub().listenForVideoPlaybackByNameEvents(credential, "twitch4j");\n'})})}),(0,l.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-kotlin",children:'twitchClient.pubSub.listenForVideoPlaybackByNameEvents(credential, "twitch4j")\n'})})}),(0,l.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-groovy",children:'twitchClient.pubSub.listenForVideoPlaybackByNameEvents(credential, "twitch4j")\n'})})})]}),"\n",(0,l.jsx)(t.h3,{id:"listen-for-events",children:"Listen for Events"}),"\n",(0,l.jsxs)(i.default,{groupId:"code",children:[(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"// Handle all subtypes\ntwitchClient.getEventManager().onEvent(VideoPlaybackEvent.class, System.out::println);\n\n// Alternatively, only consider a specific subtype\ntwitchClient.getEventManager().onEvent(VideoPlaybackEvent.class, e -> {\n\tif (e.getData().getType() == VideoPlaybackData.Type.STREAM_UP) {\n\t\tSystem.out.println(e); // Handle Go Live\n\t}\n});\n"})})}),(0,l.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-kotlin",children:"// Handle all subtypes\ntwitchClient.eventManager.onEvent(VideoPlaybackEvent::class.java, System.out::println)\n\n// Alternatively, only consider a specific subtype\ntwitchClient.eventManager.onEvent(VideoPlaybackEvent::class.java) { e -> \n\tif (e.data.type == VideoPlaybackData.Type.STREAM_UP) {\n\t\tprintln(e); // Handle Go Live\n\t}\n}\n"})})}),(0,l.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-groovy",children:"// Handle all subtypes\ntwitchClient.eventManager.onEvent(VideoPlaybackEvent, System.out::println)\n\n// Alternatively, only consider a specific subtype\ntwitchClient.eventManager.onEvent(VideoPlaybackEvent) { e -> \n\tif (e.data.type == VideoPlaybackData.Type.STREAM_UP) {\n\t\tSystem.out.println(e); // Handle Go Live\n\t}\n}\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(6540);const l={},r=a.createContext(l);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);