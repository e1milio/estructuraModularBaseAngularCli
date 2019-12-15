import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: './pages/main/main.module#MainModule' },
  { path: 'admin', canActivate: [AuthGuard], loadChildren: './pages/admin/admin.module#AdminModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
