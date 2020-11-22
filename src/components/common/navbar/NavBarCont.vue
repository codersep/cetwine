<template>
  <div id="nav-bar-cont">
    <div @click="iconclick" class="nav-icon">
      <slot name="nav-bar-icon"></slot>
    </div>

    <div class="nav-title">
      <slot name="nav-bar-title"></slot>
    </div>

    <div class="nav-set">
      <slot name="nav-bar-set"></slot>
    </div>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {},
  data() {
    return {

    };
  },
  methods: {
    iconclick() {
      if (!this.$store.state.status) {
        this.$store.commit("sideOpen");
      }
    },
  }
};
</script>

<style>

#nav-bar-cont {
  height: 44px;
  display: flex;
  justify-content: space-between;


}
#nav-bar-cont div {
  height: 100%;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  margin-top: 5px;
}
#nav-bar-cont .nav-set,
.nav-icon {
  height: 100%;
  width: 50px;
}
#nav-bar-cont .nav-title{
  margin-top: 2px;
}
#nav-bar-cont .icon {
  border-radius: 50%;
  height: 30px;
  box-shadow: 0 3px 5px rgba(118, 118, 118, 0.8);
}
#nav-bar-cont .set {
  height: 23px;
}
</style>
