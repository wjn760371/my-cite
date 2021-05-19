<template>
  <div class="not-found-container">
    <div class="img-container">
      <img class="img" src="@/assets/404.png" alt="" />
    </div>
    <div class="error-content">
      <div class="error">
        <div>
          <h1>404 NotFound</h1>
          <p>哦豁，您所要访问的页面找不到了哦！点击下方首页按钮回到主页</p>
        </div>
      </div>
      <div class="btn-content">
        <div class="btn" @click.prevent="handleClick">首页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    handleClick(){
      this.$router.push({
        name: "Home"
      })
    }
  }
};
</script>

<style scoped lang="less">
.not-found-container {
  background: #90cbc0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-container{
  flex: 1 1 auto;
  width: 45%;
  height: 100%;
  position: relative;
  .img{
    object-fit: cover;
    width: 50%;
    height: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-10%, -50%);
  }
}
.error-content{
  width: 55%;
  height: 100%;
  flex: 1 1 auto;
  position: relative;
  .error{
    width: 100%;
    height: 50%;
    display: flex;
    align-items: flex-end;
    justify-items: left;
    flex-wrap: wrap;
    padding: 30px 0;
    div{
      width: 60%;
      white-space: pre-wrap;
      line-height: 1.5;
      h1{
        font-size: 35px;
      }
      p{
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .btn-content{
    width: 100%;
    height: 50%;
    padding-left: 30px;
  }
}
.btn{
  width: 150px;
  height: 50px;
  line-height: 50px;
  font-size: 25px;
  text-indent: 1em;
  letter-spacing: 1em;
  color: #fff;
  text-align: center;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  background-color: #91675f;
  box-shadow: 3px 3px 4px #000;
}
</style>
