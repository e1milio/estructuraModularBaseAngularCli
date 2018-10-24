import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public username:string;

  constructor(
    private _router: Router
  ) {
    this.username = 'emilio';
   }

  ngOnInit() {
    localStorage.removeItem('username');
    localStorage.clear();
  }

  login(){
    console.log("this.username: " + this.username);
    localStorage.setItem('username',this.username);
    console.log("localStorage username: " + localStorage.getItem('username'));
    this._router.navigate(['/dashboard/dashboard']);
  }

}
