import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-form-9ddf1-default-rtdb.firebaseio.com/data.json'
new Vue({
  el: '#app',
  render: h => h(App)
})
