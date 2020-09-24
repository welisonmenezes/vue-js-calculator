import Vue from "vue";
import Calculadora from "./Calculadora.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(Calculadora),
}).$mount("#app");
