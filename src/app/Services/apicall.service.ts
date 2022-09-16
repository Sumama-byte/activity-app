import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { GlobalService } from './global.service';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  login: any;
  activity: any;
  data: any;

  constructor( public global: GlobalService, public authservice: AuthService, public http: HttpClient ) { }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  //Login
  api_addLogin(login : any ){
    this.authservice.con(login, 'login').then(async (res) => {
      this.login = JSON.parse(String(res).toString());
      // this.global.set_login(this.login);
      if (this.login.error === false) {
        console.log(this.login);
        return;
      }
    }, (err) => {
      console.log(err);
    });
  }
  //create activity
  api_addActivity(data : any ){
    this.authservice.con(data, 'insert_activity').then(async (res) => {
      this.data = JSON.parse(String(res).toString());
      if (this.data.error === false) {
        console.log(this.data);
        return;
      }
    }, (err) => {
      console.log(err);
    });
  }
  //Get Method
  getActivities() {
  return   this.authservice.getdata('getappointment').then((result) => {
      this.activity = JSON.parse(String(result));
      // this.global.set_activity(this.activity);
      console.log(this.activity,'data Updated');
      return result;
    }, (err) => {
      console.log(err);
      return err
    });
  }
}
