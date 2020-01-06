import { Component, OnInit, Input } from '@angular/core';
import { ComponentBase, AstNode, NodeConfig, } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-input';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    disabled: false,
    nzSize: 'default',
    type: 'input',
    placeholder: '输入框'
  }),
  attrs: [
    {
      key: 'placeholder',
      type: 'input',
      name: 'placeholder',
      desc: '占位符'
    },
    {
      key: 'disabled',
      type: 'boolean',
      name: 'disabled',
      desc: '是否禁用'
    },
    {
      key: 'nzSize',
      type: 'select',
      name: 'nzSize',
      clearable: false,
      desc: '设置输入框大小，可选值为 small, large 或者 default',
      options: [{
        label: 'large',
        value: 'large'
      }, {
        label: 'small',
        value: 'small'
      }, {
        label: 'default',
        value: 'default'
      }]
    },
    {
      key: 'type',
      type: 'select',
      name: 'type',
      clearable: false,
      desc: '设置输入框类型',
      options: [{
        label: 'input',
        value: 'input'
      }, {
        label: 'textarea',
        value: 'textarea'
      }]
    }
  ],
  children: []
};

export interface AstInputAttrs {
  nzSize?: 'large' | 'small' | 'default';
  type?: 'input' | 'textarea';
  disabled?: boolean;
  placeholder?: string;
}

@Component({
  selector: 'e2eos-ng-antd-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ComponentBase, OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstInputAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() { }

  ngOnInit() {
  }

}
