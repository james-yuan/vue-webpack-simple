import Vue from 'vue';
import Index from '../components/index.vue';
import First from '../components/first.vue';
import Second from '../components/second.vue';
import Jsonp from '../components/jsonp.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import '../style/common.scss';


/*dom create*/
/*const root = require('./root');
document.querySelector("#root").appendChild(root());*/


Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)

new Vue({
 el: '#app',
 template: '<Index/>',
 components: { Index }
 })

/*const app = new Vue({
    router: router,
    render: h => h(Index)
}).$mount('#app')*/

// 构建选项 https://router.vuejs.org/zh/api/#routes
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Index
        },
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
