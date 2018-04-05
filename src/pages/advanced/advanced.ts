import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { profileData } from '../../app/profile-data';

import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-advanced',
  templateUrl: 'advanced.html'
})

export class AdvancedPage implements OnInit {

  @Input() profile = profileData[0];

  constructor(public navCtrl: NavController) {
    
  }

  advancedInfo: string;

  showAdvancedInfo() {
    let doOnce = 0;
    if (this.advancedInfo != "show" && doOnce == 0) {
      this.advancedInfo = "show";
      doOnce++
    }
    if (this.advancedInfo == "show" && doOnce == 0) {
      this.advancedInfo = "hide";
      doOnce++;
    }
    console.log(this.advancedInfo);
  }

  calculate() {
    this.profile.finalfatmass = this.profile.weight * ( this.profile.finalfatper / 100 );
    this.profile.finalleanmass = this.profile.weight - this.profile.finalfatmass;
    if ( this.profile.units == "american" ) {
      this.profile.bmr = 370 + ( 9.79 * this.profile.finalleanmass );
      this.profile.proteinratiom = 1;
    }
    if ( this.profile.units == "metric" ) {
      this.profile.bmr = 370 + ( 21.6 * this.profile.finalleanmass );
      this.profile.proteinratiom = 2.2;
    }
    this.profile.tef = this.profile.bmr / 10;
    this.profile.weightcaltotal = this.profile.weightcal * this.profile.weightmin;
    this.profile.cardiocaltotal = this.profile.cardiocal * this.profile.cardiomin;
    if ( this.profile.tdee == 0 || ( this.profile.tdee != this.profile.tdeetemp && this.profile.initialcalc == 0 ) ) {
      this.profile.tdee = ( this.profile.bmr + this.profile.tef ) * this.profile.actmod;
    }
    this.profile.calgoalbase = Math.round ( this.profile.tdee * this.profile.goalmod * 100 ) / 100;
    this.profile.calgoalex = Math.round( ( this.profile.tdee + this.profile.weightcaltotal + this.profile.cardiocaltotal ) * this.profile.goalmod * 100 ) / 100;
    this.profile.proteinratiofinal = this.profile.proteinratio * this.profile.proteinratiom;
    this.profile.proteingram = Math.round( this.profile.weight * this.profile.proteinratio * 100 ) / 100;
    this.profile.proteincaltotal = this.profile.proteingram * this.profile.proteincal;
    if ( this.profile.proteinper == 0 || ( this.profile.proteinper != this.profile.proteinpertemp && this.profile.initialcalc == 0 ) ) { 
      this.profile.proteinper = Math.round( ( this.profile.proteincaltotal / this.profile.calgoalbase ) * 10000 ) / 100;
    } else {
      this.profile.proteingram = Math.round( this.profile.proteinper * this.profile.calgoalbase / 4 ) / 100;
    }
    this.profile.proteinperex = Math.round( ( this.profile.proteincaltotal / this.profile.calgoalex ) * 10000 ) / 100;
    this.profile.carbcaltotal = this.profile.carbgram * this.profile.carbcal;
    if ( this.profile.carbper == 0 || ( this.profile.carbper != this.profile.carbpertemp && this.profile.initialcalc == 0 ) ) {
      this.profile.carbper = Math.round( ( this.profile.carbcaltotal / this.profile.calgoalbase ) * 10000 ) / 100;
    } else {
      this.profile.carbgram = Math.round( this.profile.carbper * this.profile.calgoalbase / 4 ) / 100;
    }
    this.profile.carbperex = Math.round( ( this.profile.carbcaltotal / this.profile.calgoalex ) * 10000 ) / 100;
    this.profile.fatcaltotal = this.profile.calgoalbase - this.profile.proteincaltotal - this.profile.carbcaltotal;
    this.profile.fatcalextotal = this.profile.calgoalex - this.profile.proteincaltotal - this.profile.carbcaltotal;
    this.profile.fatgram = Math.round( this.profile.fatcaltotal / this.profile.fatcal * 100 ) / 100;
    this.profile.fatgramex = Math.round( this.profile.fatcalextotal / this.profile.fatcal * 100 ) / 100;
    if ( this.profile.fatper == 0 || ( this.profile.fatper != this.profile.fatpertemp && this.profile.initialcalc == 0 ) ) {
      this.profile.fatper = Math.round( ( this.profile.fatcaltotal / this.profile.calgoalbase ) * 10000 ) / 100;
    } else {
      this.profile.fatgram = Math.round( this.profile.fatper * this.profile.calgoalbase / 9 ) / 100;
    }
    this.profile.fatperex = Math.round( ( this.profile.fatcalextotal / this.profile.calgoalex ) * 10000 ) / 100;
    this.profile.proteinratiotemp = this.profile.proteinratio;
    this.profile.tdeetemp = this.profile.tdee;
    this.profile.proteinpertemp = this.profile.proteinper;
    this.profile.carbpertemp = this.profile.carbper;
    this.profile.fatpertemp = this.profile.fatper;
    console.log(this.profile);
    this.profile.initialcalc++;
  }

  ngOnInit() {
  }

}
