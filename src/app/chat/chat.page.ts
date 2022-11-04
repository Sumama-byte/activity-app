import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { interval } from 'rxjs';
import { ApicallService } from '../Services/apicall.service';
import { GlobalService } from '../Services/global.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public messages:any = [];

  currentUser = 'Rehan';

  public newMsg:any = {incoming_key:'', outgoing_key:'', msg:''}
  public other:any = ''
  public chat :any ;
  public userData:any ={name:'', img:''};
  public keys:any = {incoming_key:'', outgoing_key:''}
  counter = interval(60000); // sets 60 seconds interval
  subscription: any = null;
  @ViewChild(IonContent) content: IonContent

  constructor( public route: Router , public global :GlobalService, private apiCall: ApicallService  ) { }
  
  ngOnInit() {
    // this.sendMessage();
    this.chat = history.state.data;
    this.userData.img = this.chat.img;
    this.userData.name = this.chat.name;
    this.keys.incoming_key = this.chat.u_id;
    this.newMsg.incoming_key = this.chat.u_id;
    this.global.Uid.subscribe( u_id => {
      this.other = u_id;
      this.keys.outgoing_key = u_id;
      this.newMsg.outgoing_key = u_id;
      
    });
    this.getChat();
    //  setTimeout(() => {
    //   this.content.scrollToBottom(200);
    // }, 100);
    this.scrollToBottom();
  }
  ngAfterViewChecked() {  
    // this.getChat();      
    this.scrollToBottom();        
} 

scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
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
    // setTimeout(() => {
    //   this.content.scrollToBottom(200);
    //   // this.getChat();
    // });
    this.scrollToBottom(); 
    
  }


  go_back(){
    this.route.navigate(['/tabs/tab4'])
  }

  ngOnDestroy() {
    console.log('Destroy');
    this.getChat();
  }

}
