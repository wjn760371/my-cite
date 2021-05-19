<!--空目录组件-->
<template>
  <div class="empty-container">
    <Icon type="empty"/>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue"
export default {
  name: "index",
  components:{
    Icon
  },
  props: {
    text: {
      type: String,
      default: "无数据"
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container{
  .self-center();
  text-align: center;
  color: @lightWords;
}
.icon-container{
  font-size: 30px;
}
</style>