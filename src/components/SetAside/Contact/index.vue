<!--联系方式组件-->
<template>
<ul class="contact-container">
  <li>
    <a :href="data.github" target="_blank">
      <div class="icon">
        <Icon type="github"/>
      </div>
      <span>{{ data.githubName }}</span>
    </a>
  </li>
  <li>
    <a :href="`mailto:${data.mail}`">
      <div class="icon">
        <Icon type="mail"/>
      </div>
      <span>{{ data.mail }}</span>
    </a>
  </li>
  <li>
    <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
      <div class="icon">
        <Icon type="qq"/>
      </div>
      <span>{{ data.qq }}</span>
    </a>
    <div class="pop">
      <img :src="data.qqQrCode" alt="">
    </div>
  </li>
  <li>
    <a>
      <div class="icon weixin">
        <Icon type="weixin"/>
      </div>
      <span>{{ data.weixin }}</span>
    </a>
    <div class="pop">
      <img :src="data.weixinQrCode" alt="">
    </div>
  </li>
</ul>
</template>

<script>
import Icon from "@/components/Icon/index";
import { mapState } from "vuex";
export default {
  name: "index",
  components: {
    Icon
  },
  computed: {
    ...mapState("setting", ["data"])
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.contact-container{
  list-style: none;
  padding: 50px 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 36px;
  li{
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    &:hover{
      .pop{
        transform: scale(1);
      }
      a{
        color: @primary;
      }
    }
  }
  a{
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon{
    &.weixin{
      font-size: 32px;
      text-indent: -3px;
    }
    font-size: 26px;
    width: 36px;
  }
  .pop{
    position: absolute;
    bottom: @itemHeight + 5px;
    left: 0;
    background: #fff;
    padding: 8px 12px;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: 0.5s;
    img{
      width: 150px;
      height: 150px;
    }
    &::after{
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      bottom: -4px;
      background-color: #fff;
    }
  }
}
</style>