import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.page.html',
  styleUrls: ['./create-activity.page.scss'],
})
export class CreateActivityPage implements OnInit {

  constructor(public route :Router) { }

  ngOnInit() {
  }
  
  go_back(){
    this.route.navigate(['/tabs/tab1']);
  }
}
