<template>
  <div id="index">
    <h1>{{ msg }}</h1>
    <img src="../img/logo.png">
    <input type="text" v-model="msg">
  </div>
</template>

<script>

import getData from '../js/util';

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
     async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  }
}
</script>

<style lang="scss">
#index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}
</style>