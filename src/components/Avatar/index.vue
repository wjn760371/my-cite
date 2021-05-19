<!--头像组件-->
<template>
  <img
      class="avatar-img"
      :src="url"
      :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    size:{
      type:Number,
      default: 150
    }
  },
}
</script>

<style scoped>
/*scoped表示带有作用域的类样式*/
.avatar-img{
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>