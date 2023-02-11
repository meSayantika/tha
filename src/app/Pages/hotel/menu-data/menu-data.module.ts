import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDataComponent } from './menu-data.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs'
import {MatButtonModule} from '@angular/material/button'
// import { ThankYouPageComponent } from '../thankYouPage/thankYouPage.component';
// import { SetupModeOnComponent } from '../setupModeOn/setupModeOn.component';
import {MatCardModule} from '@angular/material/card'

const routes:Routes=[
  {
    path:'',
    component:MenuDataComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuDataComponent]
})
export class MenuDataModule { }
