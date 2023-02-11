import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/Services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {
  deptForm!: FormGroup;
  addDeptData:any
  getDeptData:any
  constructor(private activatedRoute:ActivatedRoute, public dialog: MatDialog,private msg:MessageService, private router: Router,private dataServe:DataService,private formBuilder: FormBuilder) { }
  displayedColumns: string[] = ['position','name'];
  dataSource = new MatTableDataSource();
  hotel_id:any
  id=0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit() {
    this.hotel_id=this.activatedRoute.snapshot.params['id'];
    this.hotel_id=atob(this.hotel_id);
    this.deptForm = this.formBuilder.group({
      name: ['', [Validators.required]],
     
     
    });
    this.getDept()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getDept(){
    this.dataServe.global_service(0,'/dept',`hotel_id=${this.hotel_id}`).subscribe(data=>{console.log(data)
    this.getDeptData=data
    this.putdata(this.getDeptData.msg)
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  putdata(v: any) { //assign pagination and sort header to datatable
    console.log(v)
    this.dataSource = new MatTableDataSource(v);
    this.dataSource.paginator = this.paginator;
   

  }
  add_dept(){
    var dt={
      id:this.id?this.id:0,
      dept_name:this.deptForm.controls.name.value,
      user:"admin@gmail.com",
      hotel_id: this.hotel_id
    }
    this.dataServe.global_service(1,'/dept',dt).subscribe(data=>{
      console.log(data)
      this.addDeptData=data;
      if(this.addDeptData.suc>0)
      {
        if(this.id){
          this.msg.successMsg('SU')
        }
        else 
        {
          this.msg.successMsg('SS');
        }
       this.getDept() ; this.deptForm.reset()

      }
      else{
        if(this.id){
          this.msg.errorMsg('EU')

        }
        else 
        {
          this.msg.errorMsg('ES')
        }
      }
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }

  refresh(){
    this.deptForm.reset()
    this.id=0
  }
  edit(element:any){
    this.deptForm.patchValue({name:element.dept_name})
    this.id=element.id
  }
}
