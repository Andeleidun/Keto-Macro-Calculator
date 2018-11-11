import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProPage } from './pro';
 
@NgModule({
  declarations: [
    ProPage,
  ],
  imports: [
    IonicPageModule.forChild(ProPage),
  ],
  exports: [
    ProPage
  ]
})
export class ProPageModule {}