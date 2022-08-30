"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,m=h["".concat(u,".").concat(p)]||h[p]||d[p]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),u=a(7094),c=a(2466);const s="tabList__CuJ",d="tabItem_LNqP";function h(e){var t,a;const{lazy:i,block:h,defaultValue:p,values:m,groupId:f,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),w=(0,o.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===p?p:null!=(t=null!=p?p:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:C}=(0,u.U)(),[T,N]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==T&&g.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,a=j.indexOf(t),n=g[a].value;n!==T&&(x(t),N(n),null!=f&&C(f,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;a=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;a=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":h},v)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:O,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,i.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},8503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),i=a(5162);const o={sidebar_position:4},u="Chat",c={unversionedId:"chat/index",id:"version-1.x/chat/index",title:"Chat",description:"Twitch offers an IRC interface to our chat functionality. This allows you to, for instance:",source:"@site/versioned_docs/version-1.x/chat/index.mdx",sourceDirName:"chat",slug:"/chat/",permalink:"/chat/",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/chat/index.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-1.x-docs",previous:{title:"Client Helper",permalink:"/getting-started/client-helper"},next:{title:"Join Channel",permalink:"/chat/join-channel"}},s={},d=[{value:"Methods",id:"methods",level:2},{value:"Use as part of Twitch4J",id:"use-as-part-of-twitch4j",level:2},{value:"Use Standalone",id:"use-standalone",level:2}],h={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chat"},"Chat"),(0,r.kt)("p",null,"Twitch offers an IRC interface to our chat functionality. This allows you to, for instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Develop bots for your channel."),(0,r.kt)("li",{parentName:"ul"},"Connect to a channel\u2019s chat with an IRC client instead of using the Web interface.")),(0,r.kt)("p",null,"While our IRC server generally follows RFC1459, there are several cases where it behaves slightly differently than other IRC servers; as described below, there are many Twitch-specific IRC capabilities. The differences are necessary to accommodate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The massive scale at which our chat servers operate, and"),(0,r.kt)("li",{parentName:"ul"},"Complex Twitch-specific features that we provide (to viewers, broadcasters, and developers).")),(0,r.kt)("p",null,"Rate-Limiting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The library follows the official rate-limits and has a queue for a maximum of 200 messages."),(0,r.kt)("li",{parentName:"ul"},"After that old messages will be removed from the queue in favor of more recent messages.")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./join-channel"},"JoinChannel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./leave-channel"},"LeaveChannel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./send-message"},"SendMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./send-private-message"},"SendPrivateMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../events/channel-message-event"},"Handle ChannelMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../events/private-message-event"},"Handle PrivateMessage"))),(0,r.kt)("h2",{id:"use-as-part-of-twitch4j"},"Use as part of Twitch4J"),(0,r.kt)("p",null,"To use Twitch Chat and events from chat, you need to specify withEnableChat when building the Twitch4J Instance, as shown below:"),(0,r.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// chat credential\nOAuth2Credential credential = new OAuth2Credential("twitch", "oAuthTokenHere");\n\n// twitch client\nTwitchClient twitchClient = TwitchClientBuilder.builder()\n            ...\n            .withEnableChat(true)\n            .withChatAccount(oAuth2CredentialHere)\n            ...\n            .build();\n'))),(0,r.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// chat credential\nval credential = OAuth2Credential("twitch", "oAuthTokenHere")\n\n// twitch client\nval twitchClient = TwitchClientBuilder.builder().apply {\n                ...\n                withEnableChat(true)\n                withChatAccount(oAuth2CredentialHere)\n                ...\n            }.build()\n'))),(0,r.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// chat credential\ndef credential = new OAuth2Credential("twitch", "oAuthTokenHere")\n\n// twitch client\ndef twitchClient = TwitchClientBuilder.builder()\n            ...\n            .withEnableChat(true)\n            .withChatAccount(oAuth2CredentialHere)\n            ...\n            .build()\n')))),(0,r.kt)("p",null,"A OAuth2Credential is a generic oauth credentials so the first parameter is always ",(0,r.kt)("inlineCode",{parentName:"p"},"twitch"),". The 2nd value is your oauth token, you can generate a chat-bot token ",(0,r.kt)("a",{parentName:"p",href:"https://twitchtokengenerator.com/"},"here"),"."),(0,r.kt)("p",null,"When you build a TwitchClient Twitch4J will automatically connect you to chat (via WebSocket).\nSo you can start joining channels and listening to messages after this - refer to the methods documented above."),(0,r.kt)("h2",{id:"use-standalone"},"Use Standalone"),(0,r.kt)("p",null,"Initialize the Chat Feature as Standalone Module, also requires setting up the EventManager and the CredentialManger yourself:"),(0,r.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// credential manager\nCredentialManager credentialManager = CredentialManagerBuilder.builder().build();\ncredentialManager.registerIdentityProvider(new TwitchIdentityProvider("jzkbprff40iqj646a697cyrvl0zt2m6", "**SECRET**", ""));\n\n// twitch4j - chat\nTwitchChat client = TwitchChatBuilder.builder()\n        .withCredentialManager(credentialManager)\n        .withChatAccount(oAuth2CredentialHere)\n        .build();\n'))),(0,r.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// credential manager\nval credentialManager = CredentialManagerBuilder.builder().build().also {\n    it.registerIdentityProvider(TwitchIdentityProvider("jzkbprff40iqj646a697cyrvl0zt2m6", "**SECRET**", ""))\n}\n\n// twitch4j - chat\nval client = TwitchChatBuilder.builder().apply {\n            withCredentialManager(credentialManager)\n            withChatAccount(oAuth2CredentialHere)\n        }.build()\n'))),(0,r.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// credential manager\ndef credentialManager = CredentialManagerBuilder.builder().build()\ncredentialManager.registerIdentityProvider(new TwitchIdentityProvider("jzkbprff40iqj646a697cyrvl0zt2m6", "**SECRET**", ""))\n\n// twitch4j - chat\ndef client = TwitchChatBuilder.builder()\n        .withCredentialManager(credentialManager)\n        .withChatAccount(oAuth2CredentialHere)\n        .build()\n')))),(0,r.kt)("p",null,"The UserId is required, since it will be used to get the oauth credentials"))}p.isMDXComponent=!0}}]);