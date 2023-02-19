import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sales_hotel_infoComponent } from './sales_hotel_info.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatButtonModule} from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
const routes: Routes=[
  {
    path:'',
    component:Sales_hotel_infoComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Sales_hotel_infoComponent]
})
export class Sales_hotel_infoModule { }
