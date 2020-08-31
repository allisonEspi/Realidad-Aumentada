import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { PhotoService } from '../services/camara.service';
//import {QRScanner} from 'cordova-plugin-qrscanner';
import { DocumentScanner} from '@ionic-native/document-scanner';

@Component({
  selector: 'app-escanner',
  templateUrl: './escanner.page.html',
  styleUrls: ['./escanner.page.scss'],
})
export class EscannerPage implements OnInit {

  constructor(private authservice:AuthService,public photoService: PhotoService) { }


  public documentscanner(){
    DocumentScanner.scanDoc
  }
 /* public scanner(){

    QRScanner.prepare(onDone); // show the prompt

    function onDone(err, status){
      if (err) {
       // here we can handle errors and clean up any loose ends.
       console.error(err);
      }
      if (status.authorized) {
        // W00t, you have camera access and the scanner is initialized.
        // QRscanner.show() should feel very fast.
      } else if (status.denied) {
       // The video preview will remain black, and scanning is disabled. We can
       // try to ask the user to change their mind, but we'll have to send them
       // to their device settings with `QRScanner.openSettings()`.
      } else {
        // we didn't get permission, but we didn't get permanently denied. (On
        // Android, a denial isn't permanent unless the user checks the "Don't
        // ask again" box.) We can ask again at the next relevant opportunity.
      }
    }
  
    QRScanner.scan();
    QRScanner.show();
  }*/
  ngOnInit() {
  }
  logout(){
    this.authservice.logout();
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }


}