import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'napier museum';
  end = 'sastamangalam';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
   public firstParam;
  public secondParam;
  constructor(public navCtrl: NavController, public navParams: NavParams){
 
    this.firstParam = navParams.get("firstPassed");
    this.secondParam = navParams.get("secondPassed");
   //alert(this.firstParam);
  }

  ionViewDidLoad(){
    this.initMap();
  }


  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: {lat: this.firstParam, lng: this.secondParam}

    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}


// import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the MainPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-main',
//   templateUrl: 'main.html',
// })
// export class MainPage {
//   @ViewChild('map') mapElement : ElementRef;
//   map: GoogleMap;


//   constructor(public navCtrl: NavController, public navParams: NavParams, private _googleMaps: GoogleMaps) {
//   }

//   // ionViewDidLoad() {
//   //   console.log('ionViewDidLoad MainPage');
//   // }
//   ngAfterViewInit(){
//     this.initMap();
//   }
//   initMap(){
//     console.log("Keri");
//     let element = this.mapElement.nativeElement;
//     this.map = this._googleMaps.create(element);
//   }

// }


// SECOND
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker
//  } from '@ionic-native/google-maps';
//  import { Component } from "@angular/core/";
 
//  @IonicPage()
//  @Component({
//    selector: 'page-main',
//    templateUrl: 'main.html'
//  })
//  export class MainPage {
//    map: GoogleMap;
//    constructor(public navCtrl: NavController, public navParams: NavParams) { }
 
//    ionViewDidLoad() {
//     this.loadMap();
//    }
 
//   loadMap() {
 
//      let mapOptions: GoogleMapOptions = {
//        camera: {
//          target: {
//            lat: 43.0741904,
//            lng: -89.3809802
//          },
//          zoom: 18,
//          tilt: 30
//        }
//      };
 
//      this.map = GoogleMaps.create('map_canvas', mapOptions);
 
//      // Wait the MAP_READY before using any methods.
     
//      this.map.one(GoogleMapsEvent.MAP_READY)
//        .then(() => {
//          console.log('Map is ready!');
 
//          // Now you can use all methods safely.
//          this.map.addMarker({
//              title: 'Ionic',
//              icon: 'blue',
//              animation: 'DROP',
//              position: {
//                lat: 43.0741904,
//                lng: -89.3809802
//              }
//            })
//            .then(marker => {
//              marker.on(GoogleMapsEvent.MARKER_CLICK)
//                .subscribe(() => {
//                  alert('clicked');
//                });
//            });
 
//        });
//        console.log("ALL DONE!");
//    }
//  }
 