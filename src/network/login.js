import {request} from "./request";


export function login(username,userpwd){


  request(

    {
      url: '/login',
      method:'post',
      params: {
        'username':username,
        'userpwd':userpwd
      },
      headers:{
        contentType: 'application/x-www-form-urlencoded'
      }
    }
  ).then(function (res) {
    console.log(res)
    return res.data
  }).catch(function (err) {
    console.log(err)
  })
}
