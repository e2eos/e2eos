import { Component, OnInit } from '@angular/core';
import { AstNode } from 'e2eos-common';
import { TAG_NAME, NODE_CONFIG } from 'src/app/components/input/input.component';
import { TAG_NAME as TAG_NAME2, NODE_CONFIG as NODE_CONFIG2 } from 'src/app/components/input-group/input-group.component';

@Component({
  selector: 'e2eos-ng-antd-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {

  node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.values,
    children: NODE_CONFIG.children
  };

  node2: AstNode = {
    tag: TAG_NAME2,
    attrs: NODE_CONFIG2.values,
    children: [{
      tag: TAG_NAME,
      attrs: NODE_CONFIG.values,
      children: NODE_CONFIG.children
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
