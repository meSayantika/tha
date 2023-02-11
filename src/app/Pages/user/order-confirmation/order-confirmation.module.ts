import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './order-confirmation.component';
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips'
const routes:Routes=[{
  path:'',
  component:OrderConfirmationComponent
}]
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderConfirmationComponent]
})
export class OrderConfirmationModule { }
