<template>
  <div
    class="flex flex-col w-44 lg:w-52 fixed z-20 left-0 lg:left-2 bottom-0 lg:bottom-7 p-3 bg-gray-900 text-white text-xs lg:text-sm border border-green-500"
    v-if="!!layers.length && visible"
  >
    <header class="flex justify-between mb-3 lg:mb-5">
      <span class="">Info tip:</span>

      <button class="focus:outline-none" @click="closeTip">
        <Close />
      </button>
    </header>

    <p class="text-xs lg:text-sm leading-4 lg:leading-6">
      You can double click Layer to edit name/text
    </p>

    <div class="absolute -top-8 left-16 ">
      <Arrow size="30" />
    </div>

    <div class="absolute -top-7 left-28 transform rotate-30">
      <Arrow size="30" />
    </div>
  </div>
</template>

<script>
import Close from "@/components/common/icons/Close.vue";
import Arrow from "@/components/common/icons/Arrow.vue";

export default {
  name: "Tip",

  components: {
    Close,
    Arrow,
  },

  props: {
    layers: {
      default: null
    }
  },

  data() {
    return {
      visible: true
    }
  },

  methods: {
    closeTip() {
      this.visible = false;
    }
  }
};
</script>
