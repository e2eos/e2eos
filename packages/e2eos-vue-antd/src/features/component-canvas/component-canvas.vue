<template>
  <div class="component-canvas">
    <a-card size="small" :bordered="false" title="设备">
      <a href="#" slot="extra">more</a>
      <AstNode v-bind="page" />
    </a-card>
  </div>
</template>

<script>
import AstNode from "../../components/ast-node/ast-node";

export default {
  data() {
    return {
      page: {
        tag: "ast-form",
        attrs: {},
        children: [
          {
            tag: "ast-button",
            attrs: {
              type: "primary"
            },
            children: [
              {
                tag: "ast-text",
                attrs: {
                  text: "primary"
                },
                children: []
              }
            ]
          },
          {
            tag: "ast-input",
            attrs: {
              label: 'Label'
            },
            children: []
          }
        ]
      },
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
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