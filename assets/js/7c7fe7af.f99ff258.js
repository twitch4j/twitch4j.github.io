"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7651],{3632:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(6540);var l=n(8215);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n,children:t})}},2707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var l=n(6540),r=n(8215),a=n(4319),i=n(6347),s=n(4280),o=n(3024),c=n(8417),d=n(4031);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:a}))),[c,u]=v({queryString:n,groupId:r}),[f,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=n(6916);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(4848);function g(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=s[n].value;r!==l&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,m.jsx)(g,{...t,...e}),(0,m.jsx)(b,{...t,...e})]})}function C(e){const t=(0,j.A)();return(0,m.jsx)(w,{...e,children:u(e.children)},String(t))}},3500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"getting-started/client-helper","title":"Client Helper","description":"The Twitch4J Client Helper aims to bundle some common code used by library users to prevent everyone from reinventing the wheel ;)","source":"@site/versioned_docs/version-1.x/getting-started/client-helper.mdx","sourceDirName":"getting-started","slug":"/getting-started/client-helper","permalink":"/getting-started/client-helper","draft":false,"unlisted":false,"editUrl":"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/getting-started/client-helper.mdx","tags":[],"version":"1.x","lastUpdatedBy":"iProdigy","lastUpdatedAt":1707598838000,"sidebarPosition":100,"frontMatter":{"sidebar_position":100},"sidebar":"version-1.x-docs","previous":{"title":"Proxy Support","permalink":"/getting-started/proxy"},"next":{"title":"Chat","permalink":"/chat/"}}');var r=n(4848),a=n(8453),i=n(2707),s=n(3632);const o={sidebar_position:100},c="Client Helper",d={},u=[{value:"Default Credential",id:"default-credential",level:2},{value:"Register for Stream Live/Offline/Category/Title Events",id:"register-for-stream-liveofflinecategorytitle-events",level:2},{value:"Register for Follow Event",id:"register-for-follow-event",level:2},{value:"Register for Clip Events",id:"register-for-clip-events",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"client-helper",children:"Client Helper"})}),"\n",(0,r.jsx)(t.p,{children:"The Twitch4J Client Helper aims to bundle some common code used by library users to prevent everyone from reinventing the wheel ;)"}),"\n",(0,r.jsx)(t.p,{children:"Current Features:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Stream Updates: ",(0,r.jsx)(t.code,{children:"ChannelGoLiveEvent"}),", ",(0,r.jsx)(t.code,{children:"ChannelGoOfflineEvent"}),", ",(0,r.jsx)(t.code,{children:"ChannelChangeGameEvent"}),", ",(0,r.jsx)(t.code,{children:"ChannelChangeTitleEvent"}),", ",(0,r.jsx)(t.code,{children:"ChannelViewerCountUpdateEvent"})]}),"\n",(0,r.jsxs)(t.li,{children:["Clip Updates: ",(0,r.jsx)(t.code,{children:"ChannelClipCreatedEvent"})]}),"\n",(0,r.jsxs)(t.li,{children:["Follower Updates: ",(0,r.jsx)(t.code,{children:"FollowEvent"}),", ",(0,r.jsx)(t.code,{children:"ChannelFollowCountUpdateEvent"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Those methods require the ",(0,r.jsx)(t.code,{children:"Helix Module"}),", so enable it in the ",(0,r.jsx)(t.code,{children:"TwitchClientBuilder"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"default-credential",children:"Default Credential"}),"\n",(0,r.jsx)(t.p,{children:"Since the client helper makes Helix API calls, you must include a form of authorization when building the client."}),"\n",(0,r.jsxs)(t.p,{children:["In particular, you can pass an app access token or user access token to ",(0,r.jsx)(t.code,{children:"withDefaultAuthToken"}),",\nor specify ",(0,r.jsx)(t.em,{children:"both"})," ",(0,r.jsx)(t.code,{children:"withClientId"}),"/",(0,r.jsx)(t.code,{children:"withClientSecret"})," for the library to automatically generate an app access token."]}),"\n",(0,r.jsxs)(t.p,{children:["However, for ",(0,r.jsx)(t.code,{children:"FollowEvent"}),", you will need to specify a user access token of a moderator of the target channel\nwith the ",(0,r.jsx)(t.code,{children:"moderator:read:followers"})," scope, due to Twitch ",(0,r.jsx)(t.a,{href:"https://discuss.dev.twitch.com/t/follows-endpoints-and-eventsub-subscription-type-are-now-available-in-open-beta/43322",children:"shutting"})," ",(0,r.jsx)(t.a,{href:"https://discuss.dev.twitch.com/t/legacy-follows-api-and-eventsub-shutdown-timeline-updated/46769",children:"down"})," the (more permissive) legacy follows API in September 2023."]}),"\n",(0,r.jsxs)(i.default,{groupId:"code",children:[(0,r.jsx)(s.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'ITwitchClient twitchClient = TwitchClientBuilder.builder()\n    .withDefaultAuthToken(new OAuth2Credential("twitch", "oauthtokenhere"))\n    .build();\n'})})}),(0,r.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val twitchClient = TwitchClientBuilder.builder()\n    .withDefaultAuthToken(OAuth2Credential("twitch", "oauthtokenhere"))\n    .build();\n'})})}),(0,r.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'def twitchClient = TwitchClientBuilder.builder()\n    .withDefaultAuthToken(new OAuth2Credential("twitch", "oauthtokenhere"))\n    .build();\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"register-for-stream-liveofflinecategorytitle-events",children:"Register for Stream Live/Offline/Category/Title Events"}),"\n",(0,r.jsxs)(t.p,{children:["Allows ",(0,r.jsx)(t.code,{children:"ChannelGoLiveEvent"}),", ",(0,r.jsx)(t.code,{children:"ChannelGoOfflineEvent"}),", ",(0,r.jsx)(t.code,{children:"ChannelChangeGameEvent"}),", ",(0,r.jsx)(t.code,{children:"ChannelChangeTitleEvent"}),", ",(0,r.jsx)(t.code,{children:"ChannelViewerCountUpdateEvent"}),"\nto be fired."]}),"\n",(0,r.jsxs)(i.default,{groupId:"code",children:[(0,r.jsx)(s.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'twitchClient.getClientHelper().enableStreamEventListener("twitch4j");\n'})})}),(0,r.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'twitchClient.clientHelper.enableStreamEventListener("twitch4j");\n'})})}),(0,r.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'twitchClient.clientHelper.enableStreamEventListener("twitch4j");\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"register-for-follow-event",children:"Register for Follow Event"}),"\n",(0,r.jsxs)(t.p,{children:["Note: ",(0,r.jsx)(t.code,{children:"ChannelFollowCountUpdateEvent"})," will fire for any user or app access token.\nFor ",(0,r.jsx)(t.code,{children:"FollowEvent"}),", you must specify ",(0,r.jsx)(t.code,{children:"withDefaultAuthToken"})," with a user access token (scope: ",(0,r.jsx)(t.code,{children:"moderator:read:followers"}),")\nthat represents a moderator of the target channel."]}),"\n",(0,r.jsxs)(i.default,{groupId:"code",children:[(0,r.jsx)(s.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'twitchClient.getClientHelper().enableFollowEventListener("twitch4j");\n'})})}),(0,r.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'twitchClient.clientHelper.enableFollowEventListener("twitch4j");\n'})})}),(0,r.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'twitchClient.clientHelper.enableFollowEventListener("twitch4j");\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"register-for-clip-events",children:"Register for Clip Events"}),"\n",(0,r.jsxs)(t.p,{children:["Allows ",(0,r.jsx)(t.code,{children:"ChannelClipCreatedEvent"})," to be fired."]}),"\n",(0,r.jsxs)(i.default,{groupId:"code",children:[(0,r.jsx)(s.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'twitchClient.getClientHelper().enableClipEventListener("twitch4j");\n'})})}),(0,r.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'twitchClient.clientHelper.enableClipEventListener("twitch4j");\n'})})}),(0,r.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'twitchClient.clientHelper.enableClipEventListener("twitch4j");\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var l=n(6540);const r={},a=l.createContext(r);function i(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);