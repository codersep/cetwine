<template>
  <div id="cet-home">
    <MainNavBar></MainNavBar>
    <div class="home-body">
      <div class="cet-menu cet-timer">
        <div class="cet-msg">距离考试时间</div>
        <div class="time-day">还有：{{day}}天</div>
        <div class="time-hms">{{hour}}时{{minute}}分{{second}}秒</div>
      </div>
      <div class="cet-menu cet-plan"></div>
      <div class="cet-menu cet-history"></div>
      <div class="cet-menu cet-practice"></div>
      <div class="cet-menu cet-collect"></div>
      <div class="cet-menu cet-render"></div>
    </div>
  <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  import MainNavBar from "../../components/content/mainnavbar/MainNavBar";
  import MainTabBar from "../../components/content/maintabbar/MainTabBar";
  import moment from 'moment/moment'
export default {
  data(){

    return{
      cet_Time:'2020/12/12 08:00:00',
      timer: '',
      day: 0,
      hour:0,
      minute:0,
      second:0,
    }
  },
  components: {
    MainNavBar,
    MainTabBar
  },
  methods:{
    start(){
      let endTime = this.transformTime(this.cet_Time) //获取结束时间戳

      let Time2 = moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
      let nowTime = this.transformTime(Time2) //获取当前时间戳

      let finalTime = (endTime - nowTime) / 1000

      let d = Math.floor(finalTime / (24*3600))
      let h = Math.floor((finalTime - d * 24 * 3600) / 3600)
      let m = Math.floor((finalTime - d * 24 * 3600 - h * 3600) / 60)
      let s = finalTime - d*24*3600 - h * 3600 - m * 60

      this.day = d
      this.hour = h
      this.minute = m
      this.second = s
      // console.log(finalTime)
    },

    transformTime(t){
      //利用moment工具生成date对象
      let date = moment(t).toDate()
      //变成秒级时间戳
      return moment(date).valueOf()
    }

  },
  mounted() {
    this.timer = setInterval(this.start,1000)
    // console.log('---------')
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }

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
  background-image: url(../../assets/img/home/home_bg.jpg);
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
}
.home-body .cet-timer{
  text-align: center;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}
.home-body .cet-timer div{
  margin: 4px 0;
  font-weight: bold;
  font-size: 5vw;

}
.home-body .cet-timer .cet-msg{
  width: 100%;

}

#cet-home .home-body .cet-timer .time-day{
  width: 100%;

}
#cet-home .home-body .cet-timer .time-hms{
  width: 100%;
  text-align: center;

}

</style>
