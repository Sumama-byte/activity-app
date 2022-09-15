import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public route : Router) {}

  apply_filter(){
    this.route.navigate(['/tabs/filter'])
  }

  go_back(){
    this.route.navigate(['/tabs/tab1'])
  }
  show_details(){
    console.log('detaisl')
  }
}
