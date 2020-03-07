<template>
  <a-button v-bind="attrs">
    <ast-drop-node :children="children"></ast-drop-node>
  </a-button>
</template>

<script>
import AstNode from "../ast-node/ast-node";
export default {
  mixins: [AstNode]
};
</script>