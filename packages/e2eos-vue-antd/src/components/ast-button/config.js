import AstTextConfig from '../ast-text/config';
import { generateDefaultValuesByConfig } from '../../utils/utils';

export const config = [
  {
    key: 'attr',
    title: '属性',
    options: [
      {
        key: 'disabled',
        type: 'boolean',
        desc: '按钮失效状态',
        default: false
      },
      {
        key: 'ghost',
        type: 'boolean',
        desc: '幽灵属性，使按钮背景透明',
        default: false
      },
      {
        key: 'htmlType',
        type: 'string',
        desc: '幽灵属性，使按钮背景透明',
        default: 'button'
      },
      {
        key: 'icon',
        type: 'string',
        desc: '设置按钮的图标类型',
        default: ''
      },
      {
        key: 'loading',
        type: 'boolean',
        desc: '设置按钮的图标类型',
        default: false
      },
      {
        key: 'shape',
        type: 'select',
        desc: '设置按钮形状',
        default: '',
        options: [
          {
            label: 'circle',
            value: 'circle'
          },
          {
            label: 'round',
            value: 'round'
          },
          {
            label: 'default',
            value: ''
          }
        ]
      },
      {
        key: 'size',
        type: 'select',
        desc: '设置按钮大小',
        default: 'default',
        options: [
          {
            label: 'small',
            value: 'small'
          },
          {
            label: 'large',
            value: 'large'
          },
          {
            label: 'default',
            value: 'default'
          },
        ]
      },
      {
        key: 'type',
        type: 'select',
        desc: '设置按钮类型',
        default: 'default',
        options: [
          {
            label: 'primary',
            value: 'primary'
          },
          {
            label: 'dashed',
            value: 'dashed'
          },
          {
            label: 'danger',
            value: 'danger'
          },
          {
            label: 'link',
            value: 'link'
          },
          {
            label: 'default',
            value: 'default'
          },
        ]
      },
      {
        key: 'block',
        desc: '将按钮宽度调整为其父宽度的选项',
        type: 'boolean',
        default: false
      }
    ]
  }
]

export default {
  name: 'Button',
  icon: '',
  group: 'general',
  node: {
    tag: 'ast-button',
    attrs: generateDefaultValuesByConfig(config),
    children: [AstTextConfig.node]
  },
  config
}
