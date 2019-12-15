import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routes */
import { AdminRoutingModule } from './admin-routing.module';

/* Components */
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';

/* Pages Components */
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminContentComponent,
    AdminFooterComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
