import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, map, pairwise } from 'rxjs/operators';
@Component({
  selector: 'app-subsales_hotel_info',
  templateUrl: './subsales_hotel_info.component.html',
  styleUrls: ['./subsales_hotel_info.component.css']
})
export class Subsales_hotel_infoComponent implements OnInit {
  dashboardData: any;
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
    this.getDashboardData();

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

  getDashboardData(){
    this.dataServe.global_service(0,'/res_dtls_custom',`id=${this.r_id}`).subscribe(data=>{console.log(data)
      this.dashboardData=data;
      // this.show_spinner=true;
      this.dashboardData=this.dashboardData.msg;
      // this.rest_nm=;
      // this.rest_contact=this.dashboardData[0].contact_name;
      // this.rest_phone=;
      // this.rest_em=;
      // this.rest_web=;
      // this.rest_monthly=this.dashboardData[0].monthly_fee;
      // this.rest_setup=this.dashboardData[0].setup_fee;
      this.dashboardData[0].addr_line2=this.dashboardData[0].addr_line2?this.dashboardData[0].addr_line2:''
      // this.rest_add=this.dashboardData[0].addr_line1+" "+this.dashboardData[0].addr_line2+" "+this.dashboardData[0].zip+" "+this.dashboardData[0].city+", "+this.dashboardData[0].country
      this.hotelInfo.patchValue({
        hotel_date:this.dashboardData[0].contact_date.substr(0,10),
        hotel:this.dashboardData[0].restaurant_name,
        address:this.dashboardData[0].addr_line1,
        country:this.dashboardData[0].country_id,
        website:this.dashboardData[0].website,
        phone:this.dashboardData[0].phone_no,
        whatsapp:this.dashboardData[0].whatsapp_no,
        contact_name:this.dashboardData[0].contact_name,
        contact_position:this.dashboardData[0].cnct_position,
        contact_phone:this.dashboardData[0].cnct_phone_no,
        contact_whatsapp:this.dashboardData[0].cnct_whatsapp_no,
        email:this.dashboardData[0].email,
        notes:this.dashboardData[0].remarks || this.dashboardData[0].remarks!=undefined || this.dashboardData[0].remarks!="undefined"?this.dashboardData[0].remarks:'',
        no_sale:this.dashboardData[0].proposal_status,
        proposal_amount:this.dashboardData[0].proposal_amt,
        first_payment:this.dashboardData[0].first_pay?.substr(0,10),
        final_payment:this.dashboardData[0].final_pay?.substr(0,10)
      })
      console.log(this.dashboardData[0].remarks)
    
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
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
