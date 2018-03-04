import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';
import { Http } from '@angular/http';
import { DrinkPage } from '../drink/drink';
import { PolicyPage } from '../policy/policy';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  public xmlItems : any;
  public categ : string;
  public tab : Array<number>;
  public nbElems : Array<number>;
  drinkPage = DrinkPage;
  policyPage = PolicyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    console.log(localStorage.getItem('poids'));
    this.categ = this.navParams.get('categ');
    if(this.navParams.get('nbElems') && this.navParams.get('nbElems') != null) {
      this.nbElems = this.navParams.get('nbElems');
    } else {
      this.nbElems = [];
    }
    if(this.navParams.get('tab') != null) {
      this.tab = this.navParams.get('tab');
    } else {
      this.tab = [];
    }
  }

  ionViewWillEnter()
  {
     this.loadXML();
  }

  loadXML()
  {
     //this.http.get('../../assets/data/alcool.xml') //Pour le navigateur
     this.http.get('http://homepage.alwaysdata.net/alcool.xml') // Pour l'apk

     .map(res => res.text())
     .subscribe((data)=>
     {
        this.parseXML(data)
        .then((data)=>
        {
           this.xmlItems = data;
        });
     });
  }

  parseXML(data)
  {
    var that = this;
     return new Promise(resolve =>
     {
      var k,
        clem,
        sous_clem,
        arr    = [],
        parser = new xml2js.Parser(
        {
            trim: true,
            explicitArray: true
        });
    parser.parseString(data, function (err, result)
    {
      var obj = result;
      for(k in obj)
      {
        var item = obj[k];
        for(clem of item.category)
        {
          for(sous_clem of clem.item) {
            if(that.tab[sous_clem.$.id] == null || (that.tab[sous_clem.$.id] == 0)) {
              that.tab[sous_clem.$.id] = 0;
            }
            if(clem.name[0] == that.categ) {
              arr.push({
                id     : sous_clem.$.id,
                name   : sous_clem.name[0],
                degre  : sous_clem.degre[0]
              });
              var pastNames = localStorage.getItem('names');
              var temp = [];
              if(pastNames != null) {
                temp = pastNames.split(',');
                if(temp.indexOf(sous_clem.$.id + '|' + sous_clem.name[0]) == -1) {
                  localStorage.setItem('names', pastNames + ',' + sous_clem.$.id + '|' + sous_clem.name[0]);
                }
              } else { localStorage.setItem('names', sous_clem.$.id + '|' + sous_clem.name[0]); }
            }
          }
        }   
      }
      resolve(arr);
    });
    });
  }

  remove(item_id){
    if(this.tab[item_id] > 0) {
      this.tab[item_id] = (this.tab[item_id] - 1);
    }
  }

  add(item_id){
    if(this.tab[item_id] !< 10) {
      this.tab[item_id] = (this.tab[item_id] + 1);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  valid() {
    var categsConcernees: Array<number> = [];
    var x = 0;
    for(let xmlItem of this.xmlItems) {
      categsConcernees[x] = Number(xmlItem.id);
      x++;
    }
    var number: number = 0;
    for(let i = 0; i < this.tab.length; i++) {
      if((this.tab[i] != NaN && this.tab[i] != undefined) && (number != NaN) && categsConcernees.indexOf(i) > -1) {
        number = (number + this.tab[i]);
      }
    }
    this.nbElems[this.categ] = number;
    this.navCtrl.push(this.drinkPage, {
      tab: this.tab,
      nbElems : this.nbElems,
    })
  }

  toPolicy(){
    this.navCtrl.push(this.policyPage);
  }

}