import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routes */
import { MainRoutingModule } from './main-routing.module';

/* Components */
import { MainComponent } from './components/main/main.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

/* Pages Components */
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { EjemploComponent } from './components/pages/ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent,
    InicioComponent,
    EjemploComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
