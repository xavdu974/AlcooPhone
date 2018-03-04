import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { PolicyPage } from '../policy/policy';

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
  policyPage = PolicyPage;
  public consoFinale : number;
  public hour;
  public hourStatic;
  public date = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.consoFinale = this.navParams.get('consoFinale');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
    this.hour = this.date.getHours()+':'+(this.date.getMinutes()<10?'0':'') + this.date.getMinutes();
    this.hourStatic = this.date.getHours()+':'+(this.date.getMinutes()<10?'0':'') + this.date.getMinutes();
  }

  toResult(){
    var poids : number = Number(localStorage.getItem('poids'));
    var coeffDiffusion : number = localStorage.getItem('sexe') == 'homme' ? 0.7 : 0.6;
    var tauxAlcool = ((this.consoFinale * 20)/poids)*coeffDiffusion; //0.20g d'alcool par verre
    var heure = this.hour.split(':')[0];
    var heureStatique = this.hourStatic.split(':')[0];
    var minutes = this.hour.split(':')[1];
    var minutesStatiques = this.hourStatic.split(':')[1];
    var nbHours = heureStatique - heure;
    var nbMinutes = minutesStatiques - minutes;
    var tauxAlcoolFinal = tauxAlcool - (0.15*(nbHours + (nbMinutes/60))); //taux d'élimination = 0.15g/heure -> 0.0025g/minute
    if(tauxAlcoolFinal < 0){
      tauxAlcoolFinal = 0;
    }
    console.log('Taux alcool total : ' + tauxAlcool + 'g/L de sang');
    console.log('Taux alcool après élimination : ' + tauxAlcoolFinal+ 'g/L de sang');
    if(tauxAlcoolFinal >= 0.5) {
      console.log('Vous ne pouvez pas prendre le volant\n');
      var calculTemps = (tauxAlcoolFinal/0.0025)*0.5; //0.5 = alcoolémie max légale
      console.log(calculTemps);
      var tempsRestant = Math.floor(calculTemps/60)+"h"+(calculTemps%60);
      //var heures = (tempsRestant - prov/60);
      tempsRestant = tempsRestant.substring(0, tempsRestant.indexOf('.'));
      tempsRestant = "Je pourrai conduire dans " + tempsRestant + " si je ne prends pas d'autres verres";
    } else {
      tempsRestant = "Je peux prendre le volant avec précautions :)";
    }
    this.navCtrl.push(this.resultPage, {
      tauxActuel: tauxAlcoolFinal,
      resultat: tempsRestant
    })
  }

  toPolicy(){
    this.navCtrl.push(this.policyPage, {
    })
  }
}
