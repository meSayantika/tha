import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'

const routes: Routes = [
  { path: '', component: LoginComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { 
  constructor() {
    console.log('LoginModule Loaded');
  }
}
