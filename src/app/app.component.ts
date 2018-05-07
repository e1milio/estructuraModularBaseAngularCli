import { Component, OnInit } from '@angular/core';
import { EnvService } from './services/env.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent implements OnInit {

  constructor(
    public _envService:EnvService
  ) {}

  ngOnInit(){

    console.log(this._envService.env.app_name + " is running");

  }

}
