import {request} from "./request";
import store from '../store'  //引用vuex的属性

export function login(username,userpwd){
  request(
    {
      url: '/login',
      method:'post',
      params: {
        'username':username,
        'userpwd':userpwd
      }
    }
  ).then(function (res) {

    let load_data = res.data
    console.log(load_data)
    console.log(typeof(load_data.code));
    if (load_data.code == 200){
      store.state.login_day = load_data.load_data
      store.state.user_name = load_data.username
      store.state.user_plan = load_data.plan
      store.state.user_goals = load_data.goals
      store.state.token = load_data.token
    }else{
      store.state.login_msg = load_data.message
    }

    console.log(store.state.login_msg);

  }).catch(function (err) {

    console.log(err)

  })
}
