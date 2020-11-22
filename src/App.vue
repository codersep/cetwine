<template>
  <div id="app" @touchmove.prevent>
    <MainNavBar></MainNavBar>
    <cet-mask></cet-mask>
    <side-bar></side-bar>
    <router-view></router-view>
    <MainTabBar></MainTabBar>

  </div>
</template>

<script>
import SideBar from "@/components/common/sidebar/SideBar";
import CetMask from '@/components/common/cetmask/CetMask.vue'
import MainTabBar from "./components/content/maintabbar/MainTabBar";
import MainNavBar from "./components/content/mainnavbar/MainNavBar";
export default {
  name: "App",
  components: {
    SideBar,
    CetMask,
    MainNavBar,
    MainTabBar
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
