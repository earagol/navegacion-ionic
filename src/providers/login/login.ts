// import { HttpClient } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http';

import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class LoginProvider {

  private apiUrl = 'http://localhost/test_api/api2/api/';  // URL to web api

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }


  login(usuario){
    let headers = {
      headers: new Headers({
        'Accept':'application/json',
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    }
      // 'Content-Type':  'application/json',
    console.log(usuario);
    console.log(JSON.stringify(usuario));
    return this.http.post(this.apiUrl+'users/token.json',JSON.stringify(usuario),headers)
                  .map((resp: any) => {
                    return resp.json();
                  }
                );
  }

}
