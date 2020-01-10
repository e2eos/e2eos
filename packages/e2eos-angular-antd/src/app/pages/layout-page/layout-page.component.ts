import { Component, OnInit } from '@angular/core';
import {AstNode} from 'e2eos-common/index';
import {NODE_CONFIG as SIDER_NODE_CONFIG, TAG_NAME as SIDER_TAG_NAME} from '../../components/layout-sider/layout-sider.component';
import {NODE_CONFIG as CONTENT_NODE_CONFIG, TAG_NAME as CONTENT_TAG_NAME} from '../../components/layout-content/layout-content.component';
import {NODE_CONFIG as FOOTER_NODE_CONFIG, TAG_NAME as FOOTER_TAG_NAME} from '../../components/layout-footer/layout-footer.component';
import {NODE_CONFIG as HEADER_NODE_CONFIG, TAG_NAME as HEADER_TAG_NAME} from '../../components/layout-header/layout-header.component';

@Component({
  selector: 'e2eos-ng-antd-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {

  siderNode: AstNode = {
    tag: SIDER_TAG_NAME,
    attrs: SIDER_NODE_CONFIG.values,
    children: SIDER_NODE_CONFIG.children
  };

  contentNode: AstNode = {
    tag: CONTENT_TAG_NAME,
    attrs: CONTENT_NODE_CONFIG.values,
    children: CONTENT_NODE_CONFIG.children
  };

  headerNode: AstNode = {
    tag: HEADER_TAG_NAME,
    attrs: HEADER_NODE_CONFIG.values,
    children: HEADER_NODE_CONFIG.children
  };

  footerNode: AstNode = {
    tag: FOOTER_TAG_NAME,
    attrs: FOOTER_NODE_CONFIG.values,
    children: FOOTER_NODE_CONFIG.children
  };
  constructor() { }

  ngOnInit() {
  }

}
