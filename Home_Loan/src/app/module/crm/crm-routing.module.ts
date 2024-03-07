import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path:'view_enquiry' ,component:AddCustomerComponent
  },
  {
    path:'feedback',component:FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
