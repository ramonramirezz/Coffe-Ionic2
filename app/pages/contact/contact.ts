import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';
import {Coffes} from '../../providers/coffes/coffes';
import {ModalContainsPage} from '../modal-contains/modal-contains';

@Component({
  templateUrl: 'build/pages/contact/contact.html',
  providers: [Coffes]
})
export class ContactPage {
  public foundFrappe;
  public test = 'hola';
  constructor(private nav: NavController,
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

  openModal(item) {
  let modal = Modal.create(ModalContainsPage, {item});
  this.nav.present(modal);
  }
}
