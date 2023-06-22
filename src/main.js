import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex';
// import { createStore } from 'vuex'
Vue.use(Vuex);
Vue.config.productionTip = false

export default new Vuex.Store({
  state() { 
    return {
      customers: 'Silvia'
    } 
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
