<template>
  <main class="h-screen w-screen overflow-hidden bg-white flex flex-col">
    <NavBar />

    <section class="relative flex flex-1 flex-row overflow-hidden">
      <Layers />
      <section
        class="w-full h-full relative z-10 scrollbar text-center text-none overflow-auto"
      >
        <button
          class="w-1/4 py-2 my-5 items-center justify-center rounded-md bg-gray-800 text-white"
          @click="createLayer(defaultLayer())"
        >
          Add layer
        </button>

        <template v-for="(layer, i) in layers" :key="layer.id">
          <Layer :layer="layer" />
        </template>
      </section>

      <Design />
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Design from "./components/Design.vue";
import Layers from "./components/Layers.vue";
import Layer from "./components/Layer.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    Design,
    NavBar,
    Layers,
    Layer,
  },

  computed: {
    ...mapState({
      layers: (state) => state.layer,
    }),
  },

  methods: {
    ...mapActions({
      createLayer: "layer/createLayer",
    }),

    defaultLayer() {
      const layer = {
        id: Date.now(),
        text: "Add some text",
        class: "",
        selected: false,
      };

      return layer;
    },
  },
};
</script>
