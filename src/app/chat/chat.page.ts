import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { interval } from 'rxjs';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';
import { UserprofilePage } from '../userprofile/userprofile.page';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, AfterViewInit, OnDestroy {
  
  public messages:any = [];

  currentUser = 'Rehan';

  public newMsg:any = {incoming_key:'', outgoing_key:'', msg:''}
  public other:any = ''
  public chat :any ;
  public userData:any ={name:'', img:''};
  public keys:any = {incoming_key:'', outgoing_key:''}
  counter = interval(60000); // sets 60 seconds interval
  subscription: any = null;
  public userID :any ;
  @ViewChild(IonContent) content: IonContent

  constructor( public route: Router , public global :GlobalService, private apiCall: ApicallService ,  public modalController: ModalController ) { }
  
  ngOnInit() {
    // this.sendMessage();
    this.chat = history.state.data;
    this.userData.img = this.chat.img;
    this.userData.name = this.chat.name;
    this.keys.incoming_key = this.chat.u_id;
    this.newMsg.incoming_key = this.chat.u_id;
    this.userID = this.chat.u_id;
    this.global.Uid.subscribe( u_id => {
      this.other = u_id;
      this.keys.outgoing_key = u_id;
      this.newMsg.outgoing_key = u_id;
    });
    this.getChat();
     setTimeout(() => {
      this.content.scrollToBottom(200);
    }, 100);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.content.scrollToBottom(200);
    }, 300);
    this.getChat();
  }

  async getChat() {
    await this.apiCall.api_getChat(this.keys);
    await this.global.Chat.subscribe( res => {
      this.messages = res;
      this.chat = res;
      console.log(this.chat);
    })
  }
  async sendMessage(){
    
    await this.apiCall.api_postChat(this.newMsg);
    this.getChat();
    this.newMsg.msg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
      // this.getChat();
    });
    
  }

  async openProfile() {
    console.log(this.userID);
    const modal = await this.modalController.create({
      component: UserprofilePage,
      cssClass: 'my-modal-class',
      componentProps: {
        'userId': this.userID,
      }
    });
    return await modal.present();
  }
  go_back(){
    this.route.navigate(['/tabs/tab4'])
  }

  ngOnDestroy() {
    console.log('Destroy');
    this.getChat();
  }

}
