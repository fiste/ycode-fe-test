import {
  RESET_STATE,
  CREATE_LAYER,
  SELECT_LAYER,
  DELETE_LAYER,
  EDIT_LAYER_TEXT,
  EDIT_LAYER_NAME,
  EDIT_LAYER,
} from "@/consts/Consts";

function getDefaultState() {
  return [];
}

const state = getDefaultState();

const getters = {
  getCurrentLayers(state) {
    return state;
  },
  getCurrentSelectedLayer(state) {
    return state.find((layer) => layer.selected);
  },
};

const actions = {
  createLayer: (context, layer) => {
    context.commit(CREATE_LAYER, layer);
  },
  selectLayer: (context, layerId) => {
    context.commit(SELECT_LAYER, layerId);
  },
  deleteLayer: (context, layerPosition) => {
    context.commit(DELETE_LAYER, layerPosition);
  },
  editLayerText: (context, layerText) => {
    context.commit(EDIT_LAYER_TEXT, layerText);
  },
  editLayerName: (context, layerName) => {
    context.commit(EDIT_LAYER_NAME, layerName);
  },
  editLayer: (context, newLayer) => {
    context.commit(EDIT_LAYER, newLayer);
  },
  resetState: (context) => {
    context.commit(RESET_STATE);
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
  editLayerName(state, payload) {
    state.find((layer) => layer.selected).name = payload;
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
