import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';

const r: Routes = [
  {
    path: 'view_enquiry',
    component: AddCustomerComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'view_loan_app',
    component: ViewLoanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(r)],
  exports: [RouterModule],
})
export class CrmRoutingModule {}
