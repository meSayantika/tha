import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseAccountComponent } from './house-account.component';
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
import { EllipsisPipe } from 'src/app/Pipe/ellipsis.pipe';
import { TestPipe } from 'src/app/Pipe/test.pipe';

const routes:Routes=[
  {path:'',component:HouseAccountComponent}
]
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HouseAccountComponent]
})
export class HouseAccountModule { }
