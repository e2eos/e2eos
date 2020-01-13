import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';


export const TAG_NAME = 'e2eos-ng-antd-collapse';
export const CHILD_TAG_NAME = 'e2eos-ng-antd-collapse-panel';

export const CHILD_NODE_CONFIG: NodeConfig = {
  name: CHILD_TAG_NAME,
  values: Object.freeze({
    nzDisabled: false,
    nzHeader: '',
    nzExpandedIcon: '',
    nzExtra: '',
    nzShowArrow: true,
    nzActive: true
  }),
  attrs: [
    {
      key: 'nzDisabled',
      type: 'boolean',
      name: 'nzDisabled',
      desc: '禁用后的面板展开与否将无法通过用户交互改变'
    },
    {
      key: 'nzHeader',
      type: 'string',
      name: 'nzHeader',
      desc: '面板头内容'
    },
    {
      key: 'nzExpandedIcon',
      type: 'string',
      name: 'nzExpandedIcon',
      desc: '自定义切换图标'
    },
    {
      key: 'nzExtra',
      type: 'string',
      name: 'nzExtra',
      desc: '自定义渲染每个面板右上角的内容'
    },
    {
      key: 'nzShowArrow',
      type: 'boolean',
      name: 'nzShowArrow',
      desc: '是否展示箭头'
    },
    {
      key: 'nzActive',
      type: 'boolean',
      name: 'nzActive',
      desc: '面板头内容'
    }
  ],
  children: []
};

export const node1 = {
  tag: CHILD_TAG_NAME,
  attrs: CHILD_NODE_CONFIG.attrs,
  children: CHILD_NODE_CONFIG.children
};

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
  children: [node1]
};

export interface AstCollapsePanelAttrs {
  nzDisabled?: boolean;
  nzHeader?: string;
  nzExpandedIcon?: string;
  nzExtra?: string;
  nzShowArrow?: boolean;
  nzActive?: boolean;
}

export interface AstCollapseAttrs {
  nzAccordion?: boolean;
  nzBordered?: boolean;
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

  @Input() node1: AstNode = {
    tag: CHILD_TAG_NAME,
    attrs: CHILD_NODE_CONFIG.attrs,
    children: CHILD_NODE_CONFIG.children
  };

  get attrs(): AstCollapseAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  get panelAttrs(): AstCollapsePanelAttrs {
    return this.node1.attrs || CHILD_NODE_CONFIG.attrs;
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
