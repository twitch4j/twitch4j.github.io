"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4202],{3632:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(6540);var i=n(8215);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,l),hidden:n,children:t})}},2707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(6540),r=n(8215),s=n(4319),l=n(6347),o=n(4280),c=n(3024),a=n(8417),u=n(4031);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,a.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[l,c]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[a,d]=v({queryString:n,groupId:r}),[p,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=a??p;return b({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,s]),tabValues:s}}var j=n(6916);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(4848);function w(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==i&&(a(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function S(e){const t=p(e);return(0,k.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,k.jsx)(w,{...t,...e}),(0,k.jsx)(x,{...t,...e})]})}function m(e){const t=(0,j.A)();return(0,k.jsx)(S,{...e,children:d(e.children)},String(t))}},546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"eventsub/websocket","title":"WebSocket","description":"EventSub notifications can also be received over websockets, aka EventSockets.","source":"@site/versioned_docs/version-1.x/eventsub/websocket.mdx","sourceDirName":"eventsub","slug":"/eventsub/websocket","permalink":"/eventsub/websocket","draft":false,"unlisted":false,"editUrl":"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/eventsub/websocket.mdx","tags":[],"version":"1.x","lastUpdatedBy":"iProdigy","lastUpdatedAt":1721173267000,"frontMatter":{},"sidebar":"version-1.x-docs","previous":{"title":"Webhook","permalink":"/eventsub/webhook"},"next":{"title":"API - Helix","permalink":"/rest-helix/"}}');var r=n(4848),s=n(8453),l=n(2707),o=n(3632);const c={},a="WebSocket",u={},d=[{value:"Module Creation",id:"module-creation",level:2},{value:"Shared",id:"shared",level:3},{value:"Standalone",id:"standalone",level:3},{value:"Subscription Management",id:"subscription-management",level:2},{value:"Events",id:"events",level:2},{value:"Code Example",id:"code-example",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"websocket",children:"WebSocket"})}),"\n",(0,r.jsx)(t.p,{children:"EventSub notifications can also be received over websockets, aka EventSockets."}),"\n",(0,r.jsxs)(t.p,{children:["When using websockets, you create eventsub subscriptions with a ",(0,r.jsx)(t.strong,{children:"user"})," access token."]}),"\n",(0,r.jsxs)(t.p,{children:["For each user ID, you can create up to 900 enabled subscriptions (but ",(0,r.jsx)(t.code,{children:"max_total_cost"})," is only 10 across all subscriptions for that ",(0,r.jsx)(t.code,{children:"client_id"}),"-",(0,r.jsx)(t.code,{children:"user_id"})," tuple)."]}),"\n",(0,r.jsx)(t.p,{children:"Twitch4J automatically creates additional websockets to comply with Twitch's limits (each websocket can have up to 300 enabled subscriptions, and each user ID can create up to 3 websocket connections for a given client ID)."}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Due to Twitch restrictions, we create separate websockets for each user ID.\nIf you are creating EventSocket subscriptions with tokens from many different users, it may be apt to switch to webhooks or conduits to avoid spawning too many websockets."})}),"\n",(0,r.jsx)(t.h2,{id:"module-creation",children:"Module Creation"}),"\n",(0,r.jsxs)(t.p,{children:["You can create an ",(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/IEventSubSocket.html",children:(0,r.jsx)(t.code,{children:"IEventSubSocket"})})," instance via ",(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/TwitchClientBuilder.html#withEnableEventSocket(java.lang.Boolean)",children:(0,r.jsx)(t.code,{children:"TwitchClientBuilder"})})," or directly via ",(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/TwitchEventSocketPool.html#builder()",children:(0,r.jsx)(t.code,{children:"TwitchEventSocketPool"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If and only if you pass the user access token in the module builder, you can utilize ",(0,r.jsx)(t.code,{children:"IEventSubSocket#register"})," without specifying the token again."]}),"\n",(0,r.jsx)(t.h3,{id:"shared",children:"Shared"}),"\n",(0,r.jsxs)(l.default,{groupId:"code",children:[(0,r.jsx)(o.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'ITwitchClient twitchClient = TwitchClientBuilder.builder()\n    .withEnableEventSocket(true)\n    .withEnableHelix(true)\n    .withDefaultAuthToken(new OAuth2Credential("twitch", "user-access-token-goes-here"))\n    .build();\nIEventSubSocket eventSocket = twitchClient.getEventSocket();\n'})})}),(0,r.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val twitchClient = TwitchClientBuilder.builder()\n    .withEnableEventSocket(true)\n    .withEnableHelix(true)\n    .withDefaultAuthToken(OAuth2Credential("twitch", "user-access-token-goes-here"))\n    .build()\nval eventSocket = twitchClient.getEventSocket()\n'})})}),(0,r.jsx)(o.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'def twitchClient = TwitchClientBuilder.builder()\n    .withEnableEventSocket(true)\n    .withEnableHelix(true)\n    .withDefaultAuthToken(new OAuth2Credential("twitch", "user-access-token-goes-here"))\n    .build()\ndef eventSocket = twitchClient.getEventSocket()\n'})})})]}),"\n",(0,r.jsx)(t.h3,{id:"standalone",children:"Standalone"}),"\n",(0,r.jsxs)(l.default,{groupId:"code",children:[(0,r.jsx)(o.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'IEventSubSocket eventSocket = TwitchEventSocketPool.builder()\n    .fallbackToken(new OAuth2Credential("twitch", "user-access-token-goes-here"))\n    .build();\n'})})}),(0,r.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val eventSocket = TwitchEventSocketPool.builder()\n    .fallbackToken(OAuth2Credential("twitch", "user-access-token-goes-here"))\n    .build()\n'})})}),(0,r.jsx)(o.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'def eventSocket = TwitchEventSocketPool.builder()\n    .fallbackToken(new OAuth2Credential("twitch", "user-access-token-goes-here"))\n    .build()\n'})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["While ",(0,r.jsx)(t.code,{children:"TwitchEventSocketPool"})," can safely be used directly, be wary of directly using ",(0,r.jsx)(t.code,{children:"TwitchSingleUserEventSocketPool.builder()"})," or ",(0,r.jsx)(t.code,{children:"TwitchEventSocket.builder()"}),".\nThe former does not support tokens from different user IDs and the latter does not support more than 300 enabled subscriptions."]})}),"\n",(0,r.jsx)(t.h2,{id:"subscription-management",children:"Subscription Management"}),"\n",(0,r.jsxs)(t.p,{children:["To create EventSocket subscriptions, it is easiest to use the ",(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/IEventSubSocket.html#register(com.github.twitch4j.eventsub.EventSubSubscription)",children:(0,r.jsx)(t.code,{children:"IEventSubSocket#register(EventSubSubscription)"})})," method."]}),"\n",(0,r.jsxs)(t.p,{children:["If you did not specify a default user token in the module builder, you must utilize ",(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/IEventSubSocket.html#register(com.github.philippheuer.credentialmanager.domain.OAuth2Credential,com.github.twitch4j.eventsub.EventSubSubscription)",children:(0,r.jsx)(t.code,{children:"IEventSubSocket#register(OAuth2Credential, EventSubSubscription)"})})," (the first argument should be a user access token)."]}),"\n",(0,r.jsxs)(t.p,{children:["It is easiest to create ",(0,r.jsx)(t.code,{children:"EventSubSubscription"})," instances through our ",(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/subscriptions/SubscriptionTypes.html",children:(0,r.jsx)(t.code,{children:"SubscriptionTypes"})})," utility class."]}),"\n",(0,r.jsxs)(l.default,{groupId:"code",children:[(0,r.jsx)(o.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'eventSocket.register(\n    SubscriptionTypes.STREAM_ONLINE.prepareSubscription(\n        builder -> builder.broadcasterUserId("channel-id-goes-here").build(),\n        null\n    )\n);\n'})})}),(0,r.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'eventSocket.register(\n    SubscriptionTypes.STREAM_ONLINE.prepareSubscription(\n        { builder -> builder.broadcasterUserId("channel-id-goes-here").build() },\n        null\n    )\n)\n'})})}),(0,r.jsx)(o.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'eventSocket.register(\n    SubscriptionTypes.STREAM_ONLINE.prepareSubscription(\n        { builder -> builder.broadcasterUserId("channel-id-goes-here").build() },\n        null\n    )\n)\n'})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["The following EventSub subscription types are only supported by ",(0,r.jsx)(t.strong,{children:"webhooks"}),":\n",(0,r.jsx)(t.code,{children:"drop.entitlement.grant"}),", ",(0,r.jsx)(t.code,{children:"extension.bits_transaction.create"}),", ",(0,r.jsx)(t.code,{children:"user.authorization.grant"}),", and ",(0,r.jsx)(t.code,{children:"user.authorization.revoke"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(t.p,{children:"In addition to firing the corresponding events for each subscription type, the websocket module can also fire the following meta-events:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/events/EventSocketSubscriptionSuccessEvent.html",children:(0,r.jsx)(t.code,{children:"EventSocketSubscriptionSuccessEvent"})}),": Called when an EventSocket successfully registers a subscription with the Helix API."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/events/EventSocketSubscriptionFailureEvent.html",children:(0,r.jsx)(t.code,{children:"EventSocketSubscriptionFailureEvent"})}),": Called when an EventSocket fails to register subscription with the Helix API."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/events/EventSocketDeleteSubscriptionSuccessEvent.html",children:(0,r.jsx)(t.code,{children:"EventSocketDeleteSubscriptionSuccessEvent"})}),": Called when an EventSocket successfully deletes a subscription via the Helix API."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/events/EventSocketDeleteSubscriptionFailureEvent.html",children:(0,r.jsx)(t.code,{children:"EventSocketDeleteSubscriptionFailureEvent"})}),": Called when an EventSocket fails to delete a subscription via the Helix API."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/events/EventSocketConnectionStateEvent.html",children:(0,r.jsx)(t.code,{children:"EventSocketConnectionStateEvent"})}),": Called when the connection state of an EventSocket changes."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://twitch4j.github.io/javadoc/com/github/twitch4j/eventsub/socket/events/EventSocketClosedByTwitchEvent.html",children:(0,r.jsx)(t.code,{children:"EventSocketClosedByTwitchEvent"})}),": Called when Twitch decides to close our EventSocket."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"code-example",children:"Code Example"}),"\n",(0,r.jsxs)(l.default,{groupId:"code",children:[(0,r.jsx)(o.default,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// build module\nITwitchClient twitchClient = TwitchClientBuilder.builder()\n    .withEnableEventSocket(true)\n    .withEnableHelix(true)\n    .withDefaultAuthToken(new OAuth2Credential("twitch", "user-access-token-goes-here"))\n    .build();\nIEventSubSocket eventSocket = twitchClient.getEventSocket();\n\n// create subscription\neventSocket.register(\n    SubscriptionTypes.STREAM_ONLINE.prepareSubscription(\n        b -> b.broadcasterUserId("channel-id-goes-here").build(),\n        null\n    )\n);\n\n// register event handler\neventSocket.getEventManager().onEvent(StreamOnlineEvent.class, System.out::println);\n'})})}),(0,r.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'// build module\nval twitchClient = TwitchClientBuilder.builder()\n    .withEnableEventSocket(true)\n    .withEnableHelix(true)\n    .withDefaultAuthToken(OAuth2Credential("twitch", "user-access-token-goes-here"))\n    .build()\nval eventSocket = twitchClient.getEventSocket()\n\n// create subscription\neventSocket.register(\n    SubscriptionTypes.STREAM_ONLINE.prepareSubscription(\n        { b -> b.broadcasterUserId("channel-id-goes-here").build() },\n        null\n    )\n)\n\n// register event handler\neventSocket.getEventManager().onEvent(StreamOnlineEvent::class.java) {\n    println(it)\n}\n'})})}),(0,r.jsx)(o.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'// build module\ndef twitchClient = TwitchClientBuilder.builder()\n    .withEnableEventSocket(true)\n    .withEnableHelix(true)\n    .withDefaultAuthToken(new OAuth2Credential("twitch", "user-access-token-goes-here"))\n    .build()\ndef eventSocket = twitchClient.getEventSocket()\n\n// create subscription\neventSocket.register(\n    SubscriptionTypes.STREAM_ONLINE.prepareSubscription(\n        { b -> b.broadcasterUserId("channel-id-goes-here").build() },\n        null\n    )\n)\n\n// register event handler\neventSocket.getEventManager().onEvent(StreamOnlineEvent) { event ->\n    System.out.println event\n}\n'})})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);