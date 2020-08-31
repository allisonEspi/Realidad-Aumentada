import { Component, OnInit } from '@angular/core';
//import {QRScanner} from 'cordova-plugin-qrscanner';
import { DocumentScanner, DocumentScannerOptions } from '@ionic-native/document-scanner';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  constructor() { }

  public documentscanner(){
    DocumentScanner.scanDoc
  }

  /*public scanner(){

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
  
    QRScanner.scan(displayContents);
    function displayContents(err, text){
      if(err){
        // an error occurred, or the scan was canceled (error code `6`)
      } else {
        // The scan completed, display the contents of the QR code:
        alert(text);
      }
    }
    QRScanner.show();
  }*/
  ngOnInit() {
  }
}
