import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Routes */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';

/* Guards */
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
