import Vue from 'vue'
import Vuex from 'vuex'
// import recommend from "@/store/recommend";
import screening from "@/store/screening";
import recommend from "@/store/recommend";
import cinema from "@/store/cinema";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    recommend,
    screening,
    cinema
  }
})
