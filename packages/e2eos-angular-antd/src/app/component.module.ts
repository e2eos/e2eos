import {NgModule} from '@angular/core';
import {IconsProviderModule} from './icons-provider.module';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgJsonEditorModule} from 'ang-jsoneditor';
import {GridRowComponent} from './components/grid-row/grid-row.component';
import {GridColComponent} from './components/grid-col/grid-col.component';
import {JsonEditorComponent} from './components/json-editor/json-editor.component';
import {ButtonComponent} from './components/button/button.component';
import {ContainerComponent} from './components/container/container.component';
import {IconComponent} from './components/icon/icon.component';
import {InputComponent} from './components/input/input.component';
import {InputGroupComponent} from './components/input-group/input-group.component';
import {LayoutContentComponent} from './components/layout-content/layout-content.component';
import {LayoutFooterComponent} from './components/layout-footer/layout-footer.component';
import {LayoutHeaderComponent} from './components/layout-header/layout-header.component';
import {LayoutSiderComponent} from './components/layout-sider/layout-sider.component';


@NgModule({
  entryComponents: [
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent,
    GridRowComponent,
    GridColComponent,
    InputComponent,
    InputGroupComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSiderComponent
  ],
  declarations: [
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent,
    GridRowComponent,
    GridColComponent,
    InputComponent,
    InputGroupComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSiderComponent
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
    GridRowComponent,
    GridColComponent,
    InputComponent,
    InputGroupComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSiderComponent
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
})
export class ComponentModule {
}
