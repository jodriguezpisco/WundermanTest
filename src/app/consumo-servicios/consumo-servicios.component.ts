import { Component, OnInit } from '@angular/core';
import { WudermanTestService } from './wuderman-test.service';
import { TableModule } from "primeng/table";
 

@Component({
  selector: 'app-consumo-servicios',
  templateUrl: './consumo-servicios.component.html',
  styleUrls: ['./consumo-servicios.component.css']
})
export class ConsumoServiciosComponent implements OnInit {
  getData: any = [];
  postData: any = [];
  cols: any;

  constructor(
    private service: WudermanTestService
  ) { }

  ngOnInit(): void {
    this.getListItems();
    // this.cols =  [
    //   {field: 'id', header:'Id'},
    //   {field: 'title', header:'Título'},
    //   {field: 'body', header:'Mensaje'}
    // ]
  }

  getListItems(){
    this.service.getListItems().subscribe(result => {
      this.getData = result
    })
  }

  postListItems(){
    this.service.postListItems().subscribe(result => {
      this.postData = result
    })
  }

}
