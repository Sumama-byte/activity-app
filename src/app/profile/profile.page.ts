import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
 
  public profile_data : any ={id: 1 ,user_img:'',  user_name:'' , user_bio: '' , socialize_dis:'' };
 
  constructor(public route : Router) {
   }

  ngOnInit() {
    
  }

  // user entered data to update and create profile 
  submit_profile_data(){
    console.log(this.profile_data);
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
}

