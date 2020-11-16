<template>
  <div id="cet-home">
    <div class="home-body">
      <div class="cet-timer"></div>
      <div class="cet-plan"></div>
      <div class="cet-history"></div>
      <div class="cet-practice"></div>
      <div class="cet-collect"></div>
      <div class="cet-render"></div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
#cet-home{
  height: 80%;
  width: 90%;
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: yellow;
}
#cet-home .home-body{
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  justify-content: center;

}
#cet-home .home-body div{
  width: 40%;
  height: 30%;
  background-color: #666666;
  margin: 0 0.5rem;
}

</style>
