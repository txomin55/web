(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{270:function(t,e,n){},277:function(t,e,n){"use strict";var o=n(270);n.n(o).a},290:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{tab:0,isSMAndUp:!1,items:[{tab:"project.motivation.title",content:"project.motivation.description",icon:"information-outline"},{tab:"project.structure.title",content:"project.structure.description",icon:"file-tree-outline"},{tab:"project.authentication.title",content:"project.authentication.description",icon:"login-variant"},{tab:"project.frontend.title",content:"project.frontend.description",icon:"web"},{tab:"project.backend.title",content:"project.backend.description",icon:"code-brackets"},{tab:"project.compilation.title",content:"project.compilation.description",icon:"state-machine"},{tab:"project.execution.title",content:"project.execution.description",icon:"run"}]}},mounted:function(){this.isSMAndUp=this.$vuetify.breakpoint.smAndUp}},c=(n(277),n(37)),r=n(62),l=n.n(r),d=n(261),v=n(286),m=n(131),f=n(262),h=n(31),j=n(287),_=n(291),k=n(289),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_background"},[n("v-container",[n("h2",{staticClass:"yellow--text"},[t._v("T-MANAGER MODULE")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/txomin55/t-manager-module"}},[t._v("Github link")])]),t._v(" "),n("v-row",[n("v-col",[n("v-sheet",{staticClass:"project_features",attrs:{color:"transparent"}},[n("v-tabs",{attrs:{vertical:"",color:"yellow"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.items,(function(e){return n("v-tab",{key:e.tab,staticClass:"green--text"},[t.isSMAndUp?[t._v("\n                          "+t._s(t.$t(e.tab))+"\n                        ")]:[n("v-icon",{attrs:{dark:"",right:""}},[t._v("mdi-"+t._s(e.icon))])]],2)})),t._v(" "),t._l(t.items,(function(e){return n("v-tab-item",{key:e.tab},[n("v-container",[n("p",{staticClass:"green--text",domProps:{innerHTML:t._s(t.$t(e.content))}})])],1)}))],2)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VIcon:m.a,VRow:f.a,VSheet:h.a,VTab:j.a,VTabItem:_.a,VTabs:k.a})}}]);