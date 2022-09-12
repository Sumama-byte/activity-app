import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {

  @Output() type = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  allow() {
    this.type.emit('edit');
  }

}
