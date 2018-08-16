import Vue from "vue";
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import First from '../components/first.vue';
import Second from '../components/second.vue';
import Jsonp from '../components/jsonp.vue';

Vue.use(VueRouter)
Vue.use(VueResource)

// 构建选项 https://router.vuejs.org/zh/api/#routes
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        /*{
            path: '/',
            component: Index
        },*/
        {
            path: '/first',
            component: First
        },
        {
            path: '/second',
            component: Second
        },
        {
            path: '/jsonp',
            component: Jsonp
        }
    ]
})

export default router;
