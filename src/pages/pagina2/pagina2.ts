import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../index.paginas';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
mutantes:any[] = [
  {
    nombre:"magneto",
    poder:"Control"
  },
  {
    nombre:"Superman",
    poder:"Fuerza"
  }
];

pagina3:any=Pagina3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Pagina2Page');
  // }

  irPagina3( mutante:any){
    console.log(mutante);
    this.navCtrl.push( Pagina3Page, {'mutante':mutante} );
  }

}
