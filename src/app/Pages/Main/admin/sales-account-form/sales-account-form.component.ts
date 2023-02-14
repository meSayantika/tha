import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';

@Component({
  selector: 'app-sales-account-form',
  templateUrl: './sales-account-form.component.html',
  styleUrls: ['./sales-account-form.component.css']
})
export class SalesAccountFormComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private dataServe: DataService, private msg: MessageService, private router: Router, public dialog: MatDialog) { }
  id: any;
  hotel_id: any;
  salesData: any;
  salesDashboardData: any;
  selectIndex:any;
  hotelInfo!: FormGroup;
  userData: any;
  dataSource:any
  setupmode: any;
  divid: any;
  m: any;
  flag: any;
  modeData: any;
  del_id:any
  delData:any
  // for hotel account
  displayedHotelColumns: string[] = ['id', 'restaurant_name', 'date_enquiry','country','setup','edit', 'delete'];
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.id = atob(this.id)
    console.log();

    this.hotelInfo = this.formBuilder.group({
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
    });
    if(this.id>0){
    this.getAgentDtls()
    }
  }

  getAgentDtls() {
    this.dataServe.global_service(0, '/sales_agent', `id=${this.id}`).subscribe(dt => {
      console.log(dt);
      this.salesDashboardData = dt
      this.hotelInfo.patchValue({
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
  get f() { return this.hotelInfo.controls }

  updatehotelInfo() {
    // console.log(this.hotelInfo.controls)
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
    this.dataServe.global_service(1, '/sales_agent', data).subscribe(dt => {
      this.salesData = dt;
      if (this.salesData.suc > 0) {
        this.msg.successMsg('SS'); this.hotelInfo.reset()
        this.router.navigate(['main/admin/sales_account']).catch(data => {
          this.msg.globalError(data);
        })
      }
      else { this.msg.errorMsg('ES') }

    }, error => {
      this.msg.globalError(error.status + ' ' + error.statusText + ' in ' + error.url)
      // console.log(dt);
    })
    // console.log(data);
  }

  
  fetchdata() { //fetching the restaurant record
    //Call APi
    this.dataServe.global_service(0,'/sales_agent',null).subscribe(data => {
      console.log(data)
      this.userData = data
      // this.userData = this.userData.msg;
      // this.show_spinner=true;
      // this.putdata(this.userData.msg)
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
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
    this.router.navigate(['main/admin/sales_account_form',btoa(v)]).catch(data=>{
      this.msg.globalError(data);
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
}
