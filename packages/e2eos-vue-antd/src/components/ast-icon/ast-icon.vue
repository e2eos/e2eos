<template>
  <a-icon v-bind="attrs" @click="onClick" />
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
}
</script>