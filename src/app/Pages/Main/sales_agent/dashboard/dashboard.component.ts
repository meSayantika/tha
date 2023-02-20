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
  displayedColumns: string[] = ['id', 'restaurant_name', 'date_enquiry','country','setup','edit', 'delete'];
  displaySubSales: string[] = ['id', 'name', 'contact','edit', 'delete'];
  salesDashboardData: any;
  subsalesInfo!: FormGroup;
  id: any;
  dashboardInfo!: FormGroup;
  salesData: any;
  userData: any;
  del_id: any;
  delData: any;
  dataSource = new MatTableDataSource();
  hotelDataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  subSalesData: any;
  hotelData: any;
 constructor(private activatedRoute:ActivatedRoute,private router:Router,private formBuilder: FormBuilder,private dataServe: DataService,private msg: MessageService,public dialog: MatDialog) { }
 show_spinner = false;

 displayedHotelColumns: string[] = ['id', 'restaurant_name', 'date_enquiry','country','setup','edit', 'delete'];

  ngOnInit() {
    this.fetchdata();
    this.id = localStorage.getItem('user_id')
    // console.log();
    this.fetchSubdata();
     this.fetchHoteldata();

    this.dashboardInfo = this.formBuilder.group({
      agent_name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      whatsapp: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      start_date: ['', [Validators.required]],
      territory: ['', [Validators.required]],
      commission: ['', [Validators.required]],
      commission1: ['', [Validators.required]],
      comments: ['', [Validators.required]],
      email_send_date: [''],
      email_body: ['', [Validators.required]],
      email_title: ['', [Validators.required]],

    });
    if(this.id>0){
    this.getAgentDtls()
    }
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
  fetchSubdata() { //fetching the restaurant record
    //Call APi
    this.dataServe.global_service(0,'/sub_sales_agent',`sales_id=${this.id}`).subscribe(data => {
      console.log(data)
      this.subSalesData = data
      // this.userData = this.userData.msg;
      // this.show_spinner=true;
      this.putdata(this.subSalesData.msg)
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }

  fetchHoteldata() { //fetching the restaurant record
    //Call APi
    this.dataServe.global_service(0,'/res_dtls_custom',`flag=S`).subscribe(data => {
      console.log(data)
      this.hotelData = data
      // this.userData = this.userData.msg;
      // this.show_spinner=true;
      this.putHotelData(this.hotelData.msg)
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
  click_setup(v: any, id: any) { //to change mode to either setup, pending or approval
    console.log(id)
    // this.setupmode = document.getElementById('setupmodeid' + id);
    // console.log("checked:" + v.checked);
    // this.divid = document.getElementById('setup' + id);
    // if (v.checked) {
    //   this.flag = 'Y'
    //   this.m = 'Setup Mode: On'
    // }
    // else {
    //   this.flag = 'N'
    //   this.m = 'Setup Mode: Off'
    // }
    // this.dataServe.global_service(0,'/update_approval',`flag=${this.flag}&id=${id}`).subscribe(data => {
    //   console.log(data)
    //   this.modeData = data;
    //   if (this.modeData.suc == 1) {

    //   }
    //   else {
    //     this.msg.globalError('Error! Cannot change support mode. Please try again later!')

    //   }

    // },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

  }
  applyFilter(event: Event) { //search input
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAgentDtls() {
    this.dataServe.global_service(0, '/sales_agent', `id=${this.id}`).subscribe(dt => {
      console.log(dt);
      this.salesDashboardData = dt
      this.dashboardInfo.patchValue({
        agent_name: this.salesDashboardData.msg[0].agent_name,
        address: this.salesDashboardData.msg[0].address,
        phone: this.salesDashboardData.msg[0].phone_no,
        whatsapp: this.salesDashboardData.msg[0].whatsapp_no,
        email: this.salesDashboardData.msg[0].email,
        start_date: this.salesDashboardData.msg[0].start_date,
        territory: this.salesDashboardData.msg[0].territory,
        commission: this.salesDashboardData.msg[0].commission,
        comments: this.salesDashboardData.msg[0].comments,
        email_send_date: this.salesDashboardData.msg[0].edited_send_date,
      })

    })
  }
  get f() { return this.dashboardInfo.controls }
  // get g() { return this.subsalesInfo.controls }


  updatedashboardInfo(){
    var data = {
      id: this.id,
      user: 'admin@gmail.com',
      hotel_id: localStorage.getItem('rid'),
      agent_name: this.f.agent_name.value,
      address: this.f.address.value,
      phone: this.f.phone.value,
      whatsapp: this.f.whatsapp.value,
      email: this.f.email.value,
      start_date: this.f.start_date.value,
      territory: this.f.territory.value,
      commission: this.f.commission.value,
      comments: this.f.comments.value,
      email_send_date: this.f.email_send_date.value,
    }
    this.dataServe.global_service(1, '/sales_agent', data).subscribe((dt: any) => {
      this.salesData = dt;
      if (this.salesData.suc > 0) {
        this.msg.successMsg('SS'); this.dashboardInfo.reset()
        this.router.navigate(['main/admin/sales_account']).catch((data: any) => {
          this.msg.globalError(data);
        })
      }
      else { this.msg.errorMsg('ES') }

    }, (error: { status: string; statusText: string; url: string; }) => {
      this.msg.globalError(error.status + ' ' + error.statusText + ' in ' + error.url)
      // console.log(dt);
    })
  }
  // updatedsubsalesInfo(){
  //   var data = {
  //     id: this.id,
  //     user: 'admin@gmail.com',
  //     hotel_id: localStorage.getItem('rid'),
  //     agent_name: this.g.agent_name.value,
  //     address: this.g.address.value,
  //     phone: this.g.phone.value,
  //     whatsapp: this.g.whatsapp.value,
  //     email: this.g.email.value,
  //     start_date: this.g.start_date.value,
  //     territory: this.g.territory.value,
  //     commission: this.g.commission.value,
  //     comments: this.g.comments.value,
  //     email_send_date: this.g.email_send_date.value,
  //   }
  //   this.dataServe.global_service(1, '/sales_agent', data).subscribe((dt: any) => {
  //     this.salesData = dt;
  //     if (this.salesData.suc > 0) {
  //       this.msg.successMsg('SS'); this.subsalesInfo.reset()
  //       this.router.navigate(['main/admin/sales_account']).catch((data: any) => {
  //         this.msg.globalError(data);
  //       })
  //     }
  //     else { this.msg.errorMsg('ES') }

  //   }, (error: { status: string; statusText: string; url: string; }) => {
  //     this.msg.globalError(error.status + ' ' + error.statusText + ' in ' + error.url)
  //     // console.log(dt);
  //   })
  // }

  go_details(v: any) { //route to the particular restaurant on clicking on the edit option
    // alert(v);
    this.router.navigate(['main/sales/addsubsales',btoa(v)]).catch(data=>{
      this.msg.globalError(data);
    })
    
  }
  go_addhotel(v: any) { //route to the particular restaurant on clicking on the edit option
    // alert(v);
    this.router.navigate(['main/sales/salesaddhotel',btoa(v)]).catch(data=>{
      this.msg.globalError(data);
    })
    
  }
  
  go_hotelinfo(v:any){
    this.router.navigate(['main/sales/saleshotelinfo',btoa(v)]).catch(data=>{
      this.msg.globalError(data);
    })
  }
  next(id:any){
    this.router.navigate(['main/sales/addsubsales',btoa(id)]).catch(data=>{
      this.msg.globalError(data);
    })
  }
  // generate_email(){
  //   if(this.f.agent_name.value!=''){
  //   this.email_title = `Welcome ${this.f.agent_name.value}`
  //   var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  //       'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  //       '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
  //       'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  //       'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //   var a = alpha[Math.floor(Math.random() * 62)];
  //   var b = alpha[Math.floor(Math.random() * 62)];
  //   var c = alpha[Math.floor(Math.random() * 62)];
  //   var d = alpha[Math.floor(Math.random() * 62)];
  //   var e = alpha[Math.floor(Math.random() * 62)];
  //   var sum = a + b + c + d + e;

  //   this.email_body = `Hello ${this.f.agent_name.value},

  //   Please log in to your account with the following credentials to add and manage hotels.

  //   Login Link: ${environment.routeUrl}/main/sales/saleslogin
  //   UserID: ${this.f.phone.value}
  //   Password: ${sum}
    
  //   Thank You,
  //   Cindy Ferguson`
  //   this.subsalesInfo.patchValue({
  //     email_body: this.email_body,
  //     email_title: this.email_title,
  //   })
  //   }else{
  //     this.msg.globalError('Please enter name and phone first')
  //   }
  // }
  
}
