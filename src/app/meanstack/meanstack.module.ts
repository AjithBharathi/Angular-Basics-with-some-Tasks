import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FirstShoppingListComponent } from './first-shopping-list/first-shopping-list.component';
import { DataService } from './first-shopping-list/data.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    FirstShoppingListComponent
  ],
  providers: [DataService],
  bootstrap: [FirstShoppingListComponent]
})
export class MeanstackModule { }
