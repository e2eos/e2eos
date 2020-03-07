<template>
  <a-icon :type="attrs.type" />
</template>
<script>
import AstNode from '../ast-node/ast-node';
export default {
  mixins: [AstNode]
}
</script>