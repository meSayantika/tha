import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesAccountFormComponent } from './sales-account-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatButtonModule} from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs';
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
MatSlideToggleModule,
MatTableModule,
MatPaginatorModule,
MatTabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesAccountFormComponent]
})
export class SalesAccountFormModule { }
