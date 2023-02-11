import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterSetupComponent } from './master-setup.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatIconModule} from '@angular/material/icon'

const routes:Routes=[{
  path:'',
  component:MasterSetupComponent
}]
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    AngularEditorModule,
    FormsModule,
    MatDialogModule,
    ImageCropperModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MasterSetupComponent]
})
export class MasterSetupModule { }
