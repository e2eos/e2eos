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

@NgModule({
  entryComponents: [
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent
  ],
  declarations: [
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent,
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
    IconComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class ComponentModule { }
