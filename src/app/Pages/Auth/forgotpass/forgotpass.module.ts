import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotpassComponent } from './forgotpass.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:'',component:ForgotpassComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgotpassComponent]
})
export class ForgotpassModule {
    /**
   *
   */
    constructor() {
      console.log('Forgot password Module Loaded');
    }
 }
