<template>
  <main class="h-screen w-screen bg-white flex flex-col">
    <NavBar :layers="layers" />

    <section class="relative flex flex-1 flex-row">
      <Layers :layers="layers" />
      <MainSection :layers="layers" />
      <Design :layers="layers" :selectedLayer="selectedLayer" />
      <Tip :layers="layers" />
    </section>
  </main>

  <div
    class="please-rotate fixed z-50 top-0 right-0 bottom-0 left-0 hidden portraitMobile:flex flex-col items-center justify-center bg-gray-600 text-gray-300 text-sm"
  >
    <LandscapePhoneIcon className="text-gray-300" />
    <span>Please rotate your device for better user experience</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Design from "@/components/design/Design.vue";
import Layers from "@/components/layers/Layers.vue";
import MainSection from "@/components/mainSection/MainSection.vue";
import NavBar from "@/components/common/layout/NavBar.vue";
import Tip from "@/components/common/helpers/Tip.vue";
import LandscapePhoneIcon from "@/components/common/icons/LandscapePhoneIcon.vue";

import {
  LAYER_MODULE,
  GET_CURRENT_LAYERS,
  GET_CURRENT_SELECTED_LAYER,
} from "@/consts/Consts";

export default {
  name: "Home",

  components: {
    Design,
    NavBar,
    Layers,
    MainSection,
    LandscapePhoneIcon,
    Tip
  },

  computed: {
    ...mapGetters({
      layers: `${LAYER_MODULE}/${GET_CURRENT_LAYERS}`,
      selectedLayer: `${LAYER_MODULE}/${GET_CURRENT_SELECTED_LAYER}`,
    }),
  },
};
</script>
