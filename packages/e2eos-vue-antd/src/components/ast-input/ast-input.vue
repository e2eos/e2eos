<template>
  <div class="ast-input" @click="onClick">
    <a-input v-bind="attrs"
      v-decorator="[attrs.key, { rules: [{ required: true, message: 'Please input your note!' }] }]"
    />
  </div>
</template>

<script>
import AstNode from "../ast-node/ast-node";
import config from './config';
export default {
  mixins: [AstNode],
  data() {
    return {
      config
    }
  },
};
</script>

<style lang="scss">
</style>