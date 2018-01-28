import {Component, NgZone} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {GoogleMap,GoogleMapsEvent} from '@ionic-native/google-maps';
import { NavController} from 'ionic-angular'; 
import { MainPage } from '../main/main';
declare var google; 

  @Component({
    templateUrl: 'AutocompletePage.html'
})

export class AutocompletePage {
  autocompleteItems;
  autocomplete;

  latitude: number = 0;
  longitude: number = 0;
  geo: any

  service = new google.maps.places.AutocompleteService();

  constructor (public navCtrl: NavController, public viewCtrl: ViewController, private zone: NgZone) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
    this.geo = item;
    this.geoCode(this.geo);//convert Address to lat and long
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
      me.autocompleteItems = []; 
      me.zone.run(function () {
        predictions.forEach(function (prediction) {
          me.autocompleteItems.push(prediction.description);
        });
      });
    });
  }

  //convert Address string to lat and long
  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
    this.latitude = results[0].geometry.location.lat();
    this.longitude = results[0].geometry.location.lng();
    //alert("lat: " + this.latitude + ", long: " + this.longitude);
    this.navCtrl.push(MainPage, {
    firstPassed: this.latitude,
      secondPassed: this.longitude
});
   });
 }
}