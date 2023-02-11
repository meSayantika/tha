import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
const routes:Routes=[
  {
    path:'',
    component:AdminloginComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminloginComponent]
})
export class AdminloginModule {

  constructor(){
    console.log("adminlogin module starts")
  }
 }
