import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-sales-account',
  templateUrl: './sales-account.component.html',
  styleUrls: ['./sales-account.component.css']
})
export class SalesAccountComponent implements OnInit {
  // for sales account dashboard
  displayedColumns: string[] = ['id', 'restaurant_name', 'date_enquiry','edit', 'delete'];
  // dataSource = ELEMENT_DATA;
  userData: any;
  del_id: any;
  modeData: any;
  divid: any;
  flag: any;
  show_edit = false;
  setupmode: any;
  x: any;
  m = '';
  delData:any;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  constructor(public dialog: MatDialog,private msg:MessageService, private router: Router,private dataServe:DataService) { }
  show_spinner = false;
  // end

  // for hotel account
  displayedHotelColumns: string[] = ['id', 'restaurant_name', 'date_enquiry','country','setup','edit', 'delete'];
  
  ngOnInit(): void {
    this.fetchdata();
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.matsort;
  // }
 
  // go_details(v: any) { //route to the particular restaurant on clicking on the edit option
  //   // alert(v);
  //   this.router.navigate(['main/admin/manage_hotel_account',btoa(v)]).catch(data=>{
  //     this.msg.globalError(data);
  //   })
    
  // }
  // fetchdata() { //fetching the restaurant record
  //   //Call APi
  //   this.dataServe.global_service(0,'/res_dtls_custom',`id=0&flag=S`).subscribe(data => {
  //     console.log(data)
  //     this.userData = data
  //     // this.userData = this.userData.msg;
  //     // this.show_spinner=true;
  //     this.putdata(this.userData.msg)
  //   },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  // }
  // putdata(v: any) { //assign pagination and sort header to datatable
  //   this.dataSource = new MatTableDataSource(v);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.matsort;
  //   for (let i = 0; i < v.length; i++) {
  //     console.log('setup' + (i + 1));
  //     // this.divid=document.getElementById('setup'+(i+1));
  //     // console.log(this.divid)
  //     // this.divid.style.display='none'

  //   }

  // }
  // applyFilter(event: Event) { //search input
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  // click_setup(v: any, id: any) { //to change mode to either setup, pending or approval
  //   console.log(id)
  //   this.setupmode = document.getElementById('setupmodeid' + id);
  //   console.log("checked:" + v.checked);
  //   this.divid = document.getElementById('setup' + id);
  //   if (v.checked) {
  //     this.flag = 'Y'
  //     this.m = 'Setup Mode: On'
  //   }
  //   else {
  //     this.flag = 'N'
  //     this.m = 'Setup Mode: Off'
  //   }
  //   this.dataServe.global_service(0,'/update_approval',`flag=${this.flag}&id=${id}`).subscribe(data => {
  //     console.log(data)
  //     this.modeData = data;
  //     if (this.modeData.suc == 1) {

  //     }
  //     else {
  //       this.msg.globalError('Error! Cannot change support mode. Please try again later!')

  //     }

  //   },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

  // }
  // del_res(v: any) { //to assign the restaurant ID
  //   console.log(v);
  //   this.del_id = v;
  //   var f='delete'
  //   const dialogRef = this.dialog.open(DialogBoxComponent, {
  //     // width: '250px',
  //     data: { flag: f, content: v }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result, f)
  //     if(result==1)
  //     // debugger
  //     this.delete_restaurant()
      
  //   })
  // }
  // delete_restaurant() { //function for deletin a restaurant
  //   this.dataServe.global_service(0,'/del_res',`id=${this.del_id}`).subscribe(data=>{console.log(data)
  //   this.delData=data;
  //   if(this.delData.suc==1){
  //     this.fetchdata()
  //     this.msg.successMsg('SD')
      
  //   }
  //   else{
  //    this.msg.errorMsg('ED')
  //   }
  //   },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  // }
  // register(){
  //   const dialogRef = this.dialog.open(DialogBoxComponent, {
  //     // width: '250px',
  //     data: { flag: 'registration', content: null }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result==1)
  //      this.fetchdata()
  //   })
  // }
  // sendQ(){
  //   const dialogRef = this.dialog.open(DialogBoxComponent, {
  //     // width: '250px',
  //     data: { flag: 'sendQ', content: null }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result==1)
  //      this.fetchdata()
  //   })
  // }
  del_res(v: any) { //to assign the restaurant ID
    console.log(v);
    this.del_id = v;
    var f='delete'
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      data: { flag: f, content: v }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, f)
      if(result==1)
      // debugger
      this.delete_restaurant()
      
    })
  }
  delete_restaurant() { //function for deletin a restaurant
    this.dataServe.global_service(0,'/del_res',`id=${this.del_id}`).subscribe(data=>{console.log(data)
    this.delData=data;
    if(this.delData.suc==1){
      this.fetchdata()
      this.msg.successMsg('SD')
      
    }
    else{
     this.msg.errorMsg('ED')
    }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  fetchdata() { //fetching the restaurant record
    //Call APi
    this.dataServe.global_service(0,'/res_dtls_custom',`id=0`).subscribe(data => {
      console.log(data)
      this.userData = data
      // this.userData = this.userData.msg;
      // this.show_spinner=true;
      this.putdata(this.userData.msg)
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  putdata(v: any) { //assign pagination and sort header to datatable
    this.dataSource = new MatTableDataSource(v);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
    for (let i = 0; i < v.length; i++) {
      console.log('setup' + (i + 1));
      // this.divid=document.getElementById('setup'+(i+1));
      // console.log(this.divid)
      // this.divid.style.display='none'

    }

  }
  applyFilter(event: Event) { //search input
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  click_setup(v: any, id: any) { //to change mode to either setup, pending or approval
    console.log(id)
    this.setupmode = document.getElementById('setupmodeid' + id);
    console.log("checked:" + v.checked);
    this.divid = document.getElementById('setup' + id);
    if (v.checked) {
      this.flag = 'Y'
      this.m = 'Setup Mode: On'
    }
    else {
      this.flag = 'N'
      this.m = 'Setup Mode: Off'
    }
    this.dataServe.global_service(0,'/update_approval',`flag=${this.flag}&id=${id}`).subscribe(data => {
      console.log(data)
      this.modeData = data;
      if (this.modeData.suc == 1) {

      }
      else {
        this.msg.globalError('Error! Cannot change support mode. Please try again later!')

      }

    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

  }
  go_details(v: any) { //route to the particular restaurant on clicking on the edit option
    // alert(v);
    this.router.navigate(['main/admin/manage_hotel_account',btoa(v)]).catch(data=>{
      this.msg.globalError(data);
    })
    
  }
  next(id:any){
    this.router.navigate(['main/admin/sales_account_form',btoa(id)]).catch(data=>{
      this.msg.globalError(data);
    })
  }
}
