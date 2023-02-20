import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/Services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales_add_hotel',
  templateUrl: './sales_add_hotel.component.html',
  styleUrls: ['./sales_add_hotel.component.css']
})
export class Sales_add_hotelComponent implements OnInit {
@ViewChild('emailQ')emailQ!:ElementRef;
  regForm!: FormGroup;
  countryData: any;
  countries:any
  timezone:any
  regData:any
  email_data:any
  exist:any
  exist_number=false
  emailAddr:any
  getData:any
  constructor(public dialog: MatDialog,private msg:MessageService, private router: Router,private dataServe:DataService,private formBuilder: FormBuilder) { }
  show_spinner = false;
  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mail: ['', [Validators.required,Validators.email]],
      addr1: ['', [Validators.required]],
      addr2: ['', [Validators.required]],
      cityState: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      country: ['', [Validators.required]],
      website: ['', [Validators.required]],
      timeZone: ['', [Validators.required]],
      cnct_position:['', [Validators.required]],
      cnct_phone_no:['', [Validators.required]],
      cnct_whatsapp_no:['', [Validators.required]],
      whatsapp_no:['', [Validators.required]],
    });
    this.dataServe.global_service(0,'/country','').pipe(map((x: any) => x.msg)).subscribe(data=>{
      this.countryData=data;
      console.log(this.countryData);

    })
    this.dataServe.local_service(environment.timezoneUrl).subscribe(data=>{
      console.log(data);
      this.timezone=data;
    })

  }
  get f(){return this.regForm.controls}

  regSubmit(){
    var dt={
     "Name":this.f.name.value,
     "Contact":this.f.contact.value,
     "Telephone":this.f.phone.value,
     "Email":this.f.mail.value,
     "Address1":this.f.addr1.value,
     "Address2":this.f.addr2.value,
     "cityState":this.f.cityState.value,
     "zip":this.f.zip.value,
     "country":this.f.country.value,
     "Website":this.f.website.value,
     "time_zone":this.f.timeZone.value,
     "cnct_position":this.f.cnct_position.value,
     "cnct_phone_no":this.f.cnct_phone_no.value,
     "cnct_whatsapp_no":this.f.cnct_whatsapp_no.value,
     "whatsapp_no":this.f.whatsapp_no.value,
     "account_type":'S',
     "sales_agent":localStorage.getItem('user_id')
     
    }
    this.dataServe.global_service(1,'/registration',dt).subscribe(data=>{
      this.regData=data;
      if(this.regData.suc>0)
      {
         this.msg.successMsg('SS') ;
         this.regForm.reset()
         this.router.navigate(['main/sales/salesdashboard']).catch((data: any) => {
          this.msg.globalError(data);
        })
        }
       else
       { this.msg.errorMsg('ES')}
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
 
   }
   check_mail(e:any){
    console.log(e.target.value);
    if(e.target.id=='em'){

    
    this.dataServe.global_service(0,'/email_check',`Email=${e.target.value}`).subscribe(data=>{
      console.log(data)
    this.email_data=data;
    if(this.email_data.suc==2)
     {
      this.msg.globalWarning('This email already exists')
    }
    else if(this.email_data.suc==1)
     {

      //  this.show_msg=false;
      }
    else
    {}
 
    })
  }
  // check if the telephone number is an existing one
  else if(e.target.id=='tel'){
    this.dataServe.global_service(0,'/mobile_check',`no=${e.target.value}`).subscribe(data=>{

      console.log(data);
      this.exist=data;
      if(this.exist.suc==2){
        this.exist_number=true;
          this.msg.globalWarning('This number already exists');
       
      }
      else{
        this.exist_number=false;
      }
    })
  }
  }

}
