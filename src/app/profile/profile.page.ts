import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public type  : boolean = true;

  public favourite:any=[
    {id:1 ,user_img:'../../assets/Rectangle 142.png', fav_title:'Beach Party',fav_des:'Lets swimming together near a beach and play a volly ball with each other .', location_img:'../../assets/Rectangle 149.png'},
    {id:2 ,user_img:'../../assets/Rectangle 143.png', fav_title:'Swimming Together',fav_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
  ] 



  public profile_data : any ={u_id:'', name:'',  img:'' , bio: '' , socialize_distance:'' };
  public profile: any;
 
  constructor(public route : Router,public apiCall:ApicallService, private router: Router , public global: GlobalService) {
   }

  ngOnInit() {
    this.getprofile();
  }

  async getprofile() {
    await this.global.Uid.subscribe(uid => {
       this.apiCall.api_getprofile(uid);
       console.log(uid);
       this.profile_data.u_id = uid;
      });
       this.global.ProfileInfo.subscribe(res => {
       console.log(res)
      this.profile_data = res[0];
      document.getElementById('cameraImage').setAttribute('src', this.profile_data.img );
    })
   }

   ProfileUpdate(){
    console.log(this.profile_data);
    this.apiCall.api_updateprofile(this.profile_data);
  }

  //  switch between veiw and eidt profile
  allow(){
     this.type =! this.type;
  }

  // refer a friend
  refer(){
    console.log('refer')
  }

  
  // refer a friend
  log_out(){
    console.log('log out')
  }

  // nav back to home  
  nav_back(){
    this.route.navigate(['/tabs/tab1'])
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

