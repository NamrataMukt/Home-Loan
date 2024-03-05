import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './template/dashboard/dashboard.component';

const routes: Routes = 
[
  {
    path:'',redirectTo:'homeloan',pathMatch:'full'
  },
  {
  path:'homeloan',component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
