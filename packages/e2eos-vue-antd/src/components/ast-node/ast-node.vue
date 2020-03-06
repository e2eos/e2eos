<template>
  <component :is="tag" v-bind="attrs" v-on="events">
    <ast-node v-for="(child, index) in children" :key="index"
      :tag="child.tag" :attrs="child.attrs" :children="child.children"></ast-node>
  </component>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    attrs: {
      type: Object,
      required: true
    },
    events: {
      type: Object
    },
    children: {
      type: Array,
      required: true
    }
  }
}
</script>