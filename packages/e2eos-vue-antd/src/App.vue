<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <a-button type="primary">Primary</a-button> -->
    <PageEditor />
  </div>
</template>

<script>
import PageEditor from './features/page-editor/page-editor';

export default {
  name: 'App',
  components: {
    PageEditor
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
}

.drop-node-placeholder {
  .icon-layout,
  .text-layout {
    display: none;
  }

  .drop-placeholder {
    display: block;
  }
}
</style>
