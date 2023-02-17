import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { environment } from 'src/environments/environment';
import { F } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-add-subsales',
  templateUrl: './add-subsales.component.html',
  styleUrls: ['./add-subsales.component.css']
})
export class AddSubsalesComponent implements OnInit {
  id: any;
  subsalesInfo!: FormGroup;
  salesDashboardData: any;
  salesData: any;
  email_title: any;
  email_body: any;
  msg_flag=false;
  pwd:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private formBuilder: FormBuilder,private dataServe: DataService,private msg: MessageService,public dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.id = atob(this.id)
    console.log();

    this.subsalesInfo = this.formBuilder.group({
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
  getAgentDtls() {
    this.dataServe.global_service(0, '/sales_agent', `id=${this.id}`).subscribe(dt => {
      console.log(dt);
      this.salesDashboardData = dt
      this.subsalesInfo.patchValue({
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
  get g() { return this.subsalesInfo.controls }

  updatedInfo(){
      var data = {
        id: this.id,
        sales_agent_id:localStorage.getItem('user_id'),
        user:localStorage.getItem('email'),
        // hotel_id: localStorage.getItem('rid'),
        agent_name: this.g.agent_name.value,
        address: this.g.address.value,
        phone: this.g.phone.value,
        whatsapp: this.g.whatsapp.value,
        email: this.g.email.value,
        start_date: this.g.start_date.value,
        territory: this.g.territory.value,
        commission: this.g.commission.value,
        comments: this.g.comments.value,
        email_title:this.g.email_title.value,
        email_body:this.g.email_body.value,
        pwd: this.pwd,
        // email_send_date: this.g.email_send_date.value,
      }
      this.dataServe.global_service(1, '/sub_sales_agent', data).subscribe((dt: any) => {
        this.salesData = dt;
        if (this.salesData.suc > 0) {
          this.msg.successMsg('SS'); this.subsalesInfo.reset()
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
    generate_email(){
        if(this.g.agent_name.value!=''){
          this.msg_flag=true;
        this.email_title = `Welcome ${this.g.agent_name.value}`
        var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var a = alpha[Math.floor(Math.random() * 62)];
        var b = alpha[Math.floor(Math.random() * 62)];
        var c = alpha[Math.floor(Math.random() * 62)];
        var d = alpha[Math.floor(Math.random() * 62)];
        var e = alpha[Math.floor(Math.random() * 62)];
        var sum = a + b + c + d + e;
        this.pwd=sum;
        this.email_body = `Hello ${this.g.agent_name.value},
    
         Please log in to your account with the following credentials to add and manage hotels.
    
        Login Link: ${environment.routeUrl}/main/sales/saleslogin
        UserID: ${this.g.phone.value}
        Password: ${sum}
        
        Thank You,
        Cindy Ferguson`
        this.subsalesInfo.patchValue({
          email_body: this.email_body,
          email_title: this.email_title,
        })
        }else{
          this.msg.globalError('Please enter name and phone first')
        }
}
}

