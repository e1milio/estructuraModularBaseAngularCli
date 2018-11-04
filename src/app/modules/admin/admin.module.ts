import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routes */
import { AdminRoutingModule } from './admin-routing.module';

/* Components */
import { AdminComponent } from './components/admin/admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';

/* Pages Components */
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminContentComponent,
    AdminFooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
