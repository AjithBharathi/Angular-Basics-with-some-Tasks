import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  GOTCharacter:string[];
  GOTCharacterFirstName:string[] = ['ajith','vijay','surya'];
  GOTCharacterLastName:string[] = ['kumar','raj','parakash'];
  i=0;
  // 4.two way data binding
twoWay:string = 'enter text';
  constructor() {
    this.GOTCharacter = this.GOTCharacterFirstName;
    setInterval(()=>{
      if(this.i%2==0){
        this.GOTCharacter = this.GOTCharacterFirstName; 
      }
      else{
        this.GOTCharacter = this.GOTCharacterLastName;
      }
      this.i++;
    },2000);
  }

  ngOnInit() {
  }
  // 1.string interpolation
  Name:string = 'Ajith';
  returnString(){
    return 'this is return string function with string interpolation';
  }

// 2.property binding
// image is a property
imageUrl:string = '../../../assets/angular-card.png'; 

// input field
inputProperty:string = 'enter text';

// 3.event binding
// click event with function
clickevent:string = 'try to click the button';
eventChange(){
  this.clickevent = 'you are done the click event to changed the value';
}

//  ************************
GOTCharacter_click_fn:string[];
GOTCharacterFirstName_click_fn:string[] = ['ajith','vijay','surya'];
GOTCharacterLastName_click_fn:string[] = ['kumar','raj','parakash'];
j=0;
stopSwitch:any;
stopSwitchStatus = true;

switchButton(){
  this.stopSwitch = setInterval(()=>{
    if(this.j%2==0){
      this.GOTCharacter_click_fn = this.GOTCharacterFirstName_click_fn; 
    }
    else{
      this.GOTCharacter_click_fn = this.GOTCharacterLastName_click_fn;
    }
    this.j++;
  },2000);
  this.stopSwitchStatus = false;
}
switchoffButton(){
  clearInterval(this.stopSwitch);
  this.stopSwitchStatus = true;
}


}
