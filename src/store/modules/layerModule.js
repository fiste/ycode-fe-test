function getDefaultState() {
  return [];
}

const state = getDefaultState();

const getters = {
  getCurrentLayers(state) {
    return state;
  }
};

const actions = {
  createLayer: (context, layer) => {
    context.commit("createLayer", layer);
  },
  selectLayer: (context, layerId) => {
    context.commit("selectLayer", layerId);
  },
  deleteLayer: (context, layerPosition) => {
    context.commit("deleteLayer", layerPosition);
  },
  editLayerText: (context, layerText) => {
    context.commit("editLayerText", layerText);
  },
  editLayer: (context, newLayer) => {
    context.commit("editLayer", newLayer);
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
    state.forEach((layer) => (layer.selected = false));
    state.find((layer) => layer.id === payload).selected = true;
  },
  deleteLayer(state, payload) {
    state.splice(payload, 1);
  },
  editLayerText(state, payload) {
    state.find((layer) => layer.selected).text = payload;
  },
  editLayer(state, payload, y) {
    state.find((layer) => layer.selected).design = payload;
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
