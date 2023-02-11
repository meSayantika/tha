import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmergencyReportComponent } from './emergency-report.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    AngularEditorModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    ImageCropperModule
  ],
  exports:[EmergencyReportComponent],
  declarations: [EmergencyReportComponent]
})
export class EmergencyReportModule { }
