import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  public notifications:any=[
    {id:1 ,user_img:'../../assets/Rectangle 142.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
    , location_address:'32,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'2' , start_time:'05' ,end_time:'03',attende_no:'43' },
   
   {id:2 ,user_img:'../../assets/Rectangle 143.png', activity_title:'Swimming Together',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
    , location_address:'31,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'23' , start_time:'05' ,end_time:'03',attende_no:'23'},
   
   {id:3 ,user_img:'../../assets/Rectangle 144.png', activity_title:'Going For Excercise ',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
    , location_address:'34,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'22' , start_time:'05' ,end_time:'03',attende_no:'12'},
   
   {id:4 ,user_img:'../../assets/Rectangle 145.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
    , location_address:'36,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'42' , start_time:'05' ,end_time:'03',attende_no:'23'},
   
   {id:5 ,user_img:'../../assets/Rectangle 143.png', activity_title:'Swimming Together',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
    , location_address:'38,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'32' , start_time:'05' ,end_time:'03',attende_no:'56'},
   
   {id:6 ,user_img:'../../assets/Rectangle 144.png', activity_title:'Going For Excercise ',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
    , location_address:'31,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'12' , start_time:'05' ,end_time:'03',attende_no:'45'},
   
   {id:7 ,user_img:'../../assets/Rectangle 145.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
    , location_address:'30,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'24' , start_time:'05' ,end_time:'03',attende_no:'43'},

]
  constructor( public route : Router , public global : GlobalService) { }

  ngOnInit() {
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
  this.route.navigate(['/tabs/activity-details']);
  this.global.set_activity_details(data);
}
}
