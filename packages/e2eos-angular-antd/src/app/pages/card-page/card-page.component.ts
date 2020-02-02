import {Component, OnInit} from '@angular/core';
import {AstNode} from 'e2eos-common/index';
import {TAG_NAME as CARD_TAG_NAME, NODE_CONFIG as CARD_NODE_CONFIG} from '../../components/card/card.component';
import {TAG_NAME as CARD_GRID_TAG_NAME, NODE_CONFIG as CARD_GRID_NODE_CONFIG} from '../../components/card-grid/card-grid.component';
import {TAG_NAME as CARD_META_TAG_NAME, NODE_CONFIG as CARD_META_NODE_CONFIG} from '../../components/card-meta/card-meta.component';
import {TAG_NAME as CARD_TAG_TAG_NAME, NODE_CONFIG as CARD_TAG_NODE_CONFIG} from '../../components/card-tab/card-tab.component';


@Component({
  selector: 'e2eos-ng-antd-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {

  cardNode: AstNode = {
    tag: CARD_TAG_NAME,
    attrs: CARD_NODE_CONFIG.values,
    children: CARD_NODE_CONFIG.children
  };

  cardMetaNode: AstNode = {
    tag: CARD_META_TAG_NAME,
    attrs: CARD_META_NODE_CONFIG.values,
    children: CARD_META_NODE_CONFIG.children
  };

  cardGridNode: AstNode = {
    tag: CARD_GRID_TAG_NAME,
    attrs: CARD_GRID_NODE_CONFIG.values,
    children: CARD_GRID_NODE_CONFIG.children
  };

  cardTabNode: AstNode = {
    tag: CARD_TAG_TAG_NAME,
    attrs: CARD_TAG_NODE_CONFIG.values,
    children: CARD_TAG_NODE_CONFIG.children
  };

  constructor() {
  }

  ngOnInit() {
  }

}
