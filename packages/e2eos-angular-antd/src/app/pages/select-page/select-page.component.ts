import { Component, OnInit } from '@angular/core';
import { AstNode } from 'e2eos-common';
import { SELECT_TAG_NAME, SELECT_NODE_CONFIG, OPTION_TAG_NAME, OPTION_NODE_CONFIG, OPTION_GROUP_TAG_NAME } from 'src/app/components/select/select.component';

@Component({
  selector: 'e2eos-ng-antd-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss']
})
export class SelectPageComponent implements OnInit {

  node: AstNode = {
    tag: SELECT_TAG_NAME,
    attrs: {
      ...SELECT_NODE_CONFIG.values,
      ngModel: 'OPTION 1'
    },
    children: [
      {
        tag: OPTION_TAG_NAME,
        attrs: {
          ...OPTION_NODE_CONFIG.values,
          nzValue: 'OPTION 1',
          nzLabel: 'OPTION 1',
        },
        children: []
      },
      {
        tag: OPTION_GROUP_TAG_NAME,
        attrs: {
          nzLabel: 'GROUP 1'
        },
        children: [      {
          tag: OPTION_TAG_NAME,
          attrs: {
            ...OPTION_NODE_CONFIG.values,
            nzValue: 'OPTION 2',
            nzLabel: 'OPTION 2',
          },
          children: []
        }]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
