<!--联系方式组件测试-->
<template>
<div class="test-container">
  <Contact />
</div>
</template>

<script>
import Contact from "./index";
import "@/styles/global.less";
export default {
  name: "test",
  components: {
    Contact
  }
}
</script>

<style scoped>
.test-container{
  width: 400px;
  height: 600px;
  border: 2px solid #00a3f5;
  background-color: #2f3430;
  margin: 0 auto;
  padding-top: 200px;
}
</style>