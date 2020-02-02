import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AstNode, NodeConfig } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-menu-group';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzTitle: 'Menu group',
  }),
  attrs: [
    {
      key: 'nzTitle',
      type: 'string',
      name: 'nzTitle',
      desc: '标题内容'
    },
  ],
  children: []
};

export interface AstMenuGroupAttrs {
  nzTitle?: string;
}

@Component({
  selector: 'e2eos-ng-antd-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuGroupComponent implements OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstMenuGroupAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() { }

  ngOnInit() {
  }

}
