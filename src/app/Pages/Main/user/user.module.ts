import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:'',component:UserComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [UserComponent]
})
export class UserModule {
  constructor(){
    console.log('user module loaded')
  }
 }
