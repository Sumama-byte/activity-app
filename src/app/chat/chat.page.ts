import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ApicallService } from '../Services/apicall.service';
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
  public allChat :any;

  public userMsg : any = {sender_id:'', reciever_id:'', msg:''}
  public userData: any = {reciever_id:'', sender_id:''}
  @ViewChild(IonContent) content: IonContent

  constructor( public route: Router , public global :GlobalService, public apicall : ApicallService  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
    this.getChat();
    this.global.Chat.subscribe( res => {
      this.chat = res;
      console.log(this.chat);
      this.userMsg.reciever_id = this.chat.u_id;
      this.userData.reciever_id = this.chat.u_id;
    });
    this.global.Uid.subscribe(uid => {
      this.userMsg.sender_id = uid;
      this.userData.sender_id = uid;
      console.log(uid);
     });
  }

  getChat(){
    this.global.Storchat.subscribe(res =>{
      this.allChat = res;
      console.log(this.allChat);
      console.log(res);
    });
  }

 async sendMessage(){
  await this.apicall.api_postChat(this.userMsg);
    console.log(this.userMsg);
  await this.apicall.api_getChat(this.userData);
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }


  go_back(){
    this.route.navigate(['/tabs/tab4'])
  }
}
