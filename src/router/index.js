import Vue from "vue";
import Router from "vue-router";


const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')

Vue.use(Router);

export default new Router({
  mode: process.env.NODE_ENV === 'development' ? '' : 'history',
  base: process.env.NODE_ENV === 'development' ? '' : '/web/',
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },{
      path: "/about",
      name: "About",
      component: About,
    },

  ]
})