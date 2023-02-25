import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sub_salesComponent } from './sub_sales.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
  path:'', 
  component:Sub_salesComponent,
  children: [
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'subsalesaddhotel/:id', loadChildren: () => import('./subsales_add_hotel/subsales_add_hotel.module').then(m => m.Subsales_add_hotelModule) },
    { path: 'subsaleshotelinfo/:id', loadChildren: () => import('./subsales_hotel_info/subsales_hotel_info.module').then(m => m.Subsales_hotel_infoModule) },
    { path:'',redirectTo:'login',pathMatch:'full'}

  ]
}
 ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [Sub_salesComponent]
})
export class Sub_salesModule { 
 constructor(){ console.log('sales module is loaded')}

}
