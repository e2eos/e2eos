import {Component, OnInit, Input, EventEmitter, Output, ViewChild} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-layout-sider';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzBreakpoint: '',
    nzCollapsedWidth: 64,
    nzCollapsible: false,
    nzCollapsed: false,
    nzReverseArrow: false,
    nzTrigger: false,
    nzZeroTrigger: false,
    nzWidth: false,
    nzTheme: false
  }),
  attrs: [
    {
      key: 'nzBreakpoint',
      type: 'select',
      name: 'nzBreakpoint',
      clearable: false,
      options: [
        {
          label: 'xs',
          value: 'xs'
        },
        {
          label: 'sm',
          value: 'sm'
        },
        {
          label: 'md',
          value: 'md'
        },
        {
          label: 'lg',
          value: 'lg'
        },
        {
          label: 'xl',
          value: 'xl'
        },
        {
          label: 'xxl',
          value: 'xxl'
        }
      ],
      desc: '触发响应式布局的断点'
    },
    {
      key: 'nzCollapsed',
      type: 'boolean',
      name: 'nzCollapsed',
      desc: '当前收起状态，可双向绑定'
    },
    {
      key: 'nzCollapsedWidth',
      type: 'input',
      name: 'nzCollapsedWidth',
      desc: '收缩宽度，设置为 0 会出现特殊 trigger'
    },
    {
      key: 'nzCollapsible',
      type: 'boolean',
      name: 'nzCollapsible',
      desc: '是否可收起'
    },
    {
      key: 'nzCollapsed',
      type: 'boolean',
      name: 'nzCollapsed',
      desc: '当前收起状态，可双向绑定'
    },
    {
      key: 'nzReverseArrow',
      type: 'boolean',
      name: 'nzReverseArrow',
      desc: '翻转折叠提示箭头的方向，当 Sider 在右边时可以使用'
    },
    {
      key: 'nzTrigger',
      type: 'input',
      name: 'nzTrigger',
      desc: '自定义 trigger，设置为 null 时隐藏 trigger'
    },
    {
      key: 'nzZeroTrigger',
      type: 'input',
      name: 'nzZeroTrigger',
      desc: '自定义 nzCollapsedWidth 为 0 时的 特殊trigger'
    },
    {
      key: 'nzWidth',
      type: 'input',
      name: 'nzWidth',
      desc: '宽度'
    },
    {
      key: 'nzTheme',
      type: 'select',
      name: 'nzTheme',
      clearable: false,
      options: [
        {
          label: 'light',
          value: 'light'
        },
        {
          label: 'dark',
          value: 'dark'
        }
      ],
      desc: '题颜色'
    },
    {
      key: 'nzCollapsedChange',
      type: 'input',
      name: 'nzCollapsedChange',
      desc: '展开-收起时的回调函数'
    }
  ],
  children: []
};

export interface AstLayoutSiderAttrs {
  nzBreakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  nzCollapsed?: boolean;
  nzCollapsedWidth?: number;
  nzCollapsible?: boolean;
  nzReverseArrow?: boolean;
  nzTrigger?: string;
  nzZeroTrigger?: string;
  nzWidth?: string | number;
  nzTheme?: 'light' | 'dark';
}

@Component({
  selector: 'e2eos-ng-antd-layout-sider',
  templateUrl: './layout-sider.component.html',
  styleUrls: ['./layout-sider.component.scss']
})
export class LayoutSiderComponent implements ComponentBase, OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  @Output() nzCollapsedChange = new EventEmitter();

  get attrs(): AstLayoutSiderAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() {
  }

  ngOnInit() {
  }

  collapsedChange(falg: boolean) {
    this.nzCollapsedChange.emit(falg);
  }

}
