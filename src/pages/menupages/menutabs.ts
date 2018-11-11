import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'menutabs.html'
})
export class MenuTabsPage {

  menuTab1Root: any = 'KetoFAQPage';
  menuTab2Root: any = 'KetoIntroPage';
  menuIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.menuIndex = navParams.data.tabIndex || 0;
  }
}
