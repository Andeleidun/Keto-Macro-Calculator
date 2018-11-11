import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KetoIntroPage } from './ketointro';
 
@NgModule({
  declarations: [
    KetoIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(KetoIntroPage),
  ],
  exports: [
    KetoIntroPage
  ]
})
export class KetoIntroPageModule {}