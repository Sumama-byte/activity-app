import { Component, OnDestroy, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() {}
 async ngOnInit() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }
  async ngOnDestroy() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }
}
