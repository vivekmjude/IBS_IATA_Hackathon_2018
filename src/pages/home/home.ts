import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user_name;

  constructor(public navCtrl: NavController, public navParam: NavParams) {
    this.user_name=navParam.get("name");
    console.log("Passed to Home ",this.user_name);


  }

}
