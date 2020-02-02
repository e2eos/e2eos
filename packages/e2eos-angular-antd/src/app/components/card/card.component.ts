import {Component, OnInit, Input} from '@angular/core';
import {AstNode, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-card';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzActions: '',
    nzBodyStyle: '',
    nzBordered: true,
    nzCover: '',
    nzExtra: '',
    nzHoverable: false,
    nzLoading: false,
    nzTitle: '',
    nzType: '',
    nzSize: 'default'
  }),
  attrs: [
    {
      key: 'nzActions',
      type: 'string',
      name: 'nzActions',
      desc: '卡片操作组，位置在卡片底部'
    },
    {
      key: 'nzBodyStyle',
      type: 'string',
      name: 'nzBodyStyle',
      desc: '内容区域自定义样式'
    },
    {
      key: 'nzBordered',
      type: 'boolean',
      name: 'nzBordered',
      desc: '是否有边框'
    },
    {
      key: 'nzCover',
      type: 'string',
      name: 'nzCover',
      desc: '卡片封面'
    },
    {
      key: 'nzExtra',
      type: 'string',
      name: 'nzExtra',
      desc: '卡片右上角的操作区域'
    },
    {
      key: 'nzHoverable',
      type: 'boolean',
      name: 'nzHoverable',
      desc: '鼠标移过时可浮起'
    },
    {
      key: 'nzLoading',
      type: 'boolean',
      name: 'nzLoading',
      desc: '当卡片内容还在加载中时，可以用 loading 展示一个占位'
    },
    {
      key: 'nzTitle',
      type: 'string',
      name: 'nzTitle',
      desc: '卡片标题'
    },
    {
      key: 'nzType',
      type: 'string',
      name: 'nzType',
      desc: '卡片类型，可设置为 inner 或 不设置'
    },
    {
      key: 'nzSize',
      type: 'string',
      name: 'nzSize',
      desc: '卡片的尺寸'
    }
  ],
  children: []
};

export interface AstCardAttrs {
  nzActions?: Array<object>;
  nzBodyStyle?: object;
  nzBordered?: boolean;
  nzCover?: object;
  nzExtra?: string;
  nzHoverable?: boolean;
  nzLoading?: boolean;
  nzTitle?: string;
  nzType?: 'inner';
  nzSize?: 'default' | 'small';
}

@Component({
  selector: 'e2eos-ng-antd-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstCardAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
