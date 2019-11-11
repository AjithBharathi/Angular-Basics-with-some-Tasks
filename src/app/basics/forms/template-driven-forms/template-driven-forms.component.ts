import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  userList:User[] = [];

  constructor() { }

  ngOnInit() {
  }

  addUser(form){
    console.log(form.value);
    var user:User;
    user = form.value;
    this.userList.push(user);
  }
}
