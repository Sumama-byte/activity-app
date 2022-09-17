import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';
import {FirebaseAuthentication} from '@capacitor-firebase/authentication';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public UserData:any={u_id:'' , token:'yy'}

  constructor(public apiCall:ApicallService, public global: GlobalService)  { }


  ngOnInit() {
    initializeApp(environment.firebaseConfig);
  }


  async googleLogin(){
    console.log('Google login programm');
    
      const result = await FirebaseAuthentication.signInWithGoogle();
      console.log(result);
      this.global.add_uid(result.user.uid);
      this.UserData.u_id = result.user.uid
      // this.UserData.u_id = '5787855'
      this.apiCall.api_postLogin(this.UserData);
      return result.user;
    };

}


