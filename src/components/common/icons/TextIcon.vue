<template>
  <span
    :class="`icons ${className}`"
    :style="{ width: `${size}`, color: `${color}` }"
  >
    <svg
      id="Capa_1"
      enable-background="new 0 0 467.765 467.765"
      :height="`${size}pt`"
      viewBox="0 0 467.765 467.765"
      :width="`${size}pt`"
      :fill="color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m175.412 87.706h58.471v29.235h58.471v-87.706h-292.354v87.706h58.471v-29.235h58.471v292.353h-58.471v58.471h175.383v-58.471h-58.442z"
      />
      <path
        d="m233.882 175.412v87.706h58.471v-29.235h29.235v146.176h-29.235v58.471h116.941v-58.471h-29.235v-146.177h29.235v29.235h58.471v-87.706h-233.883z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    size: {
      default: 12,
    },
    name: {},
    className: {
      default: "",
    },
    color: {
      default: "#fff",
    },
  },
};
</script>
