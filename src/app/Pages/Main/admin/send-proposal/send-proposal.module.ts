import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendProposalComponent } from './send-proposal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

const routes:Routes=[
  {
    path:'',
    component:SendProposalComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SendProposalComponent]
})
export class SendProposalModule { }
