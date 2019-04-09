import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      component: (resolve) => require(['../views/Home/Home.vue'], resolve),
    },
    {
      // 当访问的路径不存在时，重定向到index
      path: '*',
      redirect: '/home'
    }
  ],
});
