<!--空目录组件测试-->
<template>
<div class="test-container">
  <Empty />
</div>
</template>

<script>

import Empty from "./"
export default {
  name: "test",
  components: {
    Empty
  },
}
</script>

<style scoped>
.test-container{
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
  position: relative;
}
</style>