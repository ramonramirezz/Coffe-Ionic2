import {Component} from '@angular/core';
import {Modal,NavController} from 'ionic-angular';
import {Coffes} from '../../providers/coffes/coffes';
import {ModalContainsPage} from '../modal-contains/modal-contains';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Coffes]
})
export class HomePage {
  public foundCoffe;
  constructor(private nav: NavController,
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

  openModal(item) {
  let modal = Modal.create(ModalContainsPage, {item});
  this.nav.present(modal);
  }

}
