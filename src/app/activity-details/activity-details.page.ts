import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.page.html',
  styleUrls: ['./activity-details.page.scss'],
})
export class ActivityDetailsPage implements OnInit {

  public details :any;
  public data : any;

  

  public postStatus: any = {a_id:'', u_id:'', status:''}

  constructor( public route :Router , public global :GlobalService, public apicall : ApicallService ) { }

  ngOnInit() {
    this.data = history.state.data;
      this.postStatus.a_id = this.data.a_id
     this.global.Uid.subscribe(uid => {
      console.log(uid);
      this.postStatus.u_id = uid;
     });
  }

  //navigation
  nav_back(){
    this.route.navigate(['/tabs/tab1'])
  }

  //data to going 
 async going(){
    console.log('going')
    this.postStatus.status = "g"
    console.log(this.postStatus);
   await this.apicall.api_postStatus(this.postStatus)
  }

  //data to may_be_going 
async may_be_going(){
    console.log('may_be_going')
    this.postStatus.status = "m"
    console.log(this.postStatus);
   await this.apicall.api_postStatus(this.postStatus)
  }
}
