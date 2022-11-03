import { Router } from '@angular/router';
import { GlobalService } from '../Services/global.service';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ViewDidEnter } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../Services/apicall.service';
import { markers } from './data/index';
import { LocationsService } from '../Services/locations.service';
import { interval, timer } from 'rxjs';
import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { GmapsService } from 'src/app/Services/gmap.service';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements ViewDidEnter {

  @ViewChild('map', {static: true}) mapElementRef: ElementRef;
  googleMaps: any;
  center = { lat: '', lng: '' };
  map: any;
  mapClickListener: any;
  markerClickListener: any;
  markers: any[] = [];
  // Map Variables
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  // segment value
  public selectTabs : any ='map';

  public profile_data : any ={u_id:'', name:'',  img:'' , bio: '' , socialize_distance:'' };
  public Profile: any ;
  private userName:any;
  uid: any;

  constructor(public route : Router , public global : GlobalService, public location: LocationsService,public apiCall:ApicallService,
    private gmaps: GmapsService,
    private renderer: Renderer2 ) {}
  ngOnInit() {
    this.getProfile();
    const ticker = timer(0, 5000);
  // ticker.subscribe(() => {
  //   this.getLocation();
  // });
    this.getAllActivity();
    this.get_appData();
    console.log(this.coordinates);

    setInterval(() => {
      this.get_appData(); // api call
    }, 30000);

  }
  ngAfterViewInit() {
    this.loadMap();
  }

  async loadMap() {
    const coordinates = await Geolocation.getCurrentPosition();
    try {
      let googleMaps: any = await this.gmaps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      const mapEl = this.mapElementRef.nativeElement;
      const location = new googleMaps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
      this.map = new googleMaps.Map(mapEl, {
        center: location,
        zoom: 16,
      });
      this.renderer.addClass(mapEl, 'visible');
      this.addMarker(location);
      // this.onMapClick();
    } catch(e) {
      console.log(e);
    }
  }
  addMarker(location) {
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: this.Profile,
      scaledSize: new googleMaps.Size(50, 50), 
    };
    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      // draggable: true,
      // animation: googleMaps.Animation.DROP
    });
    this.markers.push(marker);
    // this.presentActionSheet();
    this.markerClickListener = this.googleMaps.event.addListener(marker, 'click', () => {
      console.log('markerclick', marker);
      // this.checkAndRemoveMarker(marker);
      console.log('markers: ', this.markers);
    });
  }

  checkAndRemoveMarker(marker) {
    const index = this.markers.findIndex(x => x.position.lat() == marker.position.lat() && x.position.lng() == marker.position.lng());
    console.log('is marker already: ', index);
    if(index >= 0) {
      this.markers[index].setMap(null);
      this.markers.splice(index, 1);
      return;
    }
  }
  ngOnDestroy() {
    // this.googleMaps.event.removeAllListeners();
    if(this.mapClickListener) this.googleMaps.event.removeListener(this.mapClickListener);
    if(this.markerClickListener) this.googleMaps.event.removeListener(this.markerClickListener);
  }
  async getProfile() {
    await this.global.Uid.subscribe(uid => {
      this.uid = uid;
      this.userlocation.u_id = uid
    });

    await this.apiCall.api_getprofile(this.uid);
    console.log(this.uid);
    await this.global.ProfileInfo.subscribe(res => {
    console.log(res[0].img)
    this.Profile= res[0].img;
    this.userName = res[0].name;
  });
   }

  public coords:any = [{coordinate:{lat:33.2, lng:-117.8}}]
  public coordinates: any;

  public userlocation : any = {u_id:'', lng:'', lat:''}

  public notificationsActivity:any;
  public YourActivity:any={u_id:''}
  

  async getAllActivity(){
    await this.apiCall.api_getallActivitybylocation();
    this.global.Storallactivity.subscribe(res =>{
     this.notificationsActivity = res;
     console.log(res);
    });
   }

   show_details(data){
    console.log(data)
    this.route.navigate(['/activity-details'], { state: { data: data} })
  }

 async get_appData(){
  await this.apiCall.api_getActivity(this.uid);
  await this.apiCall.api_myparticipantActivity(this.uid);
  await this.apiCall.api_getallfilterActivity();
  // await this.apiCall.api_getpeopleForChat();
  }

  // navigation
  notification(){
    this.getAllActivity();
    this.get_appData();
    this.route.navigate(['/tabs/notification']);
  }
  profile(){
    this.route.navigate(['/tabs/profile'])
  }

  // show activity details
  // show_details(data){
  //   this.route.navigate(['/tabs/activity-details']);
  //   this.global.set_activity_details(data);
  // }

  // Map Function
  ionViewDidEnter(): void {
    this.createMap();
    this.getLocationDistances();
  }

 async postLocation(){
   await this.apiCall.api_postLocation(this.userlocation)
  }

  async createMap() {
    // const coordinates = await Geolocation.getCurrentPosition();
    // console.log('Current position:', coordinates);
    // this.getAllActivity();
    // this.get_appData();
    // // Get Current Locations
    // await this.getLocation();
    // // Create Map
    // const mapRef = document.getElementById('my-cool-map');
    // this.newMap = await GoogleMap.create({
    //   id: 'my-cool-map',
    //   element: this.mapRef.nativeElement,
    //   apiKey: environment.mapsKey,
    //   config: {
    //     center: {
    //       lat: coordinates.coords.latitude,
    //       lng: coordinates.coords.longitude,
    //     },
    //     zoom: 15,
    //   }
    // });
    // await this.newMap.enableClustering();
    // // Add Markers

    // this.newMap.addMarkers([
    //   {
    //     coordinate:{
    //       lat: coordinates.coords.latitude,
    //       lng: coordinates.coords.longitude
    //     },
    //     title:this.userName,
    //     snippet:"Zagham",
    //     iconUrl: "https://turbonowpk.com/activity/images/2211011667330422.8122.jpg",
    //     iconSize: {
    //       width: 40,
    //       height:36
    //     },
    //     iconAnchor: {
    //       x: 5,
    //       y: 5
    //     }
    //   }
    // ])
    // for(let i=0; i<this.notificationsActivity.length; i++) {
    //   console.log(this.notificationsActivity[i]);
    //   console.log(`${this.notificationsActivity[i].lng}`);
    //   const x = this.notificationsActivity[i].lng
    //   const lat:number =  +x;
    //   const y = this.notificationsActivity[i].lat
    //   const lng = +y;
    //   console.log(lat, lng)
    //   this.newMap.addMarkers([
    //     {
    //       coordinate:{
    //         lat: lat,
    //         lng: lng
    //       },
    //       title:this.notificationsActivity[i].name,
    //       snippet:"Zagham",
    //       iconUrl: "this.notificationsActivity[i].a_image",
    //       iconSize: {
    //         width: 40,
    //         height:36
    //       }
    //     }
    //   ])
    // }
    //  await this.newMap.setOnMarkerClickListener(async (marker) => {
    //   console.log(marker);
    //  });
    // await this.newMap.setOnMapClickListener(async (marker) => {
    //   console.log(marker)
    // })
}
  // GeoLocation
  async getLocation () {
    this.coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', this.coordinates.coords.latitude);
    console.log('Current position:', this.coordinates.coords.longitude);
    this.userlocation.lat = this.coordinates.coords.latitude;
    this.userlocation.lng = this.coordinates.coords.longitude;
    console.log(this.userlocation);
    this.postLocation();

  }

  // Get Distance
  async getLocationDistances() {
    for(let i=0; i<markers.length; i++) {
      const x = this.location.getDistanceFromLatLonInKm(markers[0].lat, markers[0].lng, markers[1].lat, markers[1].lng)
      console.log(x);
    }
  }

}
