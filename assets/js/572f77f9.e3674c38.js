"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4234],{8046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=n(4848),r=n(8453),l=n(1470),s=n(9365),i=n(6025);const o={sidebar_position:1,sidebar_label:"Home",slug:"/"},u="",c={id:"intro",title:"",description:"Welcome and thanks for using Twitch4J!",source:"@site/versioned_docs/version-1.x/intro.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/intro.mdx",tags:[],version:"1.x",lastUpdatedBy:"iProdigy",lastUpdatedAt:1707598838e3,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Home",slug:"/"},sidebar:"version-1.x-docs",next:{title:"Getting Started",permalink:"/category/getting-started"}},d={},h=[{value:"Events",id:"events",level:2},{value:"API Calls",id:"api-calls",level:2},{value:"Synchronous Execution",id:"synchronous-execution",level:3},{value:"Asynchronous Execution",id:"asynchronous-execution",level:3},{value:"Reactive Execution",id:"reactive-execution",level:3}];function b(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:""}),"\n",(0,a.jsx)("img",{src:(0,i.Ay)("/img/wordmark.svg"),width:"100%",fill:"white"}),"\n",(0,a.jsx)(t.p,{children:"Welcome and thanks for using Twitch4J!"}),"\n",(0,a.jsxs)(t.p,{children:["Please check out the ",(0,a.jsx)(t.a,{href:"./getting-started/installation",children:"Installation"})," page to install the Twitch4J dependency."]}),"\n",(0,a.jsxs)(t.p,{children:["After that the ",(0,a.jsx)(t.a,{href:"./getting-started/client-builder",children:"Client-Builder"})," will show you how to create a Twitch4J Instance."]}),"\n",(0,a.jsx)(t.p,{children:"Now you're ready to check out a few example projects:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/twitch4j/twitch4j-chatbot",children:"Twitch4J Chatbot (Java)"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/twitch4j/twitch4j-chatbot-kotlin",children:"Twitch4J Chatbot (Kotlin)"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,a.jsx)(t.p,{children:"Many modules can generate events which you can handle in some way, like PubSub, Chat, ..."}),"\n",(0,a.jsxs)(t.p,{children:["For a list of available events / information on how to listen to events please check out: ",(0,a.jsx)(t.a,{href:"../events",children:"Events"})]}),"\n",(0,a.jsx)(t.h2,{id:"api-calls",children:"API Calls"}),"\n",(0,a.jsx)(t.p,{children:"This API Client provides you 3 methods to handle / process the results of api calls."}),"\n",(0,a.jsx)(t.h3,{id:"synchronous-execution",children:"Synchronous Execution"}),"\n",(0,a.jsx)(t.p,{children:"You can execute any api call synchronously with the execute() method, as shown in the following example:"}),"\n",(0,a.jsxs)(l.default,{groupId:"code",children:[(0,a.jsx)(s.default,{value:"java",label:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'UserList users = twitchClient.getHelix().getUsers(null, null, Arrays.asList("twitch4j")).execute();\n'})})}),(0,a.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'var userList: users = twitchClient.helix.getUsers(null, null, arrayOf("twitch4j")).execute();\n'})})}),(0,a.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-groovy",children:'UserList users = twitchClient.helix.getUsers(null, null, ["twitch4j"]).execute();\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"asynchronous-execution",children:"Asynchronous Execution"}),"\n",(0,a.jsx)(t.p,{children:"You can execute any api call asynchronously with the queue() method, as shown in the following example:"}),"\n",(0,a.jsxs)(l.default,{groupId:"code",children:[(0,a.jsx)(s.default,{value:"java",label:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'Future<UserList> users = twitchClient.getHelix().getUsers(null, null, Arrays.asList("twitch4j")).queue();\n'})})}),(0,a.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'var users: Future<UserList> = twitchClient.helix.getUsers(null, null, arrayOf("twitch4j")).queue()\n'})})}),(0,a.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-groovy",children:'Future<UserList> users = twitchClient.helix.getUsers(null, null, ["twitch4j"]).queue()\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["You can retrieve the result of the async method at any time by calling ",(0,a.jsx)(t.code,{children:".get()"})," on the future, for example: ",(0,a.jsx)(t.code,{children:"users.get()"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["For more information on how you can work with ",(0,a.jsx)(t.code,{children:"Future"})," please check out this guide: ",(0,a.jsx)(t.a,{href:"https://www.baeldung.com/java-future",children:"https://www.baeldung.com/java-future"})]}),"\n",(0,a.jsx)(t.h3,{id:"reactive-execution",children:"Reactive Execution"}),"\n",(0,a.jsx)(t.p,{children:"You can also observe the results of any api call as an Observable by using one of the following methods:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"observe() \u2014 returns a \u201chot\u201d Observable that executes the command immediately, though because the Observable is filtered through a ReplaySubject you are not in danger of losing any items that it emits before you have a chance to subscribe"}),"\n",(0,a.jsx)(t.li,{children:"toObservable() \u2014 returns a \u201ccold\u201d Observable that won\u2019t execute the command and begin emitting its results until you subscribe to the Observable"}),"\n"]}),"\n",(0,a.jsxs)(l.default,{groupId:"code",children:[(0,a.jsx)(s.default,{value:"java",label:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'Observable<UserList> users = twitchClient.getKraken().getUsers(null, null, Arrays.asList("twitch4j")).observe();\n'})})}),(0,a.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'var users: Observable<UserList> = twitchClient.kraken.getUsers(null, null, arrayOf("twitch4j")).observe()\n'})})}),(0,a.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-groovy",children:'Observable<UserList> users = twitchClient.kraken.getUsers(null, null, ["twitch4j"]).observe()\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"You then retrieve the value of the command by subscribing to the Observable:"}),"\n",(0,a.jsxs)(l.default,{groupId:"code",children:[(0,a.jsx)(s.default,{value:"java",label:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"users.subscribe(data -> {\n  // your code to work with the result data\n});\n"})})}),(0,a.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:"users.subscribe { data ->\n  // your code to work with the result data\n}\n"})})}),(0,a.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-groovy",children:"users.subscribe { data ->\n  // your code to work with the result data\n}\n"})})})]})]})}function v(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},9365:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});n(6540);var a=n(8215);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(6540),r=n(8215),l=n(3104),s=n(6347),i=n(205),o=n(7485),u=n(1682),c=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=v({queryString:n,groupId:r}),[x,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=u??x;return b({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),p(e)}),[d,p,l]),tabValues:l}}var p=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function m(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(m,{...t,...e})]})}function y(e){const t=(0,p.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(6540);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);