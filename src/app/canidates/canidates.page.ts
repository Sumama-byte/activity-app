import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canidates',
  templateUrl: './canidates.page.html',
  styleUrls: ['./canidates.page.scss'],
})
export class CanidatesPage implements OnInit {

  selectTabs :any= 'going'

   public going : any = [ { id:1 , user_img:'../../assets/Rectangle 144.png' , user_name: 'William'},{ id:2 , user_img:'../../assets/Rectangle 144.png' , user_name: 'William'}, ]

   public may_be_going : any = [ { id:1 , user_img:'../../assets/Rectangle 144.png' , user_name: 'Miller'},{ id:2 , user_img:'../../assets/Rectangle 144.png' , user_name: 'Miller'}, ]


  constructor(public route :Router ) { }

  ngOnInit() {
  }

  go_back(){
     this.route.navigate(['/tabs/tab1'])
  }
}
