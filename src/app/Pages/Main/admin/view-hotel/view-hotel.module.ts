import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHotelComponent } from './view-hotel.component';
import {MatCardModule} from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    AngularEditorModule,
    FormsModule,
    MatDialogModule,
    ImageCropperModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  declarations: [ViewHotelComponent],
  exports: [ViewHotelComponent]
})
export class ViewHotelModule { }
