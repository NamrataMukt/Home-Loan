import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AddCustomerComponent,
    ViewLoanComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule
  ]
})
export class CrmModule { }
