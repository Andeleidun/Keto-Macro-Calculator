import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MacroPage } from './macro';
 
@NgModule({
  declarations: [
    MacroPage,
  ],
  imports: [
    IonicPageModule.forChild(MacroPage),
  ],
  exports: [
    MacroPage
  ]
})
export class MacroPageModule {}