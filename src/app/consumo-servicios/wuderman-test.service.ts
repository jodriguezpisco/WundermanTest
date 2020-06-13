import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globales } from '../../Globales';

@Injectable({
  providedIn: 'root'
})
export class WudermanTestService {

  constructor(
    private http: HttpClient,
    private globals: Globales
    ) { }

    getListItems() {
      var endpoint = "/posts";
      return this.http.get(this.globals.DireccionIP + endpoint);
    }

    postListItems(){
      var endpoint = "/posts";
      return this.http.post(this.globals.DireccionIP + endpoint, null);
    }
}
