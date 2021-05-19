<template>
<div class="about-container" v-loading="loading">
  <iframe class="about-content"
          @onload="srcLoaded=true"
          :src="src" frameborder="0"></iframe>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "index",
  data(){
    return{
      srcLoaded: false,
    }
  },
  computed: {
    ...mapState("about", {
      src: "data",
      loading: "loading",
    })
  },
  created(){
    this.$store.dispatch("about/fetchAbout")
  }
}
</script>

<style scoped>
.about-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content{
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>