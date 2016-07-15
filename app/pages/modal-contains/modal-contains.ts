import { Component } from '@angular/core';
import { Platform, NavParams, ViewController, NavController } from 'ionic-angular';

/*
  Generated class for the ModalContainsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-contains/modal-contains.html',
})
export class ModalContainsPage {
  public item;
  constructor(private nav: NavController,
              private platform: Platform,
              private params: NavParams,
              private viewCtrl: ViewController) {

        this.item =  this.params.get('item');

  }

  dismiss() {
  this.viewCtrl.dismiss();
  }

}
