import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Routes */
import { LoginRoutingModule } from './login-routing.module';

/* Components */
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  
})
export class LoginModule { }
