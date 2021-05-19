<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="aside">
          <SetAside />
        </div>
      </template>
      <template v-slot:default>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>

import Layout from "./components/Layout";
import SetAside from "./components/SetAside";
import ToTop from "./components/ToTop";
export default {
  name: "App",
  components: {
    Layout,
    SetAside,
    ToTop
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/mixin.less";
.app-container{
  .self-fill(fixed);

}
.aside{
  width: 250px;
  height: 100%;
}
.main .layout-container{
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
}
</style>