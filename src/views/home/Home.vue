<template>
  <div id="cet-home">
    <div class="home-body">
      <HomeTimer></HomeTimer>
      <HomePlan></HomePlan>
      <div class="cet-menu cet-history">开发中</div>
      <div class="cet-menu cet-practice">待开发</div>
      <div class="cet-menu cet-collect">待开发</div>
      <div class="cet-menu cet-render">待开发</div>
    </div>
  </div>
</template>

<script>
  import {home} from "../../network/home";
  import HomeTimer from "./HomeTimer";
  import HomePlan from "./HomePlan";
  export default {

  components: {
    HomeTimer,
    HomePlan
  },

  created() {
    home(store.state.user_name)

  },


}
</script>

<style>
#cet-home{
  height: 100%;
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  background-image: url(../../assets/img/common/cetwine_bg.jpg);
  background-size: cover;
}
 .home-body{
  width: 90%;
  height: 80%;
  display: flex;
  align-self: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;


}
.home-body .cet-menu{
  width: 40%;
  height: 30%;
  background-color: #ffffff;
  opacity: .6;
  margin: 5px;
  box-shadow:1px 1px 3px  #666666;
  display: flex;
  flex-direction: column;
  font-size: 5vw;
  font-weight: bold;
  text-align: center;
  color: #666666;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

}
.home-body .cet-menu div{
  margin: 4px 0;

}

</style>
