import {Component, OnInit, Input} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-collapse-panel';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzDisabled: false,
    nzHeader: '',
    nzExpandedIcon: '',
    nzExtra: '',
    nzShowArrow: true,
    nzActive: true,
    // nzActiveChange :(e)=>e
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

export interface AstCollapsePanelAttrs {
  nzDisabled?: boolean;
  nzHeader?: string;
  nzExpandedIcon?: string;
  nzExtra?: string;
  nzShowArrow?: boolean;
  nzActive?: boolean;
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
