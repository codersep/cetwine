<template>
  <div class='cet-mask' 
  :style="{display: $store.state.isnone, opacity: $store.state.op}" 
  @click="closeMask"> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      isnone:'block'
    };
  },
  methods: {
    closeMask(){
        this.$store.commit("sideClose")
    }
  },
};
</script>

<style>
.cet-mask {
  z-index: 9;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  position: fixed;
  transition: opacity 0.5s;
}



</style>
