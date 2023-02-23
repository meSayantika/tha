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
