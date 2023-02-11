import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
@Component({
  selector: 'app-emergency-report',
  templateUrl: './emergency-report.component.html',
  styleUrls: ['./emergency-report.component.css'],
  
})
export class EmergencyReportComponent implements OnInit {
  displayedColumns: string[] = ['position', 'record_dt', 'edit', 'preview','status','action'];
  dataSource = new MatTableDataSource();
  msgData:any
  hotel_id:any
  getEmData:any
  hideRefresh=true
  isClicked=false
  state: string = 'default';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialog: MatDialog,private msg:MessageService, private router: Router,private dataServe:DataService,private formBuilder: FormBuilder, private activatedRoute:ActivatedRoute){}
  ngOnInit() {
    this.hotel_id=this.activatedRoute.snapshot.params['id'];
    console.log(this.hotel_id)
    this.hotel_id=atob(this.hotel_id);
    console.log(this.hotel_id)
    // this.getMessage()
    this.getEmergency()
  }
   ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
   }
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
   go_to_message(v:any){
     this.router.navigate(['/main/admin/create_emergency',btoa(this.hotel_id),btoa(v)])
   }
   getMessage(){
     this.dataServe.global_service(0,'/message_center',`hotel_id=${this.hotel_id}`).subscribe(data=>{
       console.log(data)
       this.msgData=data
       
 
     },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
   }
   getEmergency(){
    this.dataServe.global_service(0,'/emergency_repo','').subscribe(data=>{
      console.log(data)
      this.getEmData=data;
      this.isClicked=true
      setTimeout(()=>{
        this.hideRefresh=true
       this.isClicked=false

      },2000)
      this.putdata(this.getEmData.msg)

    } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
   putdata(v: any) { //assign pagination and sort header to datatable
     this.dataSource = new MatTableDataSource(v);
     this.dataSource.paginator = this.paginator;
    
 
   }
   previewMsg(v:any){
     const dialogRef = this.dialog.open(DialogBoxComponent, {
       // width: '250px',
       data: { flag: 'emPrev', content:v  }
     });
     dialogRef.afterClosed().subscribe(result => {
      
     })
   }
  openSearch(){
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      data: { flag: 'searchDt', content:null  }
    });
    dialogRef.afterClosed().subscribe(result => {
     console.log(result)
     this.dataServe.global_service(0,'/emergency_repo',`from=${result.from}&to=${result.to}`).subscribe(data=>{
      console.log(data)
      this.getEmData=data;
      this.putdata(this.getEmData.msg)
       this.hideRefresh=false
    } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
    })
  }
}


