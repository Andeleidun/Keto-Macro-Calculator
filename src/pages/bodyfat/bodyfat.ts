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

  bodyFatInfo: string;

  showBodyFatInfo() {
    let doOnce = 0;
    if (this.bodyFatInfo != "show" && doOnce == 0) {
      this.bodyFatInfo = "show";
      doOnce++
    }
    if (this.bodyFatInfo == "show" && doOnce == 0) {
      this.bodyFatInfo = "hide";
      doOnce++;
    }
    console.log(this.bodyFatInfo);
  }

  ngOnInit() {
  }

  calculateMale() {
    if ( this.profile.units == "metric" ) {
      this.profile.height = this.profile.height * 0.3937;
      this.profile.weightfinal = this.profile.weight * 2.2;
      this.profile.abdomenfinal = this.profile.abdomen * 0.3937;
      this.profile.neckfinal = this.profile.neck * 0.3937;
    }
    if ( this.profile.units == "american" ) {
      this.profile.height = ( this.profile.heightfeet * 12  + this.profile.heightinches * 1 );
      this.profile.weightfinal = this.profile.weight;
      this.profile.abdomenfinal = this.profile.abdomen;
      this.profile.neckfinal = this.profile.neck;
    }
    this.profile.menfatper = 86.010 * Math.log10( this.profile.abdomenfinal * 1 - this.profile.neckfinal * 1 ) - 70.041 * Math.log10( this.profile.height * 1 ) + 36.76;
    this.profile.menfatmass = this.profile.weightfinal * ( this.profile.menfatper / 100 );
    this.profile.menleanmass = this.profile.weightfinal - this.profile.menfatmass;
    this.profile.finalfatper = Math.round(this.profile.menfatper * 100) / 100;
    this.profile.finalfatmass = Math.round(this.profile.menfatmass * 100) / 100;
    this.profile.finalleanmass = Math.round(this.profile.menleanmass * 100) / 100;
    console.log(this.profile);
  }

  calculateFemale() {
    if ( this.profile.units == "metric" ) {
      this.profile.height = this.profile.height * 0.3937;
      this.profile.weightfinal = this.profile.weight * 2.2;
      this.profile.abdomenfinal = this.profile.abdomen * 0.3937;
      this.profile.waistfinal = this.profile.waist * 0.3937;
      this.profile.neckfinal = this.profile.neck * 0.3937;
    }
    if ( this.profile.units == "american" ) {
      this.profile.height = ( this.profile.heightfeet * 12  + this.profile.heightinches * 1 );
      this.profile.weightfinal = this.profile.weight;
      this.profile.abdomenfinal = this.profile.abdomen;
      this.profile.waistfinal = this.profile.waist;
      this.profile.neckfinal = this.profile.neck;
    }
    this.profile.womenfatper = 163.205 * Math.log10( this.profile.abdomenfinal * 1 + this.profile.waistfinal * 1 - this.profile.neckfinal * 1 ) - 97.684 * Math.log10( this.profile.height * 1 ) - 78.387;
    this.profile.womenfatmass = this.profile.weightfinal * ( this.profile.womenfatper / 100 );
    this.profile.womenleanmass = this.profile.weightfinal - this.profile.womenfatmass;
    this.profile.finalfatper = Math.round(this.profile.womenfatper * 100) / 100;
    this.profile.finalfatmass = Math.round(this.profile.womenfatmass * 100) / 100;
    this.profile.finalleanmass = Math.round(this.profile.womenleanmass * 100) / 100;
    console.log(this.profile);
  }

}
