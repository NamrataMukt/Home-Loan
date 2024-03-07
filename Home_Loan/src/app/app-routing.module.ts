import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { AboutComponent } from './template/about/about.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';

const routes: Routes = 
[
  {
    path:'',redirectTo:'fainance',pathMatch:'full'
  },
  {
    path:'fainance' ,component:DashboardComponent, children:[
      {
        path:'about' ,component:AboutComponent
      },
      {
        path:'location',component:LocationComponent
      },
      {
        path:'enquiry', component:EnquiryComponent
      },
    {
        path:'login',component:LoginComponent
    }
]
},

{
  path:'userdash' ,component:UserDashboardComponent, children:[
    {
      path:'admin', loadChildren:()=>import('./module/admin/admin.module').then(file=>file.AdminModule)
    },
    {
      path:'re' ,loadChildren:()=>import('./module/crm/crm.module').then(file=>file.CrmModule)
    }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
