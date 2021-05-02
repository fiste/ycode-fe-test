<template>
  <label class="text-white pr-3 w-1/2 text-xs lg:text-sm" for="option"
    >Choose {{ layerDesign.name }}:</label
  >
  <select
    name="option"
    id="option"
    class="appearance-none px-2 py-1 w-1/2 focus:outline-none bg-gray-400 text-white capitalize text-xs lg:text-sm"
    v-model="layerDesign.selected"
    @input="editLayerDesign(layerForEditDesign)"
  >
    <template v-for="(option, i) in layerDesign.list" :key="i">
      <option :selected="option === layerDesign.selected" :value="`${option}`">
        {{ option }}
      </option>
    </template>
  </select>
</template>

<script>
export default {
  name: "DesignOption",

  props: {
    layerDesign: {
      default: null,
    },
    layerForEditDesign: {
      default: null,
    },
    editLayerDesign: {
      default: () => {},
    },
  },
};
</script>
