import { Component } from '@angular/core';
import { TestserviceService } from './Services/testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THA';
  constructor(private test:TestserviceService){}
  ngOnInit(){

  }
  getData(){
    this.test.getPosts().subscribe(data=>{console.log(data)})
  }
}
