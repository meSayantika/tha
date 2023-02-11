import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { environment } from 'src/environments/environment';
import { MessageService } from 'src/app/Services/message.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-hotel-sidebar',
  templateUrl: './hotel-sidebar.component.html',
  styleUrls: ['./hotel-sidebar.component.css']
})
export class HotelSidebarComponent implements OnInit {
  check_activity:any
  status:any
  constructor(private dataServe:DataService,private dialog:MatDialog,private msg:MessageService,private router:Router) { }
  menuData:any
  ngOnInit() {
    
   this.status=localStorage.getItem('hotel_flag')
   
      this.dataServe.global_service(0,'/check_active_status',`id=${localStorage.getItem('Restaurant_id')}`).subscribe(data=>{
        console.log(data);
        this.check_activity=data;
        if(this.check_activity.msg[0].approval_flag=='A'){  
          this.dataServe.local_service(environment.approvedMenu).subscribe(
            data=>{
              console.log(data)
              this.menuData=data
            },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
         
           }
        else{
          this.dataServe.local_service(environment.menuSetup).subscribe(
            data=>{
              console.log(data)
              this.menuData=data
            },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
         
           }
          },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

         
         
  
    }
  openDialog(v:any) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      data: {flag:'signout',content:v}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result==1)
       {
        localStorage.clear();
        this.router.navigate(['auth'])
       }

    });
  }

}
