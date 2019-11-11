import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseComponent } from './firebase.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { UserService } from './useraccount/user-account/user.service';

import { UserAccountComponent } from './useraccount/user-account/user-account.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    FirebaseComponent,
    UserAccountComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [FirebaseComponent]
})
export class FirebaseModule { }
