import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel.component';
import { HotelSidebarComponent } from './hotel-sidebar/hotel-sidebar.component';
import { HotelHeaderComponent } from './hotel-header/hotel-header.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider'
import {MatDialogModule} from '@angular/material/dialog';
//import { ThankYouPageComponent } from './thankYouPage/thankYouPage.component';
const routes: Routes = [
  {
    path: '',
    component: HotelComponent,
    children: [

      { path: 'home/:id', loadChildren: () => import('./hotel-home/hotel-home.module').then(m => m.HotelHomeModule) },
      { path: 'dashboard', loadChildren: () => import('./hotel-dashboard/hotel-dashboard.module').then(m => m.HotelDashboardModule) },
      { path: 'setup/:id', loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule) },
      { path: 'menu_setup', loadChildren: () => import('./menu-setup/menu-setup.module').then(m => m.MenuSetupModule) },
      { path: 'logo_setup', loadChildren: () => import('./logo_setup/logo_setup.module').then(m => m.Logo_setupModule) },
      { path: 'menu_data', loadChildren: () => import('./menu-data/menu-data.module').then(m => m.MenuDataModule) },
      { path: 'menu/:rid/:serve_id', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
      // { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
   
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotelComponent,HotelSidebarComponent,HotelHeaderComponent]
})
export class HotelModule { 
  constructor(){
    console.log("hotel module is loaded")
  }
}
