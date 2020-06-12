import { Component, OnInit } from '@angular/core';
import { WudermanTestService } from './wuderman-test.service';

@Component({
  selector: 'app-consumo-servicios',
  templateUrl: './consumo-servicios.component.html',
  styleUrls: ['./consumo-servicios.component.css']
})
export class ConsumoServiciosComponent implements OnInit {
  data: any[];

  constructor(
    private service: WudermanTestService
  ) { }

  ngOnInit(): void {
    this.ObtenerListaItems();
  }

  ObtenerListaItems(){
    this.service.getListasItems().subscribe(result => {
      this.data = result
    })
  }

}
