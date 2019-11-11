import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {
  dcHeroes:string[] = ['Batman','Superman','Wonder Woman', 'Flash'];
  index:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
