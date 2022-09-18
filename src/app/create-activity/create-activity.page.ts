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
  social_range:'', date:'', start_time:'', end_time:'', a_image:'', visibilty:''}
  profile_data: any;
  profile: any;

  constructor(public route :Router , public apiCall:ApicallService,  public loadingController: LoadingController, public apicall : ApicallService, public global : GlobalService) { }

  ngOnInit() {
    this.getprofile();
  }
  

  async submit_activity_data(){
    console.log(this.activityData);
    await  this.apiCall.api_postActivity(this.activityData);
   
   this.activityData  = {u_id:'', activity_name:'', location:'', description:'', max_atendes:'',
  social_range:'', date:'', start_time:'', end_time:'', a_image:''}
   document.getElementById('cameraImage').setAttribute('src','');
  }


  async getprofile() {
    await this.global.Uid.subscribe(uid => {
      //  this.apiCall.api_getprofile(uid);
       console.log(uid);
       this.activityData.u_id = uid;
      });
       this.global.Getactivity.subscribe(res => {
       console.log(res)
      this.profile = res; 
    });
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

  async changeToggle($event: CustomEvent) {
    console.log($event.detail.checked);
    console.log($event.detail.value);
    if ($event.detail.checked == true) {
          this.activityData.visibilty = 'private'
          console.log(this.activityData.visibilty);
    }
    else{
      this.activityData.visibilty = 'public'
      console.log(this.activityData.visibilty);
    }


  }

 async addActivity(){
    console.log(this.activityData);    
   await this.apicall.api_addActivity(this.activityData)
  this.activityData = {u_id:'', activity_name:'', location:'', description:'', max_atendes:'',
  social_range:'', date:'', start_time:'', end_time:'', a_image:'', visibilty:''}
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
