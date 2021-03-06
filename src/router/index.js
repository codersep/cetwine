import VueRouter from 'vue-router'
import Vue from "vue"

const Home = () => import('../views/home/Home.vue')  //懒加载
const About = () => import('../views/about/About.vue')
const Dict = () => import('../views/dict/Dict.vue')
const Login = () => import('../views/login/Login')

// import Home from "../views/home/Home";
// import About from "../views/about/About";
// import Dict from "../views/dict/Dict";
// import Login from "../views/login/Login";
Vue.use(VueRouter)  // 安装路由

// 解决路由重复跳转的问题
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path:'',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,

  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/dict',
    component: Dict,
    beforeEnter: (to, from, next) => {

      next()
    }
  },
  {
    path: '/about',
    component: About
  }
]


const router = new VueRouter({
  routes,
  // mode: 'hash'
  // base: '/history',
  mode: 'history',
})

import store from "../store";
import {home} from "../network/home";
import {get_word_simple} from "../network/word_simple";

router.beforeEach((to, from, next) => {
  store.state.is_login = sessionStorage.getItem('isLogin')
  store.state.user_name = sessionStorage.getItem('username')


  store.state.login_day = sessionStorage.getItem('login_day')
  store.state.user_total_plan = sessionStorage.getItem('total_plan')
  store.state.user_today_plan = sessionStorage.getItem('today_plan')
  store.state.word_amount = sessionStorage.getItem('word_amount')
  store.state.user_goals = sessionStorage.getItem('user_goals')


  if (to.path === '/login') {
    if (store.state.is_login){
      router.replace('/home')
    }
    next()
  }
  else {
    if (store.state.is_login == null || store.state.is_login == false) {
      router.replace('/login')
      store.state.msg_color = '#ff4444'

      next();
    } else {

      next();
    }
  }
});

export default router

