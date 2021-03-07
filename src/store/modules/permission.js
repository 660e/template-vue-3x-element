import { asyncRoutes, constantRoutes } from '@/router';

function filter() {
  window.console.log(asyncRoutes); // TODO
  return constantRoutes.find(e => e.path === '/demo').children.map(e => e.path);
}

const state = {
  routes: filter()
};
const mutations = {};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
