import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Coffes} from '../../providers/coffes/coffes';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Coffes]
})
export class HomePage {
  public foundCoffe;
  constructor(private navController: NavController,
              private service: Coffes) {

          this.getCoffes();
  }

  getCoffes(){
    this.service.getCoffes().subscribe(
        data => {
            this.foundCoffe = data.json();
        },
        err => console.error(err),
        () => console.log('getCoffes completed')
    );
  }

}
