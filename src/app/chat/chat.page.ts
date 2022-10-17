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

  public sender_msgs:any = [];
  public reciever_msgs:any = [];
  currentUser = 'Rehan';

  newMsg = '';

  public chat :any;
  public allChat :any;

  public userMsg : any = {sender_id:'', reciever_id:'', msg:''}
  public userData: any = {reciever_id:'', sender_id:''};
  public reciever_id:any;
  @ViewChild(IonContent) content: IonContent
  allmsgs: { sender: any; reciever: any; };

  constructor( public route: Router , public global :GlobalService, public apicall : ApicallService  ) { }

  ngOnInit() {
    this.reciever_id = history.state.data;

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

  async getChat(){
    await this.global.Storchat.subscribe(res =>{
      this.allChat = res;
      console.log(this.allChat);
      console.log(res);
    });
    
    //  Chat Filter by Zagham Nadeem...

      console.log( 'Sender', this.userData.sender_id, 'Reciever', this.reciever_id);
      this.sender_msgs.length = 0;
      this.reciever_msgs.length = 0;
      for( let i = 0; i<this.allChat.length; i++ ) {
        if( this.allChat[i].sender_id == this.userData.sender_id && this.allChat[i].reciever_id == this.reciever_id ) {
          console.log(this.allChat[i]);
          this.sender_msgs.push(this.allChat[i]);
          // if( this.allChat[i].sender_id == this.userData.sender_id ) {
          //   const reciever = [];
            
          //   this.reciever_msgs.push(this.allChat[i]);
          //   console.log(this.reciever_msgs);
          // }
          // if( this.allChat[i].sender_id != this.reciever_id ) {
          //   const sender = [];
          //   this.sender_msgs.push(this.allChat[i]);
          //   console.log(this.sender_msgs);
          // }
        }
        else {
          console.log('empty')
        }
        // this.allmsgs = [ sender: this.sender_msgs , reciever:this.reciever_msgs];
        // console.log(this.allmsgs);
      }
  }

 async sendMessage(){
  this.getChat();
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
