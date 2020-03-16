<template>
  <a-button v-bind="attrs" @click="onClick">
    <ast-drop-node :children="children"></ast-drop-node>
  </a-button>
</template>

<script>
import AstNode from '../ast-node/ast-node';
import config from './config';
export default {
  mixins: [AstNode],
  data() {
    return {
      config
    }
  }
};
</script>