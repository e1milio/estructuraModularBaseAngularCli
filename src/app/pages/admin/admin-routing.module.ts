import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children:[
    { path: '', component: InicioComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
