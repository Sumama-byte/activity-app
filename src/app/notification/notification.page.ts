import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  public notificationsActivity:any;
  constructor( public route : Router , public global : GlobalService, public apicall : ApicallService) { }

  ngOnInit() {
    this.getAllActivity();
  }

   

 async getAllActivity(){
   await this.apicall.api_getallActivitybylocation();
   this.global.Storallactivity.subscribe(res =>{
    this.notificationsActivity = res;
   });
  }

  // go to home / tab1 page
  nav_back(){
     this.route.navigate(['/tabs/tab1'])
  }

  // go to filter/ tab 3 page
  funnel(){
    this.route.navigate(['/tabs/tab3'])
 }

 //show details
 show_details(data){
  console.log(data)
  this.route.navigate(['/activity-details'], { state: { data: data} })
}
}
