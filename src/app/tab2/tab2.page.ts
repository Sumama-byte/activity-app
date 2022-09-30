import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{
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
public activities_you_created:any =[];
public myparticipation:any;
public myGoing:any;
public MaybeGoing:any;

count_M: number;
count_G: number;
  // public CreatedActivity:any={u_id:'',activity_name:'',location:'',description:'',max_atendes:'',social_range:'',date:'',start_time:'',end_time:'',a_image:'',profile_img:''}
     public YourActivity:any={u_id:''}
  constructor(public route : Router,public apiCall:ApicallService, private router: Router , public global: GlobalService) {}


  ngOnInit() {
    this.getactivity();
    this.getmyallparticipant();
  }

  // GetActivity method

  async getactivity() {
    await this.global.Uid.subscribe(uid => {
       this.YourActivity.u_id = uid;
      });
   await this.apiCall.api_getActivity(this.YourActivity.u_id);
   await this.global.Getactivity.subscribe(activity => {
      this.activities_you_created = activity;
   })
   console.log(this.activities_you_created);
   this.getmyallparticipant();
   }

   async getmyallparticipant(){
  await this.apiCall.api_myparticipantActivity(this.YourActivity.u_id);
  await this.global.Myparticipant.subscribe( res =>{
    this.myparticipation = res;
    console.log(this.myparticipation);
    this.count_G = this.myparticipation.filter(x => x.status === 'g').length;
    console.log(this.count_G);
    this.myGoing = this.myparticipation.filter(x => x.status === 'g');
    console.log(this.myGoing);
    this.count_M = this.myparticipation.filter(x => x.status === 'm').length;
    console.log(this.count_M);
    this.MaybeGoing = this.myparticipation.filter(x => x.status === 'm');
    console.log(this.MaybeGoing);    
  });

   }

  // show activity details
  show_details(data){
    console.log(data); 
    this.router.navigate(['/create-activity'], { state: { data: data} })
  }
   

 async checkStatus(a_id){
    console.log(a_id);
await this.apiCall.api_ActivityStatus(a_id)
    this.route.navigate(['/tabs/canidates'])
  }
}
