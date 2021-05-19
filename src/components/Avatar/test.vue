<!--头像组件测试-->
<template>
  <div class="app">
    <h1>Avatar组件</h1>
    <Avatar url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg" :size="150"/>
  </div>
</template>

<script>
import Avatar from "./"
export default {
name: "test",
  components: {
    Avatar
  }
}
</script>

<style scoped>

</style>