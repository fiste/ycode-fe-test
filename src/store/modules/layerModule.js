function getDefaultState() {
  return [];
}

const state = getDefaultState();

const getters = {};

const actions = {
  createLayer: (context, layer) => {
    context.commit('createLayer', layer)
  },
  resetState: (context) => {
    context.commit(RESET_STATE);
  }
};

const mutations = {
  createLayer (state, payload) {
    state.push(payload);
  },
  resetState: (state) => {
    Object.assign(state, getDefaultState());
  }
};

export const layerModule = {
  namespaced: true,
  getters: getters,
  state: state,
  actions: actions,
  mutations: mutations
};
