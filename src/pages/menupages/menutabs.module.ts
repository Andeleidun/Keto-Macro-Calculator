import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTabsPage } from './menutabs';
 
@NgModule({
  declarations: [
    MenuTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuTabsPage),
  ],
  exports: [
    MenuTabsPage
  ]
})
export class MenuTabsPageModule {}