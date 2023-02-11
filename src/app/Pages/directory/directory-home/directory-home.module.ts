import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryHomeComponent } from './directory-home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion'

const routes:Routes=[
  {path:'',component:DirectoryHomeComponent}
]
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DirectoryHomeComponent]
})
export class DirectoryHomeModule {
  constructor(){console.log('home is loaded')}
 }
