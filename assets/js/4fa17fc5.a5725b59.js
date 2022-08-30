"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:m,values:h,groupId:f,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:x}=(0,i.U)(),[S,T]=(0,r.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==S&&g.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==S&&(E(t),T(a),null!=f&&x(f,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=w.indexOf(e.currentTarget)+1;n=null!=(a=w[t])?a:w[0];break}case"ArrowLeft":{var r;const t=w.indexOf(e.currentTarget)-1;n=null!=(r=w[t])?r:w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>w.push(e),onKeyDown:C,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},9591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const s={sidebar_position:20},i="Entitlements - Get Code Status",u={unversionedId:"rest-helix/entitlements-codes",id:"version-1.x/rest-helix/entitlements-codes",title:"Entitlements - Get Code Status",description:"Description",source:"@site/versioned_docs/version-1.x/rest-helix/entitlements-codes.mdx",sourceDirName:"rest-helix",slug:"/rest-helix/entitlements-codes",permalink:"/rest-helix/entitlements-codes",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/entitlements-codes.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"version-1.x-docs",previous:{title:"Bits - Leaderboard",permalink:"/rest-helix/bits-leaderboard"},next:{title:"Entitlements - Redeem Code",permalink:"/rest-helix/entitlements-redeem-codes"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"print code status",id:"print-code-status",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entitlements---get-code-status"},"Entitlements - Get Code Status"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Gets the status of one or more provided codes. "),(0,r.kt)("h2",{id:"method-definition"},"Method Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RequestLine("GET /entitlements/codes?code={code}&user_id={user_id}")\n@Headers("Authorization: Bearer {token}")\nHystrixCommand<CodeStatusList> getCodeStatus(\n    @Param("token") String authToken,\n    @Param("code") List<String> code,\n    @Param("user_id") Integer userId\n);\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authToken"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"right"},"App Access Token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The code to get the status of.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Represents a numeric Twitch user ID")))),(0,r.kt)("h2",{id:"code-snippets"},"Code-Snippets"),(0,r.kt)("h3",{id:"print-code-status"},"print code status"),(0,r.kt)(o.default,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'CodeStatusList codeStatusList = twitchClient.getHelix().getCodeStatus(authToken, Arrays.asList("KUHXV-4GXYP-AKAKK"), 156900877).execute();\ncodeStatusList.getStatuses().forEach(codeStatus -> {\n    System.out.println(codeStatus.getCode() + " " + codeStatus.getStatus());\n});\n'))),(0,r.kt)(l.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val codeStatusList = twitchClient.helix.getCodeStatus(authToken, listOf("KUHXV-4GXYP-AKAKK"), 156900877).execute();\ncodeStatusList.statuses.forEach { codeStatus -> \n    println("${codeStatus.code} ${codeStatus.status}")\n}\n'))),(0,r.kt)(l.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'def codeStatusList = twitchClient.helix.getCodeStatus(authToken, ["KUHXV-4GXYP-AKAKK"], 156900877).execute();\ncodeStatusList.statuses.each { codeStatus -> \n    System.out.println "${codeStatus.code} ${codeStatus.status}"\n}\n')))))}m.isMDXComponent=!0}}]);