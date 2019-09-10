import Vue from "vue";
import Vuex from "vuex";
import business from './modules/business';
export const CHANGE_USERINFO = 'CHANGE_USERINFO';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    appInfo: {},
  },
  mutations: {
    [CHANGE_USERINFO] (state, obj) {
      state.userInfo = obj
    },
    
  },
  actions: {
    changeUserInfo ({ commit }, obj) {
      commit(CHANGE_USERINFO, obj)
    }
   
  },
  modules: {
    business,
  }
});
