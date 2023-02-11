import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDashboardComponent } from './hotel-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatIconModule} from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
const routes:Routes=[
 { path:'',
  component:HotelDashboardComponent
}
]
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
  declarations: [HotelDashboardComponent]
})
export class HotelDashboardModule { 
  constructor(){console.log('dashboard loaded')}
}
