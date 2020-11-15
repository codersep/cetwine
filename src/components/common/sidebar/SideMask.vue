<template>
  <div
    :class="[{ side_active: $store.state.status }, 'side-mask']"
    @click="close_bar"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      mask_active: "none",
    };
  },
  methods: {
    close_bar() {
      this.$store.commit("leftmove");

    }

  },
};
</script>

<style>
.side-mask {
  z-index: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  position: fixed;
  opacity: 0;
  transition: opacity 0.4s linear;
}

.side_active {
  height: 100vh;
  width: 100vw;
  opacity: 0.5;
  z-index: 9;
}
</style>