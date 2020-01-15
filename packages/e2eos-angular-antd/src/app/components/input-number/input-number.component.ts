import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {AstNode, ComponentBase, NodeConfig} from 'e2eos-common/index';

export const TAG_NAME = 'e2eos-ng-antd-input-number';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    ngModel: 1,
    nzAutoFocus: false,
    nzDisabled: false,
    nzMax: 100,
    nzMin: -100,
    nzFormatter: (value: number) => `${value}`,
    nzParser: (value: string) => value.replace('$ ', ''),
    nzPrecision: '',
    nzSize: 'default',
    nzStep: 1,
    nzPlaceHolder: '选择默认文字',
    nzId: ''
  }),
  attrs: [
    {
      key: 'ngModel',
      type: 'input',
      name: 'ngModel',
      desc: '当前值，可双向绑定'
    },
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
      desc: '禁用'
    },
    {
      key: 'nzMax',
      type: 'input',
      name: 'nzMax',
      desc: '最大值'
    },
    {
      key: 'nzMin',
      type: 'input',
      name: 'nzMin',
      desc: '最小值'
    },
    {
      key: 'nzFormatter',
      type: 'input',
      name: 'nzFormatter',
      desc: '指定输入框展示值的格式'
    },
    {
      key: 'nzParser',
      type: 'input',
      name: 'nzParser',
      desc: '指定从 nzFormatter 里转换回数字的方式，和 nzFormatter 搭配使用'
    },
    {
      key: 'nzPrecision',
      type: 'input',
      name: 'nzPrecision',
      desc: '数值精度'
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
      desc: '输入框大小'
    },
    {
      key: 'nzStep',
      type: 'input',
      name: 'nzStep',
      desc: '每次改变步数，可以为小数'
    },
    {
      key: 'nzPlaceHolder',
      type: 'input',
      name: 'nzPlaceHolder',
      desc: '选择框默认文字'
    },
    {
      key: 'nzId',
      type: 'input',
      name: 'nzId',
      desc: '组件内部 input 的 id 值'
    }
  ],
  children: []
};

export interface AstInputNumberAttrs {
  ngModel?: number | string ;
  nzAutoFocus?: boolean;
  nzDisabled?: boolean;
  nzMax?: number;
  nzMin?: number;
  nzFormatter?: (value: number | string) => string | number;
  nzParser?: (value: string) => string | number;
  nzPrecision?: number;
  nzSize?: 'large' | 'small' | 'default';
  nzStep?: number | string;
  nzPlaceHolder?: string;
  nzId?: string;
}

@Component({
  selector: 'e2eos-ng-antd-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements ComponentBase, OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  @Output() ngModelChange = new EventEmitter();
  @Output() nzFocus = new EventEmitter();

  get attrs(): AstInputNumberAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() {
  }

  ngOnInit() {
  }

  modelChange(n: number) {
    this.ngModelChange.emit(n);
  }

   focus() {

  }

  blur() {

  }
}
