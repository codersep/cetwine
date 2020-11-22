<template>
  <div id="nav-bar" v-show="$store.state.is_login">
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
    z-index: 2;
    height: 49px;
    background-color: #7DAEBD;
    box-shadow: 0 3px 5px rgba(106, 105, 105, 0.99);
    position: fixed;
    left: 0;
    right: 0;
    top: -5px;

  }
</style>
