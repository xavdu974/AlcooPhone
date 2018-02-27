import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { TimePage } from '../time/time';
import { PolicyPage } from '../policy/policy';

/**
 * Generated class for the DrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {
  sexe: string;
  age: number;
  poids: number;
  listPage = ListPage;
  timePage = TimePage;
  policyPage = PolicyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sexe = this.navParams.get('sexe');
    this.age = this.navParams.get('age');
    this.poids = this.navParams.get('poids');
    console.log('sexe : ' + this.sexe);
    console.log('age : ' + this.age);
    console.log('poids : ' + this.poids);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

  listing(categ){
    this.navCtrl.push(this.listPage, {
      categ: categ,
    })
  }

  toTime(){
    this.navCtrl.push(this.timePage, {
      //on retourne quoi ?!!
    })
  }

  toPolicy(){
    this.navCtrl.push(this.policyPage, {
    })
  }

}
