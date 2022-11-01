import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// const apiUrl = 'https://turbonowpk.com/activity/public/';
const apiUrl = 'http://localhost/activityApp/public/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  con(data: any , type: any ) {
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + type, JSON.stringify(data)).
      subscribe(res => {
        resolve(JSON.stringify(res));
      }, (err) => {
        reject(err);
        console.log(err);
      });
    });
  }


  // geting posts

  getdata(type: any) {
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + type).
      subscribe(res => {
        resolve(JSON.stringify(res));
      },  (err) => {
        reject(err);
        console.log(err);
      });
    });
  }



}
