import { Component, OnInit, Input } from '@angular/core';
import { AstNode, NodeConfig } from 'e2eos-common';

export const SELECT_TAG_NAME = 'e2eos-ng-antd-select';

export const SELECT_NODE_CONFIG: NodeConfig = {
  name: SELECT_TAG_NAME,
  values: Object.freeze({
    ngModel: null,
    nzAutoClearSearchValue: true,
    nzAllowClear: false,
    nzOpen: false,
    nzAutoFocus: false,
    nzDisabled: false,
    nzDropdownClassName: null,
    nzDropdownMatchSelectWidth: true,
    nzDropdownStyle: null,
    nzCustomTemplate: null,
    nzServerSearch: false,
    nzFilterOption: null,
    nzMaxMultipleCount: Infinity,
    nzMode: 'default',
    nzNotFoundContent: null,
    nzPlaceHolder: null,
    nzShowArrow: true,
    nzShowSearch: false,
    nzSize: 'default',
    nzSuffixIcon: null,
    nzRemoveIcon: null,
    nzClearIcon: null,
    nzMenuItemSelectedIcon: null,
    nzTokenSeparators: [],
    nzLoading: false,
    nzMaxTagCount: null,
    nzMaxTagPlaceholder: null,
  }),
  attrs: [
    {
      key: 'ngModel',
      type: 'string',
      name: 'ngModel',
      desc: '当前选中的 nz-option 的 nzValue 值，可双向绑定，当 nzMode 为 multiple 或 tags 时，ngModel 为数组'
    },
    {
      key: 'nzAutoClearSearchValue',
      type: 'boolean',
      name: 'nzAutoClearSearchValue',
      desc: '是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效'
    },
    {
      key: 'nzAllowClear',
      type: 'boolean',
      name: 'nzAllowClear',
      desc: '支持清除'
    },
    {
      key: 'nzOpen',
      type: 'boolean',
      name: 'nzOpen',
      desc: '下拉菜单是否打开，可双向绑定',
    },
    {
      key: 'nzAutoFocus',
      type: 'boolean',
      name: 'nzAutoFocus',
      desc: '默认获取焦点',
    },
    {
      key: 'nzDisabled',
      type: 'boolean',
      name: 'nzDisabled',
      desc: '是否禁用',
    },
    {
      key: 'nzDropdownClassName',
      type: 'string',
      name: 'nzDropdownClassName',
      desc: '下拉菜单的 className 属性',
    },
    {
      key: 'nzDropdownMatchSelectWidth',
      type: 'boolean',
      name: 'nzDropdownMatchSelectWidth',
      desc: '下拉菜单和选择器同宽',
    },
    {
      key: 'nzDropdownStyle',
      type: 'string',
      name: 'nzDropdownStyle',
      desc: '下拉菜单的 style 属性',
    },
    {
      key: 'nzCustomTemplate',
      type: 'string',
      name: 'nzCustomTemplate',
      desc: '自定义选择框的Template内容',
    },
    {
      key: 'nzServerSearch',
      type: 'boolean',
      name: 'nzServerSearch',
      desc: '是否使用服务端搜索，当为 true 时，将不再在前端对 nz-option 进行过滤',
    },
    {
      key: 'nzMaxMultipleCount',
      type: 'number',
      name: 'nzMaxMultipleCount',
      desc: '最多选中多少个标签',
    },
    {
      key: 'nzMode',
      type: 'select',
      name: 'nzMode',
      desc: '设置 nz-select 的模式',
      clearable: false,
      options: [{
        label: 'multiple',
        value: 'multiple'
      }, {
        label: 'tags',
        value: 'tags'
      }, {
        label: 'default',
        value: 'default'
      }]
    },
    {
      key: 'nzNotFoundContent',
      type: 'string',
      name: 'nzNotFoundContent',
      desc: '当下拉列表为空时显示的内容'
    },
    {
      key: 'nzPlaceHolder',
      type: 'string',
      name: 'nzPlaceHolder',
      desc: '选择框默认文字'
    },
    {
      key: 'nzShowArrow',
      type: 'boolean',
      name: 'nzShowArrow',
      desc: '是否显示下拉小箭头'
    },
    {
      key: 'nzShowSearch',
      type: 'boolean',
      name: 'nzShowSearch',
      desc: '使单选模式可搜索'
    },
    {
      key: 'nzSize',
      type: 'select',
      name: 'nzSize',
      desc: '选择框大小',
      clearable: false,
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
      key: 'nzSuffixIcon',
      type: 'string',
      name: 'nzSuffixIcon',
      desc: '自定义的选择框后缀图标'
    },
    {
      key: 'nzRemoveIcon',
      type: 'string',
      name: 'nzRemoveIcon',
      desc: '自定义的多选框清除图标'
    },
    {
      key: 'nzClearIcon',
      type: 'string',
      name: 'nzClearIcon',
      desc: '自定义的多选框清空图标'
    },
    {
      key: 'nzMenuItemSelectedIcon',
      type: 'string',
      name: 'nzMenuItemSelectedIcon',
      desc: '自定义当前选中的条目图标'
    },
    {
      key: 'nzTokenSeparators',
      type: 'string',
      name: 'nzTokenSeparators',
      desc: '在 tags 和 multiple 模式下自动分词的分隔符'
    },
    {
      key: 'nzLoading',
      type: 'boolean',
      name: 'nzLoading',
      desc: '加载中状态'
    },
    {
      key: 'nzMaxTagCount',
      type: 'number',
      name: 'nzMaxTagCount',
      desc: '最多显示多少个 tag'
    },
    {
      key: 'nzMaxTagPlaceholder',
      type: 'string',
      name: 'nzMaxTagPlaceholder',
      desc: '隐藏 tag 时显示的内容'
    },
  ],
  children: []
};

export interface AstSelectAttrs {
  ngModel: any;
  nzAutoClearSearchValue: boolean;
  nzAllowClear: boolean;
  nzOpen: boolean;
  nzAutoFocus: boolean;
  nzDisabled: boolean;
  nzDropdownClassName: string;
  nzDropdownMatchSelectWidth: boolean;
  nzDropdownStyle: any;
  nzCustomTemplate: any;
  nzServerSearch: boolean;
  nzFilterOption: any;
  nzMaxMultipleCount: number;
  nzMode: 'multiple' | 'tags' | 'default';
  nzNotFoundContent: any;
  nzPlaceHolder: string;
  nzShowArrow: boolean;
  nzShowSearch: boolean;
  nzSize: 'large' | 'small' | 'default';
  nzSuffixIcon: any;
  nzRemoveIcon: any;
  nzClearIcon: any;
  nzMenuItemSelectedIcon: any;
  nzTokenSeparators: string[];
  nzLoading: boolean;
  nzMaxTagCount: number;
  nzMaxTagPlaceholder: any;
}

export const OPTION_TAG_NAME = 'e2eos-ng-antd-option';

export const OPTION_NODE_CONFIG: NodeConfig = {
  name: OPTION_TAG_NAME,
  values: Object.freeze({
    nzDisabled: false,
    nzLabel: '',
    nzValue: null,
    nzHide: false,
    nzCustomContent: false
  }),
  attrs: [
    {
      key: 'nzDisabled',
      type: 'boolean',
      name: 'nzDisabled',
      desc: '是否禁用'
    },
    {
      key: 'nzLabel',
      type: 'string',
      name: 'nzLabel',
      desc: '选中该 nz-option 后，nz-select 中显示的文字'
    },
    {
      key: 'nzValue',
      type: 'string',
      name: 'nzValue',
      desc: 'nz-select 中 ngModel 的值'
    },
    {
      key: 'nzHide',
      type: 'boolean',
      name: 'nzHide',
      desc: '是否在选项列表中隐藏改选项'
    },
    {
      key: 'nzCustomContent',
      type: 'boolean',
      name: 'nzCustomContent',
      desc: '是否自定义在下拉菜单中的Template内容，当为 true 时，nz-option 包裹的内容将直接渲染在下拉菜单中'
    },
  ],
  children: []
};

export interface AstOptionAttrs {
  nzDisabled: boolean;
  nzLabel: string;
  nzValue: any;
  nzHide: boolean;
  nzCustomContent: boolean;
}

export const OPTION_GROUP_TAG_NAME = 'e2eos-ng-antd-option-group';

export const OPTION_GROUP_NODE_CONFIG: NodeConfig = {
  name: OPTION_TAG_NAME,
  values: Object.freeze({
    nzLabel: ''
  }),
  attrs: [
    {
      key: 'nzLabel',
      type: 'string',
      name: 'nzLabel',
      desc: '组名'
    },
  ],
  children: []
};

export interface AstOptionGroupAttrs {
  nzLabel: string;
}

@Component({
  selector: 'e2eos-ng-antd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() node: AstNode = {
    tag: SELECT_TAG_NAME,
    attrs: SELECT_NODE_CONFIG.attrs,
    children: SELECT_NODE_CONFIG.children
  };

  get attrs() {
    return this.node.attrs || SELECT_NODE_CONFIG.attrs;
  }

  constructor() { }

  ngOnInit() {
  }
}
