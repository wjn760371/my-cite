<!--导航组件-->
<template>
  <div class="SetAside-container">
    <template v-if="data">
      <Avatar :url="data.avatar"/>
      <p class="title">{{ data.siteTitle }}</p>
    </template>
    <Menu />
    <Contact v-if="data"/>
    <p class="footer" v-if="data">{{ data.icp }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu/index";
import Contact from "./Contact/index";
import avatarImg from "@/assets/avatar-img/avatar1.jpg";
import { mapState } from "vuex";

export default {
  name: "test",
  components: {
    Avatar,
    Menu,
    Contact
  },
  data(){
    return {
      avatarImg,
    }
  },
  computed: {
    ...mapState("setting", ["data"])
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/mixin.less";
.SetAside-container{
  width: 100%;
  height: 100%;
  background: @dark;
  box-sizing: border-box;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto;
  .scroll()
}
.avatar-img{
  margin: 0 auto;
}
.title{
  font-size: 2em;
  color: #fff;
  text-align: center;
}
.footer{
  text-align: center;
  font-size: 14px;
  color: @lightWords;
}
</style>