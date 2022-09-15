import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  
  //user_chat
  private chat = new BehaviorSubject<any>('');
  public Chat = this.chat.asObservable();

  set_chat(chat : any){
    this.chat.next(chat)
  }


  //activity_details
  private activity_details = new BehaviorSubject<any>('');
  public Activity_Details = this.activity_details.asObservable();

  set_activity_details(activity_details : any){
    this.activity_details.next(activity_details)
  }


}
