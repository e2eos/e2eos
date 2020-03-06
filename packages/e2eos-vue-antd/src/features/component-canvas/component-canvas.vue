<template>
  <div class="component-canvas">
    <a-card size="small" :bordered="false" title="设备">
      <a href="#" slot="extra">more</a>
      <AstNode v-bind="page" />
    </a-card>
  </div>
</template>

<script>
import AstNode from '../../components/ast-node/ast-node';
export default {
  data() {
    return {
      page: {
        tag: 'a-button',
        attrs: {
          type: 'primary'
        },
        children: [
          {
            tag: 'a-icon',
            attrs: {
              type: 'left'
            },
            children: []
          },
          {
            tag: 'ast-text-node',
            attrs: {
              text: 'primary'
            },
            children: []
          }
        ]
      }
    }
  },
  components: {
    AstNode
  }
};
</script>

<style lang="scss" scoped>
.component-canvas {

  height: 100%;

  /deep/ .ant-card {
    height: 100%;
  }
}
</style>