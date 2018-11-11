import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavController, Slides, Content } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-ketointro',
  templateUrl: 'ketointro.html'
})

export class KetoIntroPage implements OnInit {

  @ViewChild(Slides) slides: Slides;
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

  ngOnInit() {
  }

}
