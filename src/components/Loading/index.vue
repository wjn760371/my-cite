<template>
  <img class="loading-container" src="@/assets/svg/tail-spin.svg" alt="">
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.loading-container{
  .self-center()
}
</style>