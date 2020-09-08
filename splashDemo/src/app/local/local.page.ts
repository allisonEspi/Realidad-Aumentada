import { Component, OnInit,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service'; //importamos nuestro service

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {
  public idLocal: string;
 
  constructor(private route: ActivatedRoute,public rest : RestService) { }

  ngOnInit() {
    this.idLocal = this.route.snapshot.paramMap.get("id");
    this.getInfoLocal();
  }
  getInfoLocal() { //llamamos a la funcion getPost de nuestro servicio.
    this.rest.getLocal(this.idLocal).subscribe( infLocal => {
      console.log(infLocal)
        let nombreComercial = infLocal['nombreComercial']
        let idCat = infLocal["categoria"]
        let logo = infLocal["srcLogo"]
        let descripcion = infLocal["descripcion"]
        let direccion = infLocal["direccion"]
        let vistas = infLocal["vistas"]
        let like = infLocal["like"]
        let plantilla = `<ion-card>
                        <ion-card-header>
                            <ion-card-title>${nombreComercial}</ion-card-title>
                            <ion-card-subtitle>Restaurantes</ion-card-subtitle>
                          </ion-card-header>
                          <img src="${logo}" />

                          <ion-card-content>
                              <section>
                                <ion-label>${direccion}</ion-label>
                              </section>
                              <section>
                                <ion-label> ${like} Seguidores | ${vistas} visitas</ion-label>
                              </section>
                              <section>
                                <ion-segment color="tertiary" value="favorite">
                                  <ion-segment-button value="call">
                                    <ion-icon name="call"></ion-icon>
                                  </ion-segment-button>
                                  <ion-segment-button value="like">
                                    <ion-icon name="heart"></ion-icon>
                                  </ion-segment-button>
                                  <ion-segment-button value="fav">
                                    <ion-icon name="bookmark"></ion-icon>
                                  </ion-segment-button>
                                </ion-segment>
                              </section>
                              <section>
                                <h2>Acerca de nosotros</h2>
                                <ion-label text-wrap>${descripcion}</ion-label>
                              </section>
                              <section>
                                <div class="star-rating">
                                  <a >★</a>
                                  <a >★</a>
                                  <a >★</a>
                                  <a >★</a>
                                  <a >★</a>
                                  </div>
                              </section>
                          </ion-card-content>
                        </ion-card>`
          document.getElementById('InfoLocal').innerHTML += plantilla


      
    })
  }

}