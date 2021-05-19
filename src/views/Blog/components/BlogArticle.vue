<!--文章详情页文章部分-->
<template>
<div class="blog-article-container">
  <h1>{{ blog.title }}</h1>
  <div class="aside">
    <span>日期：{{ blog.createDate }}</span>
    <span>浏览量：{{ blog.scanNumber }}</span>
    <a href="#data-form-container">评论：{{ blog.commentNumber }}</a>
    <RouterLink :to="{
      name: 'CategoryBlog',
      params: {
        categoryId: blog.category.id
      }
    }">{{ blog.category.name }}</RouterLink>
  </div>
  <div v-html="blog.htmlContent" class="markdown-body">

  </div>
</div>
</template>

<script>
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
  name: "BlogArticle",
  props: {
    blog: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside{
  font-size: 13px;
  color: @gray;
  span{
    margin-right: 1.5em;
  }
  a{
    margin-right: 1.5em;
  }
}
.markdown-body{
  padding: 20px 0 20px 20px;
}
</style>