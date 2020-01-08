import { NgModule } from '@angular/core';

import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgJsonEditorModule } from 'ang-jsoneditor';

import { JsonEditorComponent } from './components/json-editor/json-editor.component';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import {GridColComponent} from './components/grid-col/grid-col.component';
import {GridRowComponent} from './components/grid-row/grid-row.component';

@NgModule({
  entryComponents: [
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent,
    InputComponent,
    InputGroupComponent,
    GridColComponent,
    GridRowComponent
  ],
  declarations: [
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent,
    InputComponent,
    InputGroupComponent,
    GridColComponent,
    GridRowComponent
  ],
  imports: [
    NgJsonEditorModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    NgZorroAntdModule,
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent,
    InputComponent,
    InputGroupComponent,
    GridColComponent,
    GridRowComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class ComponentModule { }
