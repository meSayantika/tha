import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, map, pairwise } from 'rxjs/operators';


@Component({
  selector: 'app-sales_hotel_info',
  templateUrl: './sales_hotel_info.component.html',
  styleUrls: ['./sales_hotel_info.component.css']
})
export class Sales_hotel_infoComponent implements OnInit {
  hotelInfo!: FormGroup;
  regData: any;
  countryData: any;
  r_id: any;
  qTabForm!: FormGroup;

  constructor(public dialog: MatDialog,private activatedRoute:ActivatedRoute,private router:Router,private msg:MessageService,private dataServe:DataService,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.r_id=this.activatedRoute.snapshot.params['id'];
    this.r_id=atob(this.r_id);
    localStorage.setItem('rid',this.r_id)


    this.hotelInfo=this.formBuilder.group({
      hotel_date: [''],
      hotel: [''],
      address: [''],
      country: [''],
      website: [''],
      phone: [''],
      whatsapp: [''],
      contact_name: [''],
      contact_position: [''],
      email: [''],
      contact_phone: [''],
      contact_whatsapp: [''],
      notes: [''],
      no_sale: [''],
      proposal_amount: [''],
      first_payment: [''],
      final_payment: [''],
    })
    this.dataServe.global_service(0,'/country','').pipe(map((x: any) => x.msg)).subscribe(data=>{
      this.countryData=data;
      console.log(this.countryData);
    
  })
    }
    get f(){return this.hotelInfo.controls}
    
  updatehotelInfo(){
    console.log(this.hotelInfo.controls)
   
      var dt={
       "hotel_id":localStorage.getItem('rid'),
       "Name":this.f.hotel.value,
       "Contact":this.f.contact_name.value,
       "Telephone":this.f.phone.value,
       "Email":this.f.email.value,
       "Address1":this.f.address.value,
       "country":this.f.country.value,
       "Website":this.f.website.value,
       "cnct_position":this.f.contact_position.value,
       "cnct_phone_no":this.f.contact_phone.value,
       "cnct_whatsapp_no":this.f.contact_whatsapp.value,
       "whatsapp_no":this.f.whatsapp.value,
       "remarks":this.f.notes.value,
       "first_pay":this.f.first_payment.value,
       "final_pay":this.f.final_payment.value,
       "status":this.f.no_sale.value,
       "proposal_amt":this.f.proposal_amount.value
       
      }
      this.dataServe.global_service(1,'/registration',dt).subscribe(data=>{
        this.regData=data;
        if(this.regData.suc>0)
        { this.msg.successMsg('SU')}
         else
         { this.msg.errorMsg('EU')}
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
   
    
  }
  
  }

  // fetchdata() {
  //   throw new Error('Method not implemented.'),
  // }
// }  fetchdata() {
//     throw new Error('Method not implemented.');
//   }

