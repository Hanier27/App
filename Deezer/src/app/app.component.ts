import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilesPage } from '../pages/perfiles/perfiles';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
import { InicioPage } from '../pages/inicio/inicio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild('Nav') nav:Nav;
  public rootPage:any;
  public pages: Array<{title:string,component:any,icon:string}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage= InicioPage;
    this.pages=[
      {title:"Inicio",          component: InicioPage,    icon:"home"},
      {title:"Perfiles Deezer", component: PerfilesPage,  icon:"person"},
      {title:"Contacto",        component: ContactoPage,  icon:"mail"},
      {title:"Acerca De",       component: AcercaPage,    icon:"information-circle"}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  gotoPage(page){
    this.nav.setRoot(page);
  }

}

