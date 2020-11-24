import {request} from "./request";
import store from "../store";
export function get_word_simple(total_plan) {
  request({
    url:'/word/info',
    method:'get',
    params:{
      'total_plan':total_plan
    }
  })
    .then(function (res) {
    let load_data = res.data
      store.state.word_data = load_data

    }).catch(function (err) {
    console.log(err);

  })

}
