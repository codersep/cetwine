import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)


// 创建对象
const store = new Vuex.Store({
  state: {
    status: false  // 侧边栏状态 false为关 ，true为开
  },
  mutations: {
    // 展开侧边栏方法
    rightmove(state){
      state.status = true
      console.log(state.status);
    },
    // 关闭侧边栏方法
    leftmove(state){
      state.status = false
      console.log(state.status);

    }
  }
})

export default store