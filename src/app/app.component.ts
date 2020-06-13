import { Component } from '@angular/core';
import { WudermanTestService } from './wuderman-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WundermanTestPWA';
  getData: any = [];
  postData: any = {};
  dataPost: any;
  display: boolean = false;
  constructor(
    private service: WudermanTestService
  ) { }

  ngOnInit(): void {
    this.display = false;
  }

  getListItems(){
    this.service.getListItems().subscribe(result => {
      this.getData = result
    })
  }

  postListItems(){
    this.service.postListItems().subscribe(result => {
      this.postData = result
      this.dataPost = this.postData.id
    })
  }
}
