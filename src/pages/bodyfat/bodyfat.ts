import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { profileData } from '../../app/profile-data';

import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bodyfat',
  templateUrl: 'bodyfat.html'
})

export class BodyFatPage implements OnInit {

  @Input() profile = profileData[0];

  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit() {
  }

  calculateMale() {
    this.profile.height = ( this.profile.heightfeet * 12  + this.profile.heightinches * 1 );
    this.profile.menfatper = 86.010 * Math.log10( this.profile.abdomen * 1 - this.profile.neck * 1 ) - 70.041 * Math.log10( this.profile.height * 1 ) + 36.76;
    this.profile.menfatmass = this.profile.weight * ( this.profile.menfatper / 100 );
    this.profile.menleanmass = this.profile.weight - this.profile.menfatmass;
    this.profile.finalfatper = Math.round(this.profile.menfatper * 100) / 100;
    this.profile.finalfatmass = Math.round(this.profile.menfatmass * 100) / 100;
    this.profile.finalleanmass = Math.round(this.profile.menleanmass * 100) / 100;
    console.log(this.profile);
  }

  calculateFemale() {
    this.profile.height = ( this.profile.heightfeet * 12  + this.profile.heightinches * 1 );
    this.profile.womenfatper = 163.205 * Math.log10( this.profile.abdomen * 1 + this.profile.waist * 1 - this.profile.neck * 1 ) - 97.684 * Math.log10( this.profile.height * 1 ) - 78.387;
    this.profile.womenfatmass = this.profile.weight * ( this.profile.womenfatper / 100 );
    this.profile.womenleanmass = this.profile.weight - this.profile.womenfatmass;
    this.profile.finalfatper = Math.round(this.profile.womenfatper * 100) / 100;
    this.profile.finalfatmass = Math.round(this.profile.womenfatmass * 100) / 100;
    this.profile.finalleanmass = Math.round(this.profile.womenleanmass * 100) / 100;
    console.log(this.profile);
  }

}
