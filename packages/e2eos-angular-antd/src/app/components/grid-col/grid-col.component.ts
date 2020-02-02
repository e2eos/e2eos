import { Component, OnInit, Input } from '@angular/core';
import { ComponentBase, AstNode, NodeConfig } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-grid-col';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzOffset: 0,
    nzOrder: 0,
    nzPull: 0,
    nzPush: 0,
    nzSpan: 10,
    nzXs: '',
    nzSm: '',
    nzMd: '',
    nzLg: '',
    nzXl: '',
    nzXXl: '',
  }),
  attrs: [
    {
      key: 'nzOffset',
      type: 'number',
      name: 'nzOffset',
      desc: '栅格左侧的间隔格数，间隔内不可以有栅格'
    },
    {
      key: 'nzOrder',
      type: 'number',
      name: 'nzOrder',
      desc: '栅格顺序，flex 布局模式下有效'
    },
    {
      key: 'nzPull',
      type: 'number',
      name: 'nzPull',
      desc: '栅格向左移动格数'
    },
    {
      key: 'nzPush',
      type: 'number',
      name: 'nzPush',
      desc: '栅格向右移动格数'
    },
    {
      key: 'nzSpan',
      type: 'number',
      name: 'nzSpan',
      desc: '栅格占位格数，为 0 时相当于 display: none'
    },
    {
      key: 'nzXs',
      type: 'input',
      name: 'nzXs',
      desc: '<576px 响应式栅格，可为栅格数或一个包含其他属性的对象'
    },
    {
      key: 'nzSm',
      type: 'input',
      name: 'nzSm',
      desc: '≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象'
    },
    {
      key: 'nzMd',
      type: 'input',
      name: 'nzMd',
      desc: '≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象'
    },
    {
      key: 'nzLg',
      type: 'input',
      name: 'nzLg',
      desc: '≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象'
    },
    {
      key: 'nzXl',
      type: 'input',
      name: 'nzXl',
      desc: '≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象'
    },
    {
      key: 'nzXXl',
      type: 'input',
      name: 'nzXXl',
      desc: '≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象'
    }
  ],
  children: []
};

export interface AstGridColAttrs {
  nzOffset?: number;
  nzOrder?: number;
  nzPull?: number;
  nzPush?: number;
  nzSpan?: number;
  nzXs?: number | object;
  nzSm?: number | object;
  nzMd?: number | object;
  nzLg?: number | object;
  nzXl?: number | object;
  nzXXl?: number | object;
}
@Component({
  selector: 'e2eos-ng-antd-grid-col',
  templateUrl: './grid-col.component.html',
  styleUrls: ['./grid-col.component.scss']
})

export class GridColComponent implements ComponentBase, OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstGridColAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }
  constructor() {}

  ngOnInit() {}
}
