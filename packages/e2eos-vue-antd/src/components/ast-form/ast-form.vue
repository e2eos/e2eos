<template>
  <div class="ast-form" @click="onClick">
    <a-form v-bind="attrs" :form="form" @submit="handleSubmit" @click="log">
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
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <ast-node :tag="child.tag" :attrs="child.attrs" :children="child.children"></ast-node>
        </a-form-item>
      </draggable>
    </a-form>
  </div>
</template>

<script>
import AstNode from "../ast-node/ast-node";
import AstDropNode from "../ast-drop-node/ast-drop-node";
import config from "./config";
export default {
  mixins: [AstNode, AstDropNode],
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
      config
    };
  },
  computed: {
    formItemLayout() {
      const { layout, labelCol, wrapperCol } = this.attrs;
      return layout === "horizontal"
        ? {
            labelCol: labelCol || { span: 4 },
            wrapperCol: wrapperCol || { span: 20 }
          }
        : {};
    }
  },
  methods: {
    handleSubmit() {},
    log() {
      console.log(1);
    }
  }
};
</script>