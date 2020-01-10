import {Component, OnInit} from '@angular/core';
import {AstNode} from 'e2eos-common';
import {TAG_NAME as ROW_TAG_NAME, NODE_CONFIG as ROW_NODE_CONFIG} from '../../components/grid-row/grid-row.component';
import {TAG_NAME as COL_TAG_NAME, NODE_CONFIG as COL_NODE_CONFIG} from '../../components/grid-col/grid-col.component';

@Component({
  selector: 'e2eos-ng-antd-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss']
})
export class GridPageComponent implements OnInit {

  rowNode: AstNode = {
    tag: ROW_TAG_NAME,
    attrs: ROW_NODE_CONFIG.values,
    children: ROW_NODE_CONFIG.children
  };

  colNode: AstNode = {
    tag: COL_TAG_NAME,
    attrs: COL_NODE_CONFIG.values,
    children: COL_NODE_CONFIG.children
  };

  constructor() {
  }

  ngOnInit() {
  }
}
