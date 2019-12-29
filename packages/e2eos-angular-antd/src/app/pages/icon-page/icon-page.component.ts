import { Component, OnInit } from '@angular/core';
import { TAG_NAME, NODE_CONFIG } from 'src/app/components/icon/icon.component';
import { AstNode } from 'e2eos-common';

@Component({
  selector: 'e2eos-ng-antd-icon-page',
  templateUrl: './icon-page.component.html',
  styleUrls: ['./icon-page.component.scss']
})
export class IconPageComponent implements OnInit {

  node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.values,
    children: NODE_CONFIG.children
  };

  constructor() { }

  ngOnInit() {
  }

}
