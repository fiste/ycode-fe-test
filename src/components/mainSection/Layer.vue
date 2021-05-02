<template>
  <div
    :class="[
      `layer-${layer.id} group flex relative my-3 p-2 border-2 border-gray-800 bg-gray-400 text-white hover:border-green-500`,
      layer.class,
      { 'border-green-500': layer.selected },
    ]"
    @click="selectLayer(layer.id)"
    @dblclick="turnOnEditMode"
  >
    <span
      v-show="layer.selected"
      :class="[
        `text-white text-xs absolute  -left-0.5 p-1 bg-green-500`,
        { '-top-2': !layer.name, '-top-6': layer.name },
      ]"
      >{{ layer.name }}</span
    >
    <div
      :class="
        `flex-1 p-2 h-9 font-${getDesignOptions(
          'font'
        )} text-${getDesignOptions('align')} text-${getDesignOptions(
          'size'
        )} text-${getDesignOptions('color')} cursor-text`
      "
      v-show="!editMode"
    >
      {{ layer.text }}
    </div>

    <div
      :class="
        `w-1/4 flex flex-1 self-center font-${getDesignOptions(
          'font'
        )} text-${getDesignOptions('align')} text-${getDesignOptions(
          'size'
        )} text-${getDesignOptions('color')} `
      "
      v-show="editMode"
    >
      <input
        v-model="layer.text"
        class="editLayer flex flex-1 p-2 bg-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        ref="editLayer"
        @blur="saveEditChanges(layer.text)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import { LAYER_MODULE, SELECT_LAYER, EDIT_LAYER_TEXT } from "@/consts/Consts";

export default {
  name: "Layer",

  props: {
    layer: {
      default: null,
    },
  },

  data() {
    return {
      editMode: false,
    };
  },

  methods: {
    ...mapActions({
      selectLayer: `${LAYER_MODULE}/${SELECT_LAYER}`,
      editLayerText: `${LAYER_MODULE}/${EDIT_LAYER_TEXT}`,
    }),

    turnOnEditMode() {
      if (!this.editMode) {
        this.editMode = true;
        this.$nextTick(() => {
          this.$refs.editLayer.focus();
        });
      }
    },

    saveEditChanges(text) {
      this.editLayerText(text);
      this.editMode = false;
    },

    getDesignOptions(option) {
      return this.layer.design.find((item) => item.name === option).selected;
    },
  },
};
</script>
