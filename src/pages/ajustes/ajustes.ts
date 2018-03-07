import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {}

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  showModal(){
    //Mostrara el modal sin una especie de retorno
    // this.modalCtrl.create( ModalPage ).present();

    //Mostrara el modal con parametros
    let modal = this.modalCtrl.create( ModalPage, { nombre:"Erisk",edad:31 } );
    modal.present();

    modal.onDidDismiss( parametros => {
      if(!parametros){
        // modal.present(); //En caso de que se deba cerrar siempre con parametros
        return;
      }
      console.log("Data del modal:");
      console.log(parametros);
    })
  }



  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AjustesPage');
  // }

}
