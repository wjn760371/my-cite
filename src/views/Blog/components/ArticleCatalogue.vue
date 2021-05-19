<template>
  <ul class="catalogue-container">
    <li v-for="(item, i) in list"
        :key="i"
        ref="kind"
    >
      <span @click="handleClick(item)"
            :class="{selected:item.isSelected}"
      >{{ item.name }}</span>
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
    }
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
    min-height: 2em;
    line-height: 2.5em;
    border-radius: 20px;
    margin-bottom: 5px;
    span{
      font-weight: bold;
      display: block;
    }
    span.selected{
      color: lighten(@warn, 5%);
      font-weight: bold;
    }
  }
}
span{
  cursor: pointer;
}
</style>