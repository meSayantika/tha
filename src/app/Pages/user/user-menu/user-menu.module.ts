import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';

const routes:Routes=[{
  path:'',
  component:UserMenuComponent
}]
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserMenuComponent]
})
export class UserMenuModule { }
