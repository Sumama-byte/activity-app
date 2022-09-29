import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  public Allusers:any;
  public userData: any = {reciever_id:''}
  constructor( public route: Router , public global : GlobalService, public apicall : ApicallService) { }

  ngOnInit() {
    this.getAllPeopleForChat()
  }

  async getAllPeopleForChat(){
    await this.apicall.api_getpeopleForChat();
    this.global.StorpeopleForchat.subscribe(res =>{
      this.Allusers = res;
    })
  }
  
  //show_chat   
async  show_chat(user){
    console.log(user);
    this.userData.reciever_id = user.u_id
await this.apicall.api_getChat(this.userData)
this.global.set_chat(user)
    this.route.navigate(['chat'])
  }

  // navigate back
  go_home(){
    this.route.navigate(['/tabs/tab1'])
  }

}
