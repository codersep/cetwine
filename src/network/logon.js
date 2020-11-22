import {request} from "./request";
import store from '../store'  //引用vuex的属性
import {login} from "./login";

export function logon(username,userpwd){
  request(
    {
      url: '/logon',
      method:'post',
      params: {
        'username':username,
        'userpwd':userpwd
      }
    }
  ).then(function (res) {

    let load_data = res.data
    console.log(load_data);
    if(load_data.code == 201){

      store.state.msg_color = 'green'
      store.state.login_msg = load_data.message
      setTimeout(
        function () {
          login(username,userpwd) //注册后延迟1秒自动登录
        },500)
    }else {
      store.state.login_msg = load_data.message
    }

  }).catch(function (err) {

    console.log(err)

  })
}
