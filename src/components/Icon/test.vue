<!--图表组件测试-->
<template>
  <div class="test-container">
    <div class="item" v-for="t in types" :key="t">
      <Icon :type="t"/>
      <label>{{t}}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";

export default {
  name: "test",
  components: {
    Icon
  },
  data(){
    return {
      types,
    };
  }
}
</script>

<style scoped>
.test-container{
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 600px;
  flex-wrap: wrap;
}
.item{
  margin: 1em;
  text-align: center;
}
.iconfont{
  display: block;
  color: #000;
  font-size: 25px;
}
</style>