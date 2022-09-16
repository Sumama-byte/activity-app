import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../Services/global.service';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ViewDidEnter } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { ApicallService } from '../Services/apicall.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements ViewDidEnter {
  
  // Map
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  // segment value
  public selectTabs : any ='map';

  public profile_data : any ={u_id:'', name:'',  img:'' , bio: '' , socialize_distance:'' };
  public Profile: any ;


  public list_activities:any=[
    {id:1 ,user_img:'../../assets/Rectangle 142.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
     , location_address:'32,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'2' , start_time:'05' ,end_time:'03',attende_no:'43' },
    
    {id:2 ,user_img:'../../assets/Rectangle 143.png', activity_title:'Swimming Together',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
     , location_address:'31,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'23' , start_time:'05' ,end_time:'03',attende_no:'23'},
    
    {id:3 ,user_img:'../../assets/Rectangle 144.png', activity_title:'Going For Excercise ',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
     , location_address:'34,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'22' , start_time:'05' ,end_time:'03',attende_no:'12'},
    
    {id:4 ,user_img:'../../assets/Rectangle 145.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
     , location_address:'36,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'42' , start_time:'05' ,end_time:'03',attende_no:'23'},
    
    {id:5 ,user_img:'../../assets/Rectangle 143.png', activity_title:'Swimming Together',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
     , location_address:'38,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'32' , start_time:'05' ,end_time:'03',attende_no:'56'},
    
    {id:6 ,user_img:'../../assets/Rectangle 144.png', activity_title:'Going For Excercise ',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
     , location_address:'31,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'12' , start_time:'05' ,end_time:'03',attende_no:'45'},
    
    {id:7 ,user_img:'../../assets/Rectangle 145.png', activity_title:'Beach Party',activity_des:'Lets swimming together near a beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .beach and play a volly ball with each other .'
     , location_address:'30,street ,USA' , location_img:'../../assets/Rectangle 12942.png', location_range:'24' , start_time:'05' ,end_time:'03',attende_no:'43'},

]
  coordinates: any;
  uid: any;

  constructor(public route : Router,public apiCall:ApicallService, public global: GlobalService) {}

  ngOnInit() {
    this.getProfile();
  }

  async getProfile() {
    await this.global.Uid.subscribe(uid => {
      this.uid = uid;
    });
    
    await this.apiCall.api_getprofile(this.uid);
    console.log(this.uid);
    await this.global.ProfileInfo.subscribe(res => {
    console.log(res[0].img)
   this.Profile= res[0].img;
  });
   }

  // navigations
  notification(){
    this.route.navigate(['/tabs/notification'])
  }
  profile(){
    this.route.navigate(['/tabs/profile'])
  }

  // show activity details
  show_details(data){
    this.route.navigate(['/tabs/activity-details']);
    this.global.set_activity_details(data);
  }

  // Map Function
  ionViewDidEnter(): void {
    this.createMap();
  }
  async createMap() {
    // Get Current Locations
    await this.getLocation();
    // Create Map
    const mapRef = document.getElementById('my-cool-map');
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef,
      apiKey: environment.mapApiKey,
      config: {
        center: {
          lat: this.coordinates.coords.latitude,
          lng: this.coordinates.coords.longitude,
        },
        zoom: 18,
      },
    });
    // Add Markers
    await this.newMap.addMarkers([
      {
        coordinate:{
          lat: this.coordinates.coords.latitude,
          lng: this.coordinates.coords.longitude
        },
        title: "Zagham",
        snippet: "Zagham Nadeem",
        iconUrl:"https://user-images.githubusercontent.com/104660890/185779727-ec171903-c781-4254-83ad-e7c6188e361e.png",
        iconSize: {
          width:100,
          height:100
        }
       },
       {
        coordinate:{
          lat: 33.7,
          lng: -117.8
        },
        title: "Zagham"
       }
    ]);
     await this.newMap.setOnMarkerClickListener(async (marker) => {
      console.log(marker);
     })
}
  // GeoLocation
  async getLocation () {
    this.coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', this.coordinates.coords.latitude);
  };
  

}
