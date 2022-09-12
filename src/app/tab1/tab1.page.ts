import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  // segment value
  public selectTabs : any ='map';


  public list_activities:any=[
    {id:1 ,user_img:'../../assets/Rectangle 142.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .', location_img:'../../assets/Rectangle 149.png'},
    {id:2 ,user_img:'../../assets/Rectangle 143.png', activity_title:'Swimming Together',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:3 ,user_img:'../../assets/Rectangle 144.png', activity_title:'Going For Excercise ',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:4 ,user_img:'../../assets/Rectangle 145.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:5 ,user_img:'../../assets/Rectangle 143.png', activity_title:'Swimming Together',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:6 ,user_img:'../../assets/Rectangle 144.png', activity_title:'Going For Excercise ',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:7 ,user_img:'../../assets/Rectangle 145.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},

]

  constructor(public route : Router) {}

  notification(){
    this.route.navigate(['/tabs/notification'])
  }
  profile(){
    this.route.navigate(['/tabs/profile'])
  }

}
