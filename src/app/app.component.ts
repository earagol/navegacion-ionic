import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage, AjustesPage, LoginPage } from '../pages/index.paginas';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabs = TabsPage;
  ajustes = AjustesPage;

  // rootPage:any = TabsPage;
  rootPage:any = LoginPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    if(localStorage.getItem('token')){
      this.rootPage = TabsPage;
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  abrirPagina( pagina:any ){
    this.rootPage = pagina;
    this.menuCtrl.close();
  }

  salir(){
    localStorage.removeItem('token');
    this.rootPage = LoginPage;
    this.menuCtrl.close();
  }


}
