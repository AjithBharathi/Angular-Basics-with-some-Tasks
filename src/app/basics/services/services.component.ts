import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [DataService]
})
export class ServicesComponent implements OnInit {
  itemReceived:string[]=[''];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getItemsFromServiceClass(){
    this.itemReceived = this.dataService.getItems();
  }
  addNewItem(form: any){
    console.log(form.value.itemName);
    this.dataService.addItem(form.value.itemName);
  }

}
