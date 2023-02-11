import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router, private dataServe:DataService,private msg:MessageService) { }
  menuData:any;
  ngOnInit() {
    this.dataServe.local_service(environment.menuUrl).subscribe(
      data=>{
        console.log(data)
        this.menuData=data
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
        this.router.navigate(['main/admin/adminlogin'])
       }

    });
  }
}
