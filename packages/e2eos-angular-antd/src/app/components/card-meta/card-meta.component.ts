import {Component, OnInit, Input} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';


export const TAG_NAME = 'e2eos-ng-antd-card-meta';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzAvatar: '',
    nzDescription: '',
    nzTitle: ''
  }),
  attrs: [
    {
      key: 'nzAvatar',
      type: 'string',
      name: 'nzAvatar',
      desc: '头像/图标'
    },
    {
      key: 'nzDescription',
      type: 'string',
      name: 'nzDescription',
      desc: '描述内容'
    },
    {
      key: 'nzTitle',
      type: 'string',
      name: 'nzTitle',
      desc: '标题内容'
    }
  ],
  children: []
};

export interface AstCardMetaAttrs {
  nzAvatar?: string;
  nzDescription?: string;
  nzTitle?: string;
}

@Component({
  selector: 'e2eos-ng-antd-card-meta',
  templateUrl: './card-meta.component.html',
  styleUrls: ['./card-meta.component.scss']
})
export class CardMetaComponent implements ComponentBase, OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstCardMetaAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
