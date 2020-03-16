<template>
  <component :is="tag" :tag="tag" :attrs="attrs" :children="children" :events="events">
    <!-- <ast-node v-for="(child, index) in children" :key="index"
    :tag="child.tag" :attrs="child.attrs" :children="child.children"></ast-node>-->
  </component>
</template>
<script>
export default {
  props: {
    tag: {
      type: String
    },
    attrs: {
      type: Object
    },
    events: {
      type: Object
    },
    children: {
      type: Array
    }
  },
  methods: {
    onClick(evt) {
      evt.stopPropagation();
      this.$root.$emit('page-editor:onNodeClick', {
        tag: this.tag,
        attrs: this.attrs,
        config: this.config
      })
    }
  }
};
</script>

<style lang="scss">
.ast-node {
  display: inline-block;
}
</style>