<template>
  <div id="nav-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
  #nav-bar{
    z-index: 1;
    height: 44px;
    background-color: rgba(250, 194, 204, 0.664);
    box-shadow: 0 3px 5px rgba(204, 169, 169,0.8);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

  }
</style>