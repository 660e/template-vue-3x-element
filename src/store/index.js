import { createStore } from 'vuex';

import vuexModules from './modules/vuex.js';

import getters from './getters.js';

export default createStore({
  modules: {
    vuex: vuexModules
  },
  getters
});
