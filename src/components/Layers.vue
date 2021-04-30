<template>
  <aside
    id="right-panel"
    class="relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
  >
    <header
      class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 mb-5"
    >
      <div class="flex items-center leading-5 py-px">Layers</div>
    </header>

    <div v-for="(layer, i) in layers" :key="layer.id">
      <div
        :class="[
          'text-white text-sm flex justify-between items-center p-3 hover:bg-white hover:text-gray-800',
          { 'bg-white text-gray-800': layer.selected },
        ]"
        @click="selectLayer(layer.id)"
      >
        Layer {{ i }}
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

  computed: mapState({
    layers: (state) => state.layer,
  }),

  methods: {
    ...mapActions({
      selectLayer: "layer/selectLayer",
    }),
  },
};
</script>
