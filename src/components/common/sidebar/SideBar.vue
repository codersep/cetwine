<template>
  <div class="side-bar">
    <div :class="[{side_body_active: this.$store.state.status},'side-body']" >
      <side-bar-item></side-bar-item>
    </div>
  </div>
</template>

<script>
import SideBarItem from '@/components/common/sidebar/SideBarItem'
import CetMask from '@/components/common/cetmask/CetMask.vue'
export default {
  components: {
    SideBarItem,
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
  width: 71vw;
  background-color: rgb(177, 177, 177);
  position: fixed;
  left: -71vw;
  transition: 0.4s;


}
.side_body_active{
  transform: translateX(71vw);
}


</style>
