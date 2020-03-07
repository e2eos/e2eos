<template>
  <draggable
    class="ast-drag-node"
    :list="list"
    :group="{ name: 'drop-container', pull: 'clone', put: false }"
    :clone="clone"
    @end="end"
  >
    <div class="node-layout" v-for="(node, index) in list" :key="index">
      <div class="icon-layout">
        <slot name="icon"></slot>
      </div>
      <div class="text-layout">
        <slot name="text"></slot>
      </div>
      <div class="drop-placeholder">Drop Here</div>
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";

import AstNode from "../ast-node/ast-node";
export default {
  mixins: [AstNode],
  components: {
    draggable
  },
  computed: {
    list() {
      return [
        {
          tag: this.tag,
          attrs: this.attrs,
          children: this.children,
          events: this.events
        }
      ];
    }
  },
  methods: {
    clone(el) {
      return JSON.parse(JSON.stringify(el));
    },
    end(evt) {
      console.log('end', evt);
    }
    // setData(dataTransfer, dragEl) {
    // // Create the clone (with content)
    //   const dragGhost = dragEl.cloneNode(true);
    //   // Stylize it
    //   dragGhost.classList.add('custom-drag-ghost');
    //   // Place it into the DOM tree
    //   document.body.appendChild(dragGhost);
    //   dragGhost.innerHTML = 'hello world';
    //   // Set the new stylized "drag image" of the dragged element
    //   dataTransfer.setDragImage(dragGhost, 0, 0);
    // },
    // onStart() {
    // const e = evt.originalEvent;
    // const crt = document.createElement('div');
    // crt.innerHTML = 'hello world';
    // crt.style.display =
    //   "none"; /* or visibility: hidden, or any of the above */
    // document.body.appendChild(crt);
    // e.dataTransfer.setDragImage(crt, 0, 0);
    // console.log(evt);
    // }
  }
};
</script>

<style lang="scss" scoped>
.ast-drag-node,
.node-layout {
  height: 100%;
  width: 100%;
}

.node-layout {
  display: inline-block;
  padding: 10px;

  > * {
    display: flex;
    justify-content: center;
  }

  .drop-placeholder {
    display: none;
  }
}
</style>

<style lang="scss">
.node-layout.ghost {
  width: auto;
  padding: 0 10px;
  margin: 0 10px;
  border: 1px dashed;

  .icon-layout,
  .text-layout {
    display: none;
  }

  .drop-placeholder {
    display: inline;
  }
}
</style>