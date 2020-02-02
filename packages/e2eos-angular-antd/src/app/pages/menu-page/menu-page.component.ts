import { Component, OnInit } from '@angular/core';
import { TAG_NAME, NODE_CONFIG } from 'src/app/components/menu/menu.component';
import { AstNode } from 'e2eos-common';
import { TAG_NAME as ITEM_TAG_NAME, NODE_CONFIG as ITEM_NODE_CONFIG } from 'src/app/components/menu-item/menu-item.component';
import { TAG_NAME as SUBMENU_NAME, NODE_CONFIG as SUBMENU_CONFIG } from 'src/app/components/submenu/submenu.component';
import { TAG_NAME as GROUP_NAME, NODE_CONFIG as GROUP_CONFIG } from 'src/app/components/menu-group/menu-group.component';

@Component({
  selector: 'e2eos-ng-antd-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.values,
    children: [{
      tag: ITEM_TAG_NAME,
      attrs: ITEM_NODE_CONFIG.values,
      children: [ 'Item 1' ]
    }, {
      tag: SUBMENU_NAME,
      attrs: SUBMENU_CONFIG.values,
      children: [{
        tag: ITEM_TAG_NAME,
        attrs: ITEM_NODE_CONFIG.values,
        children: [ 'Item 2' ]
      }, {
        tag: GROUP_NAME,
        attrs: GROUP_CONFIG.values,
        children: [{
          tag: ITEM_TAG_NAME,
          attrs: ITEM_NODE_CONFIG.values,
          children: [ 'Group item 1' ]
        }, {
          tag: ITEM_TAG_NAME,
          attrs: ITEM_NODE_CONFIG.values,
          children: [ 'Group item 2' ]
        }]
      }, {
        tag: SUBMENU_NAME,
        attrs: SUBMENU_CONFIG.values,
        children: [{
          tag: ITEM_TAG_NAME,
          attrs: ITEM_NODE_CONFIG.values,
          children: [ 'Sub Menu Item 1' ]
        }, {
          tag: SUBMENU_NAME,
          attrs: SUBMENU_CONFIG.values,
          children: [{
            tag: ITEM_TAG_NAME,
            attrs: ITEM_NODE_CONFIG.values,
            children: [ 'Sub Menu Item 2' ]
          }]
        }]
      }]
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
