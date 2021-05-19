<template>
<div class="blog-category-container" v-loading="isLoading">
  <h2>文章分类</h2>
  <Catalogue :list="list" @select="handleSelected"/>
</div>
</template>

<script>
import Catalogue from "@/views/Blog/components/Catalogue";
import fetchData from "@/mixins/fetchData";
import { getBlogTypes } from "@/api/blog";

export default {
  name: "BlogCategory",
  mixins: [fetchData([])],
  components: {
    Catalogue
  },
  computed: {
    categoryId(){
      return +this.$route.params.categoryId || -1;
    },
    list(){
      const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [{name: "全部", id: -1,
        articleCount: totalArticleCount}, ...this.data]
      return result.map(item => ({
        ...item,
        isSelected: item.id === this.categoryId,
        aside: `${item.articleCount}篇`
      }));
    },
    limit(){
      return this.$route.query.limit || 20;
    }
  },
  methods: {
    async fetchData(){
      return await getBlogTypes();
    },
    handleSelected(item){
      const query = {
        page: 1,
        limit: this.limit
      }
      //跳转到当前的分类id，当前的页容量 newPage的页码
      if (item.id === -1){
        //当前没有分类
        //   /article/cate/-1?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query
        })
      }else{
        //   /article/cate/${this.routeInfo.categoryId}/page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.blog-category-container{
  box-sizing: border-box;
  width: 350px;
  height: 100%;
  padding: 40px 20px 40px 40px;
  overflow-y: auto;
  position: relative;
  h2{
    font-weight: bold;
    margin: 0;
    font-size: 32px;
    letter-spacing: 2px;
  }
}
</style>