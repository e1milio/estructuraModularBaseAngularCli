import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: './modules/layout/layout.module#LayoutModule' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
