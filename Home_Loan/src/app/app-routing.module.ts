import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { AboutComponent } from './template/about/about.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';

const routes: Routes = 
[
  {
    path:'',redirectTo:'homeloan',pathMatch:'full'
  },
  {
  path:'homeloan',component:DashboardComponent,children:
  [
    {
      path:'about',component:AboutComponent
    },
    {
      path:'location',component:LocationComponent
    },
    {
      path:'enquiry',component:EnquiryComponent
    },
    {
      path:'login',component:LoginComponent
    }
  ]
  },
  {
    path:'userdash',component:UserDashboardComponent,
    children:[
    {
      path:'admin',loadChildren:()=>import('./modules/admin/admin.module').
      then(file=>file.AdminModule)
    },
    {
        path:'abc',loadChildren:()=>import('./modules/abc/abc.module').
        then(file=>file.AbcModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
