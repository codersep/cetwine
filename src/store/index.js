import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)


// 创建对象
const store = new Vuex.Store({
  state: {
    status: false  ,// 侧边栏状态状态 false为关 ，true为开
    isnone: 'none',
    op: 0
  },
  mutations: {
    // 开启侧边栏
    sideOpen(state){
      state.status = true
      this.commit('maskOpen')
    },
    // 关闭侧边栏
    sideClose(state){
      state.status = false
      this.commit('maskClose')
    },

    maskOpen(state){
      state.isnone = 'block'
      setTimeout(function(){
        state.op = 0.5
      },10)
    },
    maskClose(state){
      state.op = 0
      setTimeout(function(){
        state.isnone = 'none'
      },500)
    }

  }
})

export default store
