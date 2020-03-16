<template>
  <div class="component-panel">
    <a-card size="small" :bordered="false" :title="node.config.name">
      <a href="#" slot="extra">more</a>
      <a-collapse v-model="activeKey" :bordered="false">
        <a-collapse-panel v-for="item in config" :header="item.title" :key="item.key">
          <a-form layout="horizontal">
            <a-form-item
              v-for="option in item.options"
              :key="option.key"
              :label="option.key"
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 18 }"
            >
              <a-input v-if="option.type === 'string'" v-model="attrs[option.key]" />
              <a-switch v-if="option.type === 'boolean'" v-model="attrs[option.key]" />
              <a-select v-if="option.type === 'select'" v-model="attrs[option.key]">
                <a-select-option v-for="op in option.options" :key="op.value" :value="op.value">
                  {{ op.label }}
                </a-select-option>
              </a-select>
              <a-input-number v-if="option.type === 'number'" v-model="attrs[option.key]" />
            </a-form-item>
          </a-form>
        </a-collapse-panel>
      </a-collapse>
    </a-card>
  </div>
</template>

<script>
export default {
  created() {
    this.$root.$on("page-editor:onNodeClick", this.onNodeClick);
  },
  data() {
    return {
      text: "hello world",
      activeKey: ["1"],
      node: {
        tag: "",
        attrs: {},
        config: {
          name: "",
          config: []
        }
      }
    };
  },
  computed: {
    config() {
      return this.node.config.config;
    },
    attrs() {
      return this.node.attrs;
    }
  },
  methods: {
    onNodeClick(evt) {
      console.log(evt);
      this.node = evt;
    }
  }
};
</script>

<style lang="scss" scoped>
.component-panel {
  height: 100%;

  /deep/ .ant-card {
    height: 100%;

    .ant-card-body {
      padding: 5px 0;
    }
  }
}
</style>