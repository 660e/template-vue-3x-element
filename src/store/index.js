import { createStore } from 'vuex';

import permissionModules from './modules/permission.js';
import getters from './getters.js';

export default createStore({
  modules: {
    permission: permissionModules
  },
  getters
});
