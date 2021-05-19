<template>
  <div class="button-container">
    <button :type="buttonType">{{ buttonContent }}</button>
    <div class="move-div move-top"></div>
    <div class="move-div move-right"></div>
    <div class="move-div move-bottom"></div>
    <div class="move-div move-left"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    buttonContent: {
      type:String,
      default: "提交"
    }
  },
  computed: {
    buttonType(){
      if (this.buttonContent === "提交"){
        return "submit";
      }else{
        return "button";
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.button-container{
  box-sizing: border-box;
  width: 100px;
  height: 35px;
  background: lighten(@gray, 10%);
  overflow: hidden;
  position: relative;
  transition: .5s;
  color: #fd0808;
  display: flex;
  &:hover{
    background-color: #fd0808;
    box-shadow: 0 0 5px #fd0808,
                0 0 10px #fd0808;
    button{
      color: #000;
    }
  }
  button{
    outline: none;
    background: transparent;
    border: none;
    color: inherit;
    flex: 1 1 auto;
    font-size: 18px;
    font-weight: bold;
  }
  .move-div{
    position: absolute;
  }
  .move-top{
    top: -33px;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to left, #cc3600, transparent);
    animation: run-top 1s linear infinite;
  }
  .move-right{
    left: 98px;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #cc3600, transparent);
    animation: run-right 1s linear infinite;
  }
  .move-bottom{
    top: 33px;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #cc3600, transparent);
    animation: run-bottom 1s linear infinite;
  }
  .move-left{
    left: -98px;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #cc3600, transparent);
    animation: run-left 1s linear infinite;
  }
  @keyframes run-top{
    0%{
      transform: translateX(-100%);
    }
    45%{
      transform: translateX(-100%);
    }
    75%{
      transform: translateX(100%);
    }
    100%{
      transform: translateX(100%);
    }
  }
  @keyframes run-right{
    0%{
      transform: translateY(-100%);
    }
    70%{
      transform: translateY(-100%);
    }
    100%{
      transform: translateY(100%);
    }
  }
  @keyframes run-bottom{
    0%{
      transform: translateX(100%);
    }
    25%{
      transform: translateX(-100%);
    }
    100%{
      transform: translateX(-100%);
    }
  }
  @keyframes run-left{
    0%{
      transform: translateY(100%);
    }
    20%{
      transform: translateY(100%);
    }
    50%{
      transform: translateY(-100%);
    }
    100%{
      transform: translateY(-100%);
    }
  }
}
.disabled{
  opacity: .4;
  background: @gray;
  color: #000;
  &:hover{
    background: @gray;
    box-shadow: none;
  }
  button{
    cursor: not-allowed;
  }
  .move-top,
  .move-right,
  .move-bottom,
  .move-left{
    display: none;
    animation: none;
  }
}
</style>