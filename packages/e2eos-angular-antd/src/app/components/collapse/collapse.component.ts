import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';


export const TAG_NAME = 'e2eos-ng-antd-collapse';
export const CHILD_TAG_NAME = 'e2eos-ng-antd-collapse-panel';
const collapsePanelJason: AstNode = {
  tag: CHILD_TAG_NAME,
  attrs: {
    nzDisabled: false,
    nzHeader: '标题1',
    nzExpandedIcon: 'layout',
    nzExtra: '',
    nzShowArrow: true,
    nzActive: true
  },
  children: []
};



export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzAccordion: false,
    nzBordered: true,
    nzCollapsePanels: []
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
    },
    // {
    //   key: 'nzCollapsePanels',
    //   type: 'string',
    //   name: 'nzCollapsePanels',
    //   desc: 'collapsePanels数组集合'
    // }
  ],
  children: [collapsePanelJason]
};


export interface AstCollapseAttrs {
  nzAccordion?: boolean;
  nzBordered?: boolean;
  nzCollapsePanels?: AstNode[];
}

@Component({
  selector: 'e2eos-ng-antd-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements ComponentBase, OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };


  get attrs(): AstCollapseAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  @Output() nzActiveChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  activeChange(flag: boolean) {
    this.nzActiveChange.emit(flag);
  }

}
