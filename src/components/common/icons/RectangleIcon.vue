<template>
  <span
    :class="`icons ${className}`"
    :style="{ width: `${size}`, color: `${color}` }"
  >
    <svg
      version="1.1"
      id="Capa_1"
      :height="`${size}pt`"
      :width="`${size}pt`"
      :fill="color"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style="enable-background:new 0 0 512 512;"
      xml:space="preserve"
    >
      <g>
        <g>
          <path
            d="M407,76H105C47.103,76,0,123.103,0,181v150c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V181
			C512,123.103,464.897,76,407,76z M482,331c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V181c0-41.355,33.645-75,75-75
			h302c41.355,0,75,33.645,75,75V331z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
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
