<template>
  <div>
    <Loading v-if="loadingShow"/>
    <button @click="loadingShow=!loadingShow">切换显示隐藏</button>
  </div>
</template>

<script>
import Loading from "./"
export default {
name: "test",
  components: {
    Loading
  },
  data(){
    return {
      loadingShow: true
    }
  }
}
</script>

<style scoped>

</style>