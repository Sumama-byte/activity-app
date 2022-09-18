import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {

  public profile_data : any ={u_id:'', name:'',  img:'' , bio: '' , socialize_distance:'' };
  public profile: any;

  constructor(public apiCall:ApicallService, private router: Router , public global: GlobalService) { }

  ngOnInit() {
    this.getprofile();
  }


  async submit_profile_data(){
    console.log(this.profile_data);
    await  this.apiCall.api_postProfile(this.profile_data);
   
   this.profile_data  ={u_id:'',name:'',  img:'' , bio: '' , socialize_distance:'' }
   document.getElementById('cameraImage').setAttribute('src','');
  }

  async getprofile() {
    await this.global.Uid.subscribe(uid => {
      //  this.apiCall.api_getprofile(uid);
       console.log(uid);
       this.profile_data.u_id = uid;
      });
       this.global.ProfileInfo.subscribe(res => {
       console.log(res)
      this.profile = res; 
    });
   }


    // get image
    async capture_img(){
      const image = await Camera.getPhoto({
        quality:90,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt,
  
      });
      document.getElementById('cameraImage').setAttribute('src', `data:image/${image.format};base64,`+image.base64String );
      console.log(image.base64String);
      this.profile_data.img = image.base64String;
    }

}
