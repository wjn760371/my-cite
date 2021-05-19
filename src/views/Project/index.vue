<template>
<div class="project-container" ref="container" v-loading="loading">
  <div class="project-item-container">
    <div v-for="item in data" class="project-item">
      <a
          :key="item.id"
          :href="item.url"
          target="_blank"
          class="thumb-link"
      ><img v-lazy="item.thumb" alt="" class="thumb"></a>
      <div class="info">
        <h2>
          {{ item.name }}
          <a :href="item.github" target="_blank" class="github">Github源码地址</a>
        </h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
  <div class="description">
    <h1>你终于来啦！</h1>
    <p>在这里，你可以看到一些有趣的东西，如你所见，左侧有一些简单的案例</p>
    <p>每个小案例都有一个实现思路和缩略图，点击缩略图即可跳转到案例所在地址查看效果</p>
    <p>案例标题右侧为对应案例的Github源码地址</p>
    <p class="tips">注：左侧案例目前是直接在Github进行发布的，因此直接访问需要进行科学上网，如果没有条件，可直接点击Github源码地址查看源码</p>
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import imgUrl from "@/assets/project-img/project1.gif";
export default {
  name: "index",
  mixins: [mainScroll("container")],
  computed: mapState("project", ["loading", "data"]),
  data(){
    return {
      imgUrl
    }
  },
  created() {
    this.$store.dispatch("project/fetchProject")
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.project-container{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  display: flex;
  .scroll();
}
.project-item-container{
  max-width: 100%;
  margin-right: 30px;
  flex: 1 1 auto;
}
.description{
  width: 400px;
  height: 100%;
  padding: 20px 30px 20px 10px;
  flex: 0 0 auto;
  p{
    text-indent: 2em;
    font-size: 18px;
    font-weight: bold;
    line-height: 2;
    &.tips{
      color: #fd4503;
    }
  }
}
.project-item{
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover{
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb-link{
    width: 350px;
    min-height: 150px;
    flex: 0 0 auto;
    border-radius: 5px;
    margin-right: 15px;
    display: block;
  }
  .thumb{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .info{
    line-height: 1.7;
    flex: 1 1 auto;
    p{
      max-height: 400px;
      overflow-y: auto;
      .scroll();
      font-size: 16px;
      white-space: pre-line;
    }
    h2{
      margin: 0;
      .github{
        font-size: 16px;
        color: darken(@gray, 20%);
        transition: 0.5s;
        margin-left: 20px;
        &:hover{
          color: @warn;
        }
      }
    }
  }
}
</style>