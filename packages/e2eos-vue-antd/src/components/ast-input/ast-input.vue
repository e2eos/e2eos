<template>
  <a-input
    v-decorator="[attrs.key, { rules: [{ required: true, message: 'Please input your note!' }] }]"
  />
</template>

<script>
import AstNode from '../ast-node/ast-node';
export default {
  mixins: [AstNode]
}
</script>