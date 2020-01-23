import { Component, OnInit, Input } from '@angular/core';
import { NodeConfig, AstNode } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-menu-item';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzDisabled: false,
    nzSelected: false,
    nzMatchRouter: false,
    nzMatchRouterExact: false,
  }),
  attrs: [
    {
      key: 'nzDisabled',
      type: 'boolean',
      name: 'nzDisabled',
      desc: '是否禁用'
    },
    {
      key: 'nzSelected',
      type: 'boolean',
      name: 'nzSelected',
      desc: '是否被选中'
    },
    {
      key: 'nzMatchRouter',
      type: 'boolean',
      name: 'nzMatchRouter',
      desc: '是否根据 routerLink 自动设定 nzSelected'
    },
    {
      key: 'nzMatchRouterExact',
      type: 'boolean',
      name: 'nzMatchRouterExact',
      desc: '是否路由完整精确匹配, 详见 routerLinkActiveOptions'
    },
  ],
  children: []
};

export interface AstMenuItemAttrs {
  nzDisabled?: boolean;
  nzSelected?: boolean;
  nzMatchRouter?: boolean;
  nzMatchRouterExact?: boolean;
}

@Component({
  selector: 'e2eos-ng-antd-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstMenuItemAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() { }

  ngOnInit() {
  }

}
