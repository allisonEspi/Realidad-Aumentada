import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx'
import { LoadingController, Platform } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = 'http://eibesana96.pythonanywhere.com';
  
  constructor(private http: HttpClient, private nativeHTTP:HTTP, private plt: Platform, private loadingCtrl: LoadingController) {
    
  }

  
   getCategorias(): Observable<any>{
     
    return this.http.get(this.url+'/Categoria/?format=json');
    
    
  }
  getLocales(): Observable<any>{
     
    return this.http.get(this.url+'/Local/?format=json');
    
  }

  getLocal(idLocal:string ): Observable<any>{
     
    return this.http.get(this.url+'/Local/'+idLocal+'/?format=json');
    
    
  }
}