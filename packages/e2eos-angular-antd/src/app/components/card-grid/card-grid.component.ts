import {Component, OnInit, Input} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-card-grid';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzHoverable: true
  }),
  attrs: [
    {
      key: 'nzHoverable',
      type: 'boolean',
      name: 'nzHoverable',
      desc: '鼠标移过时可浮起'
    }
  ],
  children: []
};

export interface AstCardGridAttrs {
  nzHoverable?: boolean;
}

@Component({
  selector: 'e2eos-ng-antd-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements ComponentBase, OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstCardGridAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
