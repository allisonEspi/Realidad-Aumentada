import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../services/camara.service';

import { AuthService } from "src/app/services/auth.service";
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private authservice:AuthService,public photoService: PhotoService) { }

  
  ngOnInit() {
    }
  logout(){
    this.authservice.logout();
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
