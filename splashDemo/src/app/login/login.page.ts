import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router"
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  
  constructor(private authService: AuthService,  private router : Router, private toastC: ToastController) { }

  doLogin()
  {
    this.authService.login(this.email, this.password).then( () =>{
      this.router.navigate(['/folder/Vista']);
    }).catch(err => {
      this.toastMessage("Los datos son incorrectos o no existe el usuario");
    })
  }

  async toastMessage(message: string){
    const toast = await this.toastC.create({
      message: message,
      duration: 2000
    });

    toast.present();
  }

  loginGoogle() {
    
    this.authService.loginWithGoogle().then( () =>{
      this.toastMessage("Ingreso Exitoso");
      this.router.navigate(['/folder/Vista']);
    }).catch(err =>{
      alert('algo salio mal contacta a soporte')
    })
 }

  loginFacebook() {

    this.authService.loginWithFacebook().then( () =>{
      this.toastMessage("Ingreso Exitoso");
      this.router.navigate(['/folder/Vista']);
    }).catch(err =>{
      alert('algo salio mal contacta a soporte')
    })
 }

  ngOnInit() {
  }

}
