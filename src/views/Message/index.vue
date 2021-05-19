<template>
<div class="message-container" ref="messageContainer">
  <MessageArea title="留言板"
               :is-list-loading="isLoading"
               :list="data.rows"
               :sub-title="`(${data.total})`"
               @submit="handleSubmit"
  />
</div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import * as msgApi from "@/api/message.js";
import mainScroll from "@/mixins/mainScroll";
export default {
  name: "index",
  mixins: [fetchData({total: 0, rows: []}), mainScroll("messageContainer")],
  components: {
    MessageArea
  },
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
      return await msgApi.getMessage(this.page, this.limit);
    },
    async handleSubmit(data, callback){
      const resp = await msgApi.postMessage(data);
      callback("感谢您的留言");
      this.data.rows.unshift(resp);
      this.data.total++;
    },
    async fetchMore(){
      //所有评论加载完成
      if (!this.hasMore){
        return;
      }
      //还有未加载完的评论
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
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
.message-container{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container{
  width: 900px;
  margin: 0 auto;
}
</style>