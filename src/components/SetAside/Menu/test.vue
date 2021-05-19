<!--菜单组件测试-->
<template>
<div class="test-container">
<Menu />
</div>
</template>

<script>
import Menu from "./index"
export default {
  name: "test",
  components: {
    Menu
  }
}
</script>

<style scoped>
.test-container{
  position: relative;
  width: 200px;
  height: 600px;
  border: 2px solid #000;
  background-color: #2f3430;
}
</style>