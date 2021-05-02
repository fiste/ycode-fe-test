<template>
  <aside
    id="right-panel"
    class="relative bg-gray-600 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
  >
    <header
      class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 mb-3"
    >
      <div class="flex items-center leading-5 py-px text-gray-300">Layers</div>
    </header>

    <template v-for="(layer, i) in layers" :key="layer.id">
      <SingleLayer
        :layer="layer"
        :selectLayer="selectLayer"
        :saveEditChanges="saveEditChanges"
      />
    </template>
  </aside>
</template>

<script>
import { mapActions } from "vuex";

import SingleLayer from "@/components/layers/SingleLayer.vue";
import RectangleIcon from "@/components/common/icons/RectangleIcon.vue";
import TextIcon from "@/components/common/icons/TextIcon.vue";

import { LAYER_MODULE, SELECT_LAYER, EDIT_LAYER_NAME } from "@/consts/Consts";

export default {
  name: "Layers",

  components: {
    SingleLayer,
    RectangleIcon,
    TextIcon,
  },

  props: {
    layers: {
      default: null,
    },
  },

  methods: {
    ...mapActions({
      selectLayer: `${LAYER_MODULE}/${SELECT_LAYER}`,
      editLayerName: `${LAYER_MODULE}/${EDIT_LAYER_NAME}`,
    }),

    saveEditChanges(name) {
      this.editLayerName(name);
    },
  },
};
</script>
