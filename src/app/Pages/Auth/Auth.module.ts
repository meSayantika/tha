import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component:AuthComponent,
    children:[
      {path:'',loadChildren:()=>import('./login/login.module').then((m) => m.LoginModule)},
      {path:'signup',loadChildren:()=>import('./signup/signup.module').then((m) => m.SignupModule)},
      {path:'forgotpassword',loadChildren:()=>import('./forgotpass/forgotpass.module').then((m) => m.ForgotpassModule)}
      // {path:'forgotpassword',loadChildren:()=>import('./forgotpass/forgotpass.module').then((m) => m.ForgotpassModule)}
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthComponent]
})
export class AuthModule { 
    /**
   *
   */
    constructor() {
      console.log('AuthModule Loaded');
    }
}
