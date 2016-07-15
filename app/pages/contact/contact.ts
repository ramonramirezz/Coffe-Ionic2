import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Coffes} from '../../providers/coffes/coffes';

@Component({
  templateUrl: 'build/pages/contact/contact.html',
  providers: [Coffes]
})
export class ContactPage {
  public foundFrappe;
  public test = 'hola';
  constructor(private navController: NavController,
              private service: Coffes) {

        this.getFrappe();
  }

  getFrappe(){
    this.service.getFrappe().subscribe(
        data => {
            this.foundFrappe = data.json();
        },
        err => console.error(err),
        () => console.log('getFrappes completed')
    );
  }
}
