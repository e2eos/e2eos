import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-radio-group';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    ngModel: 'A',
    nzName: 'group',
    nzDisabled: false,
    nzSize: 'default',
    nzButtonStyle: 'outline'
  }),
  attrs: [
    {
      key: 'ngModel',
      type: 'input',
      name: 'ngModel',
      desc: '指定选中的 nz-radio 的 value 值'
    },
    {
      key: 'nzName',
      type: 'input',
      name: 'nzName',
      desc: 'nz-radio-group 下所有 input[type="radio"] 的 name 属性'
    },
    {
      key: 'nzDisabled',
      type: 'boolean',
      name: 'nzDisabled',
      desc: '设定所有 nz-radio disable 状态'
    },
    {
      key: 'nzSize',
      type: 'select',
      name: 'nzSize',
      clearable: false,
      options: [
        {
          label: 'large',
          value: 'large'
        },
        {
          label: 'small',
          value: 'small'
        },
        {
          label: 'default',
          value: 'default'
        }
      ],
      desc: '大小，只对按钮样式生效'
    },
    {
      key: 'nzButtonStyle',
      type: 'input',
      name: 'nzButtonStyle',
      clearable: false,
      options: [
        {
          label: 'outline',
          value: 'outline'
        },
        {
          label: 'solid',
          value: 'solid'
        }
      ],
      desc: 'RadioButton 的风格样式，目前有描边和填色两种风格'
    }
  ],
  children: []
};

export interface AstRadioGroupAttrs {
  ngModel?: string;
  nzName?: string;
  nzDisabled?: boolean;
  nzSize?: 'large' | 'small' | 'default';
  nzButtonStyle?: 'outline' | 'solid';
}

@Component({
  selector: 'e2eos-ng-antd-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements ComponentBase, OnInit {
  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };
  @Output() ngModelChange = new EventEmitter();

  get attrs(): AstRadioGroupAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  modelChange(flag: boolean) {
    this.ngModelChange.emit(flag);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
