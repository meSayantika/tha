import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subprofileInfo!: FormGroup;
  id: any;
  salesData: any;
  salesDashboardData: any;
  userData: any;
  dataSource= new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  subpwdInfo!: FormGroup;
  isEqual=false;
  hotelData:any;
  hotelDataSource = new MatTableDataSource();

  constructor(private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private router:Router,private dataServe:DataService,private msg: MessageService,public dialog: MatDialog) { }

  ngOnInit() {
       this.id=localStorage.getItem('user_id')


    this.subprofileInfo = this.formBuilder.group({
      agent_name: ['',Validators.required],
      address: ['',Validators.required],
      phone: ['',Validators.required],
      whatsapp: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
    });
    
      this.getAgentDtls()


   this.subpwdInfo =this.formBuilder.group({
      agent_old_pwd: ['', Validators.required],
      agent_new_pwd: ['', Validators.required],
      agent_con_pwd: ['', Validators.required],
     });
      

  }
  get f() { return this.subprofileInfo.controls }
  get h() { return this.subpwdInfo.controls }

  fetchdata() { //fetching the restaurant record
    //Call APi
    this.dataServe.global_service(0,'/sales_agent',null).subscribe(data => {
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

    }

  }
  click_setup(v: any, id: any) { //to change mode to either setup, pending or approval
    console.log(id)
  }

  applyFilter(event: Event) { //search input
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAgentDtls(){
     this.dataServe.global_service(0, '/sales_agent',`id=${this.id}`).subscribe(dt =>{
      console.log(dt);
      this.salesDashboardData = dt
      this.subprofileInfo.patchValue({
        agent_name: this.salesDashboardData.msg[0].agent_name,
        address: this.salesDashboardData.msg[0].address,
        phone: this.salesDashboardData.msg[0].phone_no,
        whatsapp: this.salesDashboardData.msg[0].whatsapp_no,
        email: this.salesDashboardData.msg[0].email,
     })
  })
}

  updatesubprofile(){
    var data={
      id:this.id,
      user: 'admin@gmail.com',
      agent_name: this.f.agent_name.value,
      address: this.f.address.value,
      phone: this.f.phone.value,
      whatsapp: this.f.whatsapp.value,
      email: this.f.email.value,
    }
    this.dataServe.global_service(1, '/sales_agent', data).subscribe((dt:any) =>{
      this.salesData = dt;
      if(this.salesData.suc > 0){
        this.msg.successMsg('SS'); this.subprofileInfo.reset()
        this.router.navigate(['main/admin/sales_account']).catch((data: any) => {
          this.msg.globalError(data);
        })
      }
      else { this.msg.errorMsg('ES') }
     
    }, (error: { status: string; statusText: string; url: string; }) => {
      this.msg.globalError(error.status + ' ' + error.statusText + ' in ' + error.url)
    })
}

updatesubpwd(){
 var store={
  id: this.id,
  user: localStorage.getItem('email'),
  agent_old_pwd: this.h.agent_old_pwd.value,
  agent_new_pwd: this.h.agent_new_pwd.value,
  agent_con_pwd: this.h.agent_con_pwd.value,
 }
}

check_pass(){
  this.isEqual=this.h.agent_con_pwd.value==this.h.agent_new_pwd.value? true : false
}

add_hotel(v: any){
  this.router.navigate(['main/sales/salesaddhotel',btoa(v)]).catch(data=>{
    this.msg.globalError(data);
  })
}
}
