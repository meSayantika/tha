import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-sales-account-form',
  templateUrl: './sales-account-form.component.html',
  styleUrls: ['./sales-account-form.component.css']
})
export class SalesAccountFormComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, private dataServe:DataService,private msg: MessageService, private router: Router) { }
id: any;
hotel_id: any;
salesData: any;
salesDashboardData: any;
hotelInfo!: FormGroup;
  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.id=atob(this.id)
    console.log();
    
    this.hotelInfo=this.formBuilder.group({
      agent_name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      whatsapp: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      start_date: ['',[Validators.required]],
      territory: ['', [Validators.required]],
      commission: ['',[Validators.required]],
      comments: ['',[Validators.required]],
      email_send_date: [''],
    });
    this.getAgentDtls()
  }

  getAgentDtls(){
    this.dataServe.global_service(0,'/sales_agent',`id=${this.id}`).subscribe(dt=>{
      console.log(dt);
      this.salesDashboardData=dt
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
  get f(){return this.hotelInfo.controls}

  updatehotelInfo(){
    // console.log(this.hotelInfo.controls)
   var data={
    id:this.id,
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
  this.dataServe.global_service(1,'/sales_agent',data).subscribe(dt=>{
    this.salesData=dt;
    if(this.salesData.suc>0)
      {
         this.msg.successMsg('SS') ;this.hotelInfo.reset()      
  this.router.navigate(['main/admin/sales_account']).catch(data=>{
    this.msg.globalError(data);
  })
        }
       else
       { this.msg.errorMsg('ES')}
    
     } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url) 
      // console.log(dt);
  })
  // console.log(data);
  }
}
