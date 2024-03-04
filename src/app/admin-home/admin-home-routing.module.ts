import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsRoutes } from '../shared/utils/components-routes';
import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'',
        redirectTo: ComponentsRoutes.DASHBOARD,
        pathMatch:'full'
      },
      {
        path: ComponentsRoutes.DASHBOARD,
        loadChildren: () =>
          import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: ComponentsRoutes.USERS,
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
      {
        path: ComponentsRoutes.VERIFICATION_OFFICER,
        loadChildren: () =>
          import('../verification-officer/verification-officer.module').then((m) => m.VerificationOfficerModule),
      },
      {
        path: ComponentsRoutes.VERIFICATION_PORTAL,
        loadChildren: () =>
          import('../verification-portal/verification-portal.module').then((m) => m.VerificationPortalModule),
      },
      {
        path: ComponentsRoutes.EMERGENCY,
        loadChildren: () =>
          import('../emergency/emergency.module').then((m) => m.EmergencyModule),
      },
      {
        path: ComponentsRoutes.API_DOCUMENTATION,
        loadChildren: () =>
          import('../api-documentation/api-documentation.module').then((m) => m.ApiDocumentationModule),
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
