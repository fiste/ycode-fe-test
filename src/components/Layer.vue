<template>
  <div
    :class="[
      `layer-${layer.id} group flex my-2 p-2 border-2 border-gray-800 hover:border-blue-400`,
      layer.class,
      { 'border-blue-400': layer.selected },
    ]"
    @click="selectLayer(layer.id)"
  >
    <p class="flex-1 p-2">{{ layer.text }}</p>

    <div class="flex-2">
      <button
        :class="[
          'p-2 mr-2 items-center justify-center rounded-md text-white hover:bg-blue-400 transform motion-safe:hover:scale-110',
          { 'bg-gray-800': layer.selected },
        ]"
      >
        Edit
      </button>
      <button
        :class="[
          'p-2 mr-2 items-center justify-center rounded-md text-white hover:bg-blue-400 transform motion-safe:hover:scale-110',
          { 'bg-gray-800': layer.selected },
        ]"
      >
        Delete
      </button>
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

  methods: {
    ...mapActions({
      selectLayer: "layer/selectLayer",
    }),
  },
};
</script>
