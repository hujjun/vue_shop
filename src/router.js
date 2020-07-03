import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'
import home from './components/home.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/home', component: home }
  ]
})

//挂载路由守卫
// router.beforeEach((to,from,next)=>{
//     //to将要访问的路径
//     //form从哪个页面来
//     //将要去哪个页面
//     if(to.path =='/login') return next();
//     // 获取token
//     const tokenStr = window.sessionStorage.getItem("token");
//     if(!tokenStr) return next('/login');
//     next();
// })
export default router