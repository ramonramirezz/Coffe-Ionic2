import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Coffes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Coffes {

  constructor(private http: Http) {

  }
  getCoffes() {
         let coffes = this.http.get('https://demo8866596.mockable.io/getCoffe');
         return coffes;
     }

  getCapuccino() {
         let cap = this.http.get('https://demo8866596.mockable.io/getCapuccino');
         return cap;
     }

  getFrappe(){
        let frappe = this.http.get('https://demo8866596.mockable.io/getFrappe');
        return frappe;
  }
}
