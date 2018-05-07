import { Injectable } from '@angular/core';
import * as envJson from '../../../env.json'; //Se necesitó agregar un modulo comodín en typings.d.ts

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  public env:any;

  constructor() {
    this.env = (<any>envJson).env;
  }

}
