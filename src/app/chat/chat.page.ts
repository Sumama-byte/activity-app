import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
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

  @ViewChild(IonContent) content: IonContent
  constructor() { }

  ngOnInit() {
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
}
