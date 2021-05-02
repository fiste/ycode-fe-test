<template>
  <aside
    id="right-panel"
    class="relative bg-gray-600 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
  >
    <header
      class="text-white text-xs font-medium tracking-wide flex justify-between items-center mb-3 p-3"
    >
      <div class="flex items-center leading-5 py-px text-gray-300">Design</div>
    </header>
    <div class="flex flex-col p-3" v-if="layerForEdit">
      <h3 class="text-white mb-5 text-base">
        Selected layer: {{ layerForEdit.name }}
      </h3>
      <div
        class="flex flex-grow items-center mb-3"
        v-for="(item, i) in layerForEdit.design"
      >
        <DesignOption
          :layerDesign="item"
          :layerForEditDesign="layerForEdit.design"
          :editLayerDesign="editLayerDesign"
        />
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
import { mapActions } from "vuex";

import DesignOption from "@/components/design/DesignOption.vue";

import {
  LAYER_MODULE,
  DELETE_LAYER,
  EDIT_LAYER
} from "@/consts/Consts";

export default {
  name: "Design",

  components: {
    DesignOption,
  },

  props: {
    layers: {
      default: [],
    },
    selectedLayer: {
      default: null,
    },
  },

  data() {
    return {
      layerForEdit: {
        design: [],
        name: "",
      },
    };
  },

  mounted() {
    this.layerForEdit = this.selectedLayer;
  },

  watch: {
    selectedLayer(newLayer) {
      this.layerForEdit = newLayer;
    },
  },

  methods: {
    ...mapActions({
      deleteLayer: `${LAYER_MODULE}/${DELETE_LAYER}`,
      editLayer: `${LAYER_MODULE}/${EDIT_LAYER}`,
    }),

    deleteSelectedLayer() {
      this.deleteLayer(this.layers.indexOf(this.selectedLayer));
    },

    editLayerDesign(layerDesign) {
      this.editLayer(layerDesign);
    },
  },
};
</script>
