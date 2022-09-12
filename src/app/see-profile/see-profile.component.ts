import { Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.scss'],
})
export class SeeProfileComponent implements OnInit {

  @Output() type = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  allow() {
    this.type.emit('see');
  }

}
