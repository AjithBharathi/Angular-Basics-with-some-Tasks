import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class FirstApiService {
// haha={name:"ajith",
// age:22};
// haha2=[{name:"ajith",age:22,degree:"be"},
// {name:"saravana",age:22,degree:"be"},{name:"vijay",age:25,degree:"ba"}];
// haha3=["ajith",22,"be"];
constructor(public http: Http) { }

getdata() {
  return this.http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json());
}

postdata(data) {
  return this.http.get('http://jsonplaceholder.typicode.com/posts', data).map(res => res.json());
}


}