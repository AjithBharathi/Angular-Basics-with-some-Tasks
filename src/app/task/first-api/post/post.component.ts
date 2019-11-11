import { FirstApiService } from './../first-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title;
  constructor(private service: FirstApiService) { }

  ngOnInit() {
  }

  post(body, user) {
   const data = {
      title: this.title,
      body: body,
      user: user
   }
   this.service.postdata(data).subscribe(res => {
     console.log(res);
  })
  }
// detail=this.service.haha2;


}
