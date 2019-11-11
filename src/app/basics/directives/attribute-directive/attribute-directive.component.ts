import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  // properties
    // NgStyle
  myStyle:{};
  color:string;
  styleToggleFlag:boolean = true;
    // NgClass
  currentCSSClass:string = 'styleRed'; 
    // NgModel
  inputColor:string = 'red';  

  constructor() { }

  ngOnInit() {
  }

  // NgStyle
  setStyle(){
    this.myStyle = {
      'font-weight': this.styleToggleFlag ? 'bold' : 'normal',
      'font-size': this.styleToggleFlag ? '24px' : '15px',
      'color': this.generateRandomColor()
    }
    this.styleToggleFlag = !this.styleToggleFlag;
  }
  generateRandomColor(){
    this.color = '#';
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(var i=0;i<6;i++){
      this.color += letters[Math.floor(Math.random()*16)];
    }
    console.log(this.color);
    return this.color;
  }

// NgClass
setCSSClass(){
  if(this.currentCSSClass == "styleRed"){
    this.currentCSSClass = 'styleWhite';
  }
  else{
    this.currentCSSClass = 'styleRed';
  }
  console.log(this.currentCSSClass);
}

}
