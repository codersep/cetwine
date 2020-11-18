<template>
  <div id="app" @touchmove.prevent>
    <cet-mask></cet-mask>
    <side-bar></side-bar>
    <main-nav-bar></main-nav-bar>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar";
import MainNavBar from "@/components/content/mainnavbar/MainNavBar";
import SideBar from "@/components/common/sidebar/SideBar";
import CetMask from '@/components/common/cetmask/CetMask.vue'

export default {
  name: "App",
  components: {
    MainTabBar,
    MainNavBar,
    SideBar,
    CetMask,
  },
};

window.onload = function () {
  document.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });
};
</script>

<style>
@import "assets/css/base.css";
</style>
