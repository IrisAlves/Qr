import { Component } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';
import { HistorialProvider } from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'guardados.html'
})
export class GuardardatosPage {
  historial:ScanData[]=[];

  constructor(private histProv:HistorialProvider) {

  }
  ionviewDidLoad(){
    console.log('ionViewDidLoad Guardardatos');
    this.historial=this.histProv.cargar_historial();
  }

  abrir_scan(index:number){

    this.histProv.abrir_elemento_historial(index);
  }

}
