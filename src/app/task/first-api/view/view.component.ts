import { Component, OnInit } from '@angular/core';
import { FirstApiService } from './../first-api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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
