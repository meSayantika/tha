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
  displaySubSales: string[] = ['id', 'restaurant_name', 'date_enquiry','country','setup','edit', 'delete'];
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
  del_id: any;
  delData: any;

  constructor(private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private router:Router,private dataServe:DataService,private msg: MessageService,public dialog: MatDialog) { }

  ngOnInit() {
    this.fetchdata();
    this.id=localStorage.getItem('user_id')
    this.fetchHoteldata();
    

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

  del_subres(v: any) { //to assign the restaurant ID
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
  
  go_hotelinfo(v:any){
    this.router.navigate(['main/subsales/subsaleshotelinfo',btoa(v)]).catch(data=>{
      this.msg.globalError(data);
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
    this.dataServe.global_service(0,'/sales_agent',null).subscribe(data => {
      console.log(data)
      this.userData = data
      // this.userData = this.userData.msg;
      // this.show_spinner=true;
      this.putdata(this.userData.msg)
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  fetchHoteldata() { //fetching the restaurant record
    //Call APi
    this.dataServe.global_service(0,'/res_dtls_custom',`flag=U&sales_id=${this.id}`).subscribe(data => {
      console.log(data)
      this.hotelData = data
      // this.userData = this.userData.msg;
      // this.show_spinner=true;
      this.putHotelData(this.hotelData.msg)
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  putHotelData(v: any) { //assign pagination and sort header to datatable
    this.hotelDataSource = new MatTableDataSource(v);
    this.hotelDataSource.paginator = this.paginator;
    this.hotelDataSource.sort = this.matsort;
    for (let i = 0; i < v.length; i++) {
      console.log('setup' + (i + 1));
      // this.divid=document.getElementById('setup'+(i+1));
      // console.log(this.divid)
      // this.divid.style.display='none'

    }

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
     this.dataServe.global_service(0, '/sub_sales_agent',`id=${this.id}`).subscribe(dt =>{
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
  this.router.navigate(['main/subsales/subsalesaddhotel',btoa(v)]).catch(data=>{
    this.msg.globalError(data);
  })
}

go_subdetails(v: any) { //route to the particular restaurant on clicking on the edit option
  // alert(v);
  this.router.navigate(['main/sales/addsubsales',btoa(v)]).catch(data=>{
    this.msg.globalError(data);
  })
  
}
}
