<template>
  <div class="cet-menu cet-timer">
    <div class="cet-msg">距离考试时间</div>
    <div class="time-day">还有：{{day}}天</div>
    <div class="time-hms">{{hour}}时{{minute}}分{{second}}秒</div>
  </div>
</template>

<script>
  import moment from "moment";

  export default {
    name: "CetTimer",
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

<style scoped>
  .cet-timer div{

  }

</style>
