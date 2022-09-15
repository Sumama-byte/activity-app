import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.page.html',
  styleUrls: ['./activity-details.page.scss'],
})
export class ActivityDetailsPage implements OnInit {

  public details :any;

  constructor( public route :Router , public global :GlobalService ) { }

  ngOnInit() {

    this.global.Activity_Details.subscribe( res =>{
      this.details =res;
      console.log(this.details);
    })
  }

  //navigation
  nav_back(){
    this.route.navigate(['/tabs/tab1'])
  }

  //data to going 
  going(){
    console.log('going')
  }

  
  //data to may_be_going 
  may_be_going(){
    console.log('may_be_going')
  }
}
