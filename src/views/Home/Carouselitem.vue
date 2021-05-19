<template>
<div
    class="carousel-item-container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    ref="container">
  <div class="carousel-img" ref="img" :style="imagePosition">
    <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"/>
  </div>
  <div class="title" ref="title">{{ carousel.title }}</div>
  <div class="description" ref="description">{{ carousel.description }}</div>
</div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  name: "CarouselItem",
  components:{
    ImageLoader
  },
  data(){
    return {
      titleWidth: 0,
      descWidth: 0,
      titleHeight: 0,
      descHeight: 0,
      containerSize: null,//外层容器的尺寸
      innerSize: null,//里层图片的尺寸
      mouseX: 0,//鼠标的X坐标
      mouseY: 0,//鼠标的Y坐标
    }
  },
  mounted(){
    this.showWords();
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords(){
      this.$refs.title.style.opacity = 0;
      this.$refs.description.style.opacity = 0;
      this.$refs.title.clientHeight;
      this.$refs.title.style.transition = "2s ease-in";
      this.$refs.description.style.transition = "2s ease-in";
      this.$refs.title.style.opacity = 1;
      this.$refs.description.style.opacity = 1;
    },
    setSize(){
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      };
      this.innerSize = {
        width: this.$refs.img.clientWidth,
        height: this.$refs.img.clientHeight
      };
    },
    handleMouseMove(e){
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave(){
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  },
  props: ["carousel"],
  computed: {
    imagePosition(){
      if (!this.innerSize || !this.containerSize){
        return;
      }
      const exactX = this.innerSize.width - this.containerSize.width;
      const exactY = this.innerSize.height - this.containerSize.height;
      const left = -exactX / this.innerSize.width *this.mouseX;
      const top = -exactY / this.innerSize.height * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`
      }
    },
    center(){
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container{
  background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.carousel-img{
  width: 103%;
  height: 103%;
  position: absolute;
  left: 0;
  top: 0;
  transition: .2s;
}
.title, .description{
  position: absolute;
  left: calc(82% - 40px);
  padding: 20px;
  letter-spacing: 3px;
  white-space: nowrap;
  opacity: 0;
}
.title{
  top: 78%;
  font-size: 2em;
  font-weight: bolder;
  color: lighten(@gray, 20%);
  text-shadow: 1px 0 20px rgb(255, 0, 255, .7),
              -1px 0 20px rgb(255, 255, 0, .7),
              0 1px 20px rgb(0, 255, 255, .7),
              0 -1px 20px rgb(125, 125, 125, .7);
}
.description{
  top: 86%;
  font-size: 1.2em;
  font-weight: bold;
  color: lighten(@gray, 10%);
  text-shadow: 1px 0 15px rgb(255, 0, 255, .7),
              -1px 0 15px rgb(255, 255, 0, .7),
              0 1px 15px rgb(0, 255, 255, .7),
              0 -1px 15px rgb(125, 125, 125, .7);
}
</style>