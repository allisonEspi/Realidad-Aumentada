import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { PhotoService } from '../services/camara.service';



@Component({
  selector: 'app-escanner',
  templateUrl: './escanner.page.html',
  styleUrls: ['./escanner.page.scss'],
})
export class EscannerPage implements OnInit {

  constructor(private authservice:AuthService,public photoService: PhotoService) { }

  ngOnInit() {
  }
  logout(){
    this.authservice.logout();
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }


}
