import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router)
    {}

  canActivate() {

    if ( localStorage.getItem('username') != null) {
      return true;
    }
    this._router.navigate(['/login'])
    return false;
  }


}
