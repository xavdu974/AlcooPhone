import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchPage } from '../launch/launch';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  tauxActuel = Math.round(this.navParams.get('tauxActuel')*100)/100;
  resultat = this.navParams.get('resultat')
  toLaunch = LaunchPage;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
    var test: string = "Mon test";
    /*var resultat = "Prudence sur la route ;)";
    this.tauxActuel = Math.round(this.tauxActuel*100)/100;
    if(this.navParams.get('resultat') != "0"){
      var resultat = "Tu ne pourras prendre le volant que dans " + this.navParams.get('resultat') + "h !";
    }*/
  
  }

}
