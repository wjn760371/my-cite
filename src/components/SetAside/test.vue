<!--导航组件测试-->
<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./"
export default {
  name: "index",
  components: {
    SiteAside
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.test-container{
  width: 250px;
  height: 800px;
}
</style>