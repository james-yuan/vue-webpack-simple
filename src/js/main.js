import Vue from 'vue';
import router from './router.js';
import '../style/common.scss';
import Index from '../components/index.vue';


Vue.config.debug = true

const app = new Vue({
    router: router,
    render: h => h(Index),
}).$mount('#app')


/*new Vue({
 el: '#app',
 template: '<Index/>',
 components: { Index }
 })*/


/*dom create*/
/*const root = require('./root');
document.querySelector("#root").appendChild(root());*/


