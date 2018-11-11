import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Market } from '@ionic-native/market';

import { profileData } from '../../app/profile-data';

@IonicPage()
@Component({
  selector: 'page-pro',
  templateUrl: 'pro.html'
})

export class ProPage implements OnInit {

    private profile = profileData[0];

    weightdiff = 0;
    fatperdiff = 0;

    showProfilePage = true;


    constructor(private market: Market) {}

    openPro() {
        this.market.open('com.ketomatecalculatorpro.app');
    }

    hideProfilePage() {
        this.showProfilePage = false;
    }

    ngOnInit() {}

}
