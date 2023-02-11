import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmergencyComponent } from './create-emergency.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ImageCropperModule } from 'ngx-image-cropper';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {
    path:'',
    component:CreateEmergencyComponent
  }
]
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
    RouterModule.forChild(routes)
  ],
  declarations: [CreateEmergencyComponent]
})
export class CreateEmergencyModule { }
