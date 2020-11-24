<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <i slot="item-icon" class="iconfont iconhome"></i>
        <i slot="item-icon-active" class="iconfont iconhomefill"></i>

        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/dict">
        <i slot="item-icon" class="iconfont iconform_light"></i>
        <i slot="item-icon-active" class="iconfont iconform_fill_light"></i>
        <div slot="item-text">单词</div>
      </tab-bar-item>

      <tab-bar-item path="/about">
        <i slot="item-icon" class="iconfont iconnewshot"></i>
        <i slot="item-icon-active" class="iconfont iconnewshotfill"></i>
        <div slot="item-text">关于</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
  methods: {

  },
};
</script>

<style>
</style>
