<template>
  <nav
    class="flex justify-between bg-gray-500 border-b border-gray-600 text-white relative"
    id="nav-bar"
  >
    <div class="flex-1 items-center flex justify-between">
      <a
        href="/"
        class="p-3 h-full group flex items-center justify-start border-r border-gray-600"
      >
        <Icon name="ycode-stroke" />
      </a>

      <div class="flex flex-1 justify-center">
        <button
          class="w-1/6 py-2 my-5 flex justify-center justify-self-center items-center self-center rounded-md  text-white focus:outline-none hover:scale-105 focus:hover:text-green-500 transition duration-200 ease-in-out transform"
          @click="createLayer(defaultLayer())"
        >
          <PlusIcon class="mr-2" size="14" /> Add layer
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

import Icon from "@/components/common/icons/Icon.vue";
import PlusIcon from "@/components/common/icons/PlusIcon.vue";

import { defaultLayer } from "@/utils/CommonUtil.js"

import {
  LAYER_MODULE,
  CREATE_LAYER
} from "@/consts/Consts";

export default {
  name: "NavBar",

  components: {
    Icon,
    PlusIcon
  },

  props: {
    layers: {
      default: null
    },
  },

  methods: {
    ...mapActions({
      createLayer: `${LAYER_MODULE}/${CREATE_LAYER}`,
    }),

    defaultLayer
  },
};
</script>
