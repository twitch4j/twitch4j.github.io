"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7970],{5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6775),u=n(1980),s=n(7392),d=n(12);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=null!=u?u:c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var v=n(2389);const b="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==i&&(c(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var a;const t=d.indexOf(e.currentTarget)+1;n=null!=(a=d[t])?a:d[0];break}case"ArrowLeft":{var r;const t=d.indexOf(e.currentTarget)-1;n=null!=(r=d[t])?r:d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},9185:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(7294)),l=a(n(4866)),o=a(n(5162)),i=a(n(614));function u(e,t,n){return void 0!==n?e+":"+t+":"+n:e+":"+t}t.default=function(e){let t=void 0!==e.title?" - "+e.title:"",n=function(e){const t=void 0!==e.scope?e.scope:"implementation";let n="dependencies {\n";return n=0==(void 0!==e.bom&&e.bom)?n+"    "+t+" '"+u(e.group,e.name,e.version)+"'\n":n+"    "+t+" platform('"+u(e.group,e.name,e.version)+"')\n",n+="}",n}(e),a=function(e){const t=void 0!==e.scope?e.scope:"implementation";let n="dependencies {\n";return n=0==(void 0!==e.bom&&e.bom)?n+"    "+t+'("'+u(e.group,e.name,e.version)+'")\n':n+"    "+t+'(platform("'+u(e.group,e.name,e.version)+'"))\n',n+="}",n}(e),s=function(e){let t="";return 0==(void 0!==e.bom&&e.bom)?(t+="<dependency>\n",t=t+"    <groupId>"+e.group+"</groupId>\n",t=t+"    <artifactId>"+e.name+"</artifactId>\n",void 0!==e.version&&(t=t+"    <version>"+e.version+"</version>\n"),t+="</dependency>\n"):(t+="<dependencyManagement>\n",t+="    <dependencies>\n",t+="        <dependency>\n",t=t+"            <groupId>"+e.group+"</groupId>\n",t=t+"            <artifactId>"+e.name+"</artifactId>\n",void 0!==e.version&&(t=t+"            <version>"+e.version+"</version>\n"),t+="            <type>pom</type>\n",t+="            <scope>import</scope>\n",t+="        </dependency>\n",t+="    </dependencies>\n",t+="</dependencyManagement>\n"),t}(e);return r.default.createElement(r.default.Fragment,null,r.default.createElement(l.default,{groupId:"dependency"},r.default.createElement(o.default,{value:"gradle-groovy",label:r.default.createElement(r.default.Fragment,null,"Gradle")},r.default.createElement(i.default,{language:"groovy",title:"build.gradle"+t},n)),r.default.createElement(o.default,{value:"gradle-kotlin",label:r.default.createElement(r.default.Fragment,null,"Gradle - Kotlin DSL")},r.default.createElement(i.default,{language:"kotlin",title:"build.gradle.kts"+t},a)),r.default.createElement(o.default,{value:"maven",label:r.default.createElement(r.default.Fragment,null,"Maven")},r.default.createElement(i.default,{language:"xml",title:"pom.xml"+t},s))))}},4563:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.JavaDependency=void 0;const r=a(n(9185));t.JavaDependency=r.default},2728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(4563);const o={sidebar_position:1},i="Installation",u={unversionedId:"getting-started/installation",id:"version-1.x/getting-started/installation",title:"Installation",description:"We recommend using a dependency management tool to manage twitch4j and sub dependencies. As a fallback method you can also download a fatJar adding shaded scope to your configuration build.",source:"@site/versioned_docs/version-1.x/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/getting-started/installation.mdx",tags:[],version:"1.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1690922659,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-1.x-docs",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"Client Builder",permalink:"/getting-started/client-builder"}},s={},d=[{value:"Usage in a Application",id:"usage-in-a-application",level:2},{value:"Usage in a Library",id:"usage-in-a-library",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"We recommend using a dependency management tool to manage twitch4j and sub dependencies. As a fallback method you can also download a fatJar adding ",(0,r.kt)("inlineCode",{parentName:"p"},"shaded")," scope to your configuration build."),(0,r.kt)("h2",{id:"usage-in-a-application"},"Usage in a Application"),(0,r.kt)(l.JavaDependency,{group:"com.github.twitch4j",name:"twitch4j",version:"1.16.0",scope:"implementation",mdxType:"JavaDependency"}),(0,r.kt)("h2",{id:"usage-in-a-library"},"Usage in a Library"),(0,r.kt)(l.JavaDependency,{group:"com.github.twitch4j",name:"twitch4j",version:"1.16.0",scope:"api",mdxType:"JavaDependency"}))}p.isMDXComponent=!0}}]);