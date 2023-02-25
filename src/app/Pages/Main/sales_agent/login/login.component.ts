import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  getLoginData: any
  constructor(private formBuilder:FormBuilder, private dataServe:DataService,private router:Router,private msg: MessageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email_address: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    });
  }
  get f() { return this.loginForm.controls }
  
  logSubmit() {
    // localStorage.setItem('use', value);
    console.log(this.f)
    var dt = {
      "uname": this.f.email_address.value,
      "psw": this.f.password.value,
      "user_type": 'S'
    }
    this.dataServe.global_service(1,'/sales_login', dt).subscribe((data: any) => {
      this.getLoginData = data;
      console.log(data)
      if (this.getLoginData.suc > 0)
        {
          localStorage.setItem('user_id',this.getLoginData.user_dt.id)
          localStorage.setItem('email',this.getLoginData.user_dt.email)
          localStorage.setItem('phone',this.getLoginData.user_dt.phone_no)
          localStorage.setItem('user_name',this.getLoginData.user_dt.agent_name)
          // this.getLoginData.user_dt.id
          // this.getLoginData.user_dt.email
          // this.getLoginData.user_dt.name
          // this.getLoginData.user_dt.phone
          this.router.navigate(['main/sales/salesdashboard']).catch(data=>{
          this.msg.globalError(data)})
        }
      else
        this.msg.globalError(this.getLoginData.msg)
    }, (error: any) => {
      this.msg.globalError(error)
    });


  }
}
