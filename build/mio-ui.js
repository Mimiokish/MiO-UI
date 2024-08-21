this.MiOUI=function(e,t){"use strict";var o={GenerateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},GetViewportSize:function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},GetNodePosition:function(e){if(e){var t=e.getBoundingClientRect(),o=t.top,n=t.bottom,i=t.left,l=t.right,a=document.documentElement.clientWidth;return{top:o-0,bottom:document.documentElement.clientHeight-n,left:i-0,right:a-l}}}},n={GenerateUUID:o.GenerateUUID,GetViewportSize:o.GetViewportSize,GetNodePosition:o.GetNodePosition};const i=["id"],l={name:"mio-layouts"};var a=Object.assign(l,{setup(t){const o=n.GenerateUUID();return(t,n)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-Layout-"+e.unref(o),class:"mio-layouts"},[e.renderSlot(t.$slots,"default")],8,i))}});a.__scopeId="data-v-258385a8",a.__file="src/mio-layout/src/Layouts.vue";const c={name:"mio-layout-item"};var r=Object.assign(c,{props:{width:{type:String,default:"1"}},setup(t){const o=t,n=e.ref({});return function(){const e=o.width;"1"===e?Object.assign(n.value,{flex:"1"}):Object.assign(n.value,{flex:`0 0 ${e}`})}(),(t,o)=>(e.openBlock(),e.createElementBlock("div",{style:e.normalizeStyle(n.value),class:"mio-layout-item"},[e.renderSlot(t.$slots,"default")],4))}});r.__scopeId="data-v-e76db5ec",r.__file="src/mio-layout/src/LayoutItem.vue",a.install=function(e){e.component(a.name,a),e.component(r.name,r)};const s=["id"],d={name:"mio-menus"};var m=Object.assign(d,{props:{collapse:{type:Boolean,required:!1,default:!1}},setup(t){const o=n.GenerateUUID(),i=e.ref(null);return e.provide("active",i),e.provide("updateMethods",{setActive:function(e){i.value=e}}),(t,n)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-Menus-"+e.unref(o),class:"mio-menus"},[e.renderSlot(t.$slots,"default")],8,s))}});m.__file="src/mio-menus/src/Menu.vue";const u={class:"mio-menu-collapse"},p={name:"mio-menu-collapse"};var v=Object.assign(p,{props:{index:{type:[String,Number],required:!0},path:{type:String,required:!1},url:{type:String,required:!1}},setup(o){const n=o,i=e.inject("updateMethods"),l=e.inject("active"),a=e.ref(!0),c=t.useRouter();function r(e){"mio-menu-collapse-icon"===e.target.className?(e.stopPropagation(),a.value=!a.value,i.setActive(n.index)):n.path||n.url?(n.url&&window.open(n.url,"_blank"),n.path&&c.push(n.path),i.setActive(n.index)):(a.value=!a.value,i.setActive(n.index))}return(t,o)=>(e.openBlock(),e.createElementBlock("div",u,[e.createElementVNode("div",{class:e.normalizeClass(["mio-menu-collapse-title",e.unref(l)===n.index?a.value?"active":"active collapsed":a.value?"":"collapsed"]),onClick:r},[e.renderSlot(t.$slots,"title"),e.createElementVNode("div",{class:"mio-menu-collapse-icon",onClick:r},"❮")],2),e.createElementVNode("div",{class:e.normalizeClass(["mio-menu-collapse-content",a.value?"collapsed":""])},[e.renderSlot(t.$slots,"content"),e.renderSlot(t.$slots,"default")],2)]))}});v.__file="src/mio-menus/src/MenuCollapse.vue";const f={name:"mio-menu-item"};var k=Object.assign(f,{props:{index:{type:[String,Number],required:!0},path:{type:String,required:!1},url:{type:String,required:!1}},setup(o){const n=o,i=e.inject("updateMethods"),l=e.inject("active"),a=t.useRouter();function c(){i.setActive(n.index),n.url&&window.open(n.url,"_blank"),n.path&&a.push(n.path)}return(t,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["mio-menu-item",e.unref(l)===n.index?"active":""]),onClick:c},[e.renderSlot(t.$slots,"icon"),e.renderSlot(t.$slots,"label"),e.renderSlot(t.$slots,"default")],2))}});k.__file="src/mio-menus/src/MenuItem.vue",m.install=function(e){e.component(m.name,m),e.component(v.name,v),e.component(k.name,k)};const g=["id"],b={name:"mio-breadcrumbs"};var B=Object.assign(b,{props:{separator:{type:String,default:"/"}},setup(t){const o=t,i=n.GenerateUUID();return e.provide("separator",o.separator),e.onMounted((()=>{!function(){const e=document.getElementById("MiO-Breadcrumbs-"+i).children;e.length>0&&e[0]&&e[0].remove()}()})),(t,o)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-Breadcrumbs-"+e.unref(i),class:"mio-breadcrumbs"},[e.renderSlot(t.$slots,"default")],8,g))}});B.__scopeId="data-v-368902fa",B.__file="src/mio-breadcrumbs/src/Breadcrumbs.vue";const y={class:"mio-breadcrumb-separator"},h={name:"mio-breadcrumb-item"};var S=Object.assign(h,{props:{link:{type:String,default:""},active:{type:Boolean,default:!1}},setup(o){const n=t.useRouter();function i(){this.link&&n.push(this.link)}const l=e.inject("separator");return(t,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",y,e.toDisplayString(e.unref(l)),1),e.createElementVNode("div",{class:e.normalizeClass(["mio-breadcrumb-item",o.active?"active":""]),onClick:i},[e.renderSlot(t.$slots,"default")],2)],64))}});S.__scopeId="data-v-255fd053",S.__file="src/mio-breadcrumbs/src/BreadcrumbItem.vue",B.install=function(e){e.component(B.name,B),e.component(S.name,S)};const O=["id"],M=(t=>(e.pushScopeId("data-v-252230d2"),t=t(),e.popScopeId(),t))((()=>e.createElementVNode("div",{class:"mio-select-icon"},"⥥",-1))),_=["id"],E={name:"mio-select"};var I=Object.assign(E,{props:{modelValue:{type:[String,Number,null],default:null},placeholder:{type:String,default:"select an option"}},emits:["update:modelValue"],setup(t,{emit:o}){const i=t,l=o,a=n.GenerateUUID(),c=e.ref(null),r=e.ref(null),s=e.ref(""),d=function(e){if(!e.target.id.includes(a)){const e=document.getElementById("MiO-Select-"+a),t=document.getElementById("MiO-Select-Options-"+a);e.classList.remove("active"),t.classList.remove("active")}};function m(e){const t=document.getElementById("MiO-Select-"+a),o=document.getElementById("MiO-Select-Options-"+a);t.classList.toggle("active"),o.classList.toggle("active"),function(e){const t=e;if(t){const e=n.GetViewportSize(),o=n.GetNodePosition(t),i=.2*e.height;o.top>i?(t.classList.remove("bottom"),t.classList.add("top")):(t.classList.remove("top"),t.classList.add("bottom"))}}(o)}return e.provide("updateMethods",{value:function(e,t,o){c.value=o,r.value=t}}),e.watch((()=>i.modelValue),(e=>{const t=e;s.value=Object.prototype.toString.call(t);const o=document.getElementById("MiO-Select-Options-"+a);if(o&&o.children){const e=o.children.length;for(let n=0;n<e;n++){const e=o.children[n],i=e.getAttribute("value");let l;switch(s.value){case"[object Number]":l=Number(i);break;case"[object String]":l=String(i);break;default:l=i}if(l===t){s.value=e.getAttribute("key"),r.value=t,c.value=e.innerText;break}}}}),{immediate:!0}),e.watch((()=>r.value),(e=>{l("update:modelValue",e)})),e.onMounted((()=>{document.addEventListener("click",d)})),document.addEventListener("click",d),(t,o)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-Select-"+e.unref(a),class:"mio-select",onClick:m},[e.withDirectives(e.createElementVNode("div",{class:"mio-select-placeholder"},e.toDisplayString(i.placeholder),513),[[e.vShow,!r.value]]),e.withDirectives(e.createElementVNode("div",{class:"mio-select-label"},e.toDisplayString(c.value),513),[[e.vShow,r.value]]),M,e.createElementVNode("div",{id:"MiO-Select-Options-"+e.unref(a),class:"mio-select-options"},[e.renderSlot(t.$slots,"default")],8,_)],8,O))}});I.__scopeId="data-v-252230d2",I.__file="src/mio-select/src/Select.vue";const x={name:"mio-select-option"};var j=Object.assign(x,{props:{label:{type:String,default:""}},setup(t){const o=t,n=e.inject("updateMethods");function i(e){const t=e.target;t&&n.value(t.getAttribute("key"),t.getAttribute("value"),t.innerText)}return(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:"mio-select-option",onClick:i},[e.withDirectives(e.createElementVNode("div",{class:"mio-select-option-label"},e.toDisplayString(o.label),513),[[e.vShow,o.label]]),e.renderSlot(t.$slots,"default")]))}});j.__scopeId="data-v-6d53e328",j.__file="src/mio-select/src/SelectOption.vue",I.install=function(e){e.component(I.name,I),e.component(j.name,j)};const L=["id"],C={name:"mio-list"};var w=Object.assign(C,{props:{mode:{type:String,default:"default"}},setup(t){const o=t,i=n.GenerateUUID(),l=e.ref("accordion"),a=e.ref("");return e.provide("activeMarker",a),e.provide("updateMethods",{active:function(e){const t=e;t&&(a.value=t)},activate:function(e){const t=e.split("-");switch(a.value.split("-"),l.value){case"accordion":case"Accordion":!function(e){const t=e.split("-"),o=t.length;if(o>0)for(let e=0;e<o;e++){const o=t.slice(0,e+1).join("-"),n=document.getElementById("MiO-List-Item-"+o);n&&n.classList.add("active");const i=document.getElementById("MiO-List-Item-Content-"+o);i&&i.classList.add("active");const l=document.getElementById("MiO-List-Item-Children-"+o);l&&l.classList.add("expend")}}(t.join("-"));break;default:t.join("-")}},deactivate:function(e){if("accordion"===(e.split("-"),a.value.split("-"),l.value))!function(){const e=a.value.split("-"),t=e.length;if(t>0)for(let o=t;o>0;o--){const t=e.slice(0,o).join("-"),n=document.getElementById("MiO-List-Item-"+t);n&&n.classList.remove("active");const i=document.getElementById("MiO-List-Item-Content-"+t);i&&i.classList.remove("active");const l=document.getElementById("MiO-List-Item-Children-"+t);l&&l.classList.remove("expend")}}()}}),e.watch(o.mode,(e=>{switch(e){case"accordion":case"Accordion":l.value="accordion";break;default:l.value="default"}})),(t,o)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-List-"+e.unref(i),class:"mio-list"},[e.renderSlot(t.$slots,"default")],8,L))}});w.__scopeId="data-v-3d6e47d7",w.__file="src/mio-list/src/List.vue";const N=["id"],U=["id"],D=["id"],V={name:"mio-list-item"};var $=Object.assign(V,{props:{marker:{type:String,default:""},item:{type:Object,default:()=>{}}},setup(t){const o=t,n=e.ref(null),i=e.inject("activeMarker"),l=e.inject("updateMethods"),a=e.ref(o.marker);function c(e){const t=e.split("-"),o=i.value.split("-"),n=t.length,a=o.length;if(0===a)l.active(t.join("-"));else if(t.join("-")===o.join("-")){const e=document.getElementById("MiO-List-Item-Children-"+t.join("-"));e&&e.classList.toggle("expend")}else n===a-1?(l.deactivate(o.join("-")),l.activate(t.join("-")),function(e){const t=e.split("-"),o=i.value.split("-");let n=!0;const l=t.length;for(let e=0;e<l;e++)if(t[e]!==o[e])return void(n=!1);if(n){const e=document.getElementById("MiO-List-Item-Children-"+t.join("-"));e&&e.classList.remove("expend")}}(t.join("-"))):(l.deactivate(o.join("-")),l.activate(t.join("-"))),l.active(t.join("-"))}return e.onMounted((()=>{!function(){if(!o.marker){const e=n.value.parentElement;a.value=([...e.children].indexOf(n.value)+1).toString()}}()})),(i,l)=>{const r=e.resolveComponent("mio-list-item");return e.openBlock(),e.createElementBlock("div",{ref_key:"root",ref:n,class:"mio-list-item",id:"MiO-List-Item-"+(o.marker?o.marker:a.value)},[t.item.label?(e.openBlock(),e.createElementBlock("div",{key:0,class:"mio-list-item-content",id:"MiO-List-Item-Content-"+(o.marker?o.marker:a.value),onClick:l[0]||(l[0]=e=>c(o.marker?o.marker:a.value))},e.toDisplayString(t.item.label),9,U)):e.renderSlot(i.$slots,"default",{key:1}),t.item.children?(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[t.item.children.length>0?(e.openBlock(),e.createElementBlock("div",{key:0,class:"mio-list-item-children",id:"MiO-List-Item-Children-"+(o.marker?o.marker:a.value)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.item.children,((t,n)=>(e.openBlock(),e.createBlock(r,{marker:o.marker?o.marker+"-"+(n+1).toString():a.value+"-"+(n+1).toString(),item:t},null,8,["marker","item"])))),256))],8,D)):e.createCommentVNode("v-if",!0)],64)):e.createCommentVNode("v-if",!0)],8,N)}}});$.__scopeId="data-v-3af5ae0a",$.__file="src/mio-list/src/ListItem.vue",w.install=function(e){e.component(w.name,w),e.component($.name,$)};const G=["id"],A={name:"mio-card"};var z=Object.assign(A,{setup(t){const o=n.GenerateUUID();return e.provide("UUID",o),(t,n)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-Card-"+e.unref(o),class:"mio-card"},[e.renderSlot(t.$slots,"default")],8,G))}});z.__scopeId="data-v-db086fd2",z.__file="src/mio-card/src/Card.vue";const T=["id"],q={name:"mio-card-header"};var F=Object.assign(q,{setup(t){const o=e.inject("UUID");return(t,n)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-Card-Header-"+e.unref(o),class:"mio-card-header"},[e.renderSlot(t.$slots,"default")],8,T))}});F.__scopeId="data-v-ff4fc5f8",F.__file="src/mio-card/src/CardHeader.vue";const H=["id"],P={name:"mio-card-body"};var R=Object.assign(P,{setup(t){const o=e.inject("UUID");return(t,n)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-Card-Body-"+e.unref(o),class:"mio-card-body"},[e.renderSlot(t.$slots,"default")],8,H))}});R.__scopeId="data-v-7015ed59",R.__file="src/mio-card/src/CardBody.vue";const W=["id"],J={name:"mio-card-footer"};var K=Object.assign(J,{setup(t){const o=e.inject("UUID");return(t,n)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-Card-Footer-"+e.unref(o),class:"mio-card-footer"},[e.renderSlot(t.$slots,"default")],8,W))}});K.__scopeId="data-v-5f25b912",K.__file="src/mio-card/src/CardFooter.vue",z.install=function(e){e.component(z.name,z),e.component(F.name,F),e.component(R.name,R),e.component(K.name,K)};const Q=["id"],X=["id"],Y=["id"],Z={key:0,class:"mio-table-no-data"},ee={key:0,class:"mio-table-no-data"},te={class:"mio-table-row"},oe={name:"mio-table"};var ne=Object.assign(oe,{props:{data:{type:Array,required:!0}},setup(t){const o=t,i=n.GenerateUUID(),l=e.ref([]);return e.provide("updateMethods",{fillColumns:function(e,t,o,n){l.value.push({prop:e,label:t,span:o,slot:n})}}),(n,a)=>(e.openBlock(),e.createElementBlock("div",{id:"MiO-Table-"+e.unref(i),class:"mio-table"},[e.createElementVNode("div",{id:"MiO-Table-Header"+e.unref(i),class:"mio-table-header"},[e.renderSlot(n.$slots,"default")],8,X),e.createElementVNode("div",{id:"MiO-Table-Body"+e.unref(i),class:"mio-table-body"},[o.data.length?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[o.data.length<=0?(e.openBlock(),e.createElementBlock("div",ee,"No Data")):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(t.data,(t=>(e.openBlock(),e.createElementBlock("div",te,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.value,(o=>(e.openBlock(),e.createElementBlock("div",{class:"mio-table-column",style:e.normalizeStyle(`flex: ${o.span}`)},[o.slot?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.slot),{key:1})):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(t[o.prop]),1)],64))],4)))),256))])))),256))],64)):(e.openBlock(),e.createElementBlock("div",Z,"No Data"))],8,Y)],8,Q))}});ne.__scopeId="data-v-c31ede02",ne.__file="src/mio-table/src/Table.vue";const ie={name:"mio-table-column"};var le=Object.assign(ie,{props:{prop:{type:String,required:!0},label:{type:String,required:!0},span:{type:Number,default:1}},setup(t){const o=t,n=e.inject("updateMethods"),i=e.useSlots();return e.onMounted((()=>{n.fillColumns(o.prop,o.label,o.span,i.body)})),(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:"mio-table-column",style:e.normalizeStyle(`flex: ${o.span}`)},[e.unref(i).header?e.renderSlot(t.$slots,"header",{key:0}):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(o.label),1)],64))],4))}});le.__scopeId="data-v-be420796",le.__file="src/mio-table/src/TableColumn.vue",ne.install=function(e){e.component(ne.name,ne),e.component(le.name,le)};var ae={MiOLayouts:a,MiOMenus:m,MiOBreadcrumbs:B,MiOSelect:I,MiOList:w,MiOCard:z,MiOTable:ne};return window.mio_ui={MiOLayouts:a,MiOMenus:m,MiOBreadcrumbs:B,MiOSelect:I,MiOList:w,MiOCard:z,MiOTable:ne},ae}(Vue,VueRouter);
