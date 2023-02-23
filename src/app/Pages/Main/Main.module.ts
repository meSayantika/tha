import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './Main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider'
import {MatDialogModule} from '@angular/material/dialog'
import { FooterComponent } from './footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion'
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'hotel', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'sales', loadChildren: () => import('./sales_agent/sales_agent.module').then(m => m.Sales_agentModule) },
      { path: 'subsales', loadChildren: () => import('./sub_sales/sub_sales.module').then(m => m.Sub_salesModule) },
      { path: '', redirectTo: 'admin', pathMatch: 'full' }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatExpansionModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [MainComponent,HeaderComponent,SidebarComponent,FooterComponent]
})
export class MainModule {
  constructor(){
    console.log("Main module loaded")
  }
 }
