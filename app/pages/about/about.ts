import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Coffes} from '../../providers/coffes/coffes';

@Component({
  templateUrl: 'build/pages/about/about.html',
  providers: [Coffes]
})
export class AboutPage {
  public foundCap;
  constructor(private navController: NavController,
              private service: Coffes) {

       this.getCap();
  }

    getCap(){
      this.service.getCapuccino().subscribe(
        data => {
          this.foundCap = data.json();
        },
        err => console.error(err),
        () => console.log('getCapuccinos completed')
      );
    }
}
