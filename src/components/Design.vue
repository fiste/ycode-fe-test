<template>
  <aside
    id="right-panel"
    class="relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
  >
    <header
      class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0"
    >
      <div class="flex items-center leading-5 py-px">Design</div>
    </header>
    <div class="flex flex-col p-3" v-if="layerForEdit">
      <div class="flex flex-grow" v-for="(item, i) in layerForEdit.design">
        <label class="text-white" for="option">Choose option:</label>
        <select
          name="option"
          id="option"
          v-model="item.selected"
          @input="editLayerDesign(layerForEdit.design)"
        >
          <template v-for="(option, i) in item.list" :key="i">
            <option :selected="option === item.selected" :value="`${option}`">{{
              option
            }}</option>
          </template>
        </select>
      </div>

      <div class="flex flex-grow mt-3">
        <button
          :class="[
            'p-2 mr-2 items-center justify-center rounded-md text-white bg-red-500 transition duration-200 ease-in-out transform hover:scale-110 focus:outline-none',
          ]"
          @click="deleteSelectedLayer()"
        >
          Delete
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Icon from "./Icon.vue";

export default {
  components: {
    Icon,
  },

  data() {
    return {
      layerForEdit: {
        design: [],
      },
    };
  },

  mounted() {
    this.layerForEdit = this.selectedLayer;
  },

  computed: {
    selectedLayer() {
      return this.layers().find((layer) => layer.selected);
    },
  },

  watch: {
    selectedLayer(newLayer) {
      this.layerForEdit = newLayer;
    },
  },

  methods: {
    ...mapState({
      layers: (state) => state.layer,
    }),

    ...mapActions({
      deleteLayer: "layer/deleteLayer",
      editLayer: "layer/editLayer",
    }),

    deleteSelectedLayer() {
      this.deleteLayer(this.layers().indexOf(this.selectedLayer));
    },

    editLayerDesign(layerDesign) {
      this.editLayer(layerDesign);
    },
  },
};
</script>

<style></style>
