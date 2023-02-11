import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandingComponent } from './admin-landing.component';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table'

const routes:Routes=[
  {
    path:'',
    component:AdminLandingComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminLandingComponent]
})
export class AdminLandingModule { }
