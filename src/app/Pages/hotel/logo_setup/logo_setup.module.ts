import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logo_setupComponent } from './logo_setup.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatButtonModule} from '@angular/material/button'
import {MatTabsModule} from '@angular/material/tabs'

// import { ThankYouPageComponent } from '../thankYouPage/thankYouPage.component';
// import { SetupModeOnComponent } from '../setupModeOn/setupModeOn.component';
const routes:Routes=[{
  path:'',
  component:Logo_setupComponent
}]
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ImageCropperModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Logo_setupComponent]
})
export class Logo_setupModule { }
