import Vue from 'vue'
import App from './App.vue'

// Vue.directive('custom', {
//   bind(el, binding, vnode) {
//     var delay = 0;
//     if (binding.modifiers['delay']) {
//       delay = 3000;
//     }

//     setTimeout(() => {
//       if (binding.arg == 'background') {
//         el.style.backgroundColor = binding.value;
//       } else {
//         el.style.color = binding.value;
//       }
//     }, delay);
//   }
// });
Vue.filter('to-uppercase', function ( value ) {
  return value.toUpperCase();
});
new Vue({
  el: '#app',
  render: h => h(App)
})
