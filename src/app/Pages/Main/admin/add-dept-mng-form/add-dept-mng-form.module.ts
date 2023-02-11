import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDeptMngFormComponent } from './add-dept-mng-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

const routes:Routes=[{
  path:'',
  component:AddDeptMngFormComponent
}]
@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    RouterModule.forChild(routes),
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [AddDeptMngFormComponent]
})
export class AddDeptMngFormModule { }
