<template>
  <div class="page-editor">
    <div class="top-nav-layout">top nav</div>
    <div class="editor-layout">
      <div class="left-nav-layout">
        <div class="component-tree-layout">
          <ComponentTree />
        </div>
        <div class="component-list-layout">
          <ComponentList />
        </div>
      </div>
      <div class="main-layout">
        <ComponentCanvas />
      </div>
      <div class="panel-layout">
        <ComponentPanel />
      </div>
    </div>
    <div class="bottom-layout">bottom</div>
  </div>
</template>

<script>
import ComponentTree from '../component-tree/component-tree';
import ComponentList from '../component-list/component-list';
import ComponentCanvas from '../component-canvas/component-canvas';
import ComponentPanel from '../component-panel/component-panel';
export default {
  components: {
    ComponentTree,
    ComponentList,
    ComponentCanvas,
    ComponentPanel
  }
};
</script>

<style lang="scss" scoped>
.page-editor {
  height: 100%;
  display: flex;
  flex-direction: column;

  .top-nav-layout {
    flex: 48px 0 0;
  }

  .editor-layout {
    height: 100%;
    flex: 1;
  }

  .bottom-layout {
    flex: 30px 0 0;
  }
}

.editor-layout {
  display: flex;

  .left-nav-layout {
    flex: 320px 0 0;
  }

  .main-layout {
    flex: 1;
  }

  .panel-layout {
    flex: 320px 0 0;
  }
}

.left-nav-layout {
  display: flex;
  flex-direction: column;

  .component-tree-layout {
    flex: 250px 0 0;
    height: 250px;
  }

  .component-list-layout {
    flex: 1;
    height: 100%;
  }
}
</style>