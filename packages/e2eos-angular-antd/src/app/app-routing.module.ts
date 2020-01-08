import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { IconPageComponent } from './pages/icon-page/icon-page.component';
import { InputPageComponent } from './pages/input-page/input-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'button' },
  { path: 'button', component: ButtonPageComponent },
  { path: 'icon', component: IconPageComponent },
  { path: 'input', component: InputPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
