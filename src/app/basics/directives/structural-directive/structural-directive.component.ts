import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  dcHeroes:string[] = ['Batman','Superman','Wonder Woman', 'Flash'];
  index:number = 0;
  toogleHeroFlag:boolean = true;
  selectedHero:string;

  constructor() { }

  ngOnInit() {
  }

  toggleHero(){
    this.toogleHeroFlag = !this.toogleHeroFlag;
  }
  selectHero(hero){
    this.selectedHero = hero;
    console.log(hero);
  }

}
