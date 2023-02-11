import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {

  constructor() { }
  dashboardData=[
    {
      text:'New payment received',
      time:'10 mins'
    },
    {
      text:'Payment rejected',
      time:'15 mins'
    },
    {
      text:'New Restaurant - Agent: Linda	',
      time:'17 mins'
    },
    {
      text:'New Restaurant - Agent: Linda',
      time:'25 mins'
    },
    {
      text:'	New Artist - Agent: Angie	',
      time:'28 mins'
    },
    {
      text:'New Restaurant - Agent: Angie',
      time:'35 mins'
    },
    {
      text:'New Merchant - Agent: Linda',
      time:'39 mins'
    },
   ]
   users=[
    {
      name:'Brian',
      picture:'https://www.w3schools.com/w3images/avatar5.png'
    },
    {
      name:'Cindy',
      pciture:'https://www.w3schools.com/w3images/avatar5.png'
    }
   ]
   displayedColumns: string[] = ['text','time'];
   displayedColumns1: string[] = ['picture','name'];
  dataSource = this.dashboardData;
  dataSource1 = this.users;
  ngOnInit() {
  }

}
