import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WudermanTestService {

  constructor(
    private http: HttpClient,
    //private globals: Globales
    ) { }

    DireccionIP: string = "https://jsonplaceholder.typicode.com";

    getListItems() {
      var endpoint = "/posts";
      return this.http.get(this.DireccionIP + endpoint);
    }

    postListItems(){
      var endpoint = "/posts";
      return this.http.post(this.DireccionIP + endpoint, null);
    }
}
