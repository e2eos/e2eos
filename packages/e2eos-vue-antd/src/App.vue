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

<style>
#app {
  height: 100%;
}
</style>
