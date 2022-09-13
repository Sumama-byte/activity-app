import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages = [
    {
      user: 'Rehan',
      createdAt: 150023234,
      msg: 'Hey whats up?'
    },
    {
      user: 'Usman',
      createdAt: 150027234,
      msg: 'working on ionic'
    },
    {
      user: 'Rehan',
      createdAt: 150025234,
      msg: 'lorem ipsum '
    },
  ];

  currentUser = 'Rehan';

  newMsg = '';

  public chat :any;

  @ViewChild(IonContent) content: IonContent

  constructor( public route: Router , public global :GlobalService  ) { }

  ngOnInit() {
    this.global.Chat.subscribe( res => {
      this.chat = res;
      console.log(this.chat);
    })
    

  }
  sendMessage(){
    this.messages.push({
      user: 'Rehan',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }


  go_back(){
    this.route.navigate(['/tabs/tab4'])
  }
}
