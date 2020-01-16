import {Component, OnInit} from '@angular/core';
import {AstNode} from 'e2eos-common/index';
import {NODE_CONFIG as RADIO_NODE_CONFIG, TAG_NAME as RADIO_TAG_NAME} from '../../components/radio/radio.component';
import {
  NODE_CONFIG as RADIO_BUTTON_NODE_CONFIG,
  TAG_NAME as RADIO_BUTTON_TAG_NAME
} from '../../components/radio-button/radio-button.component';
import {
  NODE_CONFIG as RADIO_GROUP_NODE_CONFIG,
  TAG_NAME as RADIO_GROUP_TAG_NAME
} from '../../components/radio-group/radio-group.component';

@Component({
  selector: 'e2eos-ng-antd-radio-page',
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.scss']
})
export class RadioPageComponent implements OnInit {

  radioGroupNode: AstNode = {
    tag: RADIO_GROUP_TAG_NAME,
    attrs: RADIO_GROUP_NODE_CONFIG.values,
    children: RADIO_NODE_CONFIG.children
  };

  radioNode: AstNode = {
    tag: RADIO_TAG_NAME,
    attrs: RADIO_NODE_CONFIG.values,
    children: RADIO_NODE_CONFIG.children
  };

  radioButtonNode: AstNode = {
    tag: RADIO_BUTTON_TAG_NAME,
    attrs: RADIO_BUTTON_NODE_CONFIG.values,
    children: RADIO_BUTTON_NODE_CONFIG.children
  };

  constructor() {
  }

  ngOnInit() {
  }

}
