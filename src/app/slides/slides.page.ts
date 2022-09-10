import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public people:any=[
    {id:1 ,img:'../../assets/R (2) 1.png', h5:'Let’s Get Some Real Socializing!',p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit leo felis congue elit leo.'},
    {id:1 ,img:'../../assets/R (3) 1.png', h5:'See The Activities Inside Your Social Range.',p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit leo felis congue elit leo.'},
]

}
