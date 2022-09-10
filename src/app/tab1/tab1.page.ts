import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  public people:any=[
    {id:1 ,img:'../../assets/Rectangle 142.png', p2:'Beach Party',p3:'Lets swimming together near a beach and play a volly ball with each other   .', image:'../../assets/Rectangle 149.png'},
    {id:1 ,img:'../../assets/Rectangle 143.png', p2:'Swimming Together',p3:'Lets swimming together near a beach and play a volly ball with each other   .', image:'../../assets/Rectangle 149.png'},
    {id:1 ,img:'../../assets/Rectangle 144.png', p2:'Going For Excercise ',p3:'Lets swimming together near a beach and play a volly ball with each other   .', image:'../../assets/Rectangle 149.png'},
    {id:1 ,img:'../../assets/Rectangle 145.png', p2:'Beach Party',p3:'Lets swimming together near a beach and play a volly ball with each other   .', image:'../../assets/Rectangle 149.png'},
]
}
