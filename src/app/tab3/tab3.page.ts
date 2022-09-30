import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  filterTerm!: string;
  public activitys : any;

  constructor(public apiCall:ApicallService, private router: Router , public global: GlobalService) {}
  ngOnInit(){
   this.getallActivity()
  }

 async  getallActivity(){
  await this.apiCall.api_getallfilterActivity()
  await this.global.Allfilteractivity.subscribe(res =>{
      this.activitys = res;
      console.log(this.activitys);
      
  });
   }

  apply_filter(){
    this.router.navigate(['/tabs/filter'])
  }

  go_back(){
    this.router.navigate(['/tabs/tab1'])
  }
  show_details(data){
    console.log(data)
    this.router.navigate(['/activity-details'], { state: { data: data} })
  }
}
