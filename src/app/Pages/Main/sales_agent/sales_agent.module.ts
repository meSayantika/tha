import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sales_agentComponent } from './sales_agent.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
  path:'', component:Sales_agentComponent, 
  children: [
    { path: 'saleslogin', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'salesdashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'addsubsales/:id', loadChildren: () => import('./add-subsales/add-subsales.module').then(m => m.AddSubsalesModule) },
    { path: 'saleshotelinfo/:id', loadChildren: () => import('./sales_hotel_info/sales_hotel_info.module').then(m => m.Sales_hotel_infoModule) },
    { path: 'salesaddhotel/:id', loadChildren: () => import('./sales_add_hotel/sales_add_hotel.module').then(m => m.Sales_add_hotelModule) },
    { path:'',redirectTo:'saleslogin',pathMatch:'full'}
  ]
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [Sales_agentComponent]
})
export class Sales_agentModule {
 constructor(){ console.log('sales module is loaded')}
 }
