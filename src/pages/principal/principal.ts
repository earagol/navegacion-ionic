import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import {Pagina2Page} from '../index.paginas';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController,
              public loginProv: LoginProvider) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PrincipalPage');
  // }

  navegaPagina(){
    console.log('didididdi');
    this.navCtrl.push( Pagina2Page );
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }


  index(){
    console.log('sisi');
    this.loginProv.index().subscribe(res => {

        console.log(res);

    });
  }


}
