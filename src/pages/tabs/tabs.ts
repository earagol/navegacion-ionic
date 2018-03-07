import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PrincipalPage, AjustesPage } from '../index.paginas';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;

  constructor(private navCtrl:NavController) {
    this.tab1 = PrincipalPage;
    this.tab2 = AjustesPage;
  }

  irAjustes(){
    this.navCtrl.push(AjustesPage);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TabsPage');
  // }

}
