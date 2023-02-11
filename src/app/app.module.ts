import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 
import {MatButtonModule} from '@angular/material/button'
import { DialogBoxComponent } from './Core/dialogBox/dialogBox.component';
import { AppInterceptorInterceptor } from './Interceptors/app-interceptor.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { EllipsisPipe } from './Pipe/ellipsis.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    AppComponent,DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatSnackBarModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],

})
export class AppModule { }
