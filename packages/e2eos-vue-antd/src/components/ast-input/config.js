export const config = [
  {
    key: 'attr',
    title: '属性',
    options: [
      {
        key: 'defaultValue',
        type: 'string',
        desc: '输入框默认内容',
        default: ''
      },
      {
        key: 'disabled',
        desc: '是否禁用状态',
        type: 'boolean',
        default: false
      },
      {
        key: 'id',
        type: 'string',
        desc: '输入框的 id',
        default: null
      },
      {
        key: 'maxLength',
        type: 'number',
        desc: '最大长度',
        default: null
      },
      {
        key: 'prefix',
        type: 'string',
        desc: '前缀图标',
        default: ''
      },
      {
        key: 'suffix',
        type: 'string',
        desc: '后缀图标',
        default: ''
      },
      {
        key: 'size',
        type: 'select',
        desc: '控件大小',
        default: 'default',
        options: [
          {
            label: 'default',
            value: 'default'
          },
          {
            label: 'large',
            value: 'large'
          },
          {
            label: 'small',
            value: 'small'
          },
        ]
      },
      {
        key: 'allowClear',
        type: 'boolean',
        desc: '可以点击清除图标删除内容',
        default: true
      }
    ]
  }
]

export default {
  name: 'Input',
  icon: '',
  group: 'data',
  node: {
    tag: 'ast-input',
    attrs: {
      label: 'Label'
    },
    children: []
  },
  config
}
