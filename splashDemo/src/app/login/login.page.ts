import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  constructor(private authService: AuthService,  private router : Router) { }


  loginGoogle() {
    
    this.authService.loginWithGoogle().then( () =>{
      this.router.navigate(['/folder/inbox']);
    }).catch(err =>{
      alert('algo salio mal contacta a soporte')
    })
 }

  loginFacebook() {

    this.authService.loginWithFacebook().then( () =>{
      this.router.navigate(['/folder/inbox']);
    }).catch(err =>{
      alert('algo salio mal contacta a soporte')
    })
 }

  ngOnInit() {
  }

}
