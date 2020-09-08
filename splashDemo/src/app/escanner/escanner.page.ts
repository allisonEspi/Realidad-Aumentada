
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { PhotoService } from '../services/camara.service';
//import { ToastController, LoadingController, Platform } from '@ionic/angular';
//import jsQR from 'jsqr';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-escanner',
  templateUrl: './escanner.page.html',
  styleUrls: ['./escanner.page.scss'],
})
export class EscannerPage {

  scannedData: any;
  encodedData: '';
  encodeData: any;

  constructor(private authservice:AuthService,public photoService: PhotoService,public barcodeCtrl: BarcodeScanner) {}
 
  goToBarcodeScan() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: true,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeCtrl.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;

    }).catch(err => {
      console.log('Error', err);
    });
  }


  goToCreateCode() {
    this.barcodeCtrl.encode(this.barcodeCtrl.Encode.TEXT_TYPE, this.encodeData).then((encodedData) => {
      console.log(encodedData);
      this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }
  
  logout(){
    this.authservice.logout();
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  ngOnInit() {
  }
  
}
