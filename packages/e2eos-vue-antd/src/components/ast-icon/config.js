export const config = [
  {
    key: 'attr',
    title: '属性',
    options: [
      {
        key: 'type',
        type: 'string',
        desc: '图标类型。遵循图标的命名规范',
        default: 'smile'
      },
      {
        key: 'theme',
        type: 'select',
        desc: '图标主题风格',
        default: 'outlined',
        options: [
          {
            label: 'filled',
            value: 'filled'
          },
          {
            label: 'outlined',
            value: 'outlined'
          },
          {
            label: 'twoTone',
            value: 'twoTone'
          }
        ]
      },
      {
        key: 'spin',
        type: 'boolean',
        desc: '是否有旋转动画',
        default: false
      },
      {
        key: 'rotate',
        type: 'number',
        desc: '图标旋转角度',
        default: 0
      }
    ]
  }
]

export default {
  name: 'Icon',
  icon: '',
  group: 'general',
  node: {
    tag: 'ast-icon',
    attrs: {
      type: 'smile'
    },
    children: []
  },
  config
};
