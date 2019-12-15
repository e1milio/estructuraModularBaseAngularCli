import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routes */
import { MainRoutingModule } from './main-routing.module';

/* Components */
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

/* Pages Components */
import { InicioComponent } from './pages/inicio/inicio.component';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';

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
