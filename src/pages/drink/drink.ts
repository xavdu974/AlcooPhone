import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { TimePage } from '../time/time';
import { PolicyPage } from '../policy/policy';
import { AlertController } from 'ionic-angular';
import xml2js from 'xml2js';
import { Http } from '@angular/http';

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

  public tab : Array<number>;
  public nbElems: Array<number>;
  listPage = ListPage;
  policyPage = PolicyPage;
  timePage = TimePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http) {
    if(this.navParams.get('tab') != null) {
        this.tab = this.navParams.get('tab');
    } else {
      this.tab = [];
    }
    if(this.navParams.get('nbElems') && this.navParams.get('nbElems') != null) {
      this.nbElems = this.navParams.get('nbElems');
      console.log(this.navParams.get('nbElems'));
    } else {
      this.nbElems = [];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

  listing(categ) {
    this.navCtrl.push(this.listPage, {
      categ: categ,
      tab: this.tab,
      nbElems: this.nbElems
    })
  }

  toPolicy(){
    this.navCtrl.push(this.policyPage);
  }

  toTime() {
    var names = localStorage.getItem('names').split(',');
    var consoFinale = 0;
    var content = '<br>';
    var libelle = [];
    for(let name of names) {
      libelle[String(name.split('|')[0])] = name.split('|')[1]; //[id] = nom
    }
    for(let i = 1; i < this.tab.length; i++) {
      if(this.tab[i] > 0) {
        consoFinale = consoFinale + this.tab[i];
        content = content + this.tab[i] + ' ' + libelle[Number(i)] + '<br>';
      }
    }
    let alert = this.alertCtrl.create({
      title: 'Je me souviens avoir bu ',
      message: content + 'soit ' + String(consoFinale) + ' verres.',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.navCtrl.push(this.timePage, {
              consoFinale: consoFinale
            });
          }
        },
        {
          text: 'Non',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

}