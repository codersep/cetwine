<template>
<div class='main-nav-bar'>
  <nav-bar>
    <nav-bar-cont>
      <img class="icon" slot="nav-bar-icon" src="@/assets/img/navbar/sq_icon.jpeg" alt="">
      <div class="title" slot="nav-bar-title">CetWine</div>
      <i slot="nav-bar-set" class="iconfont icontask set"></i>
    </nav-bar-cont>
  </nav-bar>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue"
import NavBarCont from "@/components/common/navbar/NavBarCont.vue"
export default {
  name: 'App',

  components: {
    NavBar,
    NavBarCont
  }
}
</script>

<style>


</style>
