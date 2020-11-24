<template>
  <div class="side-bar-item">
    <img src="../../../assets/img/navbar/sq_icon.jpeg" alt="">
    <p class="username">{{$store.state.user_name}}</p>
    <ul class="side-bar-list">
      <li>历史</li>
      <li>设置</li>
      <li>关于</li>
      <li>退出</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .side-bar-item{
    width: 100%;
    height: 100%;
    background-image: url('../../../assets/img/sidebar/side_bar_bg.jpg');
    background-repeat: no-repeat;
    background-position:0 100%;
    background-size: cover;
    opacity: 0.8;
    overflow: hidden;

  }

  .side-bar-item img{
    height: 100px;
    border-radius: 50%;
    box-shadow:  2px 2px 7px #000000;
    display: block;
    margin: 15px auto 0;

  }
  .side-bar-item .side-bar-list{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .side-bar-item .username{
    text-align: center;
    margin: 10px;
    font-size: 23px;
    color: var(--color-text);
  }

  .side-bar-item .side-bar-list li{
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;
    line-height: 50px;
    color: var(--color-text);
  }
</style>
