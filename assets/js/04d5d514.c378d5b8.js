"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,m=h["".concat(u,".").concat(p)]||h[p]||d[p]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6775),u=a(1980),c=a(7392),s=a(12);function d(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,c]=m({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=null!=u?u:d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);o(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var b=a(2389);const v="tabList__CuJ",g="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=e=>{const t=e.currentTarget,a=s.indexOf(t),n=c[a].value;n!==o&&(d(t),u(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{var n;const t=s.indexOf(e.currentTarget)+1;a=null!=(n=s[t])?n:s[0];break}case"ArrowLeft":{var r;const t=s.indexOf(e.currentTarget)-1;a=null!=(r=s[t])?r:s[s.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:h},i,{className:(0,l.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},8503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const o={sidebar_position:4},u="Chat",c={unversionedId:"chat/index",id:"version-1.x/chat/index",title:"Chat",description:"Twitch offers an IRC interface to our chat functionality. This allows you to, for instance:",source:"@site/versioned_docs/version-1.x/chat/index.mdx",sourceDirName:"chat",slug:"/chat/",permalink:"/chat/",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/chat/index.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-1.x-docs",previous:{title:"Client Helper",permalink:"/getting-started/client-helper"},next:{title:"Join Channel",permalink:"/chat/join-channel"}},s={},d=[{value:"Methods",id:"methods",level:2},{value:"Use as part of Twitch4J",id:"use-as-part-of-twitch4j",level:2},{value:"Use Standalone",id:"use-standalone",level:2}],h={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chat"},"Chat"),(0,r.kt)("p",null,"Twitch offers an IRC interface to our chat functionality. This allows you to, for instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Develop bots for your channel."),(0,r.kt)("li",{parentName:"ul"},"Connect to a channel\u2019s chat with an IRC client instead of using the Web interface.")),(0,r.kt)("p",null,"While our IRC server generally follows RFC1459, there are several cases where it behaves slightly differently than other IRC servers; as described below, there are many Twitch-specific IRC capabilities. The differences are necessary to accommodate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The massive scale at which our chat servers operate, and"),(0,r.kt)("li",{parentName:"ul"},"Complex Twitch-specific features that we provide (to viewers, broadcasters, and developers).")),(0,r.kt)("p",null,"Rate-Limiting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The library follows the official rate-limits and has a queue for a maximum of 200 messages."),(0,r.kt)("li",{parentName:"ul"},"After that old messages will be removed from the queue in favor of more recent messages.")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./join-channel"},"JoinChannel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./leave-channel"},"LeaveChannel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./send-message"},"SendMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./send-private-message"},"SendPrivateMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../events/channel-message-event"},"Handle ChannelMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../events/private-message-event"},"Handle PrivateMessage"))),(0,r.kt)("h2",{id:"use-as-part-of-twitch4j"},"Use as part of Twitch4J"),(0,r.kt)("p",null,"To use Twitch Chat and events from chat, you need to specify withEnableChat when building the Twitch4J Instance, as shown below:"),(0,r.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// chat credential\nOAuth2Credential credential = new OAuth2Credential("twitch", "oAuthTokenHere");\n\n// twitch client\nTwitchClient twitchClient = TwitchClientBuilder.builder()\n            ...\n            .withEnableChat(true)\n            .withChatAccount(oAuth2CredentialHere)\n            ...\n            .build();\n'))),(0,r.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// chat credential\nval credential = OAuth2Credential("twitch", "oAuthTokenHere")\n\n// twitch client\nval twitchClient = TwitchClientBuilder.builder().apply {\n                ...\n                withEnableChat(true)\n                withChatAccount(oAuth2CredentialHere)\n                ...\n            }.build()\n'))),(0,r.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// chat credential\ndef credential = new OAuth2Credential("twitch", "oAuthTokenHere")\n\n// twitch client\ndef twitchClient = TwitchClientBuilder.builder()\n            ...\n            .withEnableChat(true)\n            .withChatAccount(oAuth2CredentialHere)\n            ...\n            .build()\n')))),(0,r.kt)("p",null,"A OAuth2Credential is a generic oauth credentials so the first parameter is always ",(0,r.kt)("inlineCode",{parentName:"p"},"twitch"),". The 2nd value is your oauth token, you can generate a chat-bot token ",(0,r.kt)("a",{parentName:"p",href:"https://twitchtokengenerator.com/"},"here"),"."),(0,r.kt)("p",null,"When you build a TwitchClient Twitch4J will automatically connect you to chat (via WebSocket).\nSo you can start joining channels and listening to messages after this - refer to the methods documented above."),(0,r.kt)("h2",{id:"use-standalone"},"Use Standalone"),(0,r.kt)("p",null,"Initialize the Chat Feature as Standalone Module, also requires setting up the EventManager and the CredentialManger yourself:"),(0,r.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// credential manager\nCredentialManager credentialManager = CredentialManagerBuilder.builder().build();\ncredentialManager.registerIdentityProvider(new TwitchIdentityProvider("jzkbprff40iqj646a697cyrvl0zt2m6", "**SECRET**", ""));\n\n// twitch4j - chat\nTwitchChat client = TwitchChatBuilder.builder()\n        .withCredentialManager(credentialManager)\n        .withChatAccount(oAuth2CredentialHere)\n        .build();\n'))),(0,r.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// credential manager\nval credentialManager = CredentialManagerBuilder.builder().build().also {\n    it.registerIdentityProvider(TwitchIdentityProvider("jzkbprff40iqj646a697cyrvl0zt2m6", "**SECRET**", ""))\n}\n\n// twitch4j - chat\nval client = TwitchChatBuilder.builder().apply {\n            withCredentialManager(credentialManager)\n            withChatAccount(oAuth2CredentialHere)\n        }.build()\n'))),(0,r.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// credential manager\ndef credentialManager = CredentialManagerBuilder.builder().build()\ncredentialManager.registerIdentityProvider(new TwitchIdentityProvider("jzkbprff40iqj646a697cyrvl0zt2m6", "**SECRET**", ""))\n\n// twitch4j - chat\ndef client = TwitchChatBuilder.builder()\n        .withCredentialManager(credentialManager)\n        .withChatAccount(oAuth2CredentialHere)\n        .build()\n')))),(0,r.kt)("p",null,"The UserId is required, since it will be used to get the oauth credentials"))}p.isMDXComponent=!0}}]);