"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1001],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),u=a(6775),s=a(1980),i=a(7392),c=a(12);function d(e){return function(e){var t,a;return null!=(t=null==(a=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,u]=(0,n.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const n=null!=(t=r.find((e=>e.default)))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,i]=h({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=null!=s?s:d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);u(e),i(e),b(e)}),[i,b,l]),tabValues:l}}var v=a(2389);const f="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==u&&(d(t),s(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;a=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var n;const t=c.indexOf(e.currentTarget)-1;a=null!=(n=c[t])?n:c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=a?a:t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},2289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162),u=a(4996);const s={sidebar_position:1,sidebar_label:"Home",slug:"/"},i="",c={unversionedId:"intro",id:"version-1.x/intro",title:"",description:"Welcome and thanks for using Twitch4J!",source:"@site/versioned_docs/version-1.x/intro.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/intro.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Home",slug:"/"},sidebar:"version-1.x-docs",next:{title:"Getting Started",permalink:"/category/getting-started"}},d={},p=[{value:"Events",id:"events",level:2},{value:"API Calls",id:"api-calls",level:2},{value:"Synchronous Execution",id:"synchronous-execution",level:3},{value:"Asynchronous Execution",id:"asynchronous-execution",level:3},{value:"Reactive Execution",id:"reactive-execution",level:3}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:""}),(0,n.kt)("img",{src:(0,u.Z)("/img/wordmark.svg"),width:"100%",fill:"white"}),(0,n.kt)("p",null,"Welcome and thanks for using Twitch4J!"),(0,n.kt)("p",null,"Please check out the ",(0,n.kt)("a",{parentName:"p",href:"./getting-started/installation"},"Installation")," page to install the Twitch4J dependency."),(0,n.kt)("p",null,"After that the ",(0,n.kt)("a",{parentName:"p",href:"./getting-started/client-builder"},"Client-Builder")," will show you how to create a Twitch4J Instance."),(0,n.kt)("p",null,"Now you'r ready to check out a few example projects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/twitch4j/twitch4j-chatbot"},"Twitch4J Chatbot"))),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("p",null,"Many modules can generate events which you can handle in some way, like PubSub, Chat, ..."),(0,n.kt)("p",null,"For a list of available events / information on how to listen to events please check out: ",(0,n.kt)("a",{parentName:"p",href:"../events"},"Events")),(0,n.kt)("h2",{id:"api-calls"},"API Calls"),(0,n.kt)("p",null,"This API Client provides you 3 methods to handle / process the results of api calls."),(0,n.kt)("h3",{id:"synchronous-execution"},"Synchronous Execution"),(0,n.kt)("p",null,"You can execute any api call synchronously with the execute() method, as shown in the following example:"),(0,n.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(o.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'UserList users = twitchClient.getHelix().getUsers(null, null, Arrays.asList("twitch4j")).execute();\n'))),(0,n.kt)(o.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'var userList: users = twitchClient.helix.getUsers(null, null, arrayOf("twitch4j")).execute();\n'))),(0,n.kt)(o.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},'UserList users = twitchClient.helix.getUsers(null, null, ["twitch4j"]).execute();\n')))),(0,n.kt)("h3",{id:"asynchronous-execution"},"Asynchronous Execution"),(0,n.kt)("p",null,"You can execute any api call asynchronously with the queue() method, as shown in the following example:"),(0,n.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(o.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Future<UserList> users = twitchClient.getHelix().getUsers(null, null, Arrays.asList("twitch4j")).queue();\n'))),(0,n.kt)(o.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'var users: Future<UserList> = twitchClient.helix.getUsers(null, null, arrayOf("twitch4j")).queue()\n'))),(0,n.kt)(o.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},'Future<UserList> users = twitchClient.helix.getUsers(null, null, ["twitch4j"]).queue()\n')))),(0,n.kt)("p",null,"You can retrieve the result of the async method at any time by calling ",(0,n.kt)("inlineCode",{parentName:"p"},".get()")," on the future, for example: ",(0,n.kt)("inlineCode",{parentName:"p"},"users.get()"),"."),(0,n.kt)("p",null,"For more information on how you can work with ",(0,n.kt)("inlineCode",{parentName:"p"},"Future")," please check out this guide: ",(0,n.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-future"},"https://www.baeldung.com/java-future")),(0,n.kt)("h3",{id:"reactive-execution"},"Reactive Execution"),(0,n.kt)("p",null,"You can also observe the results of any api call as an Observable by using one of the following methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"observe() \u2014 returns a \u201chot\u201d Observable that executes the command immediately, though because the Observable is filtered through a ReplaySubject you are not in danger of losing any items that it emits before you have a chance to subscribe"),(0,n.kt)("li",{parentName:"ul"},"toObservable() \u2014 returns a \u201ccold\u201d Observable that won\u2019t execute the command and begin emitting its results until you subscribe to the Observable")),(0,n.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(o.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Observable<UserList> users = twitchClient.getKraken().getUsers(null, null, Arrays.asList("twitch4j")).observe();\n'))),(0,n.kt)(o.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'var users: Observable<UserList> = twitchClient.kraken.getUsers(null, null, arrayOf("twitch4j")).observe()\n'))),(0,n.kt)(o.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},'Observable<UserList> users = twitchClient.kraken.getUsers(null, null, ["twitch4j"]).observe()\n')))),(0,n.kt)("p",null,"You then retrieve the value of the command by subscribing to the Observable:"),(0,n.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(o.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"users.subscribe(data -> {\n  // your code to work with the result data\n});\n"))),(0,n.kt)(o.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"users.subscribe { data ->\n  // your code to work with the result data\n}\n"))),(0,n.kt)(o.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},"users.subscribe { data ->\n  // your code to work with the result data\n}\n")))))}h.isMDXComponent=!0}}]);