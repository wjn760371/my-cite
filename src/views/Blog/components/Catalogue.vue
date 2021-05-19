<template>
<ul class="catalogue-container">
  <li v-for="(item, i) in list"
      :key="i"
      ref="kind"
      :class="{selected:item.isSelected}"
      @click="handleClick(item)"
      >
    <span  >{{ item.name }}</span>
    <span class="aside">{{ item.aside }}</span>
    <catalogue :list="item.children" @select="handleClick"/>
  </li>
</ul>
</template>

<script>
export default {
  name: "catalogue",
  props: {
    //[{name: "xxx", isSelected: true, children: [{name: "xxx", isSelected: true, children: [...]}...]}]
    list: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    handleClick(item){
      if (!item.isSelect){
        this.$emit("select", item);
      }
    },
    RandomColor(){
      let r = Math.floor(Math.random()*256);
      let g = Math.floor(Math.random()*256);
      let b = Math.floor(Math.random()*256);
      return `rgba(${r}, ${g}, ${b}, 0.1)`
    }
  },
  updated() {
    this.$refs.kind.forEach(item => {
      item.style.backgroundColor = this.RandomColor();
    })
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
ul{
  list-style: none;
  padding: 0;
  .catalogue-container{
    padding-left: 1em;
  }
  li{
    cursor: pointer;
    min-height: 2em;
    line-height: 2.5em;
    border-radius: 20px;
    display: flex;
    margin-bottom: 5px;
    justify-content: space-around;
    span{
      font-weight: bold;
      display: block;
      &.aside{
        font-size: .9em;
        color: lighten(@dark, 20%);
      }
    }
    &.selected{
      color: lighten(@warn, 5%);
      font-weight: bold;
      font-size: 1.1em;
      box-shadow: 3px 3px 15px @dark,
                  -3px -3px 15px @dark;
      position: relative;
      left: -10px;
      .aside{
        color: lighten(@warn, 5%);
      }
    }
  }
}
span{
  cursor: pointer;
}
</style>