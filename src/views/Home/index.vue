<!--主页组件-->
<template>
<div class="home-container"
     ref="container"
     v-loading="loading"
     @wheel="handleWheel">
  <ul
      class="carousel-container"
      :style="{marginTop}"
      @transitionend="handleTransitionEnd"
  >
    <li v-for="item in data" :key="item.id">
      <CarouselItem :carousel="item"/>
    </li>
  </ul>
  <div
      class="icon icon-up"
      v-show="index>=1"
      @click="switchTo(index - 1)"
  >
    <Icon type="arrowUp"/>
  </div>
  <div
      class="icon icon-down"
      v-show="index<data.length - 1"

      @click="switchTo(index + 1)"
  >
    <Icon type="arrowDown"/>
  </div>
  <ul class="indicator">
    <li v-for="(item, i) in data"
        :key="item.id"
        :class="{active:i===index}"
        @click="switchTo(i)"
    ></li>
  </ul>
</div>
</template>

<script>
import CarouselItem from "./Carouselitem";
import Icon from "@/components/Icon";
import { mapState } from "vuex"

export default {
  name: "index",
  components:{
    CarouselItem,
    Icon
  },
  data(){
    return {
      index: 0, //当前显示的是第几章轮播图
      containerHeight: 0, //整个容器的高度
      switching: false
    }
  },
  computed: {
    marginTop(){
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  created() {
    this.$store.dispatch("banner/fetchBanner")
  },
  mounted(){
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize)
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize)
  },
  methods: {
    //跳转页面
    switchTo(target){
      this.index = target;
    },
    //滚轮事件
    handleWheel(e){
      if (this.switching){
        return;
      }
      if (e.deltaY > 5 && this.index < this.data.length -1){
        this.index ++;
        this.switching = true;
      }
      if (e.deltaY < -5 && this.index > 0){
        this.index --;
        this.switching = true;
      }
    },
    handleTransitionEnd(){
      this.switching = false;
    },
    handleResize(){
      this.containerHeight = this.$refs.container.clientHeight;
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container{
  width: 100%;
  height: 100%;
  position: relative;
  background: @dark;
  overflow: hidden;
  color: #fff;
  ul{
    margin: 0;
    list-style: none;
    padding: 0;
  };
}
.carousel-container{
  width: 100%;
  height: 100%;
  transition: 500ms;
  li{
    width: 100%;
    height: 100%;
  }
}
.icon{
  position: absolute;
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
  &.icon-up{
    top: 25px;
    animation: sway-up 2s infinite;
  }
  &.icon-down{
    top: auto;
    bottom: 25px;
    animation: sway-down 2s infinite;
  }
  @sway: 6px;
  @keyframes sway-up {
    0%{
      transform: translate(-50%, @sway);
    }
    50%{
      transform: translate(-50%, -@sway);
    }
    100%{
      transform: translate(-50%, @sway);
    }
  }
  @keyframes sway-down {
    0%{
      transform: translate(-50%, -@sway);
    }
    50%{
      transform: translate(-50%, @sway);
    }
    100%{
      transform: translate(-50%, -@sway);
    }
  }
}
.indicator{
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  li{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 12px;
    border: 1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    &.active{
      background: #fff;
    }
  }
}
</style>