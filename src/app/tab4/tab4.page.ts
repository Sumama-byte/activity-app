import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  public users:any=[
  {id:1,user_img:'../../assets/Rectangle 2.png',user_name:'Floyd Miles',user_last_msg:'got it.',last_time:'12:00pm'},
  {id:2,user_img:'../../assets/Rectangle 3.png',user_name:'Derlen Robertstone',user_last_msg:'okkkkk',last_time:'10:15pm'},
  {id:3,user_img:'../../assets/Rectangle 4.png',user_name:'Theresa web',user_last_msg:'i need help.',last_time:'10:40pm'},
  {id:4,user_img:'../../assets/Rectangle 1.png',user_name:'Ralph edward',user_last_msg:'Always here',last_time:'01:00am'},
  {id:5,user_img:'../../assets/Rectangle 5.png',user_name:'Darell steward',user_last_msg:'lorem impusm',last_time:'01:45pm'}
]
  constructor( public route: Router , public global : GlobalService) { }

  ngOnInit() {
  }

  
  //show_chat   
  show_chat(user){
    console.log(user);
    this.global.set_chat(user)
    this.route.navigate(['chat'])
  }

  // navigate back
  go_home(){
    this.route.navigate(['/tabs/tab1'])
  }

}
