import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcaVoiceCreateComponent } from './pca-voice-create.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatSliderModule} from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
const routes:Routes=[{
  path:'',
  component:PcaVoiceCreateComponent
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
    MatSliderModule,
    MatAutocompleteModule,
    RouterModule.forChild(routes)

  ],
  declarations: [PcaVoiceCreateComponent]
})
export class PcaVoiceCreateModule { }
