import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,Nav } from 'ionic-angular';
import { LoginPage } from '../login/login';

export interface PagesInterface{
  title:String;
  pageName:String;
  tabComponent?:any;
  index?:number;
  icon:String;
}

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  rootPage="TabsPage";

  @ViewChild(Nav) nav:Nav;

  pages:PagesInterface[]=[
    {title:'Deudas',pageName:'TabsPage',tabComponent:'Tab1Page',index:0,icon:'person'},
    {title:'Deudores',pageName:'TabsPage',tabComponent:'Tab2Page',index:1,icon:'people'},
    {title:'Configuracion',pageName:'ConfigPage',icon:'construct'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController) {
    menu.enable(true);
  }

  openPage(p:PagesInterface){
   let params={};

    if(p.index){
      params={ tabIndex: p.index}
    }
    if(this.nav.getActiveChildNav() && p.index!=undefined){
      this.nav.getActiveChildNav().select(p.index);
    }else{
      this.nav.setRoot(p.pageName,params);
    }
  }

  isActived(p:PagesInterface){
    let childNav=this.nav.getActiveChildNav();

    if(childNav){
      if(childNav.getSelected() && childNav.getSelected().root===p.tabComponent){
        return 'primary';
      }
      return;
    }

    if(this.nav.getActive() && this.nav.getActive().name===p.pageName){
      return 'primary';
    }

  }

  cerrarSesion(){
    this.navCtrl.setRoot(LoginPage);
  }
}
