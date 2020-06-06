import Vuex from 'vuex';
import user from './module/user';
import app from './module/app';
export default Vuex.createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    app,
  },
});
