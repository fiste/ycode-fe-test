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
        <Icon name="ycode-stroke" color="PureWhite" />
      </a>

      <div class="flex flex-1 justify-center">
        <button
          class="w-1/6 py-2 my-5 flex justify-center justify-self-center items-center self-center rounded-md  text-white focus:outline-none"
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

import Icon from "./Icon.vue";
import PlusIcon from "./PlusIcon.vue";

export default {
  components: {
    Icon,
    PlusIcon,
  },

  methods: {
    ...mapActions({
      createLayer: "layer/createLayer",
    }),

    defaultLayer() {
      const layer = {
        id: Date.now(),
        text: "Add some text",
        selected: false,
        design: [
          {
            name: "font",
            list: ["arial", "helvetica", "verdana"],
            selected: "arial",
          },
          {
            name: "align",
            list: ["left", "center", "right"],
            selected: "left",
          },
          {
            name: "size",
            list: ["sm", "base", "lg"],
            selected: "sm",
          },
          {
            name: "color",
            list: ["current", "black", "white"],
            selected: "current",
          },
        ],
      };

      return layer;
    },
  },
};
</script>
