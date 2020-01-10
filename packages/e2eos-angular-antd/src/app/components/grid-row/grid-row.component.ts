import { Component, OnInit, Input } from '@angular/core';
import { ComponentBase, AstNode, NodeConfig } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-grid-row';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzAlign: 'top',
    nzGutter: 0,
    nzJustify: 'start',
    nzType: 'flex',
  }),
  attrs: [
    {
      key: 'nzAlign',
      type: 'select',
      name: 'nzAlign',
      clearable: false,
      options: [
        {
          label: 'top',
          value: 'top'
        },
        {
          label: 'middle',
          value: 'middle'
        },
        {
          label: 'bottom',
          value: 'bottom'
        }
      ],
      desc: 'flex 布局下的垂直对齐方式'
    },
    {
      key: 'nzGutter',
      type: 'input',
      name: 'nzGutter',
      desc:
        '栅格间隔，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 }'
    },
    {
      key: 'nzJustify',
      type: 'select',
      name: 'nzJustify',
      clearable: false,
      options: [
        {
          label: 'start',
          value: 'start'
        },
        {
          label: 'end',
          value: 'end'
        },
        {
          label: 'center',
          value: 'center'
        },
        {
          label: 'space-around',
          value: 'space-around'
        },
        {
          label: 'space-between',
          value: 'space-between'
        }
      ],
      desc: 'flex 布局下的水平排列方式'
    },
    {
      key: 'nzType',
      type: 'input',
      name: 'nzType',
      desc: '布局模式，可选 flex，现代浏览器 下有效'
    }
  ],
  children: []
};

export interface AstGridRowAttrs {
  nzAlign?: 'top' | 'middle' | 'bottom';
  nzGutter?: number | object;
  nzJustify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  nzType?: 'flex';
}

@Component({
  selector: 'e2eos-ng-antd-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss']
})

export class GridRowComponent implements ComponentBase, OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstGridRowAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }
  constructor() {}

  ngOnInit() {}
}
