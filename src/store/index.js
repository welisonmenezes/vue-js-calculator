import Vuex from "vuex";
import Vue from "vue";
import appModule from "./appModule";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        appModule,
    },
});
