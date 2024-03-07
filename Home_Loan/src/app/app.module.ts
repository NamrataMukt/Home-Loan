import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { AboutComponent } from './template/about/about.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './includes/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AboutComponent,
    LocationComponent,
    EnquiryComponent,
    LoginComponent,
    UserDashboardComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
