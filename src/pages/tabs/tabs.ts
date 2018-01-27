import { MainPage } from './../main/main';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MainPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
