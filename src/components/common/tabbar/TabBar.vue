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
    display: flex;
    background-color: #7daebd;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 5px rgba(106, 105, 105, 0.99);

  }
</style>
