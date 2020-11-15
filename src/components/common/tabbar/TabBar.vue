<template>

  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",

  };
</script>

<style>
  #tab-bar {
    z-index: 1;
    display: flex;
    background-color: rgba(250, 194, 204, 0.664);
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 5px rgba(204, 169, 169, 0.8);
  }
</style>