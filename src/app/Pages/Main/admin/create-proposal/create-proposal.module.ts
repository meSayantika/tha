import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProposalComponent } from './create-proposal.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes:Routes=[
  {
    path:'',
    component:CreateProposalComponent
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
    RouterModule.forChild(routes)
  ],
  declarations: [CreateProposalComponent]
})
export class CreateProposalModule { }
