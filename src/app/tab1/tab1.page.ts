import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../Services/global.service';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ViewDidEnter } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { ApicallService } from '../Services/apicall.service';
import { markers } from './data/index';
import { LocationsService } from '../Services/locations.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements ViewDidEnter {
  
  // Map Variables
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
  uid: any;


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

  public coords:any = [{coordinate:{lat:33.2, lng:-117.8}}]
  public coordinates: any;

  constructor(public route : Router , public global : GlobalService, public location: LocationsService,public apiCall:ApicallService ) {}

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
    this.getLocationDistances();
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
          lat: markers[0].lat,
          lng: markers[0].lng,
        },
        zoom: 12,
      }
    });
    await this.newMap.enableClustering();
    // Add Markers
    for(let i=0; i<markers.length; i++) {
      console.log(markers[i]);
      this.newMap.addMarkers([
        {
          coordinate:{
            lat: markers[i].lat,
            lng: markers[i].lng
          },
          title:markers[i].title,
          snippet:"Zagham",
          iconUrl:"https://avatars.githubusercontent.com/u/104660890?v=4",
          iconSize: {
            width: 40,
            height:36
          }
        }
      ])
    }
     await this.newMap.setOnMarkerClickListener(async (marker) => {
      console.log(marker);
     })
}
  // GeoLocation
  async getLocation () {
    this.coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', this.coordinates.coords.latitude);
  }
  
  // Get Distance
  async getLocationDistances() {
    for(let i=0; i<markers.length; i++) {
      const x = this.location.getDistanceFromLatLonInKm(markers[0].lat, markers[0].lng, markers[1].lat, markers[1].lng)
      console.log(x);
    }
  }

}
