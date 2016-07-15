import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';
import {Coffes} from '../../providers/coffes/coffes';
import {ModalContainsPage} from '../modal-contains/modal-contains';

@Component({
  templateUrl: 'build/pages/about/about.html',
  providers: [Coffes]
})
export class AboutPage {
  public foundCap;
  constructor(private nav: NavController,
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

    openModal(item) {
    let modal = Modal.create(ModalContainsPage, {item});
    this.nav.present(modal);
    }
}
