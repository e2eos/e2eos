import { Component, OnInit } from '@angular/core';
import {AstNode} from 'e2eos-common/index';
import {NODE_CONFIG, TAG_NAME} from '../../components/radio/radio.component';

@Component({
  selector: 'e2eos-ng-antd-radio-page',
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.scss']
})
export class RadioPageComponent implements OnInit {

  radioNode: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.values,
    children: NODE_CONFIG.children
  };
  constructor() { }

  ngOnInit() {
  }

}
