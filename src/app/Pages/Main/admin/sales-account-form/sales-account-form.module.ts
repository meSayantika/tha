import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesAccountFormComponent } from './sales-account-form.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
const routes:Routes=[{
  path:'',
  component:SalesAccountFormComponent
}]
@NgModule({
  imports: [
    CommonModule,
MatButtonModule,
MatTooltipModule,
MatIconModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesAccountFormComponent]
})
export class SalesAccountFormModule { }
