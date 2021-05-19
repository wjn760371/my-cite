<template>
<Layout>
  <div class="main-container" ref="mainContainer" v-loading="isLoading">
    <BlogArticle :blog="data" v-if="data"/>
    <BlogComment v-if="!isLoading"/>
  </div>
  <template v-slot:right>
    <div class="right-container" v-loading="isLoading">
      <BlogTOC :toc="data.toc" v-if="data"/>
    </div>
  </template>
</Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlogArticle } from "@/api/blog";
import Layout from "@/components/Layout/index";
import BlogArticle from "@/views/Blog/components/BlogArticle";
import BlogTOC from "@/views/Blog/components/BlogTOC";
import BlogComment from "@/views/Blog/components/BlogComment";
import mainScroll from "@/mixins/mainScroll";

export default {
name: "BlogDetail",
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components:{
    Layout,
    BlogArticle,
    BlogTOC,
    BlogComment
  },
  methods: {
    async fetchData(){
      return await getBlogArticle(this.$route.params.id);
    },
  },
  // created() {
  //   this.$bus.$on("setMainScroll", this.handleSetMainScroll);
  // },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50)
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.main-container{
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  .scroll();
}
.right-container{
  box-sizing: border-box;
  width: 350px;
  height: 100%;
  padding: 40px 20px 40px 40px;
  overflow-y: auto;
  position: relative;
}
</style>