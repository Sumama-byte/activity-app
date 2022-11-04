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
     // get activity
  private getactivity = new BehaviorSubject<any>('');
  public Getactivity = this.getactivity.asObservable();
 set_getActivity(getactivity: any)
  {
    this.getactivity.next(getactivity);
     console.log(getactivity);
    }

     // get my participant activity
  private myparticipant = new BehaviorSubject<any>('');
  public Myparticipant = this.myparticipant.asObservable();
 set_myparticipant(myparticipant: any)
  {
    this.myparticipant.next(myparticipant);
     console.log(myparticipant);
    }

     // get all public activity for filter
  private allfilteractivity = new BehaviorSubject<any>('');
  public Allfilteractivity = this.allfilteractivity.asObservable();
 set_allfilteractivity(allfilteractivity: any)
  {
    this.allfilteractivity.next(allfilteractivity);
     console.log(allfilteractivity);
    }

     // get status
  private getActivityStatus = new BehaviorSubject<any>('');
  public GetActivityStatus = this.getActivityStatus.asObservable();
 set_getActivityStatus(getActivityStatus: any)
  {
    this.getActivityStatus.next(getActivityStatus);
     console.log(getActivityStatus);
    }
     // get people for chat
  private storpeopleForchat = new BehaviorSubject<any>('');
  public StorpeopleForchat = this.storpeopleForchat.asObservable();
 set_storpeopleForchat(storpeopleForchat: any)
  {
    this.storpeopleForchat.next(storpeopleForchat);
     console.log(storpeopleForchat);
    }
     // get chat
  private storchat = new BehaviorSubject<any>('');
  public Storchat = this.storchat.asObservable();
 set_storchat(storchat: any)
  {
    this.storchat.next(storchat);
     console.log(storchat);
    }

    // get all public activity
  private storallactivity = new BehaviorSubject<any>('');
  public Storallactivity = this.storallactivity.asObservable();
 set_storallactivity(storallactivity: any)
  {
    this.storallactivity.next(storallactivity);
     console.log(storallactivity);
    }

    // get activity for update
  private activityDataforUpdate = new BehaviorSubject<any>('');
  public ActivityDataforUpdate = this.activityDataforUpdate.asObservable();
 set_activityDataforUpdate(activityDataforUpdate: any)
  {
    this.activityDataforUpdate.next(activityDataforUpdate);
     console.log(activityDataforUpdate);
    }
    // get user profile
  private getuserprofile = new BehaviorSubject<any>('');
  public Getuserprofile = this.getuserprofile.asObservable();
 set_getuserprofile(getuserprofile: any)
  {
    this.getuserprofile.next(getuserprofile);
     console.log(getuserprofile);
    }

}
