import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm!: FormGroup;
  getLoginData: any
  constructor(private router:Router, private formBuilder: FormBuilder, private dataServe: DataService, private msg: MessageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email_address: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    });
  }
  get f() { return this.loginForm.controls }

  logSubmit() {
    console.log(this.f)
    var dt = {
      "uname": this.f.email_address.value,
      "psw": this.f.password.value
    }
    this.dataServe.global_service(1,'/login', dt).subscribe(data => {
      this.getLoginData = data;
      console.log(data)
      if (this.getLoginData.suc > 0)
        this.router.navigate(['main/admin/adminlanding']).catch(data=>{
          this.msg.globalError(data)})
      else
        this.msg.globalError(this.getLoginData.msg)
    }, error => {
      this.msg.globalError(error)
    });


  }
}
