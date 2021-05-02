<template>
  <main class="h-screen w-screen overflow-hidden bg-white flex flex-col">
    <NavBar :layers="layers" />

    <section class="relative flex flex-1 flex-row overflow-hidden">
      <Layers :layers="layers" />
      <MainSection :layers="layers" />
      <Design :layers="layers" :selectedLayer="selectedLayer" />
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import Design from "@/components/design/Design.vue";
import Layers from "@/components/layers/Layers.vue";
import MainSection from "@/components/mainSection/MainSection.vue";
import NavBar from "@/components/common/layout/NavBar.vue";

import {
  LAYER_MODULE,
  GET_CURRENT_LAYERS,
  GET_CURRENT_SELECTED_LAYER
} from "@/consts/Consts";

export default {
  name: "Home",

  components: {
    Design,
    NavBar,
    Layers,
    MainSection
  },

  computed: {
    ...mapGetters({
      layers: `${LAYER_MODULE}/${GET_CURRENT_LAYERS}`,
      selectedLayer: `${LAYER_MODULE}/${GET_CURRENT_SELECTED_LAYER}`
    })
  }
};
</script>
