"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8976],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),l=n(72389),i=n(65450),o=n(86010),s="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,p=e.block,m=e.defaultValue,c=e.values,d=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),N=h.tabGroupChoices,y=h.setTabGroupChoices,_=(0,r.useState)(v),w=_[0],C=_[1],T=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=N[d];null!=x&&x!==w&&k.some((function(e){return e.value===x}))&&C(x)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==w&&(O(t),C(a),null!=d&&y(d,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},89464:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return c},toc:function(){return d},default:function(){return b}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(9877),o=n(58215),s=["components"],u={},p="Common Options",m={unversionedId:"transform/common-options",id:"version-2.1.2/transform/common-options",title:"Common Options",description:"This transform both supported by engine Spark and Flink.",source:"@site/versioned_docs/version-2.1.2/transform/common-options.mdx",sourceDirName:"transform",slug:"/transform/common-options",permalink:"/zh-CN/docs/2.1.2/transform/common-options",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.2/transform/common-options.mdx",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"Common Options",permalink:"/zh-CN/docs/2.1.2/connector/sink/common-options"},next:{title:"Sql",permalink:"/zh-CN/docs/2.1.2/transform/sql"}},c={},d=[{value:"Transform Plugin common parameters",id:"transform-plugin-common-parameters",level:2},{value:"field_name string",id:"field_name-string",level:3},{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"result_table_name string",id:"result_table_name-string",level:3},{value:"Examples",id:"examples",level:2}],f={toc:d};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"common-options"},"Common Options"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This transform both supported by engine Spark and Flink."))),(0,l.kt)("h2",{id:"transform-plugin-common-parameters"},"Transform Plugin common parameters"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source_table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result_table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"))))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source_table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result_table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,l.kt)("p",null,"When the data is obtained from the upper-level plugin, you can specify the name of the obtained field, which is convenient for use in subsequent sql plugins."))),(0,l.kt)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plug-in processes the data set ",(0,l.kt)("inlineCode",{parentName:"p"},"(dataset)")," output by the previous plug-in in the configuration file;"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin is processing the data set corresponding to this parameter."),(0,l.kt)("h3",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," is not specified, the data processed by this plugin will not be registered as a data set that can be directly accessed by other plugins, or called a temporary table ",(0,l.kt)("inlineCode",{parentName:"p"},"(table)"),";"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a data set ",(0,l.kt)("inlineCode",{parentName:"p"},"(dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,l.kt)("inlineCode",{parentName:"p"},"(table)")," . The dataset registered here can be directly accessed by other plugins by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," ."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'split {\n    source_table_name = "source_view_table"\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n    result_table_name = "result_view_table"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Split")," plugin will process the data in the temporary table ",(0,l.kt)("inlineCode",{parentName:"p"},"source_view_table")," and register the processing result as a temporary table named ",(0,l.kt)("inlineCode",{parentName:"p"},"result_view_table"),". This temporary table can be used by any subsequent ",(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," plugin by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," .")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'split {\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: If ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not configured, output the processing result of the last ",(0,l.kt)("inlineCode",{parentName:"p"},"Transform")," plugin in the configuration file"))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      result_table_name = "fake_1"\n      field_name = "name,age"\n    }\n    FakeSourceStream {\n      result_table_name = "fake_2"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n      source_table_name = "fake_1"\n      sql = "select name from fake_1"\n      result_table_name = "fake_name"\n    }\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the sql plugin will process the data of ",(0,l.kt)("inlineCode",{parentName:"p"},"fake_2")," , and if it is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"fake_1")," , it will process the data of ",(0,l.kt)("inlineCode",{parentName:"p"},"fake_1")," .")))))}b.isMDXComponent=!0}}]);