import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavController, Slides, Content } from 'ionic-angular';

import { profileData } from '../../app/profile-data';

import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-macro',
  templateUrl: 'macro.html'
})

export class MacroPage implements OnInit {

  @ViewChild(Slides) slides: Slides;

  @Input() profile = profileData[0];

  constructor(public navCtrl: NavController) {
    
  }

  slideOneInfo: string;

  showSlideOneInfo() {
    let doOnce = 0;
    if (this.slideOneInfo != "show" && doOnce == 0) {
      this.slideOneInfo = "show";
      doOnce++
    }
    if (this.slideOneInfo == "show" && doOnce == 0) {
      this.slideOneInfo = "hide";
      doOnce++;
    }
    console.log(this.slideOneInfo);
  }

  slideThreeInfo: string;

  showSlideThreeInfo() {
    let doOnce = 0;
    if (this.slideThreeInfo != "show" && doOnce == 0) {
      this.slideThreeInfo = "show";
      doOnce++
    }
    if (this.slideThreeInfo == "show" && doOnce == 0) {
      this.slideThreeInfo = "hide";
      doOnce++;
    }
    console.log(this.slideThreeInfo);
  }

  @ViewChild(Content) content: Content;

  nextSlide() {
    this.slides.slideNext(250);
    this.content.scrollToTop();
  }

  prevSlide() {
    this.slides.slidePrev(250);
    this.content.scrollToTop();
  }
  
  restart() {
    this.slides.slideTo(0, 500);
    this.content.scrollToTop();
  }

  calculate() {
    this.profile.finalfatmass = this.profile.weight * ( this.profile.finalfatper / 100 );
    this.profile.finalleanmass = this.profile.weight - this.profile.finalfatmass;
    this.profile.bmr = 370 + ( 9.79 * this.profile.finalleanmass );
    this.profile.tef = this.profile.bmr / 10;
    this.profile.weightcaltotal = this.profile.weightcal * this.profile.weightmin;
    this.profile.cardiocaltotal = this.profile.cardiocal * this.profile.cardiomin;
    this.profile.tdee = ( this.profile.bmr + this.profile.tef ) * this.profile.actmod;
    this.profile.calgoalbase = Math.round ( this.profile.tdee * this.profile.goalmod * 100 ) / 100;
    this.profile.calgoalex = Math.round( ( this.profile.tdee + this.profile.weightcaltotal + this.profile.cardiocaltotal ) * this.profile.goalmod * 100 ) / 100;
    if ( this.profile.goalmod < 1 ) {
      this.profile.proteinratio = .69;
    }
    if ( this.profile.goalmod == 1.05 ) {
      this.profile.proteinratio = .8;
    }
    if ( this.profile.goalmod == 1.1 ) {
      this.profile.proteinratio = .81;
    }
    if ( this.profile.goalmod == 1.15 ) {
      this.profile.proteinratio = .82;
    }
    this.profile.proteingram = Math.round( this.profile.weight * this.profile.proteinratio * 100 ) / 100;
    this.profile.proteincaltotal = this.profile.proteingram * this.profile.proteincal;
    this.profile.proteinper = Math.round( ( this.profile.proteincaltotal / this.profile.calgoalbase ) * 10000 ) / 100;
    this.profile.proteinperex = Math.round( ( this.profile.proteincaltotal / this.profile.calgoalex ) * 10000 ) / 100;
    this.profile.carbcaltotal = this.profile.carbgram * this.profile.carbcal;
    this.profile.carbper = Math.round( ( this.profile.carbcaltotal / this.profile.calgoalbase ) * 10000 ) / 100;
    this.profile.carbperex = Math.round( ( this.profile.carbcaltotal / this.profile.calgoalex ) * 10000 ) / 100;
    this.profile.fatcaltotal = this.profile.calgoalbase - this.profile.proteincaltotal - this.profile.carbcaltotal;
    this.profile.fatcalextotal = this.profile.calgoalex - this.profile.proteincaltotal - this.profile.carbcaltotal;
    this.profile.fatgram = Math.round( this.profile.fatcaltotal / this.profile.fatcal * 100 ) / 100;
    this.profile.fatgramex = Math.round( this.profile.fatcalextotal / this.profile.fatcal * 100 ) / 100;
    this.profile.fatper = Math.round( ( this.profile.fatcaltotal / this.profile.calgoalbase ) * 10000 ) / 100;
    this.profile.fatperex = Math.round( ( this.profile.fatcalextotal / this.profile.calgoalex ) * 10000 ) / 100;
    console.log(this.profile);
    this.slides.slideNext(250);
  }

  ngOnInit() {
  }

}
