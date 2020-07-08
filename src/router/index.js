import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/home-page.cmp.vue'
import toyApp from '@/views/toy-app.cmp.vue'
import toyDetails from '@/views/toy-details.cmp.vue'
import toyEdit from '@/views/toy-edit.cmp.vue'
import userProfile from '@/views/user-profile.cmp.vue'
import aboutUs from '@/views/about-us.cmp.vue'
import dashboard from '@/views/dashboard.cmp.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: homePage
    },
    {
        path: '/user',
        name: 'UserProfile',
        component: userProfile
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboard
    },
    {
        path: '/toy',
        name: 'Toy',
        component: toyApp
    },
    {
        path: '/toy/details/:id',
        name: 'ToyDetails',
        component: toyDetails
    },
    {
        path: '/toy/edit/:id?',
        name: 'ToyEdit',
        component: toyEdit
    },
    {
        path: '/about',
        name: 'About',
        component: aboutUs
    }
]

const router = new VueRouter({
    routes
})

export default router