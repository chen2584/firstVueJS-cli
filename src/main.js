import Vue from 'vue'
import App from './App.vue'
import Chen from './components/Chen.vue';
import HelloWorld from './components/HelloWorld.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/chen', component: Chen },
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app-container')
