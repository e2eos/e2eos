import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-radio-button';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzAutoFocus: false,
    nzDisabled: false,
    ngModel: false,
    nzValue: 'A',
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
      desc: '指定当前是否选中，可双向绑定'
    },
    {
      key: 'nzValue',
      type: 'input',
      name: 'nzValue',
      desc: '设置 value，与 nz-radio-group 配合使用'
    }
  ],
  children: []
};

export interface AstRadioButtonAttrs {
  nzAutoFocus?: boolean;
  nzDisabled?: boolean;
  ngModel?: boolean;
  nzValue?: string;
  nzLabel?: string;
}
@Component({
  selector: 'e2eos-ng-antd-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements ComponentBase, OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };
  @Output() ngModelChange = new EventEmitter();

  get attrs(): AstRadioButtonAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }
  modelChange(flag: boolean) {
    this.ngModelChange.emit(flag);
  }
  constructor() { }

  ngOnInit() {
  }

}
