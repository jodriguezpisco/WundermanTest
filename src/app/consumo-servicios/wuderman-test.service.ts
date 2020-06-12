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

    getListasItems() {
      return this.http.get(this.globals.DireccionIP).map((response: Response) => {
        return response.json();
        });
    }
}
