<template>
<div class="blog-comment-container">
  <MessageArea
      title="评论列表"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
      :subTitle="`(${data.total})`"/>
</div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getComments, postComment } from "@/api/blog";

export default {
  name: "BlogComment",
  components: {
    MessageArea
  },
  mixins: [fetchData({total: 0, row: []})],
  data(){
    return {
      page: 1,
      limit: 10
    }
  },
  computed:{
    hasMore(){
      return this.data.rows.length < this.data.total;
    }
  },
  created(){
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async fetchData(){
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore(){
      //所有评论加载完成
      if (!this.hasMore){
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback){
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData
      });
      this.data.total++;
      this.data.rows.unshift(resp);
      callback("评论成功");//父组件执行完成，执行回调函数
    },
    handleScroll(dom){
      if (this.isLoading || !dom){
        //当前正在加载评论
        return;
      }
      const range = 100;
      const dec = Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight);
      if (dec < range){
        this.fetchMore();
      }
    }
  }
}
</script>

<style scoped lang="less">
.blog-comment-container{
  margin: 30px 0;
}
</style>