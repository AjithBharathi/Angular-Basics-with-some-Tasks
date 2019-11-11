import { Component, OnInit } from '@angular/core';


@Component({
  // selector: '[app-servers]',
  // selector:'.app-servers',
  selector:'app-servers',
  // template:`
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})



export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus = "no server was created";
  serverName = 'a';
  serverCreated = false; 
  
  users;
  servers = ['Testserver' , 'Testserver 2'];
  books = ['book1', 'book2','book3'];
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    } , 2000);

   
   }

  ngOnInit() {
  }

onCreateServer(){
  this.serverCreated=true;
  this.servers.push(this.serverName);
  this.serverStatus = "server was created name is "+this.serverName;
}
// onUpdateServerName(event: Event){
// this.serverName = (<HTMLInputElement>event.target).value;
// }
}
