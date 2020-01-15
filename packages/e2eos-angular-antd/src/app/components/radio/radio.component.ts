import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-radio';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzAutoFocus: false,
    nzDisabled: false,
    ngModel: false,
    nzValue: '',
    nzLabel: '大连'
  }),
  attrs: [
    {
      key: 'nzAutoFocus',
      type: 'boolean',
      name: 'nzAutoFocus',
      desc: '自动获取焦点'
    },
    {
      key: 'nzDisabled',
      type: 'boolean',
      name: 'nzDisabled',
      desc: '设定 disable 状态'
    },
    {
      key: 'ngModel',
      type: 'boolean',
      name: 'ngModel',
      desc: '设置 value，与 nz-radio-group 配合使用'
    }
  ],
  children: []
};

export interface AstRadioAttrs {
  nzAutoFocus?: boolean;
  nzDisabled?: boolean;
  ngModel?: boolean;
  nzValue?: string;
  nzLabel?: string;
}

@Component({
  selector: 'e2eos-ng-antd-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements ComponentBase, OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };
  @Output() ngModelChange = new EventEmitter();

  get attrs(): AstRadioAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() {
  }

  ngOnInit() {
  }

  modelChange(flag: boolean) {
    this.ngModelChange.emit(flag);
  }
}
