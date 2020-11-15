<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/dict">
        <img slot="item-icon" src="@/assets/img/tabbar/dict.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/dict_active.svg"
          alt=""
        />
        <div slot="item-text">单词</div>
      </tab-bar-item>

      <tab-bar-item path="/about">
        <img slot="item-icon" src="@/assets/img/tabbar/about.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/about_active.svg"
          alt=""
        />
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