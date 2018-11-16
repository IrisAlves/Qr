import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat:number;
  lng:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lat=42.33;
    this.lng=-7.87;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

}
