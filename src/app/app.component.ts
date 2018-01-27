import { Component, ViewChild } from '@angular/core';
import { Nav,Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from './../pages/about/about';
import { HomePage } from './../pages/home/home';
import { MainPage } from './../pages/main/main';
import { LoginPage } from './../pages/login/login';
import firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;

  // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     statusBar.styleDefault();
  //     splashScreen.hide();
  //   });
  // }
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBJi8_E3h8p-8TkbVWIw8BZYsI9e8mCt0c",
        authDomain: "fir-2f2ca.firebaseapp.com",
        databaseURL: "https://fir-2f2ca.firebaseio.com",
        projectId: "fir-2f2ca",
        storageBucket: "fir-2f2ca.appspot.com",
        messagingSenderId: "714684655335"
    
    
      }
    );

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Main', component: MainPage },
      { title: 'About', component: AboutPage }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
 }
