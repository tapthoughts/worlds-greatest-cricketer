import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/battingODI',
      name: 'battingODI',
      component: () => import('./views/BattingODI.vue'),
    },
    {
      path: '/battingTest',
      name: 'battingTest',
      component: () => import('./views/BattingTest.vue'),
    },
    {
      path: '/bowlingODI',
      name: 'bowlingODI',
      component: () => import('./views/BowlingODI.vue'),
    },
    {
      path: '/bowlingTest',
      name: 'bowlingTest',
      component: () => import('./views/BowlingTest.vue'),
    },
    {
      path: '/conclusion',
      name: 'conclusion',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Conclusion.vue'),
    },
  ],
});
