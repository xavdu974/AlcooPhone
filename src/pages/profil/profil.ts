import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrinkPage } from '../drink/drink';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  sexe: string = 'homme';
  age: number;
  poids: number;
  drinkPage = DrinkPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tooDrink() {
    this.navCtrl.push(this.drinkPage, {
      sexe: this.sexe,
      age: this.age,
      poids: this.poids
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
