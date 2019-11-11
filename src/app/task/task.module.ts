import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { TaskComponent } from './task.component';
import { TaskRootComponent } from './taskRoot.component';
import { FirstAngularComponent } from './first-angular/first-angular.component';
import { ServerOnOffComponent } from './server-on-off/server-on-off.component';
import { CricketComponent } from './cricket/cricket.component';
import { FirstApiComponent } from './first-api/first-api.component';

import { PostComponent } from './first-api/post/post.component';
import { ViewComponent } from './first-api/view/view.component';
import { FirstApiService } from './first-api/first-api.service';
import { router } from './first-api/router';


import { ServerComponent } from './server-on-off/server/server.component';
import { ServersComponent } from './server-on-off/servers/servers.component';





const ROUTES: Routes = [
  {path:'', component:TaskComponent},
  {path:'cricket', component:CricketComponent},
  {path:'firstangular', component:FirstAngularComponent},
  {path:'firstapi', component:FirstApiComponent},
  {path:'serveronoff', component:ServerOnOffComponent},

]

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    router
  ],
  declarations: [
    TaskRootComponent,
    TaskComponent,
    FirstAngularComponent, 
    ServerOnOffComponent, 
    CricketComponent, 
    FirstApiComponent, 
    PostComponent,
    ViewComponent,
    ServerComponent,
    ServersComponent,
  ],
  providers: [FirstApiService],
  bootstrap: [TaskRootComponent]
})
export class TaskModule { }
