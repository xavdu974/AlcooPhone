import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinkPage } from './drink';

@NgModule({
  declarations: [
    DrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(DrinkPage),
  ],
})
export class DrinkPageModule {}
