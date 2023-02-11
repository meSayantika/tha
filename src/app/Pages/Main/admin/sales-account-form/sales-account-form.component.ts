import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-sales-account-form',
  templateUrl: './sales-account-form.component.html',
  styleUrls: ['./sales-account-form.component.css']
})
export class SalesAccountFormComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder) { }
id: any;
hotelInfo!: FormGroup;
  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(atob(this.id))
    
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
  }
  updatehotelInfo(){
    // console.log(this.hotelInfo.controls)
  }
}
