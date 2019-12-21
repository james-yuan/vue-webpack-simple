import Vue from 'vue';
import router from './router.js';
import '../style/common.scss';
import Index from '../components/index.vue';
import x2js from 'x2js' //xml数据处理插件


Vue.config.debug = true
Vue.prototype.$x2js = new x2js() //创建x2js对象，挂到vue原型上

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


