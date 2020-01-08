import { Component, OnInit, Input } from '@angular/core';
import { AstNode, NodeConfig } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-input-group';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzCompact: false,
    nzSize: 'default',
    nzSearch: false,
    nzAddOnBeforeIcon: '',
    nzAddOnAfterIcon: 'search'
  }),
  attrs: [
    {
      key: 'nzAddOnBeforeIcon',
      type: 'input',
      name: 'nzAddOnBeforeIcon',
      desc: '前缀图标'
    },
    {
      key: 'nzAddOnAfterIcon',
      type: 'input',
      name: 'nzAddOnAfterIcon',
      desc: '后缀图标'
    },
    {
      key: 'nzCompact',
      type: 'boolean',
      name: 'nzCompact',
      desc: '是否用紧凑模式'
    },
    {
      key: 'nzSearch',
      type: 'boolean',
      name: 'nzSearch',
      desc: '是否用搜索框'
    },
    {
      key: 'nzSize',
      type: 'select',
      name: 'nzSize',
      clearable: false,
      desc: '设置输入框大小，可选值为 small, large 或者 default',
      options: [{
        label: 'large',
        value: 'large'
      }, {
        label: 'small',
        value: 'small'
      }, {
        label: 'default',
        value: 'default'
      }]
    },
  ],
  children: []
};

export interface AstInputGroupAttrs {
  nzSize?: 'large' | 'small' | 'default';
  nzCompact?: boolean;
  nzSearch?: boolean;
  nzAddOnBeforeIcon?: string;
  nzAddOnAfterIcon?: string;
}

@Component({
  selector: 'e2eos-ng-antd-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstInputGroupAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() { }

  ngOnInit() {
  }

}
