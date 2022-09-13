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
}
