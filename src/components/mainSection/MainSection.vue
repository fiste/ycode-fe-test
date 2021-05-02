<template>
  <section
    class="w-full h-full relative z-10 scrollbar text-center text-none overflow-auto bg-gray-900 px-7 py-5"
  >
    <template v-for="(layer, i) in layers" :key="layer.id">
      <Layer :layer="layer" :selectedLayer="selectedLayer" />
    </template>
  </section>
</template>

<script>
import Layer from "@/components/mainSection/Layer.vue";

export default {
  name: "MainSection",

  components: {
    Layer
  },

  props: {
    layers: {
      default: null
    },
    selectedLayer: {
      default: null
    }
  },
};
</script>
