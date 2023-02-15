import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router) { }
  showHeader=false
  ngOnInit() {
    this.showHeader=this.router.url.includes('adminlogin') || this.router.url.includes('send_proposal') || this.router.url.includes('confirm_pay')|| this.router.url.includes('hotelForm') || this.router.url.includes('view_proposal') || this.router.url.includes('sales')?false:true
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd)
      this.showHeader=event.url.includes('adminlogin') || this.router.url.includes('send_proposal')|| this.router.url.includes('confirm_pay')|| this.router.url.includes('hotelForm') || this.router.url.includes('view_proposal') || this.router.url.includes('sales')  ?false:true
    })
  }

}
