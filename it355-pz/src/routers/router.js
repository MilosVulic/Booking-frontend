import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/content/home/Home.vue'
import About from '../components/content/about/About.vue'
import HomeCustomer from '../components/content/home-customer/HomeCustomer.vue'
import HomeManager from '../components/content/home-manager/HomeManager.vue'
import ManagerServices from '../components/content/manager-services/ManagerServices.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/home-customer',
            name: 'home-customer',
            component: HomeCustomer
        },
        {
            path: '/home-manager',
            name: 'home-manager',
            component: HomeManager
        },
        {
            path: '/manager-services',
            name: 'manager-services',
            component: ManagerServices
        }
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})