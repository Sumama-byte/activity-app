import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  public notifications:any=[
    {id:1 ,user_img:'../../assets/Rectangle 142.png', notify_title:'Beach Party',notify_des:'Lets swimming together near a beach and play a volly ball with each other .', location_img:'../../assets/Rectangle 149.png'},
    {id:2 ,user_img:'../../assets/Rectangle 143.png', notify_title:'Swimming Together',notify_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:3 ,user_img:'../../assets/Rectangle 144.png', notify_title:'Going For Excercise ',notify_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:4 ,user_img:'../../assets/Rectangle 145.png', notify_title:'Beach Party',notify_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:5 ,user_img:'../../assets/Rectangle 143.png', notify_title:'Swimming Together',notify_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:6 ,user_img:'../../assets/Rectangle 144.png', notify_title:'Going For Excercise ',notify_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:7 ,user_img:'../../assets/Rectangle 145.png', notify_title:'Beach Party',notify_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},

]
  constructor( public route : Router) { }

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

}
