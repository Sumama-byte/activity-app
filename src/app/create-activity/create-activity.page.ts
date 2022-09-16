import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingController, MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.page.html',
  styleUrls: ['./create-activity.page.scss'],
})
export class CreateActivityPage implements OnInit {

  tabID = 1;

  constructor(public route :Router ,   public loadingController: LoadingController) { }

  ngOnInit() {
  }
  
  go_back(){
    this.route.navigate(['/tabs/tab1']);
    this.tabID = 1 ;
  }

  go_form_one(){
    this.tabID = 1 ;
  }

  ShowHidePassword(ele, eye) {
    if (ele.type === 'password') {
      ele.type = 'text';
      eye.name = 'eye-off-outline'
    }
    else {
      ele.type = 'password';
      eye.name = 'eye-outline'
    }
  }


  presentLoading() {
  console.log(this.tabID)
  this.tabID = 2;
  console.log(this.tabID)
  }
}
