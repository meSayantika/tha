import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subsales_add_hotelComponent } from './subsales_add_hotel.component';
import { RouterModule, Routes } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatButtonModule} from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {
    path:'',
    component:Subsales_add_hotelComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
    RouterModule.forChild(routes)
  ],
  declarations: [Subsales_add_hotelComponent]
})
export class Subsales_add_hotelModule { }
