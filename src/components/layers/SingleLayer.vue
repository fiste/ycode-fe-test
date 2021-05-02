<template>
  <div
    :class="[
      'text-white text-xs flex items-center p-3 hover:bg-green-500 hover:text-white',
      { 'bg-green-500 text-white': layer.selected },
      { 'py-2': editMode },
    ]"
    @click="selectLayer(layer.id)"
    @dblclick="turnOnEditMode"
  >
    <div class="flex" v-if="!editMode">
      <RectangleIcon v-if="!layer.name.length" class="mr-2" />
      <TextIcon v-else class="mr-2" />
      {{ layer.name }}
    </div>

    <div v-else>
      <input
        v-model="layer.name"
        class="editLayer flex flex-1 p-1 bg-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        ref="editLayerName"
        @blur="saveChanges(layer.name)"
      />
    </div>
  </div>
</template>

<script>
import RectangleIcon from "@/components/common/icons/RectangleIcon.vue";
import TextIcon from "@/components/common/icons/TextIcon.vue";

export default {
  name: "SingleLayer",

  components: {
    RectangleIcon,
    TextIcon,
  },

  props: {
    layer: {
      default: null,
    },
    selectLayer: {
      default: () => {},
    },
    saveEditChanges: {
      default: () => {},
    },
  },

  data() {
    return {
      editMode: false,
    };
  },

  methods: {
    turnOnEditMode() {
      if (!this.editMode) {
        this.editMode = true;
        this.$nextTick(() => {
          this.$refs.editLayerName.focus();
        });
      }
    },

    saveChanges(name) {
      this.saveEditChanges(name);
      this.editMode = false;
    },
  },
};
</script>
