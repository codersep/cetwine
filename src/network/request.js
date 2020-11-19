import axios from 'axios'
//最终方案
export  function request(config) {


  // 1. 创建axios实例
    const instance = axios.create({

      baseURL:'http://47.111.81.205/',
      timeout: 5000
    })
  //  发送网络请求
  return instance(config)
}


//方法二：
// export  function request(config) {
//   // 1. 创建axios实例
//   return new  Promise(function(resolve,reject){
//     const instance = axios.create({
//       baseURL:'http://47.111.81.205/:8080',
//       timeout: 5000
//     })
//   //  发送网络请求
//     instance(config)
//       .then(function (res) {
//         resolve(res)
//       })
//       .catch(function (err) {
//         reject(err)
//       })
//   })
// }

//方法一：
// export  function request(config, success, failure) {
//   // 1. 创建axios实例
//   const instance = axios.create({
//     baseURL:'http://47.111.81.205:8080',
//     timeout: 5000
//
//   })
//
//   instance(config)
//     .then(function (res) {
//     // console.log(res)
//     success(res)
//   })
//     .catch(function (err) {
//       failure(err)
//     })
// }
