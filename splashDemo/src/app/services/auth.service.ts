import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

import { GooglePlus } from '@ionic-native/google-plus/ngx'
import { auth } from 'firebase'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Injectable({
    providedIn:'root'
})

export class AuthService{

    constructor( private google : GooglePlus, private AFauth: AngularFireAuth, private fb: Facebook){}
    loginWithGoogle(){
        return this.google.login({}).then( result=> {
            const user_data_google = result;
            return this.AFauth.signInWithCredential(auth.GoogleAuthProvider.credential(null,user_data_google.accessToken))
        } )
    }

    loginWithFacebook(){
        return this.fb.login(['email','public_profile']).then( (response: FacebookLoginResponse)=>{
            const credentia_fb = auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
            return this.AFauth.signInWithCredential(credentia_fb);
        })

    }
}
