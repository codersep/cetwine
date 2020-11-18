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

    <span class="name-err">{{message}}</span>

    <div class="cet-btn">
      <div @click="flag && login_click()" :class="{btnActive:flag}">登录</div>
      <div @click="flag && logon_click()" :class="{btnActive:flag}">注册</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "LoginBody",
    data() {
      return {
        cet_pwd: '',
        cet_name: '',
        message: '',
        flag: false
      }
    },
    methods: {
      valueChange(){
        if(!/^[a-zA-Z0-9]{6,12}$/.test(this.cet_name)){
          this.message = '账号需为6-12位数字或字母'
          this.flag = false
        }
        else {
          if(!/^[a-zA-Z0-9]{6,12}$/.test(this.cet_pwd)){
            this.message = '密码需为6-12位数字或字母'
            this.flag = false
          }else {
            this.message = ''
            this.flag = true
          }
        }
      },
      name_is_null(){
        if(this.cet_name === ''){
          this.message = '账号不能为空'
          this.flag = false
        }
      },
      pwd_is_null(){

        if(this.cet_pwd === ''){
          this.message = '密码不能为空'
          this.flag = false
        }
      },
      login_click(){
        alert('登录')
      },
      logon_click(){
        alert('注册')
      }
    }
  }
</script>

<style>
  .cet-login-body{
    width: 60vw;
    margin: 90px auto 0;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 1px 1px 5px #404040;
    padding: 20px 10px;
  }
 .cet-login-body .cet-title{
    color: var(--color-text);
    font-size: 30px;
    font-weight: normal;
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
  }
.cet-login-body .cet-icon{
    width: 35%;
    border-radius: 50%;
    margin: 0 auto 10px;
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
    color: #ff4444;
    margin-bottom: 10px;
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
    padding-top: 10px;
  }
  .cet-login-body .cet-btn div{
    height: 100%;
    width: 60px;
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
