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
      store.state.login_day = load_data.login_day
      store.state.user_today_plan = load_data.today_plan
      store.state.user_total_plan = load_data.total_plan
      store.state.user_goals = load_data.goals
      store.state.word_amount = load_data.word_amount

    })
    .catch(function (err) {

  })

}
