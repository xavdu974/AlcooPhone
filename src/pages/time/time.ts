import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';

/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {
  resultPage = ResultPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }

  toResult(){
    this.navCtrl.push(this.resultPage, {
      //on retourne quoi ?!!
    })
  }

}
