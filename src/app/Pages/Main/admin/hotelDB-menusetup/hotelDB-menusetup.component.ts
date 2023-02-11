import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-hotelDB-menusetup',
  templateUrl: './hotelDB-menusetup.component.html',
  styleUrls: ['./hotelDB-menusetup.component.css']
})
export class HotelDBMenusetupComponent implements OnInit {

  displayedColumns: string[] = ['id', 'restaurant_name', 'phone_no', 'contact_name', 'setup', 'edit', 'manage', 'delete'];
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
  constructor(private dialog:MatDialog, private router: Router, private dataServe:DataService,private msg:MessageService) { }
  show_spinner = false;
  ngOnInit(): void {
    this.fetchdata();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
  }
  
  go_details(v: any) { //route to the particular restaurant on clicking on the edit option
    // alert(v);
    this.router.navigate(['/main/admin/restaurant_setup', btoa(v)]).catch(
error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

    )
  }
  fetchdata() { //fetching the restaurant record
    //Call APi
    this.dataServe.global_service(0,'/res_dtls','').subscribe(data => {
      console.log(data)
      this.userData = data
      // this.show_spinner=true;
      this.putdata(this.userData.msg)
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
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
      this.flag = 'S'
      this.m = 'Setup Mode: On'
    }
    else {
      this.flag = 'U'
      this.m = 'Setup Mode: Off'
    }
    this.dataServe.global_service(0,'/update_approval',`flag=${this.flag}&res_id=${id}`).subscribe(data => {
      console.log(data)
      this.modeData = data;
      if (this.modeData.suc == 1) {

        this.fetchdata();
        this.msg.globalSuccess(this.m)
      }
      else {
        this.m = "Error! Cannot change support mode. Please try again later!"

        this.fetchdata()
       this.msg.globalError(this.m)
      }

    }
    
    ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

    
    )

  }
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
      this.m="Delete successful!"
      this.msg.successMsg('SD')
      
    }
    else{
      this.m="Delete failed!";
     this.msg.errorMsg('ED')
    }
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }

}



