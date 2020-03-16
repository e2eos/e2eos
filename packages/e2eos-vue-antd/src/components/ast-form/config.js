import AstInputConfig from '../ast-input/config';

export const config = [
  {
    key: 'attr',
    title: '属性',
    options: [
      {
        key: 'hideRequiredMark',
        type: 'boolean',
        desc: '隐藏所有表单项的必选标记',
        default: false
      },
      {
        key: 'labelAlign',
        type: 'select',
        desc: '	label 标签的文本对齐方式',
        default: 'right',
        options: [
          {
            label: 'left',
            value: 'left'
          },
          {
            label: 'right',
            value: 'right'
          }
        ]
      },
      {
        key: 'layout',
        type: 'select',
        desc: '	表单布局',
        default: 'horizontal',
        options: [
          {
            label: 'horizontal',
            value: 'horizontal'
          },
          {
            label: 'vertical',
            value: 'vertical'
          },
          {
            label: 'inline',
            value: 'inline'
          },
        ]
      },
      {
        key: 'labelCol',
        type: 'object',
        desc: 'label 标签布局',
        default: {}
      },
      {
        key: 'wrapperCol',
        type: 'object',
        desc: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
        default: {}
      },
      {
        key: 'selfUpdate',
        type: 'boolean',
        desc: '自定义字段更新逻辑',
        default: false
      },
      {
        key: 'colon',
        type: 'boolean',
        desc: '全局colon, (只有在属性 layout 为 horizontal 时有效)',
        default: true
      }
    ]
  }
]

export default {
  name: 'Form',
  icon: '',
  group: 'data',
  node: {
    tag: 'ast-form',
    attrs: {
    },
    children: [AstInputConfig]
  },
  config
};
