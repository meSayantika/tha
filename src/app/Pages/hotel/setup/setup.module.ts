import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
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
import { ManageHotelAccountModule } from '../../Main/admin/manage-hotel-account/manage-hotel-account.module';
const routes:Routes=[{
  path:'',
  component:SetupComponent
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
    ManageHotelAccountModule
  ],
  declarations: [SetupComponent]
})
export class SetupModule { }
