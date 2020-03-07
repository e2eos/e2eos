<template>
  <a-form :form="form" @submit="handleSubmit">
    <draggable
      class="ast-drop-node"
      :list="children"
      :value="value"
      @input="emitter"
      v-bind="dragOptions"
    >
      <a-form-item
        v-for="(child, index) in realValue"
        :key="index"
        :label="child.attrs.label"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <ast-node :tag="child.tag" :attrs="child.attrs" :children="child.children"></ast-node>
      </a-form-item>
    </draggable>
  </a-form>
</template>

<script>
import AstNode from "../ast-node/ast-node";
import AstDropNode from "../ast-drop-node/ast-drop-node";
export default {
  mixins: [AstNode, AstDropNode],
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    handleSubmit() {}
  }
};
</script>