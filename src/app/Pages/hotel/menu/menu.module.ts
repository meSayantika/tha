import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[{
  path:'',
  component:MenuComponent
}]
@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuComponent]
})
export class MenuModule {
  constructor(){
    console.log('menu module is loaded')
  }
 }
