(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project"],{"1e95":function(t,e,i){t.exports=i.p+"img/project1.28e45f4e.gif"},"34fb":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"container",staticClass:"project-container"},[i("div",{staticClass:"project-item-container"},t._l(t.data,(function(e){return i("div",{staticClass:"project-item"},[i("a",{key:e.id,staticClass:"thumb-link",attrs:{href:e.url,target:"_blank"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.thumb,expression:"item.thumb"}],staticClass:"thumb",attrs:{alt:""}})]),i("div",{staticClass:"info"},[i("h2",[t._v(" "+t._s(e.name)+" "),i("a",{staticClass:"github",attrs:{href:e.github,target:"_blank"}},[t._v("Github源码地址")])]),i("p",[t._v(t._s(e.description))])])])})),0),t._m(0)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"description"},[i("h1",[t._v("你终于来啦！")]),i("p",[t._v("在这里，你可以看到一些有趣的东西，如你所见，左侧有一些简单的案例")]),i("p",[t._v("每个小案例都有一个实现思路和缩略图，点击缩略图即可跳转到案例所在地址查看效果")]),i("p",[t._v("案例标题右侧为对应案例的Github源码地址")]),i("p",{staticClass:"tips"},[t._v("注：左侧案例目前是直接在Github进行发布的，因此直接访问需要进行科学上网，如果没有条件，可直接点击Github源码地址查看源码")])])}],a=i("5880"),r=i("f119"),c=i("1e95"),l=i.n(c),o={name:"index",mixins:[Object(r["a"])("container")],computed:Object(a["mapState"])("project",["loading","data"]),data:function(){return{imgUrl:l.a}},created:function(){this.$store.dispatch("project/fetchProject")}},u=o,h=(i("c307"),i("2877")),f=Object(h["a"])(u,n,s,!1,null,"7ed65117",null);e["default"]=f.exports},c0f5:function(t,e,i){},c307:function(t,e,i){"use strict";i("c0f5")},f119:function(t,e,i){"use strict";e["a"]=function(t){return{mounted:function(){this.$bus.$on("setMainScroll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},beforeDestroy:function(){this.$bus.$emit("mainScroll"),this.$bus.$off("setMainScroll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)},methods:{handleSetMainScroll:function(e){this.$refs[t].scrollTop=e},handleMainScroll:function(){this.$bus.$emit("mainScroll",this.$refs[t])}}}}}}]);
//# sourceMappingURL=project.c8470f5f.js.map