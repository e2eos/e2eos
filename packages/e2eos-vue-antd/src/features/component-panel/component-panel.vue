<template>
  <div class="component-panel">
    <a-card size="small" :bordered="false" title="属性">
      <a href="#" slot="extra">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.component-panel {

  height: 100%;

  /deep/ .ant-card {
    height: 100%;
  }
}
</style>