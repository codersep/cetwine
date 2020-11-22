<template>
  <div class="cet-menu cet-plan">
    <div class="user-day">第{{$store.state.login_day}}天</div>
    <div class="user-num-text">今日已记:{{$store.state.user_today_plan}}</div>
    <div class="user-num">总共已记:{{$store.state.user_total_plan-1}}</div>
    <div class="amount">单词总数:{{$store.state.word_amount}}</div>

  </div>
</template>

<script>
  export default {
    name: "CetPlan"

  }
</script>

<style scoped>

</style>
