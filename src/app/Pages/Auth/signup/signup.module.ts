import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:'',component:SignupComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupComponent]
})
export class SignupModule { 
    /**
   *
   */
    constructor() {
      console.log('SignUpModule Loaded');
    }
}
