import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from "@angular/router"


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Locales cercanos',
      url: '/folder',
      icon: 'locate'
    },
    {
      title: 'Escanear Imagen',
      url: '/escanner',
      icon: 'scan'
    },
    {
      title: 'Establecimientos',
      url: '/locales',
      icon: 'business'
    },
    {
      title: 'Favoritos',
      url: '/favoritos',
      icon: 'heart'
    },
    {
      title: 'Notificaciones',
      url: '/notificaciones',
      icon: 'notifications'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    }
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  
}
