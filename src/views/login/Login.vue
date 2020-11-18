<template>
  <div class="cet-login">
    <LoginBody></LoginBody>
  </div>
</template>

<script>
  import LoginBody from "./LoginBody";
    export default {
        name: "login",
      components:{
        LoginBody
      }
    }
</script>

<style>
  .cet-login{
    z-index: 11;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url(../../assets/img/login/login_bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
