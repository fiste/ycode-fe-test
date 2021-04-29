<template>
  <div :class="`layer-${id}`">
    <p>Add some text here</p>
  </div>
</template>

<script>
export default {
  name: "Layer",

  props: {
    id: {
      default: 0,
    }
  },

  methods: {
    createLayer() {
      this.$store.dispatch("layer/createLayer", {
        id: this.layers.length + 1,
        text: "Add some text here",
        class: "abc",
      });
      console.log(this.layers);
    },
  },
};
</script>
