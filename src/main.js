import Vue from 'vue'
import Calculadora from './Calculadora.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Calculadora),
}).$mount('#app')
