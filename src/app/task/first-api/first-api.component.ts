import { Component, OnInit } from '@angular/core';
import { FirstApiService } from './first-api.service';

@Component({
  selector: 'app-first-api',
  templateUrl: './first-api.component.html',
  styleUrls: ['./first-api.component.css']
})
export class FirstApiComponent implements OnInit {
  outputs;
  constructor(private dataservice: FirstApiService) { }

   ngOnInit() {
    this.fetchdata();
  }

   fetchdata() {
     this.dataservice.getdata().subscribe(result => {
       console.log(result);
       this.outputs = result;
     })
   }

}
