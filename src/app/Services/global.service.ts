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


  
  // create profile
  private profileInfo = new BehaviorSubject<any>('');
  public ProfileInfo = this.profileInfo.asObservable();
  set_profileInfo(u_id: any)
  {
    this.profileInfo.next(u_id);
     console.log(u_id);
    }

     // user id
  private uid = new BehaviorSubject<any>('');
  public Uid = this.uid.asObservable();
  add_uid(u_id: any)
  {
    this.uid.next(u_id);
     console.log(u_id);
    }
     // activity id
  private getactivity = new BehaviorSubject<any>('');
  public Getactivity = this.getactivity.asObservable();
 set_getActivity(getactivity: any)
  {
    this.uid.next(getactivity);
     console.log(getactivity);
    }

}
