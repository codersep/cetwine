import {request} from "./request";
import store from '../store'  //引用vuex的属性
import router from "../router";

export function login(username,userpwd){
  request(
    {
      url: '/login',
      method:'post',
      params: {
        'username':username,
        'userpwd':userpwd
      }
    })
    .then(function (res) {

    let load_data = res.data

    if (load_data.code == 200){


      sessionStorage.setItem('username',load_data.username)
      sessionStorage.setItem('isLogin',true)

      store.state.msg_color = 'green'
      store.state.login_msg = load_data.message

      setTimeout(function () {
        router.replace('/home')
        store.state.login_msg = ''
      },500)

    }else {
      store.state.msg_color = '#ff4444'
      store.state.login_msg = load_data.message
    }

  }).catch(function (err) {

    console.log(err)

  })
}
