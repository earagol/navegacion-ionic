import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PrincipalPage, AjustesPage } from '../index.paginas';
import { LoginProvider } from '../../providers/login/login';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;

  constructor(private navCtrl:NavController,public loginProv: LoginProvider) {
    this.tab1 = PrincipalPage;
    this.tab2 = AjustesPage;

    // this.index();

  }



  irAjustes(){
    this.navCtrl.push(AjustesPage);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TabsPage');
  // }

}
