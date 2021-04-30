function getDefaultState() {
  return [];
}

const state = getDefaultState();

const getters = {};

const actions = {
  createLayer: (context, layer) => {
    context.commit("createLayer", layer);
  },
  selectLayer: (context, layerId) => {
    context.commit("selectLayer", layerId);
  },
  resetState: (context) => {
    context.commit("resetState");
  },
};

const mutations = {
  createLayer(state, payload) {
    state.push(payload);
  },
  selectLayer(state, payload) {
    state.forEach(element => element.selected = false);
    state.find((item) => item.id === payload).selected = true;
  },
  resetState: (state) => {
    Object.assign(state, getDefaultState());
  },
};

export const layerModule = {
  namespaced: true,
  getters: getters,
  state: state,
  actions: actions,
  mutations: mutations,
};
