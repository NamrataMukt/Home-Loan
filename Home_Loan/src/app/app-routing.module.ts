import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './template/dashboard/dashboard.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login/login.component';
import { AboutComponent } from './template/about/about.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';
import { EmiCalculatorComponent } from './template/emi-calculator/emi-calculator.component';
=======
import { AboutComponent } from './template/about/about.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';
>>>>>>> 833d358b77f74658e01eab913901a262617d9022

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fainance',
    pathMatch: 'full',
  },
  {
<<<<<<< HEAD
    path: 'fainance',
    component: DashboardComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
<<<<<<< HEAD
        path: 'location',
        component: LocationComponent,
=======
        path:'emi' ,component:EmiCalculatorComponent
      },
      {
        path:'location',component:LocationComponent
>>>>>>> b531b668b3bd44837460ad6f2f831ba59f812945
      },
      {
        path: 'enquiry',
        component: EnquiryComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },

<<<<<<< HEAD
  {
    path: 'userdash',
    component: UserDashboardComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./module/admin/admin.module').then(
            (file) => file.AdminModule
          ),
      },
      {
        path: 'crm',
        loadChildren: () =>
          import('./module/crm/crm.module').then((file) => file.CrmModule),
      },
    ],
  },
=======
{
  path:'userdash' ,component:UserDashboardComponent, children:[
    {
      path:'admin', loadChildren:()=>import('./module/admin/admin.module').then(file=>file.AdminModule)
    },
    {
      path:'crm' ,loadChildren:()=>import('./module/crm/crm.module').then(file=>file.CrmModule)
    },
    {
      path:'opm' ,loadChildren:()=>import('./module/operational-manager/operational-manager.module').then(file=>file.OperationalManagerModule)
    }
  ]
}
  
>>>>>>> b531b668b3bd44837460ad6f2f831ba59f812945
=======
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
>>>>>>> 833d358b77f74658e01eab913901a262617d9022
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
