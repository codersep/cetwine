<template>
  <div class="cet-login-body">

    <img class="cet-icon" src="../../assets/img/navbar/sq_icon.jpeg" alt="">
    <h1 class="cet-title">CetWine</h1>

    <div class="cet-login-name">
      <label for="username">账号: </label>
      <input type="text" id="username" v-model="cet_name" @blur="name_is_null" @input="valueChange">
    </div>

    <div class="cet-login-pwd">
      <label for="userpwd">密码: </label>
      <input type="password" id="userpwd" v-model="cet_pwd" @blur="pwd_is_null" @input="valueChange">
    </div>

    <span class="usermsg" :style={color:$store.state.msg_color}>{{$store.state.login_msg}}</span>

    <div class="cet-btn">
      <div @click="flag && login_click()" :class="{btnActive:flag}">登录</div>
      <div @click="flag && logon_click()" :class="{btnActive:flag}">注册</div>
    </div>

  </div>
</template>

<script>
  import {login} from "../../network/login"
  import {logon} from "../../network/logon"

  export default {

    name: "LoginBody",
    data() {
      return {
        cet_pwd: '',
        cet_name: '',
        flag: false
      }
    },
    methods: {
      valueChange(){
        if(!/^[a-zA-Z0-9]{6,12}$/.test(this.cet_name)){
          this.$store.state.login_msg = '账号需为6-12位数字或字母'
          this.flag = false
        }
        else {
          if(!/^[a-zA-Z0-9]{6,12}$/.test(this.cet_pwd)){
            this.$store.state.login_msg = '密码需为6-12位数字或字母'
            this.flag = false
          }else {
            this.$store.state.login_msg = ''
            this.flag = true
          }
        }
      },
      name_is_null(){
        if(this.cet_name === ''){
          this.$store.state.login_msg = '账号不能为空'
          this.flag = false
        }
      },
      pwd_is_null(){

        if(this.cet_pwd === ''){
          this.$store.state.login_msg = '密码不能为空'
          this.flag = false
        }
      },
      login_click(){

        login(this.cet_name,this.cet_pwd)

      },
      logon_click(){
        logon(this.cet_name,this.cet_pwd)
      }
    }
  }
</script>

<style>
  .cet-login-body{
    width: 60vw;
    height: 50vh;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 1px 1px 5px #404040;
    padding-top: 3vh;
    position: fixed;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    border-radius: 5px;

  }
 .cet-login-body .cet-title{
    color: var(--color-text);
    font-size: 30px;
    font-weight: normal;
    width: 100%;
    text-align: center;
    margin-bottom: 4vh;
  }
.cet-login-body .cet-icon{
    width: 35%;
    border-radius: 50%;
    margin: 0 auto 3%;
    display: block;
    box-shadow: 1px 2px 5px #404040;

  }
 .cet-login-body .cet-login-name,.cet-login-pwd{
    margin-bottom: 5px;
    text-align: center;

  }
.cet-login-body input{
  width: 120px;
  height: 20px;
  border: rgba(144, 144, 144, 0.5) 2px solid;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  color: #666666;
  border-radius: 5px;
  }
  .cet-login-body span{
    text-align: center;
    display: block;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
  }
 .cet-login-body label{
    color: #666;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
  }
 .cet-login-body .cet-btn{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 4vh;
  }
  .cet-login-body .cet-btn div{
    height: 100%;
    width: 30%;
    background-color: rgba(125, 125, 125, 0.8);
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    border: #8d8d8d solid 1px;
    color: #666666;


  }
  .cet-login-body .cet-btn .btnActive{
    background-color: rgba(239, 239, 239, 0.4);
  }
</style>
