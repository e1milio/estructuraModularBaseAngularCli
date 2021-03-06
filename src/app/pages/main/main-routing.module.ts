import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';

const routes: Routes = [
  { path: '', component: MainComponent, children:[
    { path: '', component: InicioComponent },
    { path: 'ejemplo', component: EjemploComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
