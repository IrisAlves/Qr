import { HistorialProvider } from './../../providers/historial/historial';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private plataforma:Platform, private barcodeScanner:BarcodeScanner,private histProvider: HistorialProvider) {

  }
  escanear(){
    console.log("Realizando escaneo");
    if(!this.plataforma.is("cordova")){
      //probar url
      //console.log("prueba url");
      //this.histProvider.agregar_elemento_historial("http://www.google.com");
      //probar maps
      this.histProvider.agregar_elemento_historial("geo:42.3288966,-7.87,500");


    }else{
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.histProvider.agregar_elemento_historial(barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
    }

  }
}

