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
    localStorage.removeItem('names'); //Contient la paire id/nom des alcools ajoutée afin d'éviter un rechargement
    //localStorage.removeItem('sexe'); //Profil sexe
    //localStorage.removeItem('age'); //Profil age
    //localStorage.removeItem('poids'); //Profil poids
  }

  tooDrink() {
    localStorage.setItem('sexe', this.sexe);
    localStorage.setItem('age', String(this.age));
    localStorage.setItem('poids', String(this.poids));
    this.navCtrl.push(this.drinkPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
  

}
