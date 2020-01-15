import { Component, OnInit } from '@angular/core';
import {AstNode} from 'e2eos-common/index';
import { TAG_NAME, NODE_CONFIG } from 'src/app/components/input-number/input-number.component';

@Component({
  selector: 'e2eos-ng-antd-input-number-page',
  templateUrl: './input-number-page.component.html',
  styleUrls: ['./input-number-page.component.scss']
})
export class InputNumberPageComponent implements OnInit {

  node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.values,
    children: NODE_CONFIG.children
  };
  constructor() { }

  ngOnInit() {
  }

}
