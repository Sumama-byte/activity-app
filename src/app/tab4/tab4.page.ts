import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
public items:any=
[
  {
    id:1,img:'../../assets/Rectangle 2.png',p:'Floyd Miles',text:'got it.',time:'12:00pm'},{id:2,img:'../../assets/Rectangle 3.png',p:'Derlen Robertstone',text:'okkkkk',time:'10:15pm'},{id:3,img:'../../assets/Rectangle 4.png',p:'Theresa web',text:'i need help.',time:'10:40pm'},{id:4,img:'../../assets/Rectangle 1.png',p:'Ralph edward',text:'Always here',time:'01:00am'},{id:5,img:'../../assets/Rectangle 5.png',p:'Darell steward',text:'lorem impusm',time:'01:45pm'}
]
  constructor() { }

  ngOnInit() {
  }

}
