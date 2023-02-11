import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmedPaymentComponent } from './confirmed-payment.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'

const routes:Routes=[
  {
    path:'',
    component:ConfirmedPaymentComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmedPaymentComponent]
})
export class ConfirmedPaymentModule { }
