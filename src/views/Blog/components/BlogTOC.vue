<!--文章详情页目录-->
<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <ArticleCatalogue :list="tocWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
import ArticleCatalogue from "@/views/Blog/components/ArticleCatalogue";
import { debounce } from "@/utils";

export default {
  name: "BlogToc",
  props: {
    toc: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      activeAnchor: "article-md-title-1"
    }
  },
  components: {
    ArticleCatalogue
  },
  computed:{
    tocWithSelect(){
      const getTOC = (toc = []) => {
        return toc.map(item => ({
          ...item,
              isSelected: item.anchor === this.activeAnchor,
              children: getTOC(item.children)
          }))
      }
      return getTOC(this.toc);
    },
    //根据toc得到他们对应的元素数组
    doms(){
      const doms = [];
      const addToDoms = toc => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length){
            addToDoms(t.children);
          }
        }
      }
      addToDoms(this.toc);
      return doms;
    }
  },
  methods: {
    handleSelect(item){
      location.hash = item.anchor
    },
    //设置activeAnchor为正确值
    setSelect(scrollDom){
      if (!scrollDom){
        return;
      }
      this.activeAnchor = "";//后续激活前需要先清除之前设置的
      const range = 200;
      for (const dom of this.doms) {
        //看一下当前这个dom元素是不是应该被选中
        if (!dom){
          continue;
        }
        //得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range){
          //在规定范围内
          this.activeAnchor = dom.id;
          return;
        }else if(top > range){
          //在规定范围下方
          return;
        }else{
          //在规定范围上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created(){
    this.setSelectDebounce = debounce(this.setSelect, 50)
    this.$bus.$on("mainScroll", this.setSelectDebounce)
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  }
}
</script>

<style scoped lang="less">
.blog-toc-container{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  h2{
    font-weight: bold;
    margin: 0;
    font-size: 32px;
    letter-spacing: 2px;
  }
}
</style>