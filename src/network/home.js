import {request} from "./request";
import store from "../store";
export function home(username) {
  request({
    url: '/home',
    method: 'get',
    params: {
      'username': username
    }
  })
    .then(function (res) {
      let load_data = res.data
      sessionStorage.setItem('login_day',load_data.login_day)
      sessionStorage.setItem('today_plan',load_data.today_plan)
      sessionStorage.setItem('total_plan',load_data.total_plan)
      sessionStorage.setItem('user_goals',load_data.goals)
      sessionStorage.setItem('word_amount',load_data.word_amount)


    })
    .catch(function (err) {

  })

}
