<!--翻页组件测试-->
<template>
  <div id="app">
    <h1>Pager组件</h1>
    <Pager :total="total" :current="current" @pageChange="handlePageChange"/>
  </div>
</template>

<script>

import Pager from "./"
export default {
  name: "App",
  data(){
    return {
      total: 300,
      current: 1
    }
  },
  components:{
    Pager
  },
  methods: {
    handlePageChange(newPage){
      this.current = newPage;
      console.log("加载当前页数据")
    }
  }
}
</script>

<style scoped>

</style>