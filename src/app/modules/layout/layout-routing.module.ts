import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  { path: '', component: LayoutComponent, children:[
    { path: '', loadChildren: '../inicio/inicio.module#InicioModule' },
    { path: 'ejemplo', loadChildren: '../ejemplo/ejemplo.module#EjemploModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
