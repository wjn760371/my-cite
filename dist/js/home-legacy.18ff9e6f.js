(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"16c0":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"container",staticClass:"home-container",on:{wheel:e.handleWheel}},[i("ul",{staticClass:"carousel-container",style:{marginTop:e.marginTop},on:{transitionend:e.handleTransitionEnd}},e._l(e.data,(function(e){return i("li",{key:e.id},[i("CarouselItem",{attrs:{carousel:e}})],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:e.index>=1,expression:"index>=1"}],staticClass:"icon icon-up",on:{click:function(t){return e.switchTo(e.index-1)}}},[i("Icon",{attrs:{type:"arrowUp"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.index<e.data.length-1,expression:"index<data.length - 1"}],staticClass:"icon icon-down",on:{click:function(t){return e.switchTo(e.index+1)}}},[i("Icon",{attrs:{type:"arrowDown"}})],1),i("ul",{staticClass:"indicator"},e._l(e.data,(function(t,n){return i("li",{key:t.id,class:{active:n===e.index},on:{click:function(t){return e.switchTo(n)}}})})),0)])},s=[],o=i("5530"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"carousel-item-container",on:{mousemove:e.handleMouseMove,mouseleave:e.handleMouseLeave}},[i("div",{ref:"img",staticClass:"carousel-img",style:e.imagePosition},[i("ImageLoader",{attrs:{src:e.carousel.bigImg,placeholder:e.carousel.midImg}})],1),i("div",{ref:"title",staticClass:"title"},[e._v(e._s(e.carousel.title))]),i("div",{ref:"description",staticClass:"description"},[e._v(e._s(e.carousel.description))])])},r=[],c=(i("a4d3"),i("e01a"),i("99af"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"image-loader-container"},[e.everythingDone?e._e():i("img",{staticClass:"placeholder",attrs:{src:e.placeholder,alt:""}}),i("img",{style:{opacity:e.originOpacity,transition:e.duration+"ms"},attrs:{src:e.src,alt:""},on:{load:e.handleLoad}})])}),h=[],d=(i("a9e3"),{name:"index",data:function(){return{originLoaded:!1,everythingDone:!1}},computed:{originOpacity:function(){return this.originLoaded?1:0}},props:{src:{type:String,required:!0},placeholder:{type:String,required:!0},duration:{type:Number,default:3e3}},methods:{handleLoad:function(){var e=this;this.originLoaded=!0,setTimeout((function(){e.everythingDone=!0,e.$emit("load")}),this.duration)}}}),l=d,u=(i("d2b0"),i("2877")),f=Object(u["a"])(l,c,h,!1,null,"6de652fe",null),m=f.exports,g={name:"CarouselItem",components:{ImageLoader:m},data:function(){return{titleWidth:0,descWidth:0,titleHeight:0,descHeight:0,containerSize:null,innerSize:null,mouseX:0,mouseY:0}},mounted:function(){this.showWords(),this.setSize(),this.mouseX=this.center.x,this.mouseY=this.center.y,window.addEventListener("resize",this.setSize)},destroyed:function(){window.removeEventListener("resize",this.setSize)},methods:{showWords:function(){this.$refs.title.style.opacity=0,this.$refs.description.style.opacity=0,this.$refs.title.clientHeight,this.$refs.title.style.transition="2s ease-in",this.$refs.description.style.transition="2s ease-in",this.$refs.title.style.opacity=1,this.$refs.description.style.opacity=1},setSize:function(){this.containerSize={width:this.$refs.container.clientWidth,height:this.$refs.container.clientHeight},this.innerSize={width:this.$refs.img.clientWidth,height:this.$refs.img.clientHeight}},handleMouseMove:function(e){var t=this.$refs.container.getBoundingClientRect();this.mouseX=e.clientX-t.left,this.mouseY=e.clientY-t.top},handleMouseLeave:function(){this.mouseX=this.center.x,this.mouseY=this.center.y}},props:["carousel"],computed:{imagePosition:function(){if(this.innerSize&&this.containerSize){var e=this.innerSize.width-this.containerSize.width,t=this.innerSize.height-this.containerSize.height,i=-e/this.innerSize.width*this.mouseX,n=-t/this.innerSize.height*this.mouseY;return{transform:"translate(".concat(i,"px, ").concat(n,"px)")}}},center:function(){return{x:this.containerSize.width/2,y:this.containerSize.height/2}}}},p=g,w=(i("d20b"),Object(u["a"])(p,a,r,!1,null,"31df1d01",null)),v=w.exports,y=i("d010"),x=i("5880"),z={name:"index",components:{CarouselItem:v,Icon:y["a"]},data:function(){return{index:0,containerHeight:0,switching:!1}},computed:Object(o["a"])({marginTop:function(){return-this.index*this.containerHeight+"px"}},Object(x["mapState"])("banner",["loading","data"])),created:function(){this.$store.dispatch("banner/fetchBanner")},mounted:function(){this.containerHeight=this.$refs.container.clientHeight,window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{switchTo:function(e){this.index=e},handleWheel:function(e){this.switching||(e.deltaY>5&&this.index<this.data.length-1&&(this.index++,this.switching=!0),e.deltaY<-5&&this.index>0&&(this.index--,this.switching=!0))},handleTransitionEnd:function(){this.switching=!1},handleResize:function(){this.containerHeight=this.$refs.container.clientHeight}}},b=z,S=(i("78ab"),Object(u["a"])(b,n,s,!1,null,"6131f693",null));t["default"]=S.exports},"78ab":function(e,t,i){"use strict";i("a28a")},"79b9":function(e,t,i){},"99b4":function(e,t,i){},a28a:function(e,t,i){},d20b:function(e,t,i){"use strict";i("79b9")},d2b0:function(e,t,i){"use strict";i("99b4")}}]);
//# sourceMappingURL=home-legacy.18ff9e6f.js.map