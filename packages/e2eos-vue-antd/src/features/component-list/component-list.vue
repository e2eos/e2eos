<template>
  <div class="component-list">
    <a-card size="small" :bordered="false" title="组件">
      <a href="#" slot="extra">more</a>
      <div class="list-layout">
        <div class="item-layout" v-for="(config, index) in list" :key="index">
          <ast-drag-node :tag="config.node.tag" :attrs="config.node.attrs" :children="config.node.children">
            <template v-slot:text>
              {{ config.name }}
            </template>
          </ast-drag-node>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import { COMPONENT_CONFIG_LIST } from '../../components'
export default {
  data() {
    return {
      list: COMPONENT_CONFIG_LIST
    };
  }
};
</script>

<style lang="scss" scoped>
.component-list {
  height: 100%;

  /deep/ .ant-card {
    height: 100%;
  }
}

.list-layout {
  display: flex;
  flex-wrap: wrap;

  .item-layout {
    width: 25%;
    height: 74px;
  }
}
</style>