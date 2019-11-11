import { Injectable } from '@angular/core';
import * as firebase from 'firebase';



@Injectable()
export class UserService {
token:string;

signinForm:boolean = false;
signupForm:boolean = true;
  constructor() { }

  signupUser(email:string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    
  .catch(
      error => console.log("i am error"+error)
  );
 let signinForm2 = true;
  let signupForm2 = false;
  }

  signinUser(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
        response =>{
            firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            )
        }
    )
    .catch(
        error => console.log("error"+error)
    )
  }
  getToken(){
             firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
            return this.token;
        }
}
