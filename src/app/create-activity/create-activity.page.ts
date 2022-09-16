import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';
@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.page.html',
  styleUrls: ['./create-activity.page.scss'],
})
export class CreateActivityPage implements OnInit {

  tabID = 1;

  public activityData : any = {u_id:'17', activity_name:'', location:'', description:'', max_atendes:'',
  social_range:'', date:'', start_time:'', end_time:'', a_image:''}
  profile_data: any;

  constructor(public route :Router ,   public loadingController: LoadingController, public apicall : ApicallService, public global : GlobalService) { }

  ngOnInit() {
  }
  
  go_back(){
    this.route.navigate(['/tabs/tab1']);
    this.tabID = 1 ;
  }

  go_form_one(){
    this.tabID = 1 ;
  }

  presentLoading() {
  console.log(this.tabID)
  this.tabID = 2;
  console.log(this.tabID)
  }

  addActivity(){
    console.log(this.activityData);    
    this.apicall.api_addActivity(this.activityData)
  }

  async capture_img(){
    const image = await Camera.getPhoto({
      quality:90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,

    });
    // document.getElementById('cameraImage').setAttribute('src', `data:image/${image.format};base64,`+image.base64String );
    console.log(image.base64String);
    this.activityData.a_image = image.base64String;
  }
  
}
