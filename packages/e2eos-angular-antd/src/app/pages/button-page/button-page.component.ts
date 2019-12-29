import { Component, OnInit } from '@angular/core';
import { AstNode } from 'e2eos-common';
import { TAG_NAME, NODE_CONFIG } from 'src/app/components/button/button.component';

@Component({
  selector: 'e2eos-ng-antd-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss']
})
export class ButtonPageComponent implements OnInit {

  node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.values,
    children: NODE_CONFIG.children
  };

  constructor() { }

  ngOnInit() {
  }

}
