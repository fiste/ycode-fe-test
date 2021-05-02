<template>
  <div
    :class="[
      `layer-${layer.id} group flex my-2 p-2 border-2 border-gray-800 hover:border-blue-400`,
      layer.class,
      { 'border-blue-400': layer.selected },
    ]"
    @click="selectLayer(layer.id)"
    @dblclick="turnOnEditMode"
  >
    <p
      :class="`flex-1 p-2 font-${getDesignOptions('font')} text-${getDesignOptions('align')} text-${getDesignOptions('size')} text-${getDesignOptions('color')}`"
      v-show="!editMode"
    >
      {{ layer.text }}
    </p>

    <div
      :class="`w-1/4 flex flex-1 self-center font-${getDesignOptions('font')} text-${getDesignOptions('align')} text-${getDesignOptions('size')} text-${getDesignOptions('color')} `"
      v-show="editMode"
    >
      <input
        v-model="layer.text"
        class="editLayer flex flex-1 p-2"
        ref="editLayer"
        @blur="saveEditChanges(layer.text)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
      selectLayer: "layer/selectLayer",
      editLayerText: "layer/editLayerText",
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
