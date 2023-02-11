import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {
  path:'',
  component:AdminComponent, 
  children: [
    { path: 'adminlogin', loadChildren: () => import('./adminlogin/adminlogin.module').then(m => m.AdminloginModule) },
    { path: 'adminlanding', loadChildren: () => import('./admin-landing/admin-landing.module').then(m => m.AdminLandingModule) },
    { path: 'adminsetup', loadChildren: () => import('./master-setup/master-setup.module').then(m => m.MasterSetupModule) },
    { path: 'questionnaire/:id/:hotel_id/:flag/:editFlag', loadChildren: () => import('./questionnaire/questionnaire.module').then(m => m.QuestionnaireModule) },
    { path: 'proposal_draft/:id/:hotel_id/:flag/:editFlag', loadChildren: () => import('./proposal-draft/proposal-draft.module').then(m => m.ProposalDraftModule) },
    { path: 'view_proposal/:id/:hotel_id/:flag/:editFlag', loadChildren: () => import('./proposal-draft/proposal-draft.module').then(m => m.ProposalDraftModule) },
    { path: 'hotelForm/:id/:hotel_id/:flag/:editFlag', loadChildren: () => import('./questionnaire/questionnaire.module').then(m => m.QuestionnaireModule) },
    { path: 'hotel_account', loadChildren: () => import('./hotel-account/hotel-account.module').then(m => m.HotelAccountModule) },
    { path: 'proposal/:id', loadChildren: () => import('./create-proposal/create-proposal.module').then(m => m.CreateProposalModule) },
    { path: 'send_proposal/:id/:flag', loadChildren: () => import('./send-proposal/send-proposal.module').then(m => m.SendProposalModule) },
    { path: 'confirm_pay/:id', loadChildren: () => import('./confirmed-payment/confirmed-payment.module').then(m => m.ConfirmedPaymentModule) },
    { path: 'hotelDB', loadChildren: () => import('./hotelDB-menusetup/hotelDB-menusetup.module').then(m => m.HotelDBMenusetupModule) },
    { path: 'restaurant_setup/:id', loadChildren: () => import('./hotel-menu-setup/hotel-menu-setup.module').then(m => m.HotelMenuSetupModule) },
    { path: 'add_hotel', loadChildren: () => import('./add-hotel/add-hotel.module').then(m => m.AddHotelModule) },
    { path: 'view_hotel', loadChildren: () => import('./view-hotel/view-hotel.module').then(m => m.ViewHotelModule) },
    { path: 'house_account', loadChildren: () => import('./house-account/house-account.module').then(m => m.HouseAccountModule) },
    { path: 'sales_account', loadChildren: () => import('./sales-account/sales-account.module').then(m => m.SalesAccountModule) },
    { path: 'sales_account_form/:id', loadChildren: () => import('./sales-account-form/sales-account-form.module').then(m => m.SalesAccountFormModule) },
    { path: 'all_account', loadChildren: () => import('./all-hotels/all-hotels.module').then(m => m.AllHotelsModule) },
    { path: 'manage_hotel_account/:id', loadChildren: () => import('./manage-hotel-account/manage-hotel-account.module').then(m => m.ManageHotelAccountModule) },
    { path: 'create_notification/:hotel_id/:id', loadChildren: () => import('./create-notification/create-notification.module').then(m => m.CreateNotificationModule) },
    { path: 'add_dept_mng_frm/:hotel_id/:id', loadChildren: () => import('./add-dept-mng-form/add-dept-mng-form.module').then(m => m.AddDeptMngFormModule) },
    { path: 'create_emergency/:hotel_id/:id', loadChildren: () => import('./create-emergency/create-emergency.module').then(m => m.CreateEmergencyModule) },
    { path: 'pca_voice_create/:hotel_id/:id', loadChildren: () => import('./pca-voice-create/pca-voice-create.module').then(m => m.PcaVoiceCreateModule) },
    { path:'',redirectTo:'adminlogin',pathMatch:'full'}
  ]
}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
  constructor(){
    console.log('admin module loaded')
  }
 }
