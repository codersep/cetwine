<template>
  <div class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>

    <div v-else-if="isActive" class="item-icon-active">
      <slot name="item-icon-active"></slot>
    </div>

    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      path: String
    },
    data() {
      return {
        // isActive: true,

      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path)
      }
    }

  };
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    padding-top: 3px;
    color: #474747;
  }
  .tab-bar-item div {
    font-size: 15px;
  }
  .tab-bar-item i{
    font-size: 20px;
  }

  .active {
    /* color: rgba(255, 20, 145, 0.705); */
  }
</style>
