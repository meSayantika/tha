import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageHotelAccountComponent } from './manage-hotel-account.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { ViewHotelModule } from '../view-hotel/view-hotel.module';
import { CommunicationsModule } from '../communications/communications.module';
import { EmergencyReportModule } from '../emergency-report/emergency-report.module';
import { AvatarModule } from '../avatar/avatar.module';
import { AddDeptModule } from '../add-dept/add-dept.module';
import { AddDeptMngModule } from '../add-dept-mng/add-dept-mng.module';
import { AddEmpModule } from '../add-emp/add-emp.module';
const routes:Routes=[
  {
    path:'',
    component:ManageHotelAccountComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ViewHotelModule,
    CommunicationsModule,
    EmergencyReportModule,
    AvatarModule,
    AddDeptModule,
    AddDeptMngModule,
    AddEmpModule,
    RouterModule.forChild(routes)
  ],
  exports:[ManageHotelAccountComponent],
  declarations: [ManageHotelAccountComponent]
})
export class ManageHotelAccountModule { }
