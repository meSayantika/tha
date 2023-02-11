import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[{ path:'',
component:UserComponent,
children:[
  { path: 'user_menu/:rid/:serve_id', loadChildren: () => import('./user-menu/user-menu.module').then(m => m.UserMenuModule) },
  { path: 'order_conf', loadChildren: () => import('./order-confirmation/order-confirmation.module').then(m => m.OrderConfirmationModule) },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  // { path: '', redirectTo: 'user_menu', pathMatch: 'full' }
]
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent]
})
export class UserModule { }
