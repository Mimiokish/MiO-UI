import{openBlock as e,createElementBlock as t,renderSlot as i,normalizeStyle as a,Fragment as n,createElementVNode as o,toDisplayString as s,normalizeClass as r,withDirectives as c,vShow as d,pushScopeId as l,popScopeId as m,computed as u,resolveComponent as h,renderList as v,createBlock as p,createCommentVNode as f}from"vue";var I={GenerateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},GetViewportSize:function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},GetNodePosition:function(e){if(e){var t=e.getBoundingClientRect(),i=t.top,a=t.bottom,n=t.left,o=t.right,s=document.documentElement.clientWidth;return{top:i-0,bottom:document.documentElement.clientHeight-a,left:n-0,right:s-o}}}},k={GenerateUUID:I.GenerateUUID,GetViewportSize:I.GetViewportSize,GetNodePosition:I.GetNodePosition},g={name:"mio-layouts",data:()=>({UUID:k.GenerateUUID()})};const U=["id"];g.render=function(a,n,o,s,r,c){return e(),t("div",{id:"MiO-Layout-"+r.UUID,class:"mio-layouts"},[i(a.$slots,"default")],8,U)},g.__scopeId="data-v-258385a8",g.__file="src/mio-layout/src/Layouts.vue";var b={name:"mio-layout-item",props:{width:{type:String,default:"1"}},data:()=>({style:{}}),methods:{initialStyle(){const e=this.width;"1"===e?Object.assign(this.style,{flex:"1"}):Object.assign(this.style,{flex:`0 0 ${e}`})}},created(){this.initialStyle()}};b.render=function(n,o,s,r,c,d){return e(),t("div",{style:a(c.style),class:"mio-layout-item"},[i(n.$slots,"default")],4)},b.__scopeId="data-v-e76db5ec",b.__file="src/mio-layout/src/LayoutItem.vue",g.install=function(e){e.component(g.name,g),e.component(b.name,b)};var M={name:"mio-svg"};M.render=function(i,a,n,o,s,r){return e(),t("div")},M.__file="src/mio-svg/src/SVG.vue",M.install=function(e){e.component(M.name,M)};var _={name:"mio-breadcrumbs",props:{separator:{type:String,default:"/"}},data:()=>({UUID:k.GenerateUUID()}),provide(){return{separator:this.separator}},methods:{disableFirstSeparator(){const e=this.$el.children;e.length>0&&e[0]&&e[0].classList.contains("mio-breadcrumb-separator")&&e[0].remove()}},mounted(){this.disableFirstSeparator()},updated(){this.disableFirstSeparator()}};const y=["id"];_.render=function(a,n,o,s,r,c){return e(),t("div",{id:"MiO-Breadcrumbs-"+r.UUID,class:"mio-breadcrumbs"},[i(a.$slots,"default")],8,y)},_.__scopeId="data-v-368902fa",_.__file="src/mio-breadcrumbs/src/Breadcrumbs.vue";var O={name:"mio-breadcrumb-item",inject:["separator"],props:{link:{type:String,default:""},active:{type:Boolean,default:!1}},methods:{handleClick(){this.link&&this.$router.push(this.link)}}};const D={class:"mio-breadcrumb-separator"};O.render=function(a,c,d,l,m,u){return e(),t(n,null,[o("div",D,s(u.separator),1),o("div",{class:r(["mio-breadcrumb-item",d.active?"active":""]),onClick:c[0]||(c[0]=(...e)=>u.handleClick&&u.handleClick(...e))},[i(a.$slots,"default")],2)],64)},O.__scopeId="data-v-255fd053",O.__file="src/mio-breadcrumbs/src/BreadcrumbItem.vue",_.install=function(e){e.component(_.name,_),e.component(O.name,O)};var x={name:"mio-select-option",props:{label:{type:String,default:""}},inject:["updateMethods"],methods:{handleClick(e){const t=e.target;t&&this.updateMethods.value(t.getAttribute("key"),t.getAttribute("value"),t.innerText)}}};x.render=function(a,n,r,l,m,u){return e(),t("div",{class:"mio-select-option",onClick:n[0]||(n[0]=(...e)=>u.handleClick&&u.handleClick(...e))},[c(o("div",{class:"mio-select-option-label"},s(r.label),513),[[d,r.label]]),i(a.$slots,"default")])},x.__scopeId="data-v-6d53e328",x.__file="src/mio-select/src/SelectOption.vue";var S={name:"mio-select",components:{SelectOption:x},props:{modelValue:{type:[String,Number,null],default:null},placeholder:{type:String,default:"select an option"}},provide(){return{updateMethods:{value:this.updateValue}}},data(){return{UUID:k.GenerateUUID(),label:null,value:null,type:"",eventDocumentClick:this.handleDocumentClick}},watch:{modelValue:{immediate:!0,handler(e){const t=e;this.type=Object.prototype.toString.call(t);const i=document.getElementById("MiO-Select-Options-"+this.UUID);if(i&&i.children){const e=i.children.length;for(let a=0;a<e;a++){const e=i.children[a],n=e.getAttribute("value");let o;switch(this.type){case"[object Number]":o=Number(n);break;case"[object String]":o=String(n);break;default:o=n}if(o===t){this.key=e.getAttribute("key"),this.value=t,this.label=e.innerText;break}}}}},value:{handler(e){this.$emit("update:modelValue",e)}}},methods:{updateValue(e,t,i){this.label=i,this.value=t},handleClick(e){const t=document.getElementById("MiO-Select-"+this.UUID),i=document.getElementById("MiO-Select-Options-"+this.UUID);t.classList.toggle("active"),i.classList.toggle("active"),this.handlePopupDirection(i)},handlePopupDirection(e){const t=e;if(t){const e=k.GetViewportSize(),i=k.GetNodePosition(t),a=.2*e.height;i.top>a?(t.classList.remove("bottom"),t.classList.add("top")):(t.classList.remove("top"),t.classList.add("bottom"))}},handleDocumentClick(e){if(!e.target.id.includes(this.UUID)){const e=document.getElementById("MiO-Select-"+this.UUID),t=document.getElementById("MiO-Select-Options-"+this.UUID);e.classList.remove("active"),t.classList.remove("active")}}},mounted(){document.addEventListener("click",this.eventDocumentClick)},beforeUnmount(){document.removeEventListener("click",this.eventDocumentClick)}};const L=["id"],C=(e=>(l("data-v-252230d2"),e=e(),m(),e))((()=>o("div",{class:"mio-select-icon"},"⥥",-1))),j=["id"];S.render=function(a,n,r,l,m,u){return e(),t("div",{id:"MiO-Select-"+m.UUID,class:"mio-select",onClick:n[0]||(n[0]=(...e)=>u.handleClick&&u.handleClick(...e))},[c(o("div",{class:"mio-select-placeholder"},s(r.placeholder),513),[[d,!m.value]]),c(o("div",{class:"mio-select-label"},s(m.label),513),[[d,m.value]]),C,o("div",{id:"MiO-Select-Options-"+m.UUID,class:"mio-select-options"},[i(a.$slots,"default")],8,j)],8,L)},S.__scopeId="data-v-252230d2",S.__file="src/mio-select/src/Select.vue",S.install=function(e){e.component(S.name,S),e.component(x.name,x)};var B={name:"mio-list",components:{},props:{mode:{type:String,default:"accordion"}},provide(){return{activeMarker:u((()=>this.activeMarker)),updateMethods:{active:this.updateActiveMarker,activate:this.activate,deactivate:this.deactivate}}},data:()=>({UUID:k.GenerateUUID(),_mode:"accordion",activeMarker:""}),watch:{mode:{handler(e){switch(e){case"accordion":case"Accordion":this._mode="accordion";break;default:this._mode="default"}}}},methods:{activate(e){const t=e.split("-");switch(this.activeMarker.split("-"),this._mode){case"accordion":case"Accordion":this.activateAccordion(t.join("-"));break;default:this.activateDefault(t.join("-"))}},deactivate(e){if(e.split("-"),this.activeMarker.split("-"),"accordion"===this._mode)this.deactivateAccordion();else this.deactivateDefault()},activateDefault(e){},activateAccordion(e){const t=e.split("-"),i=t.length;if(i>0)for(let e=0;e<i;e++){const i=t.slice(0,e+1).join("-"),a=document.getElementById("MiO-List-Item-"+i);a&&a.classList.add("active");const n=document.getElementById("MiO-List-Item-Content-"+i);n&&n.classList.add("active");const o=document.getElementById("MiO-List-Item-Children-"+i);o&&o.classList.add("expend")}},deactivateDefault(){},deactivateAccordion(){const e=this.activeMarker.split("-"),t=e.length;if(t>0)for(let i=t;i>0;i--){const t=e.slice(0,i).join("-"),a=document.getElementById("MiO-List-Item-"+t);a&&a.classList.remove("active");const n=document.getElementById("MiO-List-Item-Content-"+t);n&&n.classList.remove("active");const o=document.getElementById("MiO-List-Item-Children-"+t);o&&o.classList.remove("expend")}},updateActiveMarker(e){const t=e;t&&(this.activeMarker=t)}}};const E=["id"];B.render=function(a,n,o,s,r,c){return e(),t("div",{id:"MiO-List-"+r.UUID,class:"mio-list"},[i(a.$slots,"default")],8,E)},B.__scopeId="data-v-3d6e47d7",B.__file="src/mio-list/src/List.vue";var w={name:"mio-list-item",props:{marker:{type:String,default:""},item:{type:Object,default:()=>{}}},inject:["activeMarker","updateMethods"],data(){return{_marker:this.marker}},methods:{handleSelect(e){const t=e.split("-"),i=this.activeMarker.split("-"),a=t.length,n=i.length;if(0===n)this.updateMethods.active(t.join("-"));else if(t.join("-")===i.join("-")){const e=document.getElementById("MiO-List-Item-Children-"+t.join("-"));e&&e.classList.toggle("expend")}else a===n-1?(this.updateMethods.deactivate(i.join("-")),this.updateMethods.activate(t.join("-")),this.testLastSelectedNodeHasChildrenOpened(t.join("-"))):(this.updateMethods.deactivate(i.join("-")),this.updateMethods.activate(t.join("-"))),this.updateMethods.active(t.join("-"))},testLastSelectedNodeHasChildrenOpened(e){const t=e.split("-"),i=this.activeMarker.split("-");let a=!0;const n=t.length;for(let e=0;e<n;e++)if(t[e]!==i[e])return void(a=!1);if(a){const e=document.getElementById("MiO-List-Item-Children-"+t.join("-"));e&&e.classList.remove("expend")}},findDifferentIndex(e,t){const i=e.split("-"),a=t.split("-"),n=i.length,o=a.length;let s=-1;const r=Math.min(n,o);for(let e=0;e<r;e++)if(i[e]!==a[e])return s=e,s;return n!==o?(s=r,s):s},initialMarker(){if(!this.marker){const e=this.$el.parentElement;this._marker=([...e.children].indexOf(this.$el)+1).toString()}}},mounted(){this.initialMarker()}};const $=["id"],G=["id"],A=["id"];w.render=function(a,o,r,c,d,l){const m=h("mio-list-item");return e(),t("div",{class:"mio-list-item",id:"MiO-List-Item-"+(r.marker?r.marker:d._marker)},[r.item.label?(e(),t("div",{key:0,class:"mio-list-item-content",id:"MiO-List-Item-Content-"+(r.marker?r.marker:d._marker),onClick:o[0]||(o[0]=e=>l.handleSelect(r.marker?r.marker:d._marker))},s(r.item.label),9,G)):i(a.$slots,"default",{key:1}),r.item.children?(e(),t(n,{key:2},[r.item.children.length>0?(e(),t("div",{key:0,class:"mio-list-item-children",id:"MiO-List-Item-Children-"+(r.marker?r.marker:d._marker)},[(e(!0),t(n,null,v(r.item.children,((t,i)=>(e(),p(m,{marker:r.marker?r.marker+"-"+(i+1).toString():d._marker+"-"+(i+1).toString(),item:t},null,8,["marker","item"])))),256))],8,A)):f("v-if",!0)],64)):f("v-if",!0)],8,$)},w.__scopeId="data-v-3af5ae0a",w.__file="src/mio-list/src/ListItem.vue",B.install=function(e){e.component(B.name,B),e.component(w.name,w)};var V={name:"mio-card",data:()=>({UUID:k.GenerateUUID()}),provide(){return{UUID:this.UUID}}};const N=["id"];V.render=function(a,n,o,s,r,c){return e(),t("div",{id:"MiO-Card-"+r.UUID,class:"mio-card"},[i(a.$slots,"default")],8,N)},V.__scopeId="data-v-db086fd2",V.__file="src/mio-card/src/Card.vue";var H={name:"mio-card-header",inject:["UUID"]};const P=["id"];H.render=function(a,n,o,s,r,c){return e(),t("div",{id:"MiO-Card-Header-"+c.UUID,class:"mio-card-header"},[i(a.$slots,"default")],8,P)},H.__scopeId="data-v-ff4fc5f8",H.__file="src/mio-card/src/CardHeader.vue";var F={name:"mio-card-body",inject:["UUID"]};const z=["id"];F.render=function(a,n,o,s,r,c){return e(),t("div",{id:"MiO-Card-Body-"+c.UUID,class:"mio-card-body"},[i(a.$slots,"default")],8,z)},F.__scopeId="data-v-7015ed59",F.__file="src/mio-card/src/CardBody.vue";var W={name:"mio-card-footer",inject:["UUID"]};const T=["id"];W.render=function(a,n,o,s,r,c){return e(),t("div",{id:"MiO-Card-Footer-"+c.UUID,class:"mio-card-footer"},[i(a.$slots,"default")],8,T)},W.__scopeId="data-v-5f25b912",W.__file="src/mio-card/src/CardFooter.vue",V.install=function(e){e.component(V.name,V),e.component(H.name,H),e.component(F.name,F),e.component(W.name,W)};var R={MiOLayouts:g,MiOSvg:M,MiOBreadcrumbs:_,MiOSelect:S,MiOList:B,MiOCard:V};window.mio_ui={MiOLayouts:g,MiOSvg:M,MiOBreadcrumbs:_,MiOSelect:S,MiOList:B,MiOCard:V};export{R as default};
//# sourceMappingURL=mio-ui.esm.js.map
