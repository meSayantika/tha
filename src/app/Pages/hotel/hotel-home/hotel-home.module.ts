import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelHomeComponent } from './hotel-home.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ImageCropperModule } from 'ngx-image-cropper';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[{
  path:'',
  component:HotelHomeComponent
}]
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    AngularEditorModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    ImageCropperModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotelHomeComponent]
})
export class HotelHomeModule { }
