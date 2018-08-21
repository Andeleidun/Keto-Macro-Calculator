import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KetoFAQPage } from './ketofaq';
 
@NgModule({
  declarations: [
    KetoFAQPage,
  ],
  imports: [
    IonicPageModule.forChild(KetoFAQPage),
  ],
  exports: [
    KetoFAQPage
  ]
})
export class KetoFAQPageModule {}