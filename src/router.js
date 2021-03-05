import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: () =>  import ('@/views/Index'),
        children: [
            // Home
            {
                name: 'Home',
                path: '',
                component: () => import ('@/views/Home'),
            },
            // Watch
            {
                name: 'Watch',
                path: '/watch',
                component: () => import ('@/views/Watch'),
                props: (route) => ({ video: route.query.v })
            },
            // Channel
            {
                name: 'Channel',
                path: '/channel/:c/:t',
                component: () => import ('@/views/Channel'),
                props: (route) => ({ 
                    channel: route.params.c,
                    tab: route.params.t
                }),
            },
        ],
    }, ],
})