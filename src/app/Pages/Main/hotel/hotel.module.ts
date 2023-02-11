import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:'',component:HotelComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [HotelComponent]
})
export class HotelModule {
  constructor(){
    console.log('hotel module loaded')
  }
 }
