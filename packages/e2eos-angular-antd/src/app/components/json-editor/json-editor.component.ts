import { Component, OnInit, ViewChild, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { JsonEditorComponent as JsonComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { Subject } from 'rxjs';
import { throttleTime, delay, sampleTime, last } from 'rxjs/operators';

@Component({
  selector: 'e2eos-ng-antd-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JsonEditorComponent implements OnInit {

  public editorOptions: JsonEditorOptions;

  private json;

  @Input() data: any;
  @Output() dataChange = new EventEmitter();

  changeStream = new Subject();

  @ViewChild(JsonComponent, { static: true }) editor: JsonComponent;
  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'code'; // set only one mode
    // this.editorOptions.expandAll = true;
  }

  ngOnInit() {
    this.json = this.data;
  }

  onDataChange() {
    const json = this.editor.get();
    this.dataChange.emit(json);
  }

}
