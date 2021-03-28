import demoApi from '@/api/demo.js';

const state = {
  message_1: '',
  message_2: '',
  message_3: ''
};

const mutations = {
  setMessage1: (state, message) => {
    state.message_1 = message;
  },
  setMessage2: (state, message) => {
    state.message_2 = message;
  },
  setMessage3: (state, message) => {
    state.message_3 = message;
  }
};

const actions = {
  setMessage({ commit }, message) {
    return new Promise(resolve => {
      demoApi.getRandomuserData(1).then(response => {
        commit('setMessage3', message);
        console.log(`response: ${response.data.results[0].phone}`);
        resolve('resolve');
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
