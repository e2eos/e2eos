import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { IconPageComponent } from './pages/icon-page/icon-page.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { CollapsePageComponent } from './pages/collapse-page/collapse-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'button' },
  { path: 'button', component: ButtonPageComponent },
  { path: 'icon', component: IconPageComponent },
  { path: 'input', component: InputPageComponent },
  { path: 'grid', component: GridPageComponent },
  { path: 'layout', component: LayoutPageComponent },
  { path: 'card', component: CardPageComponent },
  { path: 'collapse', component: CollapsePageComponent },
  { path: 'menu', component: MenuPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
