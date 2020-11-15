<template>
  <div class="side-bar">
    <side-mask></side-mask>
    <div :class="[{side_body_active: this.$store.state.status},'side-body']" >
      <side-bar-item></side-bar-item>
    </div>
  </div>
</template>

<script>
import SideMask from '@/components/common/sidebar/SideMask'
import SideBarItem from '@/components/common/sidebar/SideBarItem'
export default {
  components: {
    SideMask,
    SideBarItem
  },
  data() {
    return {
    }
  },

};

</script>

<style>
.side-bar {
  height: 100vh;
  width: 100vw;
}

.side-body {
  z-index: 10;
  height: 100vh;
  width: 70vw;
  background-color: rgb(177, 177, 177);
  position: fixed;
  left: -70vw;
  transition: 0.4s;


}
.side_body_active{
  transform: translateX(70vw);
}


</style>