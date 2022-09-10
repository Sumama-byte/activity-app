import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public route : Router) {}
  
  nav(){
    this.route.navigate(['tab5'])
  }



}
