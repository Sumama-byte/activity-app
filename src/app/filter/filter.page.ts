import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }

  go_to_search(){
    this.route.navigate(['/tabs/tab3']);
  }

}
