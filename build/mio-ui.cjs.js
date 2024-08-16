"use strict";var e=require("vue"),t={GenerateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},GetViewportSize:function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},GetNodePosition:function(e){if(e){var t=e.getBoundingClientRect(),i=t.top,o=t.bottom,n=t.left,a=t.right,r=document.documentElement.clientWidth;return{top:i-0,bottom:document.documentElement.clientHeight-o,left:n-0,right:r-a}}}},i={GenerateUUID:t.GenerateUUID,GetViewportSize:t.GetViewportSize,GetNodePosition:t.GetNodePosition},o={name:"mio-select-option",props:{label:{type:String,default:""}},inject:["updateMethods"],methods:{handleClick(e){const t=e.target;t&&this.updateMethods.value(t.getAttribute("key"),t.getAttribute("value"),t.innerText)}}};o.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock("div",{class:"mio-select-option",onClick:i[0]||(i[0]=(...e)=>r.handleClick&&r.handleClick(...e))},[e.withDirectives(e.createElementVNode("div",{class:"mio-select-option-label"},e.toDisplayString(o.label),513),[[e.vShow,o.label]]),e.renderSlot(t.$slots,"default")])},o.__scopeId="data-v-6d53e328",o.__file="src/mio-select/src/SelectOption.vue";var n={name:"mio-select",components:{SelectOption:o},props:{modelValue:{type:[String,Number,null],default:null},placeholder:{type:String,default:"select an option"}},provide(){return{updateMethods:{value:this.updateValue}}},data(){return{UUID:i.GenerateUUID(),label:null,value:null,type:"",eventDocumentClick:this.handleDocumentClick}},watch:{modelValue:{immediate:!0,handler(e){const t=e;this.type=Object.prototype.toString.call(t);const i=document.getElementById("MiO-Select-Options-"+this.UUID);if(i&&i.children){const e=i.children.length;for(let o=0;o<e;o++){const e=i.children[o],n=e.getAttribute("value");let a;switch(this.type){case"[object Number]":a=Number(n);break;case"[object String]":a=String(n);break;default:a=n}if(a===t){this.key=e.getAttribute("key"),this.value=t,this.label=e.innerText;break}}}}},value:{handler(e){this.$emit("update:modelValue",e)}}},methods:{updateValue(e,t,i){this.label=i,this.value=t},handleClick(e){const t=document.getElementById("MiO-Select-"+this.UUID),i=document.getElementById("MiO-Select-Options-"+this.UUID);t.classList.toggle("active"),i.classList.toggle("active"),this.handlePopupDirection(i)},handlePopupDirection(e){const t=e;if(t){const e=i.GetViewportSize(),o=i.GetNodePosition(t),n=.2*e.height;o.top>n?(t.classList.remove("bottom"),t.classList.add("top")):(t.classList.remove("top"),t.classList.add("bottom"))}},handleDocumentClick(e){if(!e.target.id.includes(this.UUID)){const e=document.getElementById("MiO-Select-"+this.UUID),t=document.getElementById("MiO-Select-Options-"+this.UUID);e.classList.remove("active"),t.classList.remove("active")}}},mounted(){document.addEventListener("click",this.eventDocumentClick)},beforeUnmount(){document.removeEventListener("click",this.eventDocumentClick)}};const a=["id"],r=(t=>(e.pushScopeId("data-v-252230d2"),t=t(),e.popScopeId(),t))((()=>e.createElementVNode("div",{class:"mio-select-icon"},"⥥",-1))),c=["id"];n.render=function(t,i,o,n,l,s){return e.openBlock(),e.createElementBlock("div",{id:"MiO-Select-"+l.UUID,class:"mio-select",onClick:i[0]||(i[0]=(...e)=>s.handleClick&&s.handleClick(...e))},[e.withDirectives(e.createElementVNode("div",{class:"mio-select-placeholder"},e.toDisplayString(o.placeholder),513),[[e.vShow,!l.value]]),e.withDirectives(e.createElementVNode("div",{class:"mio-select-label"},e.toDisplayString(l.label),513),[[e.vShow,l.value]]),r,e.createElementVNode("div",{id:"MiO-Select-Options-"+l.UUID,class:"mio-select-options"},[e.renderSlot(t.$slots,"default")],8,c)],8,a)},n.__scopeId="data-v-252230d2",n.__file="src/mio-select/src/Select.vue",n.install=function(e){e.component(n.name,n),e.component(o.name,o)};var l={name:"mio-list",components:{},props:{mode:{type:String,default:"accordion"}},provide(){return{activeMarker:e.computed((()=>this.activeMarker)),updateMethods:{active:this.updateActiveMarker,activate:this.activate,deactivate:this.deactivate}}},data:()=>({UUID:i.GenerateUUID(),_mode:"accordion",activeMarker:""}),watch:{mode:{handler(e){switch(e){case"accordion":case"Accordion":this._mode="accordion";break;default:this._mode="default"}}}},methods:{activate(e){const t=e.split("-");switch(this.activeMarker.split("-"),this._mode){case"accordion":case"Accordion":this.activateAccordion(t.join("-"));break;default:this.activateDefault(t.join("-"))}},deactivate(e){if(e.split("-"),this.activeMarker.split("-"),"accordion"===this._mode)this.deactivateAccordion();else this.deactivateDefault()},activateDefault(e){},activateAccordion(e){const t=e.split("-"),i=t.length;if(i>0)for(let e=0;e<i;e++){const i=t.slice(0,e+1).join("-"),o=document.getElementById("MiO-List-Item-"+i);o&&o.classList.add("active");const n=document.getElementById("MiO-List-Item-Content-"+i);n&&n.classList.add("active");const a=document.getElementById("MiO-List-Item-Children-"+i);a&&a.classList.add("expend")}},deactivateDefault(){},deactivateAccordion(){const e=this.activeMarker.split("-"),t=e.length;if(t>0)for(let i=t;i>0;i--){const t=e.slice(0,i).join("-"),o=document.getElementById("MiO-List-Item-"+t);o&&o.classList.remove("active");const n=document.getElementById("MiO-List-Item-Content-"+t);n&&n.classList.remove("active");const a=document.getElementById("MiO-List-Item-Children-"+t);a&&a.classList.remove("expend")}},updateActiveMarker(e){const t=e;t&&(this.activeMarker=t)}}};const s=["id"];l.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock("div",{id:"MiO-List-"+a.UUID,class:"mio-list"},[e.renderSlot(t.$slots,"default")],8,s)},l.__scopeId="data-v-3d6e47d7",l.__file="src/mio-list/src/List.vue";var d={name:"mio-list-item",props:{marker:{type:String,default:""},item:{type:Object,default:()=>{}}},inject:["activeMarker","updateMethods"],data(){return{_marker:this.marker}},methods:{handleSelect(e){const t=e.split("-"),i=this.activeMarker.split("-"),o=t.length,n=i.length;if(0===n)this.updateMethods.active(t.join("-"));else if(t.join("-")===i.join("-")){const e=document.getElementById("MiO-List-Item-Children-"+t.join("-"));e&&e.classList.toggle("expend")}else o===n-1?(this.updateMethods.deactivate(i.join("-")),this.updateMethods.activate(t.join("-")),this.testLastSelectedNodeHasChildrenOpened(t.join("-"))):(this.updateMethods.deactivate(i.join("-")),this.updateMethods.activate(t.join("-"))),this.updateMethods.active(t.join("-"))},testLastSelectedNodeHasChildrenOpened(e){const t=e.split("-"),i=this.activeMarker.split("-");let o=!0;const n=t.length;for(let e=0;e<n;e++)if(t[e]!==i[e])return void(o=!1);if(o){const e=document.getElementById("MiO-List-Item-Children-"+t.join("-"));e&&e.classList.remove("expend")}},findDifferentIndex(e,t){const i=e.split("-"),o=t.split("-"),n=i.length,a=o.length;let r=-1;const c=Math.min(n,a);for(let e=0;e<c;e++)if(i[e]!==o[e])return r=e,r;return n!==a?(r=c,r):r},initialMarker(){if(!this.marker){const e=this.$el.parentElement;this._marker=([...e.children].indexOf(this.$el)+1).toString()}}},mounted(){this.initialMarker()}};const m=["id"],u=["id"],p=["id"];d.render=function(t,i,o,n,a,r){const c=e.resolveComponent("mio-list-item");return e.openBlock(),e.createElementBlock("div",{class:"mio-list-item",id:"MiO-List-Item-"+(o.marker?o.marker:a._marker)},[o.item.label?(e.openBlock(),e.createElementBlock("div",{key:0,class:"mio-list-item-content",id:"MiO-List-Item-Content-"+(o.marker?o.marker:a._marker),onClick:i[0]||(i[0]=e=>r.handleSelect(o.marker?o.marker:a._marker))},e.toDisplayString(o.item.label),9,u)):e.renderSlot(t.$slots,"default",{key:1}),o.item.children?(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[o.item.children.length>0?(e.openBlock(),e.createElementBlock("div",{key:0,class:"mio-list-item-children",id:"MiO-List-Item-Children-"+(o.marker?o.marker:a._marker)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.item.children,((t,i)=>(e.openBlock(),e.createBlock(c,{marker:o.marker?o.marker+"-"+(i+1).toString():a._marker+"-"+(i+1).toString(),item:t},null,8,["marker","item"])))),256))],8,p)):e.createCommentVNode("v-if",!0)],64)):e.createCommentVNode("v-if",!0)],8,m)},d.__scopeId="data-v-3af5ae0a",d.__file="src/mio-list/src/ListItem.vue",l.install=function(e){e.component(l.name,l),e.component(d.name,d)};var h={name:"mio-card",data:()=>({UUID:i.GenerateUUID()}),provide(){return{UUID:this.UUID}}};const v=["id"];h.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock("div",{id:"MiO-Card-"+a.UUID,class:"mio-card"},[e.renderSlot(t.$slots,"default")],8,v)},h.__scopeId="data-v-db086fd2",h.__file="src/mio-card/src/Card.vue";var f={name:"mio-card-header",inject:["UUID"]};const k=["id"];f.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock("div",{id:"MiO-Card-Header-"+r.UUID,class:"mio-card-header"},[e.renderSlot(t.$slots,"default")],8,k)},f.__scopeId="data-v-ff4fc5f8",f.__file="src/mio-card/src/CardHeader.vue";var I={name:"mio-card-body",inject:["UUID"]};const g=["id"];I.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock("div",{id:"MiO-Card-Body-"+r.UUID,class:"mio-card-body"},[e.renderSlot(t.$slots,"default")],8,g)},I.__scopeId="data-v-7015ed59",I.__file="src/mio-card/src/CardBody.vue";var y={name:"mio-card-footer",inject:["UUID"]};const U=["id"];y.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock("div",{id:"MiO-Card-Footer-"+r.UUID,class:"mio-card-footer"},[e.renderSlot(t.$slots,"default")],8,U)},y.__scopeId="data-v-5f25b912",y.__file="src/mio-card/src/CardFooter.vue",h.install=function(e){e.component(h.name,h),e.component(f.name,f),e.component(I.name,I),e.component(y.name,y)};var b={name:"mio-breadcrumbs",props:{separator:{type:String,default:"/"}},data:()=>({UUID:i.GenerateUUID()}),provide(){return{separator:this.separator}},methods:{disableFirstSeparator(){const e=this.$el.children;e.length>0&&e[0]&&(e[0].style.display="none")}},mounted(){this.disableFirstSeparator()}};const S=["id"];b.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock("div",{id:"MiO-Breadcrumbs-"+a.UUID,class:"mio-breadcrumbs"},[e.renderSlot(t.$slots,"default")],8,S)},b.__scopeId="data-v-368902fa",b.__file="src/mio-breadcrumbs/src/Breadcrumbs.vue";var _={name:"mio-breadcrumb-item",inject:["separator"],props:{link:{type:String,default:""},active:{type:Boolean,default:!1}}};const M={class:"mio-breadcrumb-separator"};_.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",M,e.toDisplayString(r.separator),1),e.createElementVNode("div",{class:e.normalizeClass(["mio-breadcrumb-item",o.active?"active":""])},[e.renderSlot(t.$slots,"default")],2)],64)},_.__scopeId="data-v-255fd053",_.__file="src/mio-breadcrumbs/src/BreadcrumbItem.vue",b.install=function(e){e.component(b.name,b),e.component(_.name,_)};var B={name:"mio-layouts",data:()=>({UUID:i.GenerateUUID()})};const D=["id"];B.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock("div",{id:"MiO-Layout-"+a.UUID,class:"mio-layouts"},[e.renderSlot(t.$slots,"default")],8,D)},B.__scopeId="data-v-258385a8",B.__file="src/mio-layout/src/Layouts.vue";var x={name:"mio-layout-item",props:{width:{type:String,default:"1"}},data:()=>({style:{}}),methods:{initialStyle(){const e=this.width;"1"===e?Object.assign(this.style,{flex:"1"}):Object.assign(this.style,{flex:`0 0 ${e}`})}},created(){this.initialStyle()}};x.render=function(t,i,o,n,a,r){return e.openBlock(),e.createElementBlock("div",{style:e.normalizeStyle(a.style),class:"mio-layout-item"},[e.renderSlot(t.$slots,"default")],4)},x.__scopeId="data-v-e76db5ec",x.__file="src/mio-layout/src/LayoutItem.vue",B.install=function(e){e.component(B.name,B),e.component(x.name,x)};var E={MiOSelect:n,MiOList:l,MiOCard:h,MiOBreadcrumbs:b,MiOLayouts:B};module.exports=E;
//# sourceMappingURL=mio-ui.cjs.js.map
