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

  calculateFat() {
    if ( this.profile.gender == "male" ) {
      this.profile.fatperbase = 86.010;
      this.profile.fatmod1 = -70.041;
      this.profile.fatmod2 = 36.76;
      this.profile.waist = 0;
    } else {
      this.profile.fatperbase = 163.205;
      this.profile.fatmod1 = -97.684;
      this.profile.fatmod2 = -78.387;
    }
    if ( this.profile.units == "metric" ) {
      this.profile.height = this.profile.height * 0.3937;
      this.profile.weightfinal = this.profile.weight * 2.2;
      this.profile.abdomenfinal = this.profile.abdomen * 0.3937;
      this.profile.waistfinal = this.profile.waist * 0.3937;
      this.profile.neckfinal = this.profile.neck * 0.3937;
    } else {
      this.profile.height = ( this.profile.heightfeet * 12  + this.profile.heightinches * 1 );
      this.profile.weightfinal = this.profile.weight;
      this.profile.abdomenfinal = this.profile.abdomen;
      this.profile.waistfinal = this.profile.waist;
      this.profile.neckfinal = this.profile.neck;
    }
    this.profile.finalfatper = Math.round( ( this.profile.fatperbase * Math.log10( this.profile.abdomenfinal * 1 + this.profile.waistfinal * 1 - this.profile.neckfinal * 1 ) + this.profile.fatmod1 * Math.log10( this.profile.height * 1 ) + this.profile.fatmod2 ) * 100) / 100;
    this.profile.finalfatmass = Math.round( ( this.profile.weightfinal * (this.profile.finalfatper / 100 ) ) * 100) / 100;
    this.profile.finalleanmass = Math.round( ( this.profile.weightfinal - this.profile.finalfatmass ) * 100) / 100;
    console.log(this.profile);
  }

}
