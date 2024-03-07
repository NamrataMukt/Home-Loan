import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { AboutComponent } from './template/about/about.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './includes/user-header/user-header.component';
import { UserMenuComponent } from './includes/user-menu/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    AboutComponent,
    LocationComponent,
    EnquiryComponent,
    UserDashboardComponent,
    UserHeaderComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
