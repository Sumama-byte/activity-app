import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { GlobalService } from './global.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  login: any;
  activity: any;
  data: any;

  constructor( public global: GlobalService,public router:Router , public authservice: AuthService, public http: HttpClient ) { }
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


  // profile api
  
  async api_postProfile(data: any) {
    await this.authservice.con(data , 'create_profile').then((result) => {
       this.data = JSON.parse(String(result));
       if (this.data.error === false) {
        this.router.navigate(['/tabs/profile'])
        console.log(this.data);
         return;
        } 
         console.log(this.data);
     }, (err) => {
       console.log(err);
     });
   }



   async api_getprofile(u_id:any) {
    await this.authservice.getdata('getprofile/'+u_id).then((result) => {
        this.data = JSON.parse(String(result));
       console.log(this.data);
        this.global.set_profileInfo(this.data);
      }, (err) => {
        console.log(err);
      });
    }

    async api_updateprofile(data: any) {
      await this.authservice.con(data , 'update_profile').then((result) => {
         this.data = JSON.parse(String(result));
         if (this.data.error === false) {
          console.log(this.data);
           return;
          } 
           console.log(this.data);
       }, (err) => {
         console.log(err);
       });
     }


    // google login
    async api_postLogin(data: any) {
      await this.authservice.con(data , 'login').then((result) => {
         this.data = JSON.parse(String(result));
         if (this.data.error === false) {
          this.router.navigate(['/tabs/tab1'])
          console.log(this.data);
           return;
          } 
          else (this.data.error === true)
          this.router.navigate(['new-user'])
           console.log(this.data);
       }, (err) => {
         console.log(err);
       });
     }


    //  get activity
    async api_getActivity(u_id:any) {
      await this.authservice.getdata('getactivitybyid/'+u_id).then((result) => {
          this.data = JSON.parse(String(result));
         console.log(this.data);
          this.global.set_getActivity(this.data);
        }, (err) => {
          console.log(err);
        });
      }

      // post activity
      async api_postActivity(data: any) {
        await this.authservice.con(data , 'insert_activity').then((result) => {
           this.data = JSON.parse(String(result));
           if (this.data.error === false) {
            console.log(this.data);
             return;
            } 
             console.log(this.data);
         }, (err) => {
           console.log(err);
         });
       }

}
