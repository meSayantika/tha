import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSetupComponent } from './menu-setup.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button'
import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'

const routes:Routes=[
  {
    path:'',
    
    component:MenuSetupComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    NgxExtendedPdfViewerModule,
    ImageCropperModule,
    FormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuSetupComponent]
})
export class MenuSetupModule { }
