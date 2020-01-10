import {Component, OnInit, Input} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-collapse-panel';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzAccordion: false,
    nzBordered: true
  }),
  attrs: [
    {
      key: 'nzAccordion',
      type: 'boolean',
      name: 'nzAccordion',
      desc: '是否每次只打开一个tab'
    },
    {
      key: 'nzBordered',
      type: 'boolean',
      name: 'nzBordered',
      desc: '是否有边框'
    }
  ],
  children: []
};

export interface AstCollapsePanelAttrs {
  nzAccordion?: boolean;
  nzBordered?: boolean;
}

@Component({
  selector: 'e2eos-ng-antd-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.scss']
})
export class CollapsePanelComponent implements ComponentBase, OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstCollapsePanelAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
