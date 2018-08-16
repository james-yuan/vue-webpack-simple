<template>
    <div id="app">

        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="n in 5">{{ n }}</li>
        </ul>

        <firstcomponent></firstcomponent>
        <secondcomponent :newarr="toSecondData"></secondcomponent>

        <router-view></router-view>
        <router-link to="/first">Go to Foo</router-link>
        <router-link to="/second">Go to Bar</router-link>

    </div>
</template>

<script>

import Vue from 'vue';
import firstcomponent from './components/first.vue'
import secondcomponent from './components/second.vue'
import { Header, Button} from 'mint-ui';
import './style/style.css';


Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
export default {
    data () {
        return {
            msg: 'Hello World!',
            toSecondData:["aa","bb","cc"]
        }
    },
    components: { firstcomponent,secondcomponent  }
}
</script>

<style scoped>
.example {
    background: orange;
}
.mint-header{
    background-color: orange;
}
</style>