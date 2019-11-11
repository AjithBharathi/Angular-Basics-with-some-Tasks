import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-angular',
  templateUrl: './first-angular.component.html',
  styleUrls: ['./first-angular.component.css']
})
export class FirstAngularComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  isEdit:boolean=false;

  constructor() {
    console.log('constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name='ajith';
    this.email='example@example.com';
    this.age=21;
    this.address={
      city:'salem',
      state:'tamilnadu'
    }
   this.hobbies=['write coding','watch madras central','posting videos to fb'];
   this.hello='';
  }
onClick(){
  this.name='ajith bharathi';
  this.hobbies.push('new bobby');
}
addHobby(hobby){
  console.log(hobby);
  this.hobbies.unshift(hobby);
  return false;
}
deleteHobby(hobby){
  for(let i=0;i<this.hobbies.length;i++){
    if(this.hobbies[i]== hobby){
      this.hobbies.splice(i, 1);
    }
  }
}
toggleEdit(){
  this.isEdit=!this.isEdit;
}
}


interface Address{
  city:string,
  state:string
}