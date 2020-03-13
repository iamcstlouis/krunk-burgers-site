import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testTitle: ''
  },
  mutations: {
    passingTitle (state, n) {
      state.testTitle = n
    }
  },
  actions: {},
  modules: {}
});
