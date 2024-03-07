import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StatasticsComponent } from './statastics/statastics.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

console.log("Admin module load..!")
@NgModule({
  declarations: [
    StatasticsComponent,
    UpdateEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
