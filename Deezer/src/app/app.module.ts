import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { AcercaPage } from '../pages/acerca/acerca';
import { ContactoPage } from '../pages/contacto/contacto';
import { ParseSourceFile } from '@angular/compiler';
import { PerfilesPage } from '../pages/perfiles/perfiles';
@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    AcercaPage,
    ContactoPage,
    PerfilesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    AcercaPage,
    ContactoPage,
    PerfilesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
