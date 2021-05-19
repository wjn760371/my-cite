<template>
<div @click="handleClick" class="to-top-container" v-show="show">
  <div class="top">Top</div>
  <img :src="topImg" alt="" class="thumb">
</div>
</template>

<script>
import topImg from "@/assets/cattle.png"
export default {
  name: "index",
  data(){
    return {
      show: false,
      topImg,
    }
  },
  created(){
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed(){
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom){
      if (!dom){
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick(){
      this.$bus.$emit("setMainScroll", 0);
    }
  }
}
</script>

<style scoped lang="less">
.to-top-container{
  width: 60px;
  height: 60px;
  line-height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  .thumb{
    width: 100%;
  }
  .top{
    position: absolute;
    white-space: nowrap;
    text-align: center;
    left: 50%;
    top: 100%;
    font-weight: bold;
    color: #cc3600;
    transform: translate(-50%, -40%);
  }
}
</style>