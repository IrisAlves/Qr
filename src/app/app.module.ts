import { MapaPage } from './../pages/mapa/mapa';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GuardardatosPage } from '../pages/guardados/guardados';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialProvider } from '../providers/historial/historial';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GuardardatosPage,
    MapaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GuardardatosPage,
    MapaPage,
    TabsPage
  ],
  providers: [
    InAppBrowser,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider
  ]
})
export class AppModule {}
