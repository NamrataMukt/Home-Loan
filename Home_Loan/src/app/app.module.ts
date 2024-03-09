import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login/login.component';
import { AboutComponent } from './template/about/about.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './includes/user-header/user-header.component';
import { UserMenuComponent } from './includes/user-menu/user-menu.component';
import { EmiCalculatorComponent } from './template/emi-calculator/emi-calculator.component';
=======
import { AboutComponent } from './template/about/about.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './includes/user-header/user-header.component';
>>>>>>> 833d358b77f74658e01eab913901a262617d9022

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
<<<<<<< HEAD
    LoginComponent,
    AboutComponent,
    LocationComponent,
    EnquiryComponent,
    UserDashboardComponent,
    UserHeaderComponent,
    UserMenuComponent,
    EmiCalculatorComponent
=======
    AboutComponent,
    LocationComponent,
    EnquiryComponent,
    LoginComponent,
    UserDashboardComponent,
    UserHeaderComponent
>>>>>>> 833d358b77f74658e01eab913901a262617d9022
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
=======
    ReactiveFormsModule
>>>>>>> 833d358b77f74658e01eab913901a262617d9022
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
