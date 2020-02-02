import { Component, OnInit } from '@angular/core';
import {AstNode} from 'e2eos-common/index';
import {NODE_CONFIG, TAG_NAME} from '../../components/collapse/collapse.component';

@Component({
  selector: 'e2eos-ng-antd-collapse-page',
  templateUrl: './collapse-page.component.html',
  styleUrls: ['./collapse-page.component.scss']
})
export class CollapsePageComponent implements OnInit {

  node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.values,
    children: NODE_CONFIG.children
  };
  constructor() { }

  ngOnInit() {
  }

}
