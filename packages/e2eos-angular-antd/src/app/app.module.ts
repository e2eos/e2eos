import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

import {ComponentModule} from './component.module';
import {ButtonPageComponent} from './pages/button-page/button-page.component';
import {IconPageComponent} from './pages/icon-page/icon-page.component';
import {GridPageComponent} from './pages/grid-page/grid-page.component';
import {LayoutFooterComponent} from './components/layout-footer/layout-footer.component';
import {LayoutHeaderComponent} from './components/layout-header/layout-header.component';
import {LayoutSiderComponent} from './components/layout-sider/layout-sider.component';
import {LayoutContentComponent} from './components/layout-content/layout-content.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ButtonPageComponent,
    IconPageComponent,
    GridPageComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
