import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dataServe:DataService,private activatedRoute:ActivatedRoute) { }
 serve_id:any;
 restaurant_id:any
 menuData:any
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['serve_id'],this.activatedRoute.snapshot.params['rid'])
    this.serve_id= atob( this.activatedRoute.snapshot.params['serve_id'])
    this.restaurant_id= atob( this.activatedRoute.snapshot.params['rid'])
    this.dataServe.global_service(0,'/static_menu',`hotel_id=${this.restaurant_id}&res_id=${this.serve_id}`).subscribe(data=>{
      console.log(data)
      this.menuData=data
      var menu = Object.keys( this.menuData.msg);
      var section;
      for(let dt of menu){
        console.log(dt);
        section = Object.keys( this.menuData.msg[dt])
        console.log(section);
        for(let sec of section){
            for(let menu of  this.menuData.msg[dt][sec].res){
                console.log(menu);
            }
        }
      }
      }
      )

}
}
