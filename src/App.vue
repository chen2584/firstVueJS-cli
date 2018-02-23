<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    App.vue here
    <router-link to="/">HelloWorld</router-link>
    <router-link to="/chen">Chen</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
