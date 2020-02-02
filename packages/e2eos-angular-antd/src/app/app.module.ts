import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ComponentModule } from './component.module';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { IconPageComponent } from './pages/icon-page/icon-page.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { CollapsePageComponent } from './pages/collapse-page/collapse-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ButtonPageComponent,
    IconPageComponent,
    GridPageComponent,
    InputPageComponent,
    GridPageComponent,
    LayoutPageComponent,
    CardPageComponent,
    CollapsePageComponent,
    MenuPageComponent,
    SelectPageComponent,
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
