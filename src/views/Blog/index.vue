<template>
  <Layout>
    <BlogList />
    <template v-slot:right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "@/views/Blog/components/BlogList";
import BlogCategory from "@/views/Blog/components/BlogCategory";
export default {
  name: "index",
  components:{
    Layout,
    BlogCategory,
    BlogList
  }
}
</script>

<style scoped>

</style>