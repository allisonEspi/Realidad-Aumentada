import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      url: '/folder/Vista',
      icon: 'tablet-portrait'
    },
    {
      title: 'Escanear Imagen',
      url: '/folder/Escaner',
      icon: 'md-qr-scanner'
    },
    {
      title: 'Favoritos',
      url: '/folder/Favoritos',
      icon: 'heart'
    },
    {
      title: 'Perfil',
      url: '/folder/Perfil',
      icon: 'person'
    },
    {
      title: 'Notificaciones',
      url: '/folder/Notificaciones',
      icon: 'notifications'
    },
    {
      title: 'Cerrar Sesion',
      url: '/login',
      icon: 'log-out'
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
