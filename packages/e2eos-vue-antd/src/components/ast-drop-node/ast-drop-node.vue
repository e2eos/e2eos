<template>
  <draggable
    class="ast-drop-node"
    :list="children"
    :value="value"
    @input="emitter"
    v-bind="dragOptions"
  >
    <ast-node
      v-for="(child, index) in realValue"
      :key="index"
      :tag="child.tag"
      :attrs="child.attrs"
      :children="child.children"
    ></ast-node>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import AstNode from "../ast-node/ast-node";
export default {
  mixins: [AstNode],
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    }
  },
  components: {
    draggable
  },
  computed: {
    dragOptions() {
      return {
        // animation: 0,
        group: "drop-container",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.children;
    }
  },
  methods: {
    addNode(added) {
      const { element, newIndex } = added;
      this.children.splice(newIndex, 0, element);
    },

    emitter(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss">
  .ast-drop-node {
    min-width: 10px;
  }
</style>