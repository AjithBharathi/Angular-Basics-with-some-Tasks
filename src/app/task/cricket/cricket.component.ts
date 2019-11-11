import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {

  targetscore:number=30;
  totalscore:number=0;
  dscore:number=0;
  rscore:number=0;
  kscore:number=0;
  exampleRadios='';
  player1=true;
  player2=true;
  player3=true;
  butDisabled1: boolean = false;
  butDisabled2: boolean = false;
  butDisabled3: boolean = false;
  check1=true;
  check2=true;
  check3=true;
  _check1=true;
  _check2=true;
  _check3=true;
  twic=0;
  offbutton=false;
  qwer="";


  constructor() { }

  ngOnInit() {
    
  }

 
  

  score(value){

   
 
    if(this.exampleRadios=="option1")
    { 
      if(this.check1){
      this.dscore+=value;
      this.totalscore+=value;
    }
    }else if(this.exampleRadios=="option2")
    { if(this.check2){
      this.rscore+=value;
      this.totalscore+=value;
    }
    }else if(this.exampleRadios=="option3")
    { if(this.check3){
      this.kscore+=value;
      this.totalscore+=value;
    }}
   
   // this.rscore=value;
   if(this.totalscore>=this.targetscore){
    alert("you won the match !!");
    this.offbutton=true;
    this.qwer="congratulations!!you won the match";
}
  }

  wicket(){
    if(this.exampleRadios=="option1")
    {
      this.butDisabled1 = true;
      this.check1=false;
      if(this._check1){
      this.twic++;
      this._check1=false;
      }
    }else if(this.exampleRadios=="option2")
    {
      this.butDisabled2 = true;
      this.check2=false;
      if(this._check2){
        this.twic++;
        this._check2=false;
        }
      
    }else if(this.exampleRadios=="option3")
    {
      // this.player3=false;
      this.butDisabled3 = true;
      this.check3=false;
      if(this._check3){
        this.twic++;
        this._check3=false;
        }
     
    }

  }

  change(){
  console.log("change deetected");
  }


}
