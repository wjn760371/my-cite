<!--菜单组件-->
<template>
<nav class="menu-container">
    <RouterLink
        :exact="item.exact"
        v-for="item in items"
       :key="item.link"
       :to="{name: item.name}"
        active-class="selected">
      <div class="icon">
        <Icon :type="item.icon"/>
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
</nav>
</template>

<script>
import Icon from "@/components/Icon/index"
export default {
name: "index",
  data(){
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false//激活状态是否要精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true
        }
      ]
    }
  },
  components:{
    Icon
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/global.less";
.menu-container{
  margin: 24px 0;
  a{
    &.selected{
      background: darken(@lightWords, 30%);
      color: #fff;
    }
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    color: @gray;
    &:hover{
      background: #2d2d2d;
      color: #fff;
    }
    .icon{
      width: 24px;
    }
  }
}
</style>