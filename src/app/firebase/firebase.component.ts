import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component ({
    selector: 'app-firebase',
    template: `<app-user-account></app-user-account>`,

})

export class FirebaseComponent implements OnInit {
    constructor() {}

    ngOnInit(){
        firebase.initializeApp({
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
          });
    }
}