import { Component, OnInit, Input } from '@angular/core';
import {AstNode, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-layout';
export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({}),
  attrs: [],
  children: []
};
@Component({
  selector: 'e2eos-ng-antd-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss']
})
export class LayoutFooterComponent implements OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs() {
    return this.node.attrs || NODE_CONFIG.attrs;
  }
  constructor() { }

  ngOnInit() {
  }

}
