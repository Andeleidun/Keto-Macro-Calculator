import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BodyFatPage } from './bodyfat';
 
@NgModule({
  declarations: [
    BodyFatPage,
  ],
  imports: [
    IonicPageModule.forChild(BodyFatPage),
  ],
  exports: [
    BodyFatPage
  ]
})
export class BodyFatPageModule {}