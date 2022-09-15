import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  selectTabs :any = 'going';

  //  activities_going
  public activities_going:any=[
    {id:1 ,user_img:'../../assets/Rectangle 142.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .', location_img:'../../assets/Rectangle 149.png'},
    {id:2 ,user_img:'../../assets/Rectangle 143.png', activity_title:'Swimming Together',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:3 ,user_img:'../../assets/Rectangle 144.png', activity_title:'Going For Excercise ',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
    {id:4 ,user_img:'../../assets/Rectangle 145.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
]
// activities_may_be_going
public activities_may_be_going:any=[
  {id:1 ,user_img:'../../assets/Rectangle 142.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .', location_img:'../../assets/Rectangle 149.png'},
  {id:2 ,user_img:'../../assets/Rectangle 143.png', activity_title:'Swimming Together',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
  {id:3 ,user_img:'../../assets/Rectangle 144.png', activity_title:'Going For Excercise ',activity_des:'Lets swimming together near a beach and play a volly ball with each other   .', location_img:'../../assets/Rectangle 149.png'},
]

// activities_you_created
public activities_you_created:any=[
  {id:1 ,user_img:'../../assets/Rectangle 142.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .', location_img:'../../assets/Rectangle 149.png'},
]

  constructor(public route : Router) {}


  going(){
    this.route.navigate(['/tabs/canidates'])
  }

  may_be_going(){
    this.route.navigate(['/tabs/canidates'])
  }
}
