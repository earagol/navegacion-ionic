import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController  } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TabsPage } from '../index.paginas';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  forma:FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loginProv: LoginProvider,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {

      this.forma = new FormGroup({
        'username': new FormControl('',Validators.required),
        'password': new FormControl('',Validators.required)
      });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  login(){
    console.log(this.forma.value);

    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loader.present().then(()=>{

      this.loginProv.login(this.forma.value).subscribe(res => {

          if(res.success){
            console.log(res);
            localStorage.setItem("token", res.data.token);
            this.navCtrl.push(TabsPage);
          }else{
            let toast = this.toastCtrl.create({
              message: res.message,
              duration: 4000,
              position: 'middle'
            });
            toast.present();
          }
          loader.dismiss();

      });

    });

  }

}
