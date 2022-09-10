import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public people:any=[
    {id:1 ,img:'../../assets/Rectangle 155.png', p2:'Beach Party',p3:'Lets swimming together near a beach and play a volly ball with each other   .', image:'../../assets/Rectangle 150.png'},
    {id:1 ,img:'../../assets/Rectangle 155.png', p2:'Swimming Together',p3:'Lets swimming together near a beach and play a volly ball with each other   .', image:'../../assets/Rectangle 151.png'},
    {id:1 ,img:'../../assets/Rectangle 155.png', p2:'Going For Excercise ',p3:'Lets swimming together near a beach and play a volly ball with each other   .', image:'../../assets/Rectangle 152.png'},
]

}
