import { Component, OnInit, Input } from '@angular/core';
import { NodeConfig, AstNode } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-menu';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzInlineCollapsed: false,
    nzInlineIndent: 24,
    nzMode: 'vertical',
    nzSelectable: true,
    nzTheme: 'dark'
  }),
  attrs: [
    {
      key: 'nzInlineCollapsed',
      type: 'boolean',
      name: 'nzInlineCollapsed',
      desc: 'inline 时菜单是否收起状态'
    },
    {
      key: 'nzInlineIndent',
      type: 'number',
      name: 'nzInlineIndent',
      desc: 'inline 模式的菜单缩进宽度'
    },
    {
      key: 'nzMode',
      type: 'select',
      name: 'nzMode',
      clearable: false,
      desc: '菜单类型，现在支持垂直、水平、和内嵌模式三种',
      options: [{
        label: 'vertical',
        value: 'vertical'
      }, {
        label: 'horizontal',
        value: 'horizontal'
      }, {
        label: 'inline',
        value: 'inline'
      }]
    },
    {
      key: 'nzSelectable',
      type: 'boolean',
      name: 'nzSelectable',
      desc: '是否允许选中',
    },
    {
      key: 'nzTheme',
      type: 'select',
      name: 'nzTheme',
      clearable: false,
      desc: '主题颜色',
      options: [{
        label: 'light',
        value: 'light'
      }, {
        label: 'dark',
        value: 'dark'
      }]
    }
  ],
  children: []
};

export interface AstMenuAttrs {
  nzInlineCollapsed?: boolean;
  nzInlineIndent?: number;
  nzMode?: 'vertical' | 'horizontal' | 'inline';
  nzSelectable?: boolean;
  nzTheme?: 'light' | 'dark';
}

@Component({
  selector: 'e2eos-ng-antd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstMenuAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() { }

  ngOnInit() {
  }

}
