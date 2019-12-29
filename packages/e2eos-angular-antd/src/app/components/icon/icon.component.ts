import { Component, OnInit, Input } from '@angular/core';
import { ComponentBase, AstNode, NodeConfig } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-icon';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzType: 'home',
    nzTheme: 'outline',
    nzSpin: false,
    nzTwotoneColor: '',
    nzIconfont: '',
    nzRotate: '',
  }),
  attrs: [
    {
      key: 'nzType',
      type: 'input',
      name: 'nzType',
      desc: '图标类型，遵循图标的命名规范'
    },
    {
      key: 'nzTheme',
      type: 'select',
      name: 'nzTheme',
      clearable: false,
      desc: '图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标',
      options: [
        {
          label: 'fill',
          value: 'fill'
        },
        {
          label: 'outline',
          value: 'outline'
        },
        {
          label: 'twotone',
          value: 'twotone'
        }
      ]
    },
    {
      key: 'nzSpin',
      type: 'boolean',
      name: 'nzSpin',
      desc: '是否有旋转动画'
    },
    {
      key: 'nzTwotoneColor',
      type: 'input',
      name: 'nzTwotoneColor',
      desc: '仅适用双色图标，设置双色图标的主要颜色，默认为 Ant Design 蓝色'
    },
    {
      key: 'nzIconfont',
      type: 'input',
      name: 'nzIconfont',
      desc: '指定来自 IconFont 的图标类型'
    },
    {
      key: 'nzRotate',
      type: 'number',
      name: 'nzRotate',
      desc: '图标旋转角度'
    },
  ],
  children: []
};

export interface AstIconAttrs {
  nzType?: string;
  nzTheme?: 'fill' | 'outline' | 'twotone';
  nzSpin?: boolean;
  nzTwotoneColor?: string;
  nzIconfont?: string;
  nzRotate?: number;
}

@Component({
  selector: 'e2eos-ng-antd-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements ComponentBase, OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstIconAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() { }

  ngOnInit() {
  }

}
