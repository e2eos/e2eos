import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NodeConfig, AstNode } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-submenu';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzOpen: false,
    nzDisabled: false,
    nzTitle: 'Sub title',
    nzIcon: '',
    nzMenuClassName: ''
  }),
  attrs: [
    {
      key: 'nzOpen',
      type: 'boolean',
      name: 'nzOpen',
      desc: '是否展开，可双向绑定'
    },
    {
      key: 'nzDisabled',
      type: 'boolean',
      name: 'nzDisabled',
      desc: '是否禁用'
    },
    {
      key: 'nzTitle',
      type: 'string',
      name: 'nzTitle',
      desc: '	标题内容',
    },
    {
      key: 'nzIcon',
      type: 'string',
      name: 'nzIcon',
      desc: '	标题中 icon 类型',
    },
    {
      key: 'nzMenuClassName',
      type: 'string',
      name: 'nzMenuClassName',
      desc: '自定义子菜单容器类名	',
    }
  ],
  children: []
};

export interface AstSubMenuAttrs {
  nzOpen?: boolean;
  nzDisabled?: boolean;
  nzTitle?: string;
  nzIcon?: string;
  nzMenuClassName?: string;
}

@Component({
  selector: 'e2eos-ng-antd-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubmenuComponent implements OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstSubMenuAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() { }

  ngOnInit() {
  }
}
