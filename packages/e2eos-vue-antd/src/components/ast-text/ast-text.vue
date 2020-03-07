<template>
 <span v-text="attrs.text"></span>
</template>
<script>
import AstNode from '../ast-node/ast-node'
export default {
  mixins: [AstNode]
}
</script>