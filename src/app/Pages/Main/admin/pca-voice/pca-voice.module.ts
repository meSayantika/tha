import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcaVoiceComponent } from './pca-voice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

// import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    // MatFormFieldModule
  ],
  exports:[PcaVoiceComponent],
  declarations: [PcaVoiceComponent]
})
export class PcaVoiceModule { }
