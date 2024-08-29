import{openBlock as e,createElementBlock as t,unref as i,renderSlot as o,ref as n,normalizeStyle as s,provide as a,inject as l,watch as c,onMounted as d,createElementVNode as r,normalizeClass as u,Fragment as m,toDisplayString as p,withDirectives as v,vShow as f,pushScopeId as g,popScopeId as b,resolveComponent as y,renderList as O,createBlock as M,createCommentVNode as I,createTextVNode as h,resolveDynamicComponent as _,useSlots as k}from"vue";import{useRouter as x}from"vue-router";var w={GenerateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},GetViewportSize:function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},GetNodePosition:function(e){if(e){var t=e.getBoundingClientRect(),i=t.top,o=t.bottom,n=t.left,s=t.right,a=document.documentElement.clientWidth;return{top:i-0,bottom:document.documentElement.clientHeight-o,left:n-0,right:a-s}}}},L={GenerateUUID:w.GenerateUUID,GetViewportSize:w.GetViewportSize,GetNodePosition:w.GetNodePosition};const B=["id"],j={name:"mio-layouts"};var S=Object.assign(j,{setup(n){const s=L.GenerateUUID();return(n,a)=>(e(),t("div",{id:"MiO-Layout-"+i(s),class:"mio-layouts"},[o(n.$slots,"default")],8,B))}});S.__scopeId="data-v-258385a8",S.__file="src/mio-layout/src/Layouts.vue";const U={name:"mio-layout-item"};var C=Object.assign(U,{props:{width:{type:String,default:"1"}},setup(i){const a=i,l=n({});return function(){const e=a.width;"1"===e?Object.assign(l.value,{flex:"1"}):Object.assign(l.value,{flex:`0 0 ${e}`})}(),(i,n)=>(e(),t("div",{style:s(l.value),class:"mio-layout-item"},[o(i.$slots,"default")],4))}});C.__scopeId="data-v-e76db5ec",C.__file="src/mio-layout/src/LayoutItem.vue",S.install=function(e){e.component(S.name,S),e.component(C.name,C)};const D=["id"],E={name:"mio-menus"};var $=Object.assign(E,{props:{collapse:{type:Boolean,required:!1,default:!1},collapseWidth:{type:Number,required:!1,default:30},accordion:{type:Boolean,required:!1,default:!0}},setup(s){const l=s,c=L.GenerateUUID(),d=n(null);return a("configs",{collapse:l.collapse,accordion:l.accordion}),a("active",d),a("updateMethods",{setActive:function(e){d.value=e}}),(n,s)=>(e(),t("div",{id:"MiO-Menus-"+i(c),class:"mio-menus"},[o(n.$slots,"default")],8,D))}});$.__file="src/mio-menus/src/Menu.vue";const G=["id"],H=["id"],N={name:"mio-menu-collapse"};var T=Object.assign(N,{props:{index:{type:[String,Number],required:!0},path:{type:String,required:!1},url:{type:String,required:!1},collapsed:{type:Boolean,required:!1,default:!0}},emits:["update:collapsed"],setup(s,{emit:a}){const m=s,p=a,v=x(),f=l("updateMethods"),g=l("configs"),b=l("active"),y=L.GenerateUUID(),O=n(!0);let M=null,I=null;function h(e){g.accordion,_(e)}function _(e){"mio-menu-collapse-icon"===e.target.className?(e.stopPropagation(),f.setActive(m.index),O.value=!O.value,p("update:collapsed",O.value),k()):m.path||m.url?(m.url&&window.open(m.url,"_blank"),m.path&&v.push(m.path),f.setActive(m.index)):(f.setActive(m.index),O.value=!O.value,p("update:collapsed",O.value),k())}function k(){O.value?function(){const e=document.getElementById("MiO-Menu-Collapse-Content-"+y);if(!e)return!1;{clearInterval(I),clearInterval(M);let t=e.scrollHeight;function i(){t<=0?(e.style.maxHeight="0",clearInterval(M)):(t-=5,e.style.maxHeight=t+"PX")}M=setInterval(i,10)}}():function(){const e=document.getElementById("MiO-Menu-Collapse-Content-"+y);if(!e)return!1;{clearInterval(M),clearInterval(I);let t=0;function i(){t>=e.scrollHeight?(e.style.maxHeight=null,clearInterval(I)):(t+=5,e.style.maxHeight=t+"PX")}I=setInterval(i,10)}}()}return c((()=>m.collapsed),(e=>{O.value=e}),{immediate:!0,deep:!0}),d((()=>{k()})),(n,s)=>(e(),t("div",{id:"MiO-Menu-Collapse-"+i(y),class:"mio-menu-collapse"},[r("div",{class:u(["mio-menu-collapse-title",O.value?i(b)===m.index?"active collapsed":"collapsed":i(b)===m.index?"active":""]),onClick:h},[o(n.$slots,"title"),r("div",{class:"mio-menu-collapse-icon",onClick:h},"❮")],2),r("div",{id:"MiO-Menu-Collapse-Content-"+i(y),class:u(["mio-menu-collapse-content",O.value?"collapsed":""])},[o(n.$slots,"content"),o(n.$slots,"default")],10,H)],8,G))}});T.__file="src/mio-menus/src/MenuCollapse.vue";const q={name:"mio-menu-item"};var A=Object.assign(q,{props:{index:{type:[String,Number],required:!0},path:{type:String,required:!1},url:{type:String,required:!1}},setup(n){const s=n,a=l("updateMethods"),c=l("active"),d=x();function r(){a.setActive(s.index),s.url&&window.open(s.url,"_blank"),s.path&&d.push(s.path)}return(n,a)=>(e(),t("div",{class:u(["mio-menu-item",i(c)===s.index?"active":""]),onClick:r},[o(n.$slots,"icon"),o(n.$slots,"label"),o(n.$slots,"default")],2))}});A.__file="src/mio-menus/src/MenuItem.vue",$.install=function(e){e.component($.name,$),e.component(T.name,T),e.component(A.name,A)};const P=["id"],V={name:"mio-breadcrumbs"};var X=Object.assign(V,{props:{separator:{type:String,default:"/"}},setup(n){const s=n,l=L.GenerateUUID();return a("separator",s.separator),d((()=>{!function(){const e=document.getElementById("MiO-Breadcrumbs-"+l).children;e.length>0&&e[0]&&e[0].remove()}()})),(n,s)=>(e(),t("div",{id:"MiO-Breadcrumbs-"+i(l),class:"mio-breadcrumbs"},[o(n.$slots,"default")],8,P))}});X.__scopeId="data-v-368902fa",X.__file="src/mio-breadcrumbs/src/Breadcrumbs.vue";const R={class:"mio-breadcrumb-separator"},W={name:"mio-breadcrumb-item"};var z=Object.assign(W,{props:{link:{type:String,default:""},active:{type:Boolean,default:!1}},setup(n){const s=x();function a(){this.link&&s.push(this.link)}const c=l("separator");return(s,l)=>(e(),t(m,null,[r("div",R,p(i(c)),1),r("div",{class:u(["mio-breadcrumb-item",n.active?"active":""]),onClick:a},[o(s.$slots,"default")],2)],64))}});z.__scopeId="data-v-255fd053",z.__file="src/mio-breadcrumbs/src/BreadcrumbItem.vue",X.install=function(e){e.component(X.name,X),e.component(z.name,z)};const F=["id"],J=(e=>(g("data-v-252230d2"),e=e(),b(),e))((()=>r("div",{class:"mio-select-icon"},"❮",-1))),K=["id"],Q={name:"mio-select"};var Y=Object.assign(Q,{props:{modelValue:{type:[String,Number,null],default:null},placeholder:{type:String,default:"select an option"}},emits:["update:modelValue"],setup(s,{emit:l}){const u=s,m=l,g=L.GenerateUUID(),b=n(null),y=n(null),O=n(""),M=function(e){if(!e.target.id.includes(g)){const e=document.getElementById("MiO-Select-"+g),t=document.getElementById("MiO-Select-Options-"+g);e.classList.remove("active"),t.classList.remove("active")}};function I(e){const t=document.getElementById("MiO-Select-"+g),i=document.getElementById("MiO-Select-Options-"+g);t&&i&&(t.classList.toggle("active"),i.classList.toggle("active"),h())}function h(e){const t=document.getElementById("MiO-Select-"+g),i=document.getElementById("MiO-Select-Options-"+g),o=L.GetNodePosition(t),n=i.offsetHeight;.96*o.bottom<n?(i.classList.remove("bottom"),i.classList.add("top")):(i.classList.remove("top"),i.classList.add("bottom"))}return a("updateMethods",{value:function(e,t,i){b.value=i,y.value=t}}),c((()=>u.modelValue),(e=>{const t=e;O.value=Object.prototype.toString.call(t);const i=document.getElementById("MiO-Select-Options-"+g);if(i&&i.children){const e=i.children.length;for(let o=0;o<e;o++){const e=i.children[o],n=e.getAttribute("value");let s;switch(O.value){case"[object Number]":s=Number(n);break;case"[object String]":s=String(n);break;default:s=n}if(s===t){O.value=e.getAttribute("key"),y.value=t,b.value=e.innerText;break}}}}),{immediate:!0}),c((()=>y.value),(e=>{m("update:modelValue",e)})),d((()=>{document.addEventListener("click",M),h()})),(n,s)=>(e(),t("div",{id:"MiO-Select-"+i(g),class:"mio-select",onClick:I},[v(r("div",{class:"mio-select-placeholder"},p(u.placeholder),513),[[f,!y.value]]),v(r("div",{class:"mio-select-label"},p(b.value),513),[[f,y.value]]),J,r("div",{id:"MiO-Select-Options-"+i(g),class:"mio-select-options"},[o(n.$slots,"default")],8,K)],8,F))}});Y.__scopeId="data-v-252230d2",Y.__file="src/mio-select/src/Select.vue";const Z={name:"mio-select-option"};var ee=Object.assign(Z,{props:{label:{type:String,default:""}},setup(i){const n=i,s=l("updateMethods");function a(e){const t=e.target;t&&s.value(t.getAttribute("key"),t.getAttribute("value"),t.innerText)}return(i,s)=>(e(),t("div",{class:"mio-select-option",onClick:a},[v(r("div",{class:"mio-select-option-label"},p(n.label),513),[[f,n.label]]),o(i.$slots,"default")]))}});ee.__scopeId="data-v-6d53e328",ee.__file="src/mio-select/src/SelectOption.vue",Y.install=function(e){e.component(Y.name,Y),e.component(ee.name,ee)};const te=["id"],ie={name:"mio-list"};var oe=Object.assign(ie,{props:{mode:{type:String,default:"default"}},setup(s){const l=s,d=L.GenerateUUID(),r=n("accordion"),u=n("");return a("activeMarker",u),a("updateMethods",{active:function(e){const t=e;t&&(u.value=t)},activate:function(e){const t=e.split("-");switch(u.value.split("-"),r.value){case"accordion":case"Accordion":!function(e){const t=e.split("-"),i=t.length;if(i>0)for(let e=0;e<i;e++){const i=t.slice(0,e+1).join("-"),o=document.getElementById("MiO-List-Item-"+i);o&&o.classList.add("active");const n=document.getElementById("MiO-List-Item-Content-"+i);n&&n.classList.add("active");const s=document.getElementById("MiO-List-Item-Children-"+i);s&&s.classList.add("expend")}}(t.join("-"));break;default:t.join("-")}},deactivate:function(e){if("accordion"===(e.split("-"),u.value.split("-"),r.value))!function(){const e=u.value.split("-"),t=e.length;if(t>0)for(let i=t;i>0;i--){const t=e.slice(0,i).join("-"),o=document.getElementById("MiO-List-Item-"+t);o&&o.classList.remove("active");const n=document.getElementById("MiO-List-Item-Content-"+t);n&&n.classList.remove("active");const s=document.getElementById("MiO-List-Item-Children-"+t);s&&s.classList.remove("expend")}}()}}),c(l.mode,(e=>{switch(e){case"accordion":case"Accordion":r.value="accordion";break;default:r.value="default"}})),(n,s)=>(e(),t("div",{id:"MiO-List-"+i(d),class:"mio-list"},[o(n.$slots,"default")],8,te))}});oe.__scopeId="data-v-3d6e47d7",oe.__file="src/mio-list/src/List.vue";const ne=["id"],se=["id"],ae=["id"],le={name:"mio-list-item"};var ce=Object.assign(le,{props:{marker:{type:String,default:""},item:{type:Object,default:()=>{}}},setup(i){const s=i,a=n(null),c=l("activeMarker"),r=l("updateMethods"),u=n(s.marker);function v(e){const t=e.split("-"),i=c.value.split("-"),o=t.length,n=i.length;if(0===n)r.active(t.join("-"));else if(t.join("-")===i.join("-")){const e=document.getElementById("MiO-List-Item-Children-"+t.join("-"));e&&e.classList.toggle("expend")}else o===n-1?(r.deactivate(i.join("-")),r.activate(t.join("-")),function(e){const t=e.split("-"),i=c.value.split("-");let o=!0;const n=t.length;for(let e=0;e<n;e++)if(t[e]!==i[e])return void(o=!1);if(o){const e=document.getElementById("MiO-List-Item-Children-"+t.join("-"));e&&e.classList.remove("expend")}}(t.join("-"))):(r.deactivate(i.join("-")),r.activate(t.join("-"))),r.active(t.join("-"))}return d((()=>{!function(){if(!s.marker){const e=a.value.parentElement;u.value=([...e.children].indexOf(a.value)+1).toString()}}()})),(n,l)=>{const c=y("mio-list-item");return e(),t("div",{ref_key:"root",ref:a,class:"mio-list-item",id:"MiO-List-Item-"+(s.marker?s.marker:u.value)},[i.item.label?(e(),t("div",{key:0,class:"mio-list-item-content",id:"MiO-List-Item-Content-"+(s.marker?s.marker:u.value),onClick:l[0]||(l[0]=e=>v(s.marker?s.marker:u.value))},p(i.item.label),9,se)):o(n.$slots,"default",{key:1}),i.item.children?(e(),t(m,{key:2},[i.item.children.length>0?(e(),t("div",{key:0,class:"mio-list-item-children",id:"MiO-List-Item-Children-"+(s.marker?s.marker:u.value)},[(e(!0),t(m,null,O(i.item.children,((t,i)=>(e(),M(c,{marker:s.marker?s.marker+"-"+(i+1).toString():u.value+"-"+(i+1).toString(),item:t},null,8,["marker","item"])))),256))],8,ae)):I("v-if",!0)],64)):I("v-if",!0)],8,ne)}}});ce.__scopeId="data-v-3af5ae0a",ce.__file="src/mio-list/src/ListItem.vue",oe.install=function(e){e.component(oe.name,oe),e.component(ce.name,ce)};const de=["id"],re={name:"mio-card"};var ue=Object.assign(re,{setup(n){const s=L.GenerateUUID();return a("UUID",s),(n,a)=>(e(),t("div",{id:"MiO-Card-"+i(s),class:"mio-card"},[o(n.$slots,"default")],8,de))}});ue.__scopeId="data-v-db086fd2",ue.__file="src/mio-card/src/Card.vue";const me=["id"],pe={name:"mio-card-header"};var ve=Object.assign(pe,{setup(n){const s=l("UUID");return(n,a)=>(e(),t("div",{id:"MiO-Card-Header-"+i(s),class:"mio-card-header"},[o(n.$slots,"default")],8,me))}});ve.__scopeId="data-v-ff4fc5f8",ve.__file="src/mio-card/src/CardHeader.vue";const fe=["id"],ge={name:"mio-card-body"};var be=Object.assign(ge,{setup(n){const s=l("UUID");return(n,a)=>(e(),t("div",{id:"MiO-Card-Body-"+i(s),class:"mio-card-body"},[o(n.$slots,"default")],8,fe))}});be.__scopeId="data-v-7015ed59",be.__file="src/mio-card/src/CardBody.vue";const ye=["id"],Oe={name:"mio-card-footer"};var Me=Object.assign(Oe,{setup(n){const s=l("UUID");return(n,a)=>(e(),t("div",{id:"MiO-Card-Footer-"+i(s),class:"mio-card-footer"},[o(n.$slots,"default")],8,ye))}});Me.__scopeId="data-v-5f25b912",Me.__file="src/mio-card/src/CardFooter.vue",ue.install=function(e){e.component(ue.name,ue),e.component(ve.name,ve),e.component(be.name,be),e.component(Me.name,Me)};const Ie=["id"],he=["id"],_e=["id"],ke={key:0,class:"mio-table-no-data"},xe={key:0,class:"mio-table-no-data"},we={class:"mio-table-row"},Le={name:"mio-table"};var Be=Object.assign(Le,{props:{data:{type:Array,required:!0}},setup(l){const c=l,d=L.GenerateUUID(),u=n([]);return a("updateMethods",{fillColumns:function(e,t,i,o){u.value.push({prop:e,label:t,span:i,slot:o})}}),(n,a)=>(e(),t("div",{id:"MiO-Table-"+i(d),class:"mio-table"},[r("div",{id:"MiO-Table-Header"+i(d),class:"mio-table-header"},[o(n.$slots,"default")],8,he),r("div",{id:"MiO-Table-Body"+i(d),class:"mio-table-body"},[c.data.length?(e(),t(m,{key:1},[c.data.length<=0?(e(),t("div",xe,"No Data")):(e(!0),t(m,{key:1},O(l.data,(i=>(e(),t("div",we,[(e(!0),t(m,null,O(u.value,(o=>(e(),t("div",{class:"mio-table-column",style:s(`flex: ${o.span}`)},[o.slot?(e(),M(_(o.slot),{key:1})):(e(),t(m,{key:0},[h(p(i[o.prop]),1)],64))],4)))),256))])))),256))],64)):(e(),t("div",ke,"No Data"))],8,_e)],8,Ie))}});Be.__scopeId="data-v-c31ede02",Be.__file="src/mio-table/src/Table.vue";const je={name:"mio-table-column"};var Se=Object.assign(je,{props:{prop:{type:String,required:!0},label:{type:String,required:!0},span:{type:Number,default:1}},setup(n){const a=n,c=l("updateMethods"),r=k();return d((()=>{c.fillColumns(a.prop,a.label,a.span,r.body)})),(n,l)=>(e(),t("div",{class:"mio-table-column",style:s(`flex: ${a.span}`)},[i(r).header?o(n.$slots,"header",{key:0}):(e(),t(m,{key:1},[h(p(a.label),1)],64))],4))}});Se.__scopeId="data-v-be420796",Se.__file="src/mio-table/src/TableColumn.vue",Be.install=function(e){e.component(Be.name,Be),e.component(Se.name,Se)};const Ue=["id"],Ce={name:"mio-button"};var De=Object.assign(Ce,{props:{radius:{type:String,default:"none"},disabled:{type:Boolean,default:!1}},setup(n){const s=n,a=L.GenerateUUID();function l(e){const t=e,i=document.getElementById("MiO-Button-"+a);if(i)switch(t){case"small":i.style.borderRadius="6PX";break;case"medium":i.style.borderRadius="12PX";break;case"large":i.style.borderRadius="18PX";break;default:i.style.borderRadius="0"}}function r(e){const t=e,i=document.getElementById("MiO-Button-"+a);i&&(t?i.classList.add("disabled"):i.classList.remove("disabled"))}return c((()=>s.radius),(e=>{l(e)})),c((()=>s.disabled),(e=>{r(e)})),d((()=>{l(s.radius),r(s.disabled)})),(n,s)=>(e(),t("div",{id:"MiO-Button-"+i(a),class:"mio-button"},[o(n.$slots,"default")],8,Ue))}});De.__scopeId="data-v-79e169d7",De.__file="src/mio-button/src/Button.vue",De.install=function(e){e.component(De.name,De)};const Ee=["id"],$e={name:"mio-dropdown"};var Ge=Object.assign($e,{props:{width:{type:String,default:"100PX"}},setup(n){const l=L.GenerateUUID();return a("UUID",l),(a,c)=>(e(),t("div",{id:"MiO-Dropdown-"+i(l),class:"mio-dropdown",style:s("width: "+n.width)},[o(a.$slots,"default")],12,Ee))}});Ge.__scopeId="data-v-6c755092",Ge.__file="src/mio-dropdown/src/Dropdown.vue";const He=["id"],Ne={key:0,class:"mio-dropdown-trigger-label"},Te={class:"mio-dropdown-trigger-label"},qe={class:"mio-dropdown-trigger-icon"},Ae={name:"mio-dropdown-trigger"};var Pe=Object.assign(Ae,{setup(n){const s=l("UUID"),a=k(),c=function(e){if(!e.target.id.includes(s)){const e=document.getElementById("MiO-Dropdown-Trigger-"+s),t=document.getElementById("MiO-Dropdown-Menu-"+s);e&&t&&(e.classList.remove("active"),t.classList.remove("active"))}};function u(){const e=document.getElementById("MiO-Dropdown-Menu-"+s),t=document.getElementById("MiO-Dropdown-Trigger-"+s);e&&t&&(e.classList.toggle("active"),t.classList.toggle("active"),p())}function p(){const e=document.getElementById("MiO-Dropdown-"+s),t=document.getElementById("MiO-Dropdown-Menu-"+s),i=document.getElementById("MiO-Dropdown-Trigger-"+s);if(!(e&&t&&i))return!1;{const o=L.GetNodePosition(e),n=e.offsetHeight;.96*o.bottom<n?(i.classList.remove("bottom"),t.classList.remove("bottom"),i.classList.add("top"),t.classList.add("top")):(i.classList.remove("top"),t.classList.remove("top"),i.classList.add("bottom"),t.classList.add("bottom"))}}return d((()=>{document.addEventListener("click",c),p()})),(n,l)=>(e(),t("div",{id:"MiO-Dropdown-Trigger-"+i(s),class:"mio-dropdown-trigger",onClick:u},[i(a).icon?(e(),t(m,{key:1},[r("div",Te,[o(n.$slots,"label")]),r("div",qe,[o(n.$slots,"icon")])],64)):(e(),t("div",Ne,[o(n.$slots,"default")]))],8,He))}});Pe.__scopeId="data-v-f0f7839e",Pe.__file="src/mio-dropdown/src/DropdownTrigger.vue";const Ve=["id"],Xe={name:"mio-dropdown-menu"};var Re=Object.assign(Xe,{setup(n){const s=l("UUID");return(n,a)=>(e(),t("div",{id:"MiO-Dropdown-Menu-"+i(s),class:"mio-dropdown-menu"},[o(n.$slots,"default")],8,Ve))}});Re.__scopeId="data-v-39556236",Re.__file="src/mio-dropdown/src/DropdownMenu.vue";const We={class:"mio-dropdown-menu-item"},ze={name:"mio-dropdown-menu-item"};var Fe=Object.assign(ze,{props:{label:{type:String,default:""}},setup(n){const s=k();return(a,l)=>(e(),t("div",We,[i(s).default?o(a.$slots,"default",{key:0}):(e(),t(m,{key:1},[h(p(n.label),1)],64))]))}});Fe.__scopeId="data-v-5efa80e9",Fe.__file="src/mio-dropdown/src/DropdownMenuItem.vue",Ge.install=function(e){e.component(Ge.name,Ge),e.component(Pe.name,Pe),e.component(Re.name,Re),e.component(Fe.name,Fe)};var Je={MiOLayouts:S,MiOMenus:$,MiOBreadcrumbs:X,MiOSelect:Y,MiOList:oe,MiOCard:ue,MiOTable:Be,MiOButton:De,MiODropdown:Ge};window.MiOUI={MiOLayouts:S,MiOMenus:$,MiOBreadcrumbs:X,MiOSelect:Y,MiOList:oe,MiOCard:ue,MiOTable:Be,MiOButton:De,MiODropdown:Ge};export{Je as default};
//# sourceMappingURL=mio-ui.esm.js.map
