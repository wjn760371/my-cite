<!--布局组件测试-->
<template>
<div class="test-container">
  <Layout>
    <template #left>
      <div class="left">
        左边栏区域，宽度适应内容，溢出隐藏
      </div>
    </template>
    <div class="main">
      主区域，宽度占满剩余空间，溢出隐藏
    </div>
  </Layout>
</div>
</template>

<script>
import Layout from "./"
export default {
  name: "test",
  components: {
    Layout
  }
}
</script>

<style scoped>
.test-container{
  width: 80%;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
}
.left{
  width: 200px;
  height: 100%;
  background: #00a3f5;
}
.main{
  width: 100%;
  height: 100%;
  background: #bd2c00;
}
.right{
  width: 150px;
  height: 100%;
  background: lightseagreen;
}
</style>