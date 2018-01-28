import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {AutocompletePage} from './AutocompletePage';

@Component({
  templateUrl: 'home.html'
})

export class HomePage {
  address;

  constructor(
    private navCtrl: NavController,
    private ModalCtrl:ModalController
  ) {
    this.address = {
      place: ''
    };
  }

  showAddressModal () {
    let modal = this.ModalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
    });
    modal.present();
  }
}