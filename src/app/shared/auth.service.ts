import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    userData: any;

    constructor(
        public angularFireAuth: AngularFireAuth,
        public angularFirestore: AngularFirestore,
        public router: Router,
        public ngZone: NgZone
    ) {
        this.angularFireAuth.authState.subscribe((user)=>{
            console.log(user);
            if(user){
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user')!);
            }
            else{
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        })
    }

    signUp(email: string, password: string,) {
        return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            this.SendVerificationMail();
            this.SetUserData(result.user);
        })
        .catch((error) => {
            window.alert(error.message)
        });
    }

    SendVerificationMail() {
        return this.angularFireAuth.currentUser
        .then((u: any) => u.sendEmailVerification())
        .then(() => {
            this.router.navigate(['']);
        })
    }

    SetUserData(user: any) {

        const userData = {
            uid: user.uid,
            uemail: user.email,
            emailVerified: user.emailVerified
        }
        console.log(userData)
        console.log(this.isLoggedIn)

        const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`user/${user.uid}`);

        return userRef.set(userData, {
            merge: true
        });
    }

    logIn(email: string, password: string) {
        return this.angularFireAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate([''])
            });
            this.SetUserData(result.user)
            console.log(result.user)
        })
        .catch((error) => {
            window.alert(error.message)
        });
    }

    get isLoggedIn(): boolean{
        const user = JSON.parse(localStorage.getItem('user')!);
        console.log(user);
        return user !== null && user.emailVerified !== false ? true : false;
    }

    getToken(){
        const user = JSON.parse(localStorage.getItem('user')!);
        const token = user != null ? user.stsTokenManager.accessToken : null;
        return token;
    }
    
}